const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'pages-data.json');
let data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Only process actual location pages
const LOCATION_PAGES = [
    { slug: 'jacksonville', label: 'Jacksonville' },
    { slug: 'downtown-jacksonville', label: 'Downtown Jacksonville' },
    { slug: 'jacksonville-beach', label: 'Jacksonville Beach' },
    { slug: 'orange-park', label: 'Orange Park' },
    { slug: 'ponte-vedra', label: 'Ponte Vedra' },
    /* { slug: 'atlantic-beach', label: 'Atlantic Beach' }, // Already done */
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
    { slug: 'palatka', label: 'Palatka' },
];

let updatedCount = 0;

for (const loc of LOCATION_PAGES) {
    if (!data[loc.slug]) {
        console.log(`Warning: slug ${loc.slug} not found in pages-data.js`);
        continue;
    }

    let content = data[loc.slug].content;

    // Regex to match the entire Location Overview section
    const overviewRegex = /<!--\s*Location Overview\s*-->[\s\S]*?<section id="overview"[\s\S]*?<\/section>/;

    // We also need to get the next section indicator to be completely safe, but regex matching lazy the first </section> is usually OK because the overview section doesn't have nested sections.
    // However, some old pages might not have the comment. Let's use flexible matching.
    const sectionRegex = /<section id="overview"[^>]*>[\s\S]*?<\/section>/;

    const minimalHtml = `
    <!-- Location Overview (Minimal) -->
    <section id="overview" class="minimal-overview">
        <div class="container">
            <div class="minimal-content">
                <div class="minimal-text">
                    <h2>Vending Solutions for ${loc.label}</h2>
                    <p>${loc.label} is a thriving community with diverse businesses and a strong local presence. VendSmart provides personalized vending solutions tailored to the unique character and daily needs of ${loc.label}'s local businesses, offices, and residents.</p>
                </div>
                <div class="minimal-grid">
                    <div class="minimal-card">
                        <i class="fas fa-store"></i>
                        <h3>Local Shops & Retail</h3>
                        <p>Convenient vending for local shops, boutiques, and retail businesses serving the community.</p>
                    </div>
                    <div class="minimal-card">
                        <i class="fas fa-building"></i>
                        <h3>Professional Offices</h3>
                        <p>Smart vending matches for professional offices, corporate centers, and service businesses.</p>
                    </div>
                    <div class="minimal-card">
                        <i class="fas fa-industry"></i>
                        <h3>Facilities & Logistics</h3>
                        <p>Reliable 24/7 refreshment systems for warehouses, manufacturing plants, and logistics hubs.</p>
                    </div>
                    <div class="minimal-card">
                        <i class="fas fa-utensils"></i>
                        <h3>Dining & Hospitality</h3>
                        <p>Vending and micro-market solutions for restaurants, cafes, hotels, and dining establishments.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

    const hasCommentMatch = overviewRegex.test(content);
    if (hasCommentMatch) {
        content = content.replace(overviewRegex, minimalHtml);
    } else if (sectionRegex.test(content)) {
        content = content.replace(sectionRegex, minimalHtml);
    } else {
        console.log(`Could not find overview section to replace in ${loc.slug}`);
        continue;
    }

    data[loc.slug].content = content;
    updatedCount++;
    console.log(`Updated layout for ${loc.slug}`);
}

fs.writeFileSync(dataPath, JSON.stringify(data), 'utf8');
console.log('');
console.log(`Successfully updated ${updatedCount} location pages to the new minimalist layout!`);
