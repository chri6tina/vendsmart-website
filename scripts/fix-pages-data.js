const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'nextjs-app', 'data', 'pages-data.json');
let data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
let fixCount = 0;

for (const slug of Object.keys(data)) {
  if (!data[slug].content) continue;
  let c = data[slug].content;
  const before = c;
  // Fix malformed hrefs: href="/path"" -> href="/path"
  c = c.replace(/href="([^"]+)""/g, 'href="$1"');
  // Fix wrong slug: st.-augustine -> st-augustine
  c = c.replace(/vending-services-st\.-augustine/g, 'vending-services-st-augustine');
  // Remove script.js references (not needed in Next.js)
  c = c.replace(/<script[^>]*src="\/script\.js"[^>]*><\/script>/gi, '');
  if (c !== before) {
    fixCount++;
    data[slug].content = c;
  }
}

fs.writeFileSync(dataPath, JSON.stringify(data));
console.log('Fixed', fixCount, 'pages');
