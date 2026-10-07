const { execSync } = require('child_process');
const ffmpeg = require('@ffmpeg-installer/ffmpeg').path;
const fs = require('fs');

if (!fs.existsSync('public/videos')) fs.mkdirSync('public/videos', { recursive: true });

try {
  console.log('Encoding desktop_scrub.mp4 (-g 1 intra frames)...');
  execSync(`"${ffmpeg}" -i "gsap asset/gsap desktop.mp4" -vcodec libx264 -preset fast -crf 23 -g 1 -keyint_min 1 -movflags +faststart -an "public/videos/desktop_scrub.mp4" -y`);
  
  console.log('Encoding mobile_scrub.mp4 (-g 1 intra frames)...');
  execSync(`"${ffmpeg}" -i "gsap asset/gsap mobile.mp4" -vcodec libx264 -preset fast -crf 23 -g 1 -keyint_min 1 -movflags +faststart -an "public/videos/mobile_scrub.mp4" -y`);

  console.log('Desktop scrub size:', (fs.statSync('public/videos/desktop_scrub.mp4').size / 1024 / 1024).toFixed(2), 'MB');
  console.log('Mobile scrub size:', (fs.statSync('public/videos/mobile_scrub.mp4').size / 1024 / 1024).toFixed(2), 'MB');
} catch (e) {
  console.error('Encoding error:', e.message);
}
