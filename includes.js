// ===== BULLETPROOF MOBILE NAVIGATION =====

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadNavigation();
    loadFooter();
});

// Load navigation directly (no fetch needed)
function loadNavigation() {
    // Check if navigation already exists
    if (document.querySelector('.navbar')) {
        console.log('Navigation already exists, skipping...');
        return;
    }
    
    console.log('Loading BULLETPROOF navigation...');
    
    // Insert navigation HTML directly at the beginning of the body
    const navigationHTML = `
        <nav class="navbar" role="navigation" aria-label="Main navigation">
            <div class="nav-container">
                <!-- Logo Section -->
                <div class="nav-logo">
                    <a href="/" aria-label="Jacksonville Vending Machines Homepage">
                        <img src="vendsmart-logo-jacksonville-vending.png" alt="Jacksonville Vending Machines - VendSmart Logo" loading="lazy">
                    </a>
                </div>

                <!-- Desktop Navigation Menu -->
                <ul class="nav-menu" role="menubar">
                    <li role="none"><a href="/" role="menuitem">Home</a></li>
                    
                    <!-- Services Dropdown -->
                    <li class="dropdown" role="none">
                        <button class="dropdown-toggle" aria-expanded="false" aria-haspopup="true" role="menuitem">
                            Services <i class="fas fa-chevron-down" aria-hidden="true"></i>
                        </button>
                        <ul class="dropdown-menu" role="menu" aria-label="Services submenu">
                            <li role="none"><a href="jacksonville-vending-services-landing.html" role="menuitem">Vending Services</a></li>
                            <li role="none"><a href="setting-up-a-micro-market-in-your-jacksonville-office.html" role="menuitem">Micro-Markets</a></li>
                            <li role="none"><a href="coffeeservices.html" role="menuitem">Coffee Services</a></li>
                            <li role="none"><a href="smart-coolers.html" role="menuitem">Smart Coolers</a></li>
                            <li class="dropdown-divider" role="separator"></li>
                            <li role="none"><a href="services.html" role="menuitem">All Services</a></li>
                        </ul>
                    </li>
                    
                    <!-- Locations Dropdown -->
                    <li class="dropdown" role="none">
                        <button class="dropdown-toggle" aria-expanded="false" aria-haspopup="true" role="menuitem">
                            Locations <i class="fas fa-chevron-down" aria-hidden="true"></i>
                        </button>
                        <ul class="dropdown-menu" role="menu" aria-label="Locations submenu">
                            <li role="none"><a href="locations.html" role="menuitem">All Locations</a></li>
                            <li role="none"><a href="jacksonville.html" role="menuitem">Jacksonville</a></li>
                            <li role="none"><a href="downtown-jacksonville.html" role="menuitem">Downtown</a></li>
                            <li role="none"><a href="jacksonville-beach.html" role="menuitem">Jacksonville Beach</a></li>
                            <li role="none"><a href="orange-park.html" role="menuitem">Orange Park</a></li>
                            <li role="none"><a href="ponte-vedra.html" role="menuitem">Ponte Vedra</a></li>
                            <li role="none"><a href="atlantic-beach.html" role="menuitem">Atlantic Beach</a></li>
                            <li role="none"><a href="st-augustine.html" role="menuitem">St. Augustine</a></li>
                            <li role="none"><a href="mandarin.html" role="menuitem">Mandarin</a></li>
                            <li role="none"><a href="lakeside.html" role="menuitem">Lakeside</a></li>
                        </ul>
                    </li>
                    
                    <li role="none"><a href="products.html" role="menuitem">Products</a></li>
                    <li role="none"><a href="blog.html" role="menuitem">Blog</a></li>
                    <li role="none"><a href="contact.html" class="cta-button" role="menuitem">Contact Us</a></li>
                </ul>

                <!-- Contact Phone (Desktop) -->
                <div class="nav-phone">
                    <a href="tel:904-456-3851" class="phone-link" aria-label="Call us at 904-456-3851">
                        <i class="fas fa-phone" aria-hidden="true"></i>
                        <span>904-456-3851</span>
                    </a>
                </div>

                <!-- BULLETPROOF MOBILE BUTTON -->
                <button class="mobile-btn" onclick="toggleMobileMenu()" style="display: none; flex-direction: column; gap: 4px; background: none; border: none; cursor: pointer; padding: 8px; z-index: 1001;">
                    <span style="width: 25px; height: 3px; background-color: #000000; border-radius: 2px; display: block; margin-bottom: 4px;"></span>
                    <span style="width: 25px; height: 3px; background-color: #000000; border-radius: 2px; display: block; margin-bottom: 4px;"></span>
                    <span style="width: 25px; height: 3px; background-color: #000000; border-radius: 2px; display: block;"></span>
                </button>
            </div>
            
            <!-- BULLETPROOF MOBILE MENU -->
            <div class="mobile-nav" id="mobileNav" style="position: fixed; top: 0; left: -100%; width: 100%; height: 100vh; background: #ffffff; box-shadow: 2px 0 15px rgba(0, 0, 0, 0.1); transition: left 0.3s ease; z-index: 1000; overflow-y: auto; padding-top: 80px;">
                <a href="/" style="display: block; padding: 15px 20px; color: #374151; text-decoration: none; font-size: 16px; border-bottom: 1px solid #f3f4f6;">Home</a>
                <a href="jacksonville-vending-services-landing.html" style="display: block; padding: 15px 20px; color: #374151; text-decoration: none; font-size: 16px; border-bottom: 1px solid #f3f4f6;">Vending Services</a>
                <a href="setting-up-a-micro-market-in-your-jacksonville-office.html" style="display: block; padding: 15px 20px; color: #374151; text-decoration: none; font-size: 16px; border-bottom: 1px solid #f3f4f6;">Micro-Markets</a>
                <a href="coffeeservices.html" style="display: block; padding: 15px 20px; color: #374151; text-decoration: none; font-size: 16px; border-bottom: 1px solid #f3f4f6;">Coffee Services</a>
                <a href="smart-coolers.html" style="display: block; padding: 15px 20px; color: #374151; text-decoration: none; font-size: 16px; border-bottom: 1px solid #f3f4f6;">Smart Coolers</a>
                <a href="services.html" style="display: block; padding: 15px 20px; color: #374151; text-decoration: none; font-size: 16px; border-bottom: 1px solid #f3f4f6;">All Services</a>
                <a href="locations.html" style="display: block; padding: 15px 20px; color: #374151; text-decoration: none; font-size: 16px; border-bottom: 1px solid #f3f4f6;">All Locations</a>
                <a href="jacksonville.html" style="display: block; padding: 15px 20px; color: #374151; text-decoration: none; font-size: 16px; border-bottom: 1px solid #f3f4f6;">Jacksonville</a>
                <a href="downtown-jacksonville.html" style="display: block; padding: 15px 20px; color: #374151; text-decoration: none; font-size: 16px; border-bottom: 1px solid #f3f4f6;">Downtown</a>
                <a href="jacksonville-beach.html" style="display: block; padding: 15px 20px; color: #374151; text-decoration: none; font-size: 16px; border-bottom: 1px solid #f3f4f6;">Jacksonville Beach</a>
                <a href="orange-park.html" style="display: block; padding: 15px 20px; color: #374151; text-decoration: none; font-size: 16px; border-bottom: 1px solid #f3f4f6;">Orange Park</a>
                <a href="ponte-vedra.html" style="display: block; padding: 15px 20px; color: #374151; text-decoration: none; font-size: 16px; border-bottom: 1px solid #f3f4f6;">Ponte Vedra</a>
                <a href="atlantic-beach.html" style="display: block; padding: 15px 20px; color: #374151; text-decoration: none; font-size: 16px; border-bottom: 1px solid #f3f4f6;">Atlantic Beach</a>
                <a href="st-augustine.html" style="display: block; padding: 15px 20px; color: #374151; text-decoration: none; font-size: 16px; border-bottom: 1px solid #f3f4f6;">St. Augustine</a>
                <a href="mandarin.html" style="display: block; padding: 15px 20px; color: #374151; text-decoration: none; font-size: 16px; border-bottom: 1px solid #f3f4f6;">Mandarin</a>
                <a href="lakeside.html" style="display: block; padding: 15px 20px; color: #374151; text-decoration: none; font-size: 16px; border-bottom: 1px solid #f3f4f6;">Lakeside</a>
                <a href="products.html" style="display: block; padding: 15px 20px; color: #374151; text-decoration: none; font-size: 16px; border-bottom: 1px solid #f3f4f6;">Products</a>
                <a href="blog.html" style="display: block; padding: 15px 20px; color: #374151; text-decoration: none; font-size: 16px; border-bottom: 1px solid #f3f4f6;">Blog</a>
                <a href="contact.html" style="display: block; padding: 15px 20px; color: #3b82f6; text-decoration: none; font-size: 16px; border-bottom: 1px solid #f3f4f6; background-color: #f8fafc; font-weight: 600;">Contact Us</a>
                <a href="tel:904-456-3851" style="display: block; padding: 15px 20px; color: #3b82f6; text-decoration: none; font-size: 16px; border-bottom: 1px solid #f3f4f6; background-color: #f8fafc; font-weight: 600;">📞 904-456-3851</a>
            </div>
        </nav>
        
        <style>
            /* BULLETPROOF MOBILE STYLES - INLINE TO AVOID CONFLICTS */
            @media (max-width: 768px) {
                .mobile-btn {
                    display: flex !important;
                }
                
                .nav-menu, .dropdown-menu, .nav-phone {
                    display: none !important;
                }
            }
        </style>
    `;
    
    // Insert navigation at the beginning of the body
    document.body.insertAdjacentHTML('afterbegin', navigationHTML);
    
    console.log('BULLETPROOF navigation loaded successfully');
    
    // Initialize desktop dropdowns only
    initializeDropdowns();
}

