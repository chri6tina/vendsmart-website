// Mobile Navigation Toggle - REMOVED (handled by includes.js)
// This was causing conflicts with the navigation loaded by includes.js

// Smooth scrolling for anchor links (only for same-page anchors)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Only handle same-page anchor links with valid IDs (not just "#")
        if (href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
        // For links with just "#", don't prevent default - let them behave normally
    });
});

// Comprehensive button functionality fix
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing button functionality...');
    
    // Function to ensure buttons work
    function initializeButtons() {
        const allButtons = document.querySelectorAll('.btn, .cta-button, button');
        console.log(`Found ${allButtons.length} buttons to initialize`);
        
        allButtons.forEach((button, index) => {
            // Ensure button is clickable
            button.style.pointerEvents = 'auto';
            button.style.cursor = 'pointer';
            button.style.position = 'relative';
            button.style.zIndex = '1';
            
            // Add click event listener if it doesn't have one
            if (!button.hasAttribute('data-initialized')) {
                button.setAttribute('data-initialized', 'true');
                
                button.addEventListener('click', function(event) {
                    console.log(`Button ${index + 1} clicked:`, this.textContent.trim());
                    
                    // For anchor buttons, ensure navigation works
                    if (this.tagName === 'A') {
                        const href = this.getAttribute('href');
                        if (href && href !== '#' && !href.startsWith('javascript:')) {
                            console.log('Navigating to:', href);
                            // Let the browser handle navigation
                            return true;
                        }
                    }
                    
                    // For other buttons, prevent default if no href
                    if (this.tagName === 'A' && (!this.getAttribute('href') || this.getAttribute('href') === '#')) {
                        event.preventDefault();
                        console.log('Prevented default for button without href');
                        return false;
                    }
                    
                    return true;
                }, true);
            }
        });
    }
    
    // Initialize buttons immediately
    initializeButtons();
    
    // Re-initialize buttons after a delay to catch any dynamically loaded content
    setTimeout(initializeButtons, 1000);
    setTimeout(initializeButtons, 3000);
    
    // Also initialize when navigation is loaded (if using includes.js)
    if (typeof window !== 'undefined') {
        window.addEventListener('navigationLoaded', initializeButtons);
    }
});

// Global function to fix button issues
function fixButtonIssues() {
    const allButtons = document.querySelectorAll('.btn, .cta-button, button');
    allButtons.forEach(button => {
        button.style.pointerEvents = 'auto';
        button.style.cursor = 'pointer';
        button.style.position = 'relative';
        button.style.zIndex = '1';
    });
}

// Run the fix function
setTimeout(fixButtonIssues, 500);

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.service-card, .feature, .area-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Form validation for contact forms
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ef4444';
            isValid = false;
        } else {
            input.style.borderColor = '#d1d5db';
        }
    });
    
    return isValid;
}

// Add form validation to all forms
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!validateForm(this)) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    });
});

// Loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Removed loading class addition that was causing issues

// Service area hover effects
document.addEventListener('DOMContentLoaded', function() {
    const areaCards = document.querySelectorAll('.area-card');
    areaCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Counter animation for statistics (if any)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Initialize counters when they come into view
const counterObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const finalValue = parseInt(target.getAttribute('data-target'));
            animateCounter(target, finalValue);
            counterObserver.unobserve(target);
        }
    });
}, { threshold: 0.5 });

// Observe counter elements
document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('[data-target]');
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
});

// Back to top button
function createBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'back-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--primary-green);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        font-size: 1.2rem;
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    button.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize back to top button - TEMPORARILY DISABLED
// document.addEventListener('DOMContentLoaded', createBackToTopButton);

// Mobile menu CSS is now handled in the main styles.css file 