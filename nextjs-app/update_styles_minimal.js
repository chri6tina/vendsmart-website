const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'public', 'styles.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

const startIndex = cssContent.indexOf('/* ========== BENTO BOX ENHANCEMENTS (Atlantic Beach & Location Pages) ========== */');
const endIndex = cssContent.indexOf('.page-content .image-placeholder i {');

if (startIndex !== -1 && endIndex !== -1) {
    const minimalCss = `/* ========== MINIMALIST ENHANCEMENTS (Atlantic Beach & Location Pages) ========== */
/* Minimal Overview Section */
.page-content .minimal-overview {
  padding: 5rem 0;
  background: var(--white);
}

.page-content .minimal-content {
  max-width: 1000px;
  margin: 0 auto;
}

.page-content .minimal-text {
  text-align: center;
  margin-bottom: 3.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.page-content .minimal-text h2 {
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: var(--dark);
  margin-bottom: 1rem;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.page-content .minimal-text p {
  font-size: 1.1rem;
  color: var(--text-muted);
  line-height: 1.7;
}

.page-content .minimal-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}

.page-content .minimal-card {
  background: var(--white);
  border-radius: 16px;
  padding: 2.5rem 1.5rem;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  border: 1px solid var(--border);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
}

.page-content .minimal-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 210, 255, 0.2);
}

.page-content .minimal-card i {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.page-content .minimal-card:hover i {
  transform: scale(1.1);
  color: var(--primary-dark);
}

.page-content .minimal-card h3 {
  font-size: 1.25rem;
  color: var(--dark);
  margin-bottom: 0.75rem;
  font-weight: 700;
}

.page-content .minimal-card p {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
}

`;
    cssContent = cssContent.substring(0, startIndex) + minimalCss + cssContent.substring(endIndex);
    fs.writeFileSync(cssPath, cssContent, 'utf8');
    console.log('Successfully updated styles.css with minimalist layout CSS');
} else {
    console.log('Could not find boundaries for replacement.');
}
