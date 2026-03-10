const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'pages-data.json');
let data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const LOCATION_PAGES = [
    { slug: 'jacksonville', label: 'Jacksonville' },
    { slug: 'downtown-jacksonville', label: 'Downtown Jacksonville' },
    { slug: 'jacksonville-beach', label: 'Jacksonville Beach' },
    { slug: 'orange-park', label: 'Orange Park' },
    { slug: 'ponte-vedra', label: 'Ponte Vedra' },
    { slug: 'st-augustine', label: 'St. Augustine' },
    { slug: 'mandarin', label: 'Mandarin' },
    { slug: 'lakeside', label: 'Lakeside' },
    { slug: 'riverside', label: 'Riverside' },
    { slug: 'san-marco', label: 'San Marco' },
    { slug: 'southside', label: 'Southside' },
    { slug: 'fernandina-beach', label: 'Fernandina Beach' },
    { slug: 'nocatee', label: 'Nocatee' },
    { slug: 'st-marys', label: 'St. Marys' },
    { slug: 'palm-coast', label: 'Palm Coast' },
    { slug: 'lake-city', label: 'Lake City' },
    { slug: 'yulee', label: 'Yulee' },
    { slug: 'baldwin', label: 'Baldwin' },
    { slug: 'callahan', label: 'Callahan' },
    { slug: 'macclenny', label: 'Macclenny' },
    { slug: 'green-cove-springs', label: 'Green Cove Springs' },
    { slug: 'middleburg', label: 'Middleburg' },
    { slug: 'palatka', label: 'Palatka' }
];

let failed = [];
let success = [];

for (const loc of LOCATION_PAGES) {
    if (!data[loc.slug]) continue;
    let content = data[loc.slug].content;
    const overviewRegex = /<section id="overview" class="minimal-overview">/;
    if (!overviewRegex.test(content)) {
        failed.push(loc.slug);
    } else {
        success.push(loc.slug);
    }
}

const reportPath = 'C:/Users/chri6/.gemini/antigravity/brain/1f90e4b2-2b58-4f17-844c-a8120a1790a8/check_report.txt';
fs.writeFileSync(reportPath, `Total Locations: ${LOCATION_PAGES.length}\\nSuccessful Updates: ${success.length}\\nFailed Updates: ${failed.length}\\n\\nFailed Slugs:\\n${failed.join('\\n')}`, 'utf8');
console.log('Report saved');
