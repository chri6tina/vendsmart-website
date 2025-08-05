const fs = require('fs');
const path = require('path');

// Function to convert a single HTML file to use global includes
function convertFileToGlobal(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Remove existing navigation
        content = content.replace(
            /<!-- Navigation -->\s*<nav class="navbar">[\s\S]*?<\/nav>/g,
            '<!-- Navigation will be loaded by includes.js -->'
        );
        
        // Remove existing footer
        content = content.replace(
            /<!-- Footer -->\s*<footer class="footer">[\s\S]*?<\/footer>/g,
            '<!-- Footer will be loaded by includes.js -->'
        );
        
        // Add includes.js script before script.js
        if (content.includes('<script src="script.js"></script>')) {
            content = content.replace(
                '<script src="script.js"></script>',
                '<script src="includes.js"></script>\n    <script src="script.js"></script>'
            );
        }
        
        // Write the updated content back to the file
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Converted: ${filePath}`);
        
    } catch (error) {
        console.error(`❌ Error converting ${filePath}:`, error.message);
    }
}

// Get all HTML files in the current directory
const htmlFiles = fs.readdirSync('.')
    .filter(file => file.endsWith('.html'))
    .filter(file => file !== 'nav.html' && file !== 'footer.html' && file !== 'template.html');

console.log('🔄 Converting HTML files to use global navigation and footer...\n');

// Convert each file
htmlFiles.forEach(file => {
    convertFileToGlobal(file);
});

console.log(`\n✅ Conversion complete! ${htmlFiles.length} files updated.`);
console.log('\n📝 Next steps:');
console.log('1. Test your homepage to make sure navigation and footer load correctly');
console.log('2. If everything works, you can now update nav.html or footer.html to change all pages at once');
console.log('3. Use template.html as a starting point for new pages'); 