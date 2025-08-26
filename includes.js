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
            console.log('Navigation HTML preview:', data.substring(0, 200));
            
            // Insert navigation after contact bar
            const contactBar = document.querySelector('.contact-bar');
            if (contactBar) {
                contactBar.insertAdjacentHTML('afterend', data);
                console.log('Navigation inserted after contact bar');
                
                // Update debug info
                const debugDiv = document.getElementById('nav-debug');
                if (debugDiv) {
                    debugDiv.style.background = 'green';
                    debugDiv.textContent = 'Navigation loaded successfully!';
                    setTimeout(() => debugDiv.remove(), 3000);
                }
            } else {
                // If no contact bar, insert at the beginning of body
                document.body.insertAdjacentHTML('afterbegin', data);
                console.log('Navigation inserted at beginning of body');
                
                // Update debug info
                const debugDiv = document.getElementById('nav-debug');
                if (debugDiv) {
                    debugDiv.style.background = 'green';
                    debugDiv.textContent = 'Navigation loaded at beginning of body!';
                    setTimeout(() => debugDiv.remove(), 3000);
                }
            }
            
            // Initialize mobile navigation after nav is loaded
            setTimeout(() => {
                initializeMobileNav();
                
                // Force hide contact bar on mobile
                if (window.innerWidth <= 768) {
                    const contactBar = document.querySelector('.contact-bar');
                    if (contactBar) {
                        contactBar.style.display = 'none';
                        contactBar.style.visibility = 'hidden';
                        contactBar.style.height = '0';
                        contactBar.style.padding = '0';
                        contactBar.style.margin = '0';
                        contactBar.style.opacity = '0';
                        contactBar.style.position = 'absolute';
                        contactBar.style.left = '-9999px';
                        contactBar.style.top = '-9999px';
                    }
                }
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
            
            // Final retry with longer delay
            setTimeout(() => {
                const hamburger = document.querySelector('.hamburger');
                const navMenu = document.querySelector('.nav-menu');
                if (!hamburger || !navMenu) {
                    console.log('Elements not found after 500ms, final retry...');
                    initializeMobileNav();
                }
            }, 1000);
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
            // Check if footer already exists to prevent duplicates
            const existingFooter = document.querySelector('footer, .footer');
            if (existingFooter) {
                console.log('Footer already exists, skipping duplicate insertion');
                return;
            }
            
            // Insert footer before closing body tag
            const scriptTag = document.querySelector('script[src="script.js"]');
            if (scriptTag) {
                scriptTag.insertAdjacentHTML('beforebegin', data);
            } else {
                document.body.insertAdjacentHTML('beforeend', data);
            }
            console.log('Footer loaded successfully');
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
        
        // Remove any existing event listeners to prevent duplicates
        hamburger.removeEventListener('click', hamburgerClickHandler);
        hamburger.addEventListener('click', hamburgerClickHandler);
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.removeEventListener('click', closeMobileMenu);
            link.addEventListener('click', closeMobileMenu);
        });

        // Initialize dropdown functionality for mobile
        initializeDropdowns();
        
        // Add window resize listener to handle orientation changes
        window.removeEventListener('resize', handleResize);
        window.addEventListener('resize', handleResize);
        
        // Add touch event support for mobile
        hamburger.addEventListener('touchstart', function(e) {
            e.preventDefault();
            hamburgerClickHandler();
        });
        
        console.log('Mobile navigation initialized successfully');
        
        // Test if elements are visible
        const hamburgerStyle = window.getComputedStyle(hamburger);
        const navMenuStyle = window.getComputedStyle(navMenu);
        console.log('Hamburger display:', hamburgerStyle.display);
        console.log('Nav menu display:', navMenuStyle.display);
        console.log('Nav menu left:', navMenuStyle.left);
        
    } else {
        console.error('Hamburger or nav menu not found!');
        console.log('Available elements with class "hamburger":', document.querySelectorAll('.hamburger'));
        console.log('Available elements with class "nav-menu":', document.querySelectorAll('.nav-menu'));
        
        // Try to find elements again after a short delay
        setTimeout(() => {
            const retryHamburger = document.querySelector('.hamburger');
            const retryNavMenu = document.querySelector('.nav-menu');
            if (retryHamburger && retryNavMenu) {
                console.log('Elements found on retry, initializing...');
                initializeMobileNav();
            }
        }, 100);
    }
}

// Hamburger click handler function
function hamburgerClickHandler() {
    console.log('Hamburger clicked!');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
}

// Close mobile menu function
function closeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Handle window resize
function handleResize() {
    if (window.innerWidth > 768) {
        // On desktop, ensure mobile menu is closed
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
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

// Additional safety check - run initialization after a longer delay as backup
window.addEventListener('load', function() {
    setTimeout(() => {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        if (hamburger && navMenu && !hamburger.hasAttribute('data-initialized')) {
            console.log('Backup initialization on window load...');
            hamburger.setAttribute('data-initialized', 'true');
            initializeMobileNav();
        }
    }, 2000);
    
    // Additional check for mobile devices
    if (window.innerWidth <= 768) {
        console.log('Mobile device detected, ensuring navigation is initialized...');
        setTimeout(() => {
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');
            if (hamburger && navMenu) {
                console.log('Mobile navigation elements found, re-initializing...');
                initializeMobileNav();
            }
        }, 1000);
    }
});

// Debug function to check mobile navigation status
function debugMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const contactBar = document.querySelector('.contact-bar');
    
    console.log('=== Mobile Navigation Debug ===');
    console.log('Contact bar:', contactBar ? 'Found' : 'Not found');
    console.log('Hamburger:', hamburger ? 'Found' : 'Not found');
    console.log('Nav menu:', navMenu ? 'Found' : 'Not found');
    console.log('Window width:', window.innerWidth);
    
    if (hamburger) {
        const style = window.getComputedStyle(hamburger);
        console.log('Hamburger display:', style.display);
        console.log('Hamburger visibility:', style.visibility);
        console.log('Hamburger opacity:', style.opacity);
    }
    
    if (navMenu) {
        const style = window.getComputedStyle(navMenu);
        console.log('Nav menu display:', style.display);
        console.log('Nav menu left:', style.left);
        console.log('Nav menu transform:', style.transform);
    }
    console.log('==============================');
}

// Run debug on mobile devices
if (window.innerWidth <= 768) {
    setTimeout(debugMobileNav, 3000);
} 