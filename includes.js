// Global Navigation and Footer Include Script
document.addEventListener('DOMContentLoaded', function() {
    // Load navigation
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            // Insert navigation after contact bar
            const contactBar = document.querySelector('.contact-bar');
            if (contactBar) {
                contactBar.insertAdjacentHTML('afterend', data);
            } else {
                // If no contact bar, insert at the beginning of body
                document.body.insertAdjacentHTML('afterbegin', data);
            }
            
            // Initialize mobile navigation after nav is loaded
            initializeMobileNav();
        })
        .catch(error => console.error('Error loading navigation:', error));

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
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
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
    }
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