// Initialize desktop dropdown functionality
function initializeDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        if (!toggle || !menu) return;
        
        // Desktop hover events only
        if (window.innerWidth > 768) {
            dropdown.addEventListener('mouseenter', () => {
                menu.setAttribute('aria-expanded', 'true');
            });
            
            dropdown.addEventListener('mouseleave', () => {
                menu.setAttribute('aria-expanded', 'false');
            });
        }
    });
}

// BULLETPROOF MOBILE MENU TOGGLE FUNCTION
function toggleMobileMenu() {
    console.log('toggleMobileMenu called - BULLETPROOF');
    
    const mobileNav = document.getElementById('mobileNav');
    const mobileBtn = document.querySelector('.mobile-btn');
    
    if (!mobileNav) {
        console.log('Mobile nav element not found');
        return;
    }
    
    if (!mobileBtn) {
        console.log('Mobile button element not found');
        return;
    }
    
    console.log('Elements found, toggling...');
    
    // Toggle the show class
    mobileNav.classList.toggle('show');
    mobileBtn.classList.toggle('active');
    
    // Check if menu is now open
    const isOpen = mobileNav.classList.contains('show');
    console.log('Menu is now:', isOpen ? 'OPEN' : 'CLOSED');
    
    // Prevent body scroll when open
    if (isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

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