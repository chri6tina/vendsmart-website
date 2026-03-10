const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'pages-data.json');
let data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// 1. Get the Atlantic Beach Master Template
const abContent = data['atlantic-beach'].content;
const abStartIndex = abContent.indexOf('<section class="about-section atlantic-beach-benefits">');
let abEndIndex = abContent.indexOf('</section>', abStartIndex) + 10;
const masterTemplate = abContent.substring(abStartIndex, abEndIndex);

if (!masterTemplate || masterTemplate.length < 100) {
    console.error("Failed to extract master template from Atlantic Beach!");
    process.exit(1);
}

const slug = 'st-augustine';
let content = data[slug].content;

// The section in St Augustine lacks the "about-section " prefix in its class
const regex = new RegExp(`<section class="${slug}-benefits">[\\s\\S]*?<\\/section>`);
let match = content.match(regex);

if (match) {
    let oldSection = match[0];

    // Hardcode city name since we know it
    let cityName = 'St. Augustine';

    // Build the new section by hot-swapping the city name into the Atlantic Beach template
    let newSectionHtml = masterTemplate
        .replace(/atlantic-beach-benefits/g, `${slug}-benefits`)
        .replace(/Atlantic Beach/g, cityName);

    data[slug].content = content.replace(oldSection, newSectionHtml);

    fs.writeFileSync(dataPath, JSON.stringify(data), 'utf8');
    console.log(`Successfully converted ${slug} to the 3x2 Features Grid Layout!`);
} else {
    console.log(`Warning: Could not find ${slug}-benefits section`);
}
