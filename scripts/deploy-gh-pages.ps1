$ErrorActionPreference = "Stop"
$tempDir = Join-Path $env:TEMP "shinex-gh-pages"

if (Test-Path $tempDir) {
    Remove-Item -Recurse -Force $tempDir
}

Write-Host "Cloning repo to temporary directory..."
git clone https://github.com/vipulrane1212-lgtm/shinex-interior.git $tempDir

Push-Location $tempDir
try {
    git checkout --orphan gh-pages
    git rm -rf .
    
    Write-Host "Copying out/ files..."
    Copy-Item -Recurse -Force "c:\Users\Admin\Desktop\shinex\out\*" "."
    New-Item -ItemType File -Force ".nojekyll"
    
    git add -A
    git commit -m "deploy: publish GitHub Pages static site"
    
    Write-Host "Pushing to gh-pages branch..."
    git push -u origin gh-pages --force
    Write-Host "Successfully published to gh-pages!"
}
finally {
    Pop-Location
    Remove-Item -Recurse -Force -ErrorAction SilentlyContinue $tempDir
}
