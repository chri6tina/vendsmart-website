const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'nextjs-app', 'data', 'pages-data.json');

try {
    console.log('Reading pages-data.json...');
    const fileData = fs.readFileSync(dataPath, 'utf8');
    const pagesData = JSON.parse(fileData);

    if (!pagesData['atlantic-beach']) {
        console.error('atlantic-beach key not found in pages-data.json');
        process.exit(1);
    }

    console.log('Applying new Bento Box layout to atlantic-beach...');

    let content = pagesData['atlantic-beach'].content;

    const overviewStartRegex = /<!-- Location Overview -->\s*<section id="overview" class="location-overview">/;
    const nextSectionIndex = content.indexOf('<!-- Atlantic Beach Services -->');

    if (!overviewStartRegex.test(content) || nextSectionIndex === -1) {
        console.error('Could not find the expected section boundaries to replace in the content string.');
        process.exit(1);
    }

    const beforeContentMatch = content.match(/([\s\S]*?)<!-- Location Overview -->\s*<section id="overview" class="location-overview">/);

    if (!beforeContentMatch) {
        console.error('Regex extraction failed.');
        process.exit(1);
    }

    let beforeContent = beforeContentMatch[1];
    let afterContent = content.substring(nextSectionIndex);

    const newOverviewHTML = `
    <!-- Location Overview (Bento Box Enhanced) -->
    <section id="overview" class="bento-overview">
        <div class="container">
            <div class="bento-container">
                <!-- Features Column -->
                <div class="bento-features-col">
                    <div class="bento-header">
                        <h2>Vending Solutions for Atlantic Beach</h2>
                        <p>Atlantic Beach is a charming coastal community known for its laid-back atmosphere, local businesses, and beautiful beaches. VendSmart provides personalized vending solutions tailored to the unique character and needs of Atlantic Beach's local businesses and community.</p>
                    </div>

                    <div class="bento-grid">
                        <div class="bento-feature-card focus-card">
                            <div class="bento-icon-wrap">
                                <i class="fas fa-store"></i>
                            </div>
                            <h3>Local Shops & Retail</h3>
                            <p>Convenient vending for local shops, boutiques, and retail businesses serving the Atlantic Beach community</p>
                        </div>
                        
                        <div class="bento-feature-card">
                            <div class="bento-icon-wrap">
                                <i class="fas fa-umbrella-beach"></i>
                            </div>
                            <h3>Beachfront Businesses</h3>
                            <p>Vending solutions for beachfront hotels, restaurants, and businesses catering to beach visitors and locals</p>
                        </div>
                        
                        <div class="bento-feature-card">
                            <div class="bento-icon-wrap">
                                <i class="fas fa-building"></i>
                            </div>
                            <h3>Professional Offices</h3>
                            <p>Smart vending for professional offices, medical practices, and service businesses</p>
                        </div>
                        
                        <div class="bento-feature-card">
                            <div class="bento-icon-wrap">
                                <i class="fas fa-utensils"></i>
                            </div>
                            <h3>Local Restaurants</h3>
                            <p>Vending solutions for local restaurants, cafes, and dining establishments in the area</p>
                        </div>
                    </div>
                </div>

                <!-- Visual Focus Column -->
                <div class="bento-image-col">
                    <div class="bento-visual-card">
                        <div class="bento-visual-inner">
                            <div class="bento-glow-orb"></div>
                            
                            <div class="bento-badge">Premium Tech</div>
                            <i class="fas fa-mobile-alt bento-visual-icon"></i>
                            <h3 class="bento-visual-title">Smart Platform</h3>
                            <p class="bento-visual-subtitle">Experience contactless payments, real-time inventory, and intuitive touchscreens.</p>
                            
                            <div class="bento-stats-container">
                                <div class="bento-stat-box">
                                    <span class="bento-stat-num">24/7</span>
                                    <span class="bento-stat-label">Support</span>
                                </div>
                                <div class="bento-stat-box">
                                    <span class="bento-stat-num">100%</span>
                                    <span class="bento-stat-label">Free Setup</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `;

    pagesData['atlantic-beach'].content = beforeContent + newOverviewHTML + "\n\n    " + afterContent;

    console.log('Writing changes to pages-data.json...');
    fs.writeFileSync(dataPath, JSON.stringify(pagesData), 'utf8');
    console.log('Successfully updated pages-data.json');
} catch (error) {
    console.error('Error:', error);
    process.exit(1);
}
