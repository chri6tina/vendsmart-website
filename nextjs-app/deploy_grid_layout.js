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
    const cityNameMatch = content.match(/<h2>Why Choose VendSmart for (.*?)?\??<\/h2>/);
    const cityName = cityNameMatch ? cityNameMatch[1].replace('?', '').trim() : "your location";

    // The old structure we want to entirely replace
    const benefitsRegex = /<section class="atlantic-beach-benefits">[\s\S]*?<\/section>/;

    // The new advanced minimalist grid structure
    const newGridHtml = `
    <!-- Why Choose Us (Advanced Minimalist Grid) -->
    <section class="atlantic-beach-benefits advanced-features-section">
        <div class="container">
            <div class="section-header centered-header">
                <h2>Why Choose VendSmart for ${cityName}?</h2>
                <p>${cityName} businesses choose VendSmart for our local expertise, community-focused service, and commitment to supporting the unique character of our partners.</p>
            </div>
            
            <div class="advanced-features-grid">
                <div class="advanced-feature-card">
                    <div class="feature-icon-wrapper">
                        <i class="fas fa-hand-holding-usd"></i>
                    </div>
                    <h3>Zero Upfront Costs</h3>
                    <p>100% free premium vending machine placement and installation for qualified locations.</p>
                </div>
                
                <div class="advanced-feature-card">
                    <div class="feature-icon-wrapper">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <h3>Local Expertise</h3>
                    <p>Jacksonville-based company with dedicated service routes right here in ${cityName}.</p>
                </div>
                
                <div class="advanced-feature-card">
                    <div class="feature-icon-wrapper">
                        <i class="fas fa-headset"></i>
                    </div>
                    <h3>24/7 Support</h3>
                    <p>Round-the-clock customer support and rapid emergency repair service available.</p>
                </div>
                
                <div class="advanced-feature-card">
                    <div class="feature-icon-wrapper">
                        <i class="fas fa-tools"></i>
                    </div>
                    <h3>White-Glove Setup</h3>
                    <p>Professional, clean installation managed entirely by our team with zero business disruption.</p>
                </div>
                
                <div class="advanced-feature-card">
                    <div class="feature-icon-wrapper">
                        <i class="fas fa-box-open"></i>
                    </div>
                    <h3>Custom Selection</h3>
                    <p>Tailor your machine's inventory to exactly match your team's unique tastes and dietary needs.</p>
                </div>
                
                <div class="advanced-feature-card">
                    <div class="feature-icon-wrapper">
                        <i class="fas fa-sync-alt"></i>
                    </div>
                    <h3>Smart Restocking</h3>
                    <p>Automated telemetry tracking ensures your machines are restocked before they ever run out.</p>
                </div>
            </div>
            
            <div class="centered-cta-wrapper">
                <a href="/get-a-free-vending-machine-in-jacksonville-florida" class="btn btn-primary">Get Free Vending Machine</a>
            </div>
        </div>
    </section>`;

    if (benefitsRegex.test(content)) {
        data[slug].content = content.replace(benefitsRegex, newGridHtml);
        updateCount++;
    } else {
        console.log(`Warning: Could not find benefits section in ${slug}`);
    }
}

fs.writeFileSync(dataPath, JSON.stringify(data), 'utf8');
console.log(`Successfully converted ${updateCount} location pages to the new 3x2 Grid Layout!`);
