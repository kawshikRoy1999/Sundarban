const fs = require('fs');
const path = require('path');
const images = [
  'https://images.unsplash.com/photo-1615963244664-5b845b2025ee?q=100&w=3840&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1632807515528-ddd9967acb94?q=100&w=3840&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1615824996195-f780bba7cfab?q=100&w=3840&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519659528534-7fd733a832a0?q=100&w=3840&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1549480017-d76466a4b7e8?q=100&w=3840&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=100&w=3840&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?q=100&w=3840&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1567696911980-2eed69a46042?q=100&w=3840&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=100&w=3840&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500463959177-e0869687df26?q=100&w=3840&auto=format&fit=crop',
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
