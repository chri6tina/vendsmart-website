// ===== BRAND NEW NAVIGATION SYSTEM =====

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadNewNavigation();
    loadFooter();
});

// Load brand new navigation
function loadNewNavigation() {
    // Check if navigation already exists
    if (document.querySelector('.navbar')) {
        console.log('Navigation already exists, skipping...');
        return;
    }
    
    console.log('Loading BRAND NEW navigation...');
    
    // Brand new navigation HTML
    const newNavigationHTML = `
        <nav class="navbar">
            <div class="nav-container">
                <!-- Logo -->
                <div class="nav-logo">
                    <a href="/">
                        <img src="vendsmart-logo-jacksonville-vending.png" alt="VendSmart Logo">
                    </a>
                </div>
                
                <!-- Desktop Menu -->
                <div class="desktop-menu">
                    <a href="/">Home</a>
                    <a href="services.html">Services</a>
                    <a href="locations.html">Locations</a>
                    <a href="products.html">Products</a>
                    <a href="blog.html">Blog</a>
                    <a href="contact.html" class="cta-btn">Contact</a>
                </div>
                
                <!-- Mobile Menu Button -->
                <button class="mobile-menu-btn" onclick="toggleMobileMenu()">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            
            <!-- Mobile Menu -->
            <div class="mobile-menu" id="mobileMenu">
                <a href="/">Home</a>
                <a href="services.html">Services</a>
                <a href="locations.html">Locations</a>
                <a href="products.html">Products</a>
                <a href="blog.html">Blog</a>
                <a href="contact.html">Contact</a>
                <a href="tel:904-456-3851">📞 904-456-3851</a>
            </div>
        </nav>
        
        <style>
            /* BRAND NEW NAVIGATION STYLES */
            .navbar {
                background: white;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                z-index: 1000;
            }
            
            .nav-container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 20px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 70px;
            }
            
            .nav-logo img {
                height: 40px;
            }
            
            .desktop-menu {
                display: flex;
                gap: 30px;
                align-items: center;
            }
            
            .desktop-menu a {
                color: #333;
                text-decoration: none;
                font-weight: 500;
                transition: color 0.3s ease;
            }
            
            .desktop-menu a:hover {
                color: #3b82f6;
            }
            
            .cta-btn {
                background: #3b82f6;
                color: white !important;
                padding: 10px 20px;
                border-radius: 5px;
                font-weight: 600;
            }
            
            .cta-btn:hover {
                background: #2563eb;
            }
            
            /* Mobile Menu Button */
            .mobile-menu-btn {
                display: none;
                flex-direction: column;
                gap: 4px;
                background: none;
                border: none;
                cursor: pointer;
                padding: 5px;
            }
            
            .mobile-menu-btn span {
                width: 25px;
                height: 3px;
                background: #333;
                border-radius: 2px;
                transition: all 0.3s ease;
            }
            
            /* Mobile Menu */
            .mobile-menu {
                display: none;
                position: fixed;
                top: 70px;
                left: 0;
                right: 0;
                background: white;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                z-index: 999;
            }
            
            .mobile-menu.show {
                display: block;
            }
            
            .mobile-menu a {
                display: block;
                padding: 15px 20px;
                color: #333;
                text-decoration: none;
                border-bottom: 1px solid #eee;
                font-weight: 500;
            }
            
            .mobile-menu a:hover {
                background: #f8f9fa;
            }
            
            /* Mobile Styles */
            @media (max-width: 768px) {
                .desktop-menu {
                    display: none;
                }
                
                .mobile-menu-btn {
                    display: flex;
                }
                
                .mobile-menu-btn.active span:nth-child(1) {
                    transform: rotate(45deg) translate(5px, 5px);
                }
                
                .mobile-menu-btn.active span:nth-child(2) {
                    opacity: 0;
                }
                
                .mobile-menu-btn.active span:nth-child(3) {
                    transform: rotate(-45deg) translate(7px, -6px);
                }
            }
            
            /* Body padding for fixed nav */
            body {
                padding-top: 70px;
            }
        </style>
    `;
    
    // Insert new navigation
    document.body.insertAdjacentHTML('afterbegin', newNavigationHTML);
    
    console.log('BRAND NEW navigation loaded successfully');
}

// Simple mobile menu toggle
function toggleMobileMenu() {
    console.log('toggleMobileMenu called');
    
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    
    if (!mobileMenu || !mobileBtn) {
        console.log('Mobile elements not found');
        return;
    }
    
    // Toggle menu
    mobileMenu.classList.toggle('show');
    mobileBtn.classList.toggle('active');
    
    // Prevent body scroll when open
    if (mobileMenu.classList.contains('show')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
    
    console.log('Mobile menu toggled');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.mobile-menu-btn') && !e.target.closest('#mobileMenu')) {
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileBtn = document.querySelector('.mobile-menu-btn');
        
        if (mobileMenu && mobileMenu.classList.contains('show')) {
            mobileMenu.classList.remove('show');
            mobileBtn.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// Load footer
function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            // Check if footer already exists to prevent duplicates
            const existingFooter = document.querySelector('footer, .footer');
            if (existingFooter) {
                console.log('Footer already exists, skipping duplicate insertion');
                return;
            }
            
            // Insert footer before closing body tag
            const scriptTag = document.querySelector('script[src="includes.js"]');
            if (scriptTag) {
                scriptTag.insertAdjacentHTML('beforebegin', data);
            } else {
                document.body.insertAdjacentHTML('beforeend', data);
            }
            console.log('Footer loaded successfully');
        })
        .catch(error => console.error('Error loading footer:', error));
}

// Fix CTA buttons - ensure they work properly
function fixCTAButtons() {
    console.log('Fixing CTA buttons...');
    
    // Find all CTA buttons
    const ctaButtons = document.querySelectorAll('.btn, .cta-button, .hero-buttons a, .cta-buttons a');
    
    ctaButtons.forEach(button => {
        console.log('Found CTA button:', button.href || button.textContent);
        
        // Remove any existing click listeners
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
        
        // Add new click listener
        newButton.addEventListener('click', function(e) {
            console.log('CTA button clicked:', this.href);
            // Let the default navigation happen
        });
        
        // Ensure button is clickable
        newButton.style.cursor = 'pointer';
        newButton.style.pointerEvents = 'auto';
        newButton.style.position = 'relative';
        newButton.style.zIndex = '10';
    });
    
    console.log('CTA buttons fixed - should work now');
}

// Initialize CTA button fixes
document.addEventListener('DOMContentLoaded', fixCTAButtons);
window.addEventListener('load', fixCTAButtons); 