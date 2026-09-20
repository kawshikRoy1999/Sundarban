const fs = require('fs');
const path = require('path');
const images = [
  'https://images.unsplash.com/photo-cNXyaIFyTNg?q=100&w=3840&auto=format&fit=crop',
  'https://images.unsplash.com/photo-DJ4vjcD0s0I?q=100&w=3840&auto=format&fit=crop',
  'https://images.unsplash.com/photo-nZ2cEh8Qzcg?q=100&w=3840&auto=format&fit=crop',
  'https://images.unsplash.com/photo-KNJdjEdfa-g?q=100&w=3840&auto=format&fit=crop',
  'https://images.unsplash.com/photo-MdHHBF6i-MI?q=100&w=3840&auto=format&fit=crop',
  'https://images.unsplash.com/photo-Gz2oZP23j1s?q=100&w=3840&auto=format&fit=crop',
  'https://images.unsplash.com/photo--iZV3CqT7LM?q=100&w=3840&auto=format&fit=crop',
  'https://images.unsplash.com/photo-K1h1ziJqtNc?q=100&w=3840&auto=format&fit=crop',
];
let imgIdx = 0;
function getNextImage() {
  const img = images[imgIdx];
  imgIdx = (imgIdx + 1) % images.length;
  return img;
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+[^\"\'\s\`]+/g;
      if (regex.test(content)) {
        content = content.replace(regex, () => getNextImage());
        fs.writeFileSync(fullPath, content);
        console.log('Updated', fullPath);
      }
    }
  }
}
walkDir('./src');
