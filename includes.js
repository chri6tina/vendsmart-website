// ===== MOBILE NAVIGATION FIX =====

// Load navigation
function loadNavigation() {
    fetch('nav.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            // Check if navigation already exists to prevent duplicates
            const existingNav = document.querySelector('nav, .navbar');
            if (existingNav) {
                console.log('Navigation already exists, skipping duplicate insertion');
                return;
            }
            
            // Insert navigation after opening body tag
            const body = document.querySelector('body');
            if (body) {
                body.insertAdjacentHTML('afterbegin', data);
                console.log('Navigation loaded successfully');
                
                // Initialize mobile navigation after navigation is loaded
                setTimeout(() => {
                    initializeMobileNavigation();
                }, 100);
            }
        })
        .catch(error => {
            console.error('Error loading navigation:', error);
            // Don't let navigation errors break the entire site
        });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadNavigation();
    loadFooter();
    // Don't initialize mobile navigation here - wait for navigation to load
});

// Initialize mobile navigation for existing navbar
function initializeMobileNavigation() {
    console.log('Initializing mobile navigation...');
    
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!hamburger || !navMenu) {
        console.log('Mobile navigation elements not found');
        return;
    }
    
    // Add click event to hamburger button
    hamburger.addEventListener('click', function() {
        console.log('Hamburger clicked');
        
        // Toggle active class on hamburger
        this.classList.toggle('active');
        
        // Toggle active class on nav menu
        navMenu.classList.toggle('active');
        
        // Toggle aria-expanded attribute
        const isExpanded = navMenu.classList.contains('active');
        this.setAttribute('aria-expanded', isExpanded);
        
        // Prevent body scroll when menu is open
        if (isExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        
        console.log('Mobile menu toggled:', isExpanded);
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar') && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });
    
    // Handle dropdown functionality on mobile
    const dropdownToggles = navMenu.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const dropdown = this.parentElement;
            const isActive = dropdown.classList.contains('active');
            
            // Close all other dropdowns
            navMenu.querySelectorAll('.dropdown').forEach(d => {
                if (d !== dropdown) {
                    d.classList.remove('active');
                }
            });
            
            // Toggle current dropdown
            dropdown.classList.toggle('active');
            
            // Update aria-expanded
            this.setAttribute('aria-expanded', !isActive);
        });
    });
    
    console.log('Mobile navigation initialized successfully');
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

// Location cards use existing area-card-link pattern - no custom JavaScript needed 