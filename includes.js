// Global Navigation and Footer Include Script
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded - Starting navigation load...');
    
    // Load navigation
    fetch('nav.html')
        .then(response => {
            console.log('Navigation fetch response:', response.status, response.statusText);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            console.log('Navigation HTML loaded, length:', data.length);
            
            // Insert navigation after contact bar
            const contactBar = document.querySelector('.contact-bar');
            if (contactBar) {
                contactBar.insertAdjacentHTML('afterend', data);
                console.log('Navigation inserted after contact bar');
            } else {
                // If no contact bar, insert at the beginning of body
                document.body.insertAdjacentHTML('afterbegin', data);
                console.log('Navigation inserted at beginning of body');
            }
            
            // Initialize mobile navigation after nav is loaded
            setTimeout(() => {
                initializeMobileNav();
            }, 100); // Small delay to ensure DOM is updated
            
            // Retry initialization if elements are not found
            setTimeout(() => {
                const hamburger = document.querySelector('.hamburger');
                const navMenu = document.querySelector('.nav-menu');
                if (!hamburger || !navMenu) {
                    console.log('Elements not found after 100ms, retrying...');
                    initializeMobileNav();
                }
            }, 500);
        })
        .catch(error => {
            console.error('Error loading navigation:', error);
            // Fallback: create a simple navigation if loading fails
            createFallbackNavigation();
        });

    // Load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            // Insert footer before closing body tag
            const scriptTag = document.querySelector('script[src="script.js"]');
            if (scriptTag) {
                scriptTag.insertAdjacentHTML('beforebegin', data);
            } else {
                document.body.insertAdjacentHTML('beforeend', data);
            }
        })
        .catch(error => console.error('Error loading footer:', error));
});

// Initialize mobile navigation functionality
function initializeMobileNav() {
    console.log('Initializing mobile navigation...');
    
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    console.log('Hamburger element:', hamburger);
    console.log('Nav menu element:', navMenu);
    
    if (hamburger && navMenu) {
        console.log('Both elements found, adding event listeners...');
        
        hamburger.addEventListener('click', function() {
            console.log('Hamburger clicked!');
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Initialize dropdown functionality for mobile
        initializeDropdowns();
        
        console.log('Mobile navigation initialized successfully');
    } else {
        console.error('Hamburger or nav menu not found!');
        console.log('Available elements with class "hamburger":', document.querySelectorAll('.hamburger'));
        console.log('Available elements with class "nav-menu":', document.querySelectorAll('.nav-menu'));
    }
}

// Create fallback navigation if loading fails
function createFallbackNavigation() {
    console.log('Creating fallback navigation...');
    
    const fallbackNav = `
        <nav class="navbar">
            <div class="nav-container">
                <div class="nav-logo">
                    <a href="/" aria-label="VendSmart Homepage">
                        <img src="vendsmart-logo-jacksonville-vending.png" alt="VendSmart - Jacksonville Vending Machine Company Logo">
                    </a>
                </div>
                <ul class="nav-menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="locations.html">Locations</a></li>
                    <li><a href="products.html">Products</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="contact.html" class="cta-button">Contact Us</a></li>
                </ul>
                <div class="hamburger" aria-label="Toggle navigation menu" role="button" tabindex="0">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    `;
    
    const contactBar = document.querySelector('.contact-bar');
    if (contactBar) {
        contactBar.insertAdjacentHTML('afterend', fallbackNav);
    } else {
        document.body.insertAdjacentHTML('afterbegin', fallbackNav);
    }
    
    // Initialize mobile navigation for fallback
    setTimeout(() => {
        initializeMobileNav();
    }, 100);
}

// Initialize dropdown functionality
function initializeDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        
        if (toggle) {
            toggle.addEventListener('click', function(e) {
                // Only handle clicks on mobile
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                    
                    // Close other dropdowns
                    dropdowns.forEach(otherDropdown => {
                        if (otherDropdown !== dropdown) {
                            otherDropdown.classList.remove('active');
                        }
                    });
                }
            });
        }
    });
} 