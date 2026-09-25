# Auto-reconnecting and self-pinging tunnel keepalive daemon
$ErrorActionPreference = "SilentlyContinue"

while ($true) {
    if (Test-Path "tunnel-output.txt") {
        Remove-Item -Force "tunnel-output.txt"
    }

    $process = Start-Process ssh -ArgumentList "-o StrictHostKeyChecking=no -o ServerAliveInterval=15 -o ServerAliveCountMax=3 -R 80:localhost:3000 nokey@localhost.run" -PassThru -NoNewWindow -RedirectStandardOutput "tunnel-output.txt" -RedirectStandardError "tunnel-error.txt"

    Start-Sleep -Seconds 6
    $url = $null

    for ($i = 0; $i -lt 20; $i++) {
        if (Test-Path "tunnel-output.txt") {
            $content = Get-Content "tunnel-output.txt" -Raw
            if ($content -match 'https://[a-zA-Z0-9]+\.lhr\.life') {
                $url = $matches[0]
                $url | Out-File -FilePath "public-link.txt" -Encoding utf8 -Force
                break
            }
        }
        Start-Sleep -Seconds 1
    }

    # Ping every 25 seconds with real HTTP traffic to prevent inactivity timeout
    while (!$process.HasExited) {
        if ($url) {
            try {
                Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 10 | Out-Null
            } catch {}
        }
        Start-Sleep -Seconds 25
    }

    Start-Sleep -Seconds 2
}
