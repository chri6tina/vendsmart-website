const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'pages-data.json');
let data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Keys we want to target
const LOCATIONS = Object.keys(data).filter(key =>
    key !== 'about' &&
    key !== 'about-us' &&
    key !== 'contact' &&
    !key.includes('vending-machines-for') &&
    !key.includes('setting-up-') &&
    !key.includes('best-vending') &&
    key !== 'vending-services-jacksonville' &&
    key !== 'why-choose-vendsmart-jacksonville' &&
    key !== 'vendingmachine-service' &&
    key !== 'coffeeservices'
);

console.log(`Targeting ${LOCATIONS.length} location pages...`);

let updateCount = 0;

for (const slug of LOCATIONS) {
    if (!data[slug] || !data[slug].content) continue;

    let content = data[slug].content;
    const areasRegex = /<section class="[a-z-]+-areas">([\s\S]*?)<\/section>/i;
    const match = content.match(areasRegex);

    if (match) {
        const fullOldSection = match[0];
        const innerContent = match[1];

        // Extract the city name
        const cityMatch = innerContent.match(/<h2>(.*?) Business Areas We Serve<\/h2>/);
        const cityName = cityMatch ? cityMatch[1].replace('Business Areas We Serve', '').trim() : "Local";

        // Parse the individual area cards
        const cardRegex = /<div class="area-card">([\s\S]*?)<\/div>/g;
        let accordionItemsHtml = '';
        let cardMatch;

        while ((cardMatch = cardRegex.exec(innerContent)) !== null) {
            const cardContent = cardMatch[1];

            // Extract components
            const iconMatch = cardContent.match(/<i class="(.*?)"><\/i>/);
            const icon = iconMatch ? iconMatch[1] : 'fas fa-store';

            const titleMatch = cardContent.match(/<h3>(.*?)<\/h3>/);
            const title = titleMatch ? titleMatch[1] : 'Area';

            const pMatch = cardContent.match(/<p>(.*?)<\/p>/);
            const paragraph = pMatch ? pMatch[1] : '';

            const listMatch = cardContent.match(/<ul>([\s\S]*?)<\/ul>/);
            const list = listMatch ? listMatch[0] : '';

            // Build the new interactive accordion item
            accordionItemsHtml += `
                <details class="premium-accordion-item">
                    <summary class="accordion-header">
                        <div class="accordion-title-wrapper">
                            <i class="${icon}"></i>
                            <h3>${title}</h3>
                        </div>
                        <i class="fas fa-chevron-down accordion-icon"></i>
                    </summary>
                    <div class="accordion-content">
                        <p>${paragraph}</p>
                        ${list}
                        <div class="accordion-cta">
                            <a href="/contact" class="btn btn-outline" style="border-color: rgba(255,255,255,0.3); color: white;">Get Quote for ${title}</a>
                        </div>
                    </div>
                </details>`;
        }

        // If we found cards, build the new section
        if (accordionItemsHtml) {
            const newSectionHtml = `
    <!-- Business Areas We Serve (Dark Theme Accordion) -->
    <section class="areas-accordion-section">
        <div class="container">
            <div class="section-header centered-header dark-mode">
                <h2>${cityName} Business Areas We Serve</h2>
                <p>We provide tailored vending machines, micro-markets, and coffee services for a wide variety of facilities.</p>
            </div>
            
            <div class="accordion-grid">
                ${accordionItemsHtml}
            </div>
        </div>
    </section>`;

            data[slug].content = content.replace(fullOldSection, newSectionHtml);
            updateCount++;
        }
    } else {
        console.log(`Warning: Could not find areas section in ${slug}`);
    }
}

fs.writeFileSync(dataPath, JSON.stringify(data), 'utf8');
console.log(`Successfully converted ${updateCount} location pages to the Dark Accordion Layout!`);
