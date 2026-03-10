const fs = require('fs');
const data = JSON.parse(fs.readFileSync('c:/Users/chri6/OneDrive/Desktop/vendsmart-website-main/nextjs-app/data/pages-data.json', 'utf8'));

fs.writeFileSync('C:/Users/chri6/.gemini/antigravity/brain/1f90e4b2-2b58-4f17-844c-a8120a1790a8/jax_debug.txt', data['jacksonville'] ? data['jacksonville'].content : 'MISSING', 'utf8');
console.log('Done');
