const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'pages-data.json');
let data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const minimalHtml = `
    <!-- Location Overview (Minimal) -->
    <section id="overview" class="minimal-overview">
        <div class="container">
            <div class="minimal-content">
                <div class="minimal-text">
                    <h2>Vending Solutions for Atlantic Beach</h2>
                    <p>Atlantic Beach is a charming coastal community known for its laid-back atmosphere, local businesses, and beautiful beaches. VendSmart provides personalized vending solutions tailored to the unique character and needs of Atlantic Beach's local businesses and community.</p>
                </div>
                <div class="minimal-grid">
                    <div class="minimal-card">
                        <i class="fas fa-store"></i>
                        <h3>Local Shops & Retail</h3>
                        <p>Convenient vending for local shops, boutiques, and retail businesses serving the community.</p>
                    </div>
                    <div class="minimal-card">
                        <i class="fas fa-umbrella-beach"></i>
                        <h3>Beachfront Businesses</h3>
                        <p>Vending solutions for hotels, restaurants, and businesses catering to beach visitors.</p>
                    </div>
                    <div class="minimal-card">
                        <i class="fas fa-building"></i>
                        <h3>Professional Offices</h3>
                        <p>Smart vending for professional offices, medical practices, and service businesses.</p>
                    </div>
                    <div class="minimal-card">
                        <i class="fas fa-utensils"></i>
                        <h3>Local Restaurants</h3>
                        <p>Vending solutions for local restaurants, cafes, and dining establishments in the area.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

let content = data['atlantic-beach'].content;

// Remove the old bento overview section entirely
const bentoStart = content.indexOf('<!-- Location Overview (Bento Box Enhanced) -->');
const nextSectionStart = content.indexOf('<!-- Atlantic Beach Services -->');

if (bentoStart !== -1 && nextSectionStart !== -1) {
    content = content.substring(0, bentoStart) + minimalHtml + content.substring(nextSectionStart);
    data['atlantic-beach'].content = content;
    fs.writeFileSync(dataPath, JSON.stringify(data), 'utf8');
    console.log("Successfully updated atlantic-beach to minimalist layout");
} else {
    console.log("Could not find sections to replace.");
}
