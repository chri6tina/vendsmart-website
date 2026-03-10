const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data/pages-data.json', 'utf8'));
const sa = data['st-augustine'].content;
fs.writeFileSync('sa.txt', sa);
console.log('Saved St. Augustine content to sa.txt');
