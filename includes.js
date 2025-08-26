// ===== ULTRA-SIMPLE MOBILE NAVIGATION SYSTEM =====

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

                <!-- ULTRA-SIMPLE MOBILE MENU BUTTON -->
                <button class="mobile-btn" type="button" onclick="toggleMobileMenu()">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            
            <!-- ULTRA-SIMPLE MOBILE MENU -->
            <div class="mobile-nav" id="mobileNav">
                <a href="/">Home</a>
                <a href="jacksonville-vending-services-landing.html">Vending Services</a>
                <a href="setting-up-a-micro-market-in-your-jacksonville-office.html">Micro-Markets</a>
                <a href="coffeeservices.html">Coffee Services</a>
                <a href="smart-coolers.html">Smart Coolers</a>
                <a href="services.html">All Services</a>
                <a href="locations.html">All Locations</a>
                <a href="jacksonville.html">Jacksonville</a>
                <a href="downtown-jacksonville.html">Downtown</a>
                <a href="jacksonville-beach.html">Jacksonville Beach</a>
                <a href="orange-park.html">Orange Park</a>
                <a href="ponte-vedra.html">Ponte Vedra</a>
                <a href="atlantic-beach.html">Atlantic Beach</a>
                <a href="st-augustine.html">St. Augustine</a>
                <a href="mandarin.html">Mandarin</a>
                <a href="lakeside.html">Lakeside</a>
                <a href="products.html">Products</a>
                <a href="blog.html">Blog</a>
                <a href="contact.html" class="mobile-cta">Contact Us</a>
                <a href="tel:904-456-3851" class="mobile-phone">📞 904-456-3851</a>
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
    const mobileBtn = document.querySelector('.mobile-btn');
    const mobileNav = document.querySelector('#mobileNav');
    
    if (!navbar || !mobileBtn || !mobileNav) {
        console.log('Mobile navigation elements not found, retrying...');
        setTimeout(initializeNavigation, 100);
        return;
    }
    
    console.log('Initializing ULTRA-SIMPLE mobile navigation...');
    
    // Initialize desktop dropdowns
    initializeDropdowns();
    
    console.log('ULTRA-SIMPLE mobile navigation initialized successfully');
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

// GLOBAL MOBILE MENU TOGGLE FUNCTION
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const mobileBtn = document.querySelector('.mobile-btn');
    
    if (!mobileNav || !mobileBtn) {
        console.log('Mobile elements not found');
        return;
    }
    
    mobileMenuOpen = !mobileMenuOpen;
    console.log('Mobile menu toggled:', mobileMenuOpen);
    
    if (mobileMenuOpen) {
        mobileNav.classList.add('show');
        mobileBtn.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        mobileNav.classList.remove('show');
        mobileBtn.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    if (mobileMenuOpen && !e.target.closest('.mobile-btn') && !e.target.closest('#mobileNav')) {
        console.log('Clicking outside, closing mobile menu');
        toggleMobileMenu();
    }
});

// Close mobile menu on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileMenuOpen) {
        console.log('Escape key pressed, closing mobile menu');
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
    if (!document.querySelector('#mobileNav.show')) {
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