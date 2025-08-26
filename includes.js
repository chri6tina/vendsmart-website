// ===== MODERN NAVIGATION SYSTEM =====

// Global variables
let isMobileMenuOpen = false;
let isScrolled = false;

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadNavigation();
    loadFooter();
});

// Load navigation from nav.html
function loadNavigation() {
    // Check if navigation already exists
    if (document.querySelector('.navbar')) {
        console.log('Navigation already exists, initializing...');
        initializeNavigation();
        return;
    }
    
    console.log('Loading navigation...');
    
    // Fetch navigation HTML
    fetch('nav.html')
        .then(response => response.text())
        .then(html => {
            // Insert navigation at the beginning of the body
            document.body.insertAdjacentHTML('afterbegin', html);
            
            console.log('Navigation loaded successfully');
            
            // Initialize navigation functionality
            initializeNavigation();
        })
        .catch(error => {
            console.error('Error loading navigation:', error);
            // Fallback: create basic navigation
            createFallbackNavigation();
        });
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

// Create fallback navigation if loading fails
function createFallbackNavigation() {
    console.log('Creating fallback navigation...');
    
    const fallbackNav = `
        <nav class="navbar" role="navigation" aria-label="Main navigation">
            <div class="nav-container">
                <div class="nav-logo">
                    <a href="/" aria-label="Jacksonville Vending Machines Homepage">
                        <img src="vendsmart-logo-jacksonville-vending.png" alt="Jacksonville Vending Machines - VendSmart Logo" loading="lazy">
                    </a>
                </div>
                <ul class="nav-menu" role="menubar">
                    <li role="none"><a href="/" role="menuitem">Home</a></li>
                    <li role="none"><a href="services.html" role="menuitem">Services</a></li>
                    <li role="none"><a href="locations.html" role="menuitem">Locations</a></li>
                    <li role="none"><a href="products.html" role="menuitem">Products</a></li>
                    <li role="none"><a href="contact.html" role="menuitem">Contact</a></li>
                </ul>
                <div class="nav-phone">
                    <a href="tel:904-456-3851" class="phone-link" aria-label="Call us at 904-456-3851">
                        <i class="fas fa-phone" aria-hidden="true"></i>
                        <span>904-456-3851</span>
                    </a>
                </div>
                <button class="hamburger" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="nav-menu" type="button">
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                </button>
            </div>
        </nav>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', fallbackNav);
    initializeNavigation();
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