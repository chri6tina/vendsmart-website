# VendSmart Website - GitHub Deployment Guide

## 🚀 Quick GitHub Deployment Process

### Step 1: Create GitHub Repository

1. **Go to GitHub.com** and log in
2. **Click "New repository"**
3. **Repository name**: `vendsmart-website`
4. **Description**: `VendSmart Vending Solutions Jacksonville - Professional Website`
5. **Make it Public** (for free hosting options)
6. **Don't initialize** with README (we'll push existing files)
7. **Click "Create repository"**

### Step 2: Push Your Code to GitHub

```bash
# Navigate to your project directory
cd /Users/christinashumpert/vendsmart-website

# Add all files to git
git add .

# Create initial commit
git commit -m "Initial commit: VendSmart website with blog and Contentful integration"

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/vendsmart-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Choose Your Hosting Platform

You have several excellent options for hosting from GitHub:

#### Option A: GitHub Pages (Free)
- **Perfect for static sites** like yours
- **Free hosting** with custom domain support
- **Automatic HTTPS**
- **Easy setup**

#### Option B: Netlify (Free Tier)
- **Professional hosting** with great features
- **Automatic deployments** from GitHub
- **Custom domain** support
- **Form handling** (for contact forms)

#### Option C: Vercel (Free Tier)
- **Excellent performance**
- **Automatic deployments**
- **Great for static sites**

### Step 4: GitHub Pages Setup (Recommended)

1. **Go to your GitHub repository**
2. **Click "Settings" tab**
3. **Scroll down to "Pages" section**
4. **Source**: Select "Deploy from a branch"
5. **Branch**: Select "main"
6. **Folder**: Select "/ (root)"
7. **Click "Save"**

### Step 5: Custom Domain Setup

#### For jacksonvillevendingmachines.com:

1. **In GitHub Pages settings**:
   - **Custom domain**: Enter `jacksonvillevendingmachines.com`
   - **Check "Enforce HTTPS"**
   - **Click "Save"**

2. **In your domain registrar (Squarespace)**:
   - **Add CNAME record**:
     - Name: `www`
     - Value: `YOUR_USERNAME.github.io`
   - **Add A record**:
     - Name: `@`
     - Value: `185.199.108.153`
     - Value: `185.199.109.153`
     - Value: `185.199.110.153`
     - Value: `185.199.111.153`

### Step 6: Netlify Alternative (If you prefer)

1. **Go to Netlify.com**
2. **Click "New site from Git"**
3. **Connect to GitHub**
4. **Select your repository**
5. **Build settings**:
   - **Build command**: Leave empty (static site)
   - **Publish directory**: Leave empty (root)
6. **Click "Deploy site"**
7. **Custom domain**: Add `jacksonvillevendingmachines.com`

## 🔄 Continuous Deployment

### Automatic Updates

Once set up, every time you push to GitHub:

```bash
# Make your changes
git add .
git commit -m "Update website content"
git push origin main
```

Your website will automatically update!

### Contentful Integration

Your blog will work immediately because:
- ✅ Contentful credentials are already configured
- ✅ Sample posts provide fallback content
- ✅ All JavaScript is properly linked

## 📋 Post-Deployment Checklist

### GitHub Pages
- [ ] Repository is public
- [ ] GitHub Pages is enabled
- [ ] Custom domain is configured
- [ ] HTTPS is enforced
- [ ] Site is accessible at your domain

### Domain Configuration
- [ ] DNS records are set correctly
- [ ] Domain resolves to your site
- [ ] www and non-www both work
- [ ] SSL certificate is active

### Functionality Testing
- [ ] Homepage loads correctly
- [ ] All navigation works
- [ ] Blog functionality works
- [ ] Contact forms function
- [ ] Mobile responsiveness
- [ ] Images load properly

### Contentful Testing
- [ ] Blog posts load from Contentful
- [ ] Sample posts display as fallback
- [ ] "Read Full Article" links work
- [ ] Back button functions

## 🛠️ Maintenance

### Regular Updates
```bash
# Pull latest changes
git pull origin main

# Make your changes
git add .
git commit -m "Update description"
git push origin main
```

### Adding New Blog Posts
1. **Go to Contentful**
2. **Create new blog post**
3. **Publish** - it will automatically appear on your site

### File Structure
```
vendsmart-website/
├── index.html (homepage)
├── blog.html (blog listing)
├── blog-post.html (individual posts)
├── services.html
├── locations.html
├── portfolio.html
├── contact.html
├── styles.css
├── blog-styles.css
├── script.js
├── blog-script.js
├── images/
└── location pages/
```

## 🆘 Troubleshooting

### Common Issues

**Site not loading:**
- Check GitHub Pages settings
- Verify DNS records
- Check repository is public

**Blog not working:**
- Verify Contentful credentials
- Check browser console for errors
- Test sample posts

**Images not loading:**
- Check file paths
- Verify images are committed to GitHub

**Domain not working:**
- Wait 24-48 hours for DNS propagation
- Check DNS records are correct
- Verify domain is added to GitHub Pages

## 📞 Support

- **GitHub Pages**: [GitHub Pages Documentation](https://pages.github.com/)
- **Netlify**: [Netlify Documentation](https://docs.netlify.com/)
- **Contentful**: [Contentful Documentation](https://www.contentful.com/developers/docs/)

## 🎉 Success!

Once deployed, your site will be:
- ✅ **Live at jacksonvillevendingmachines.com**
- ✅ **Automatically updated** when you push to GitHub
- ✅ **Secure with HTTPS**
- ✅ **Mobile responsive**
- ✅ **Blog integrated with Contentful**
- ✅ **Professional and fast** 