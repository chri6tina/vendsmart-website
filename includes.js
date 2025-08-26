// ===== SIMPLE MOBILE NAVIGATION SYSTEM =====

// Global variables
let mobileMenuOpen = false;

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadNavigation();
    loadFooter();
});

// Load navigation directly (no fetch needed)
function loadNavigation() {
    // Check if navigation already exists
    if (document.querySelector('.navbar')) {
        console.log('Navigation already exists, initializing...');
        initializeNavigation();
        return;
    }
    
    console.log('Loading navigation...');
    
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

                <!-- NEW SIMPLE MOBILE MENU TOGGLE -->
                <button class="mobile-menu-toggle" type="button" aria-label="Toggle mobile menu">
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                </button>
            </div>
            
            <!-- NEW SIMPLE MOBILE MENU -->
            <div class="mobile-menu">
                <div class="mobile-menu-header">
                    <h3>Menu</h3>
                    <button class="mobile-menu-close" type="button" aria-label="Close mobile menu">×</button>
                </div>
                <ul class="mobile-menu-items">
                    <li><a href="/">Home</a></li>
                    <li><a href="jacksonville-vending-services-landing.html">Vending Services</a></li>
                    <li><a href="setting-up-a-micro-market-in-your-jacksonville-office.html">Micro-Markets</a></li>
                    <li><a href="coffeeservices.html">Coffee Services</a></li>
                    <li><a href="smart-coolers.html">Smart Coolers</a></li>
                    <li><a href="services.html">All Services</a></li>
                    <li><a href="locations.html">All Locations</a></li>
                    <li><a href="jacksonville.html">Jacksonville</a></li>
                    <li><a href="downtown-jacksonville.html">Downtown</a></li>
                    <li><a href="jacksonville-beach.html">Jacksonville Beach</a></li>
                    <li><a href="orange-park.html">Orange Park</a></li>
                    <li><a href="ponte-vedra.html">Ponte Vedra</a></li>
                    <li><a href="atlantic-beach.html">Atlantic Beach</a></li>
                    <li><a href="st-augustine.html">St. Augustine</a></li>
                    <li><a href="mandarin.html">Mandarin</a></li>
                    <li><a href="lakeside.html">Lakeside</a></li>
                    <li><a href="products.html">Products</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="contact.html" class="mobile-cta">Contact Us</a></li>
                </ul>
                <div class="mobile-menu-footer">
                    <a href="tel:904-456-3851" class="mobile-phone">
                        <i class="fas fa-phone"></i>
                        <span>904-456-3851</span>
                    </a>
                </div>
            </div>
        </nav>
    `;
    
    // Insert navigation at the beginning of the body
    document.body.insertAdjacentHTML('afterbegin', navigationHTML);
    
    console.log('Navigation loaded successfully');
    
    // Initialize navigation functionality
    initializeNavigation();
}

// Initialize all navigation functionality
function initializeNavigation() {
    const navbar = document.querySelector('.navbar');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileClose = document.querySelector('.mobile-menu-close');
    
    if (!navbar || !mobileToggle || !mobileMenu) {
        console.log('Mobile navigation elements not found, retrying...');
        setTimeout(initializeNavigation, 100);
        return;
    }
    
    console.log('Initializing NEW mobile navigation...');
    
    // Initialize desktop dropdowns
    initializeDropdowns();
    
    // Initialize NEW simple mobile menu
    initializeMobileMenu();
    
    console.log('NEW mobile navigation initialized successfully');
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

// Initialize NEW simple mobile menu functionality
function initializeMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileClose = document.querySelector('.mobile-menu-close');
    const body = document.body;
    
    if (!mobileToggle || !mobileMenu || !mobileClose) {
        console.log('Mobile menu elements not found');
        return;
    }
    
    console.log('Setting up NEW mobile menu...');
    
    // Toggle mobile menu
    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
        console.log('Mobile menu toggled:', mobileMenuOpen);
        
        if (mobileMenuOpen) {
            mobileMenu.classList.add('open');
            body.style.overflow = 'hidden';
            mobileToggle.classList.add('active');
        } else {
            mobileMenu.classList.remove('open');
            body.style.overflow = '';
            mobileToggle.classList.remove('active');
        }
    }
    
    // Open mobile menu
    mobileToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Mobile toggle clicked');
        toggleMobileMenu();
    });
    
    // Close mobile menu
    mobileClose.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Mobile close clicked');
        toggleMobileMenu();
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mobileMenuOpen && !mobileMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
            console.log('Clicking outside, closing menu');
            toggleMobileMenu();
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenuOpen) {
            console.log('Escape key pressed, closing menu');
            toggleMobileMenu();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && mobileMenuOpen) {
            console.log('Window resized to desktop, closing mobile menu');
            toggleMobileMenu();
        }
    });
    
    console.log('NEW mobile menu setup complete');
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

// Handle window load as backup
window.addEventListener('load', function() {
    if (!document.querySelector('.mobile-menu.open')) {
        console.log('Window load backup - checking navigation...');
        setTimeout(initializeNavigation, 100);
    }
});

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