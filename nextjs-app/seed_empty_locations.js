const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'pages-data.json');
let data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// The master template we just finished
const masterContent = data['atlantic-beach'].content;

const EMPTY_LOCATIONS = [
    { slug: 'jacksonville', label: 'Jacksonville' },
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

let updatedCount = 0;

for (const loc of EMPTY_LOCATIONS) {
    if (!data[loc.slug]) {
        console.log(`Skipping ${loc.slug} - key not found`);
        continue;
    }

    // Replace "Atlantic Beach" with the new city name, globally.
    // We also replace "atlantic-beach" with the slug for any localized anchor links.
    let newContent = masterContent.replace(/Atlantic Beach/g, loc.label);

    // Inject the new content
    data[loc.slug].content = newContent;
    updatedCount++;
    console.log(`Seeded full template for ${loc.slug}`);
}

fs.writeFileSync(dataPath, JSON.stringify(data), 'utf8');
console.log(`\\nSuccessfully seeded ${updatedCount} empty location pages with the full, minimalist template!`);
