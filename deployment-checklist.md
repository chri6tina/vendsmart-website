# VendSmart Website Deployment Checklist

## Pre-Deployment Tasks

### 1. File Optimization
- [ ] Compress images (PNG, JPG files)
- [ ] Minify CSS files (optional for performance)
- [ ] Minify JavaScript files (optional for performance)
- [ ] Remove any development files or comments

### 2. Domain & DNS Configuration

#### Squarespace Domain Setup
- [ ] Log into Squarespace account
- [ ] Go to Settings → Domains
- [ ] Add domain: `jacksonvillevendingmachines.com`
- [ ] Note down DNS settings for Opalstack

#### Opalstack Hosting Setup
- [ ] Log into Opalstack control panel
- [ ] Create new website application
- [ ] Set domain: `jacksonvillevendingmachines.com`
- [ ] Choose appropriate PHP version (if needed)
- [ ] Enable SSL certificate
- [ ] Get FTP/SFTP credentials

### 3. File Upload

#### Option A: FTP/SFTP Upload
- [ ] Download FTP client (FileZilla, Cyberduck, etc.)
- [ ] Connect to Opalstack server
- [ ] Upload all files to `public_html` directory
- [ ] Set proper file permissions:
  - Files: 644
  - Directories: 755

#### Option B: Opalstack File Manager
- [ ] Use Opalstack's web-based file manager
- [ ] Upload files in batches
- [ ] Verify all files uploaded correctly

### 4. File Structure Verification
```
public_html/
├── index.html ✅
├── blog.html ✅
├── blog-post.html ✅
├── services.html ✅
├── locations.html ✅
├── portfolio.html ✅
├── contact.html ✅
├── styles.css ✅
├── blog-styles.css ✅
├── script.js ✅
├── blog-script.js ✅
├── VendSmart LOGO WITH BORDER.png ✅
├── Miro Market.jpg ✅
├── logo.svg ✅
└── [all location pages] ✅
```

## Post-Deployment Testing

### 1. Basic Functionality
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Images display properly
- [ ] CSS styling applied correctly
- [ ] JavaScript functionality works

### 2. Blog Testing
- [ ] Blog listing page loads
- [ ] Sample posts display correctly
- [ ] "Read Full Article" links work
- [ ] Individual blog post pages load
- [ ] Back button functions properly
- [ ] Share buttons work (if implemented)

### 3. Contact & Forms
- [ ] Contact form submits correctly
- [ ] Thank you page displays
- [ ] All form validations work

### 4. Mobile & Responsive
- [ ] Site works on mobile devices
- [ ] Navigation menu functions on mobile
- [ ] All pages are responsive
- [ ] Touch interactions work properly

### 5. Performance & Security
- [ ] SSL certificate active (https://)
- [ ] Page load times are acceptable
- [ ] No broken links
- [ ] No console errors

### 6. SEO & Meta
- [ ] All pages have proper titles
- [ ] Meta descriptions are set
- [ ] Open Graph tags (if needed)
- [ ] Sitemap (if needed)

## Maintenance Tasks

### Regular Updates
- [ ] Monitor site performance
- [ ] Update blog content regularly
- [ ] Check for broken links
- [ ] Monitor SSL certificate expiration
- [ ] Backup website files

### Analytics Setup (Optional)
- [ ] Google Analytics integration
- [ ] Google Search Console setup
- [ ] Monitor site traffic and performance

## Emergency Contacts

- **Opalstack Support**: [Opalstack Support Portal]
- **Squarespace Support**: [Squarespace Help Center]
## Notes

- Keep backup of all files before deployment
- Test thoroughly on staging environment if available
- Monitor site performance after launch
- Set up regular backups
- Consider implementing monitoring tools 