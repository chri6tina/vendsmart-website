# VendSmart Website - Development Setup

## 🚀 Quick Start with npm

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Open your browser:**
The website will automatically open at `http://localhost:3000`

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with live reload |
| `npm start` | Same as dev (alternative command) |
| `npm run serve` | Start server without auto-opening browser |
| `npm run build` | No build process needed (static site) |
| `npm run deploy` | Ready for deployment |

## 🔧 Development Features

### Live Reload
- **Automatic refresh** when you save files
- **No manual refresh** needed
- **Real-time updates** in browser

### Hot Reload
- **CSS changes** update instantly
- **JavaScript changes** reload automatically
- **HTML changes** refresh the page

## 🛠️ Development Workflow

### 1. Start Development
```bash
npm run dev
```

### 2. Make Changes
- Edit HTML files in your text editor
- Edit CSS in `styles.css` or `blog-styles.css`
- Edit JavaScript in `script.js` or `blog-script.js`

### 3. See Changes
- Browser automatically refreshes
- No need to manually reload

### 4. Stop Development
- Press `Ctrl+C` in terminal

## 📁 Project Structure

```
vendsmart-website/
├── package.json          # npm configuration
├── index.html            # Homepage
├── blog.html            # Blog listing
├── blog-post.html       # Individual blog posts
├── services.html        # Services page
├── locations.html       # Locations page
├── portfolio.html       # Portfolio page
├── contact.html         # Contact page
├── styles.css           # Main styles
├── blog-styles.css      # Blog-specific styles
├── script.js            # Main JavaScript
├── blog-script.js       # Blog JavaScript
├── includes.js          # Shared includes
└── location pages/      # Individual location pages
```

## 🌐 Browser Support

- **Chrome** (recommended)
- **Firefox**
- **Safari**
- **Edge**

## 🔍 Debugging

### Browser Developer Tools
- **F12** or **Right-click > Inspect**
- **Console** for JavaScript errors
- **Network** tab for loading issues
- **Elements** tab for HTML/CSS debugging

### Common Issues

**Port already in use:**
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run serve -- --port=3001
```

**Dependencies not installed:**
```bash
npm install
```

**Cache issues:**
- Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Clear browser cache

## 🚀 Deployment

### GitHub Pages
```bash
# Push to GitHub
git add .
git commit -m "Update website"
git push origin main
```

### Netlify
1. Connect GitHub repository
2. Deploy automatically

### Vercel
1. Connect GitHub repository
2. Deploy automatically

## 📱 Mobile Testing

### Chrome DevTools
1. **F12** to open DevTools
2. **Click device icon** (mobile/tablet)
3. **Select device** from dropdown
4. **Test responsiveness**

### Real Device Testing
- Use your phone's browser
- Visit `http://YOUR_IP:3000` (find IP with `ipconfig` or `ifconfig`)

## 🎯 Contentful Integration

### Blog Development
1. **Set up Contentful** (see `CONTENTFUL_SETUP.md`)
2. **Test blog functionality** in development
3. **Verify API calls** in browser console

### Sample Data
- Blog works with sample data if Contentful not configured
- Fallback content ensures site always works

## 🔧 Customization

### Adding New Pages
1. Create new HTML file
2. Add to navigation in `nav.html`
3. Update `includes.js` if needed

### Adding New Styles
1. Edit `styles.css` for global styles
2. Edit `blog-styles.css` for blog-specific styles
3. Changes appear instantly with live reload

### Adding New JavaScript
1. Edit `script.js` for global functionality
2. Edit `blog-script.js` for blog functionality
3. Changes reload automatically

## 🆘 Troubleshooting

### Server Won't Start
```bash
# Check if port is free
netstat -an | grep 3000

# Kill process if needed
npx kill-port 3000

# Try different port
npm run serve -- --port=3001
```

### Changes Not Appearing
1. **Check file is saved**
2. **Check browser console** for errors
3. **Hard refresh** browser
4. **Restart dev server**

### Contentful Issues
1. **Check API credentials** in `blog-script.js`
2. **Verify content** is published in Contentful
3. **Check browser console** for API errors

## 📞 Support

- **Live Server**: [Documentation](https://www.npmjs.com/package/live-server)
- **Node.js**: [Documentation](https://nodejs.org/docs/)
- **Contentful**: [Documentation](https://www.contentful.com/developers/docs/)

---

**Happy coding!** 🎉
