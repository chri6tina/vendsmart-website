// ===== MODERN NAVIGATION SYSTEM =====

// Global variables
let isMobileMenuOpen = false;
let isScrolled = false;

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

                <!-- Mobile Menu Toggle -->
                <button class="hamburger" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="nav-menu" type="button">
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                </button>
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
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!navbar || !hamburger || !navMenu) {
        console.log('Navigation elements not found, retrying...');
        setTimeout(initializeNavigation, 100);
        return;
    }
    
    console.log('Initializing navigation...');
    
    // Initialize scroll effects
    initializeScrollEffects();
    
    // Initialize dropdowns
    initializeDropdowns();
    
    // Initialize mobile menu
    initializeMobileMenu();
    
    // Initialize keyboard navigation
    initializeKeyboardNavigation();
    
    console.log('Navigation initialized successfully');
}



// Initialize scroll effects for navbar
function initializeScrollEffects() {
    const navbar = document.querySelector('.navbar');
    
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50 && !isScrolled) {
            navbar.classList.add('scrolled');
            isScrolled = true;
        } else if (scrollTop <= 50 && isScrolled) {
            navbar.classList.remove('scrolled');
            isScrolled = false;
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
}

// Initialize dropdown functionality
function initializeDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        if (!toggle || !menu) return;
        
        // Desktop hover events
        if (window.innerWidth > 768) {
            dropdown.addEventListener('mouseenter', () => {
                menu.setAttribute('aria-expanded', 'true');
            });
            
            dropdown.addEventListener('mouseleave', () => {
                menu.setAttribute('aria-expanded', 'false');
            });
        }
        
        // Mobile click events
        if (window.innerWidth <= 768) {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
                toggle.setAttribute('aria-expanded', !isExpanded);
                
                if (isExpanded) {
                    menu.style.display = 'none';
                } else {
                    menu.style.display = 'block';
                }
            });
        }
    });
}

// Initialize mobile menu functionality
function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;
    
    if (!hamburger || !navMenu) return;
    
    function toggleMobileMenu() {
        isMobileMenuOpen = !isMobileMenuOpen;
        
        hamburger.setAttribute('aria-expanded', isMobileMenuOpen);
        hamburger.classList.toggle('active', isMobileMenuOpen);
        navMenu.classList.toggle('active', isMobileMenuOpen);
        
        // Prevent body scroll when menu is open
        if (isMobileMenuOpen) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    }
    
    // Hamburger click handler
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (isMobileMenuOpen && !hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            toggleMobileMenu();
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isMobileMenuOpen) {
            toggleMobileMenu();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && isMobileMenuOpen) {
            toggleMobileMenu();
        }
    });
}

// Initialize keyboard navigation
function initializeKeyboardNavigation() {
    const navItems = document.querySelectorAll('.nav-menu a, .nav-menu .dropdown-toggle');
    
    navItems.forEach(item => {
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                item.click();
            }
        });
    });
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
    if (!document.querySelector('.nav-menu.active')) {
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