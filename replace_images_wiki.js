const fs = require('fs');
const path = require('path');
const images = [
  'https://upload.wikimedia.org/wikipedia/commons/b/b9/Panthera_tigris_tigris.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/3/3f/Walking_tiger_female.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/d/de/Sundarban_Tiger_Reserve.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/4/4a/Sundarbans_mangrove.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/1/17/Tiger_in_Ranthambhore.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/7/7b/Sundarbans_National_Park%2C_India.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger._Huge_bengal_tiger_male_from_national_park_in_India._Real_wildlife.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/3/30/Sundarbans_river_network.jpg',
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
      const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+[^\"\'\s\`]*/g;
      if (regex.test(content)) {
        content = content.replace(regex, () => getNextImage());
        fs.writeFileSync(fullPath, content);
        console.log('Updated', fullPath);
      }
    }
  }
}
walkDir('./src');
