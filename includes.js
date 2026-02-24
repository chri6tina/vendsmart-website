// ===== MOBILE NAVIGATION FIX =====
// Nav and footer are embedded (no fetch) to prevent page glitching on load

var NAV_HTML = '<nav class="navbar" role="navigation" aria-label="Main navigation"><div class="nav-container"><div class="nav-logo"><a href="/" aria-label="Jacksonville Vending Machines Homepage"><img src="vendsmart-logo-jacksonville-vending.png" alt="Jacksonville Vending Machines - VendSmart Logo" loading="lazy"></a></div><ul class="nav-menu" role="menubar"><li role="none"><a href="/" role="menuitem">Home</a></li><li class="dropdown" role="none"><button class="dropdown-toggle" aria-expanded="false" aria-haspopup="true" role="menuitem">Services <i class="fas fa-chevron-down" aria-hidden="true"></i></button><ul class="dropdown-menu" role="menu" aria-label="Services submenu"><li role="none"><a href="jacksonville-vending-services-landing.html" role="menuitem">Vending Services</a></li><li role="none"><a href="setting-up-a-micro-market-in-your-jacksonville-office.html" role="menuitem">Micro-Markets</a></li><li role="none"><a href="coffeeservices.html" role="menuitem">Coffee Services</a></li><li role="none"><a href="smart-coolers.html" role="menuitem">Smart Coolers</a></li><li class="dropdown-divider" role="separator"></li><li role="none"><a href="services.html" role="menuitem">All Services</a></li></ul></li><li class="dropdown" role="none"><button class="dropdown-toggle" aria-expanded="false" aria-haspopup="true" role="menuitem">Locations <i class="fas fa-chevron-down" aria-hidden="true"></i></button><ul class="dropdown-menu" role="menu" aria-label="Locations submenu"><li role="none"><a href="locations.html" role="menuitem">All Locations</a></li><li class="dropdown-divider" role="separator"></li><li role="none"><a href="jacksonville.html" role="menuitem">Jacksonville</a></li><li role="none"><a href="downtown-jacksonville.html" role="menuitem">Downtown</a></li><li role="none"><a href="jacksonville-beach.html" role="menuitem">Jacksonville Beach</a></li><li role="none"><a href="orange-park.html" role="menuitem">Orange Park</a></li><li role="none"><a href="ponte-vedra.html" role="menuitem">Ponte Vedra</a></li><li role="none"><a href="atlantic-beach.html" role="menuitem">Atlantic Beach</a></li><li role="none"><a href="st-augustine.html" role="menuitem">St. Augustine</a></li><li role="none"><a href="mandarin.html" role="menuitem">Mandarin</a></li><li role="none"><a href="lakeside.html" role="menuitem">Lakeside</a></li><li class="dropdown-divider" role="separator"></li><li role="none"><a href="st-marys.html" role="menuitem">St. Marys, GA</a></li><li role="none"><a href="palm-coast.html" role="menuitem">Palm Coast</a></li><li role="none"><a href="lake-city.html" role="menuitem">Lake City</a></li><li role="none"><a href="yulee.html" role="menuitem">Yulee</a></li><li role="none"><a href="baldwin.html" role="menuitem">Baldwin</a></li><li role="none"><a href="callahan.html" role="menuitem">Callahan</a></li><li role="none"><a href="macclenny.html" role="menuitem">Macclenny</a></li></ul></li><li role="none"><a href="products.html" role="menuitem">Products</a></li><li role="none"><a href="contact.html" class="cta-button" role="menuitem">Contact Us</a></li></ul><div class="nav-phone"><a href="tel:904-456-3851" class="phone-link" aria-label="Call us at 904-456-3851"><i class="fas fa-phone" aria-hidden="true"></i><span>904-456-3851</span></a></div><button class="hamburger" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="nav-menu" type="button"><span class="hamburger-line"></span><span class="hamburger-line"></span><span class="hamburger-line"></span></button></div></nav>';

var FOOTER_HTML = '<footer class="footer"><div class="container"><div class="footer-content"><div class="footer-section"><h3>Jacksonville Vending Machines - VendSmart</h3><p>Jacksonville Vending Machines - Premium vending solutions for Jacksonville, Florida. Smart technology, healthy options, and 24/7 support.</p><p><a href="/" style="color: #00C5F5; text-decoration: none; font-weight: 500;">← Back to Jacksonville Vending Machines Home</a></p><div class="social-links"><a href="https://www.facebook.com/vendsmart" target="_blank" aria-label="Follow us on Facebook"><i class="fab fa-facebook"></i></a><a href="https://www.instagram.com/jacksonvillevendingmachines" target="_blank" aria-label="Follow us on Instagram"><i class="fab fa-instagram"></i></a><a href="https://www.google.com/maps?cid=YOUR_GOOGLE_BUSINESS_ID" target="_blank" aria-label="View our Google Business Profile"><i class="fab fa-google"></i></a><a href="https://www.yelp.com/biz/vendsmart-jacksonville" target="_blank" aria-label="Read our Yelp reviews"><i class="fab fa-yelp"></i></a></div></div><div class="footer-section"><h3>Services</h3><ul><li><a href="services.html">Smart Vending Machines</a></li><li><a href="setting-up-a-micro-market-in-your-jacksonville-office.html">Micro-Markets</a></li><li><a href="coffeeservices.html">Coffee Services</a></li><li><a href="vendingmachine-service.html">Vending Machine Service</a></li><li><a href="smart-coolers.html">Smart Coolers</a></li><li><a href="portfolio.html">Portfolio</a></li><li><a href="top-5-micro-market-kiosks.html">Top 5 Kiosks</a></li><li><a href="vending-machines-for-hospitals.html">Hospital Solutions</a></li><li><a href="vending-machines-for-schools.html">School Solutions</a></li><li><a href="vending-machines-for-office-buildings.html">Office Building Solutions</a></li><li><a href="vending-machines-for-manufacturing.html">Manufacturing Solutions</a></li><li><a href="vending-machines-for-nursing-homes-jacksonville.html">Nursing Home Solutions</a></li><li><a href="vending-machines-for-shopping-malls-jacksonville.html">Shopping Mall Solutions</a></li><li><a href="vending-machines-riverside-jacksonville.html">Riverside Solutions</a></li><li><a href="vending-machines-for-warehouses-jacksonville.html">Warehouse Solutions</a></li><li><a href="vending-machines-for-construction-sites-jacksonville.html">Construction Site Solutions</a></li><li><a href="vending-machines-for-government-buildings-jacksonville.html">Government Building Solutions</a></li><li><a href="vending-machines-for-luxury-apartments-jacksonville.html">Luxury Apartment Solutions</a></li><li><a href="vending-machines-for-luxury-hotels-jacksonville.html">Luxury Hotel Solutions</a></li><li><a href="vending-machines-for-universities-jacksonville.html">University Solutions</a></li><li><a href="vending-machines-for-apartment-complexes-jacksonville.html">Apartment Complex Solutions</a></li></ul></div><div class="footer-section"><h3>Locations</h3><ul><li><a href="jacksonville.html">Jacksonville Overview</a></li><li><a href="downtown-jacksonville.html">Downtown Jacksonville</a></li><li><a href="jacksonville-beach.html">Jacksonville Beach</a></li><li><a href="orange-park.html">Orange Park</a></li><li><a href="ponte-vedra.html">Ponte Vedra</a></li><li><a href="atlantic-beach.html">Atlantic Beach</a></li><li><a href="st-augustine.html">St. Augustine</a></li><li><a href="mandarin.html">Mandarin</a></li><li><a href="lakeside.html">Lakeside</a></li></ul></div><div class="footer-section"><h3>Resources</h3><ul><li><a href="about-us.html">About Us</a></li><li><a href="customer-reviews-jacksonville.html">Customer Reviews</a></li><li><a href="how-we-help-jacksonville.html">How We Help</a></li><li><a href="vending-in-jacksonville-florida.html">Vending in Jacksonville</a></li><li><a href="vending-machine-faq-jacksonville.html">FAQ</a></li><li><a href="vending-machine-pricing-jacksonville.html">Pricing</a></li><li><a href="vending-machine-troubleshooting-jacksonville.html">Troubleshooting</a></li><li><a href="free-vending-machine-placement.html">Free Placement</a></li></ul></div><div class="footer-section"><h3>Contact</h3><p><i class="fas fa-phone"></i> <a href="tel:904-456-3851">904-456-3851</a></p><p><i class="fas fa-envelope"></i> <a href="mailto:vendsmartjacksonville@gmail.com">vendsmartjacksonville@gmail.com</a></p><p><i class="fas fa-map-marker-alt"></i> Jacksonville, Florida & Surrounding Areas</p><p><i class="fas fa-clock"></i> 24/7 Support Available</p><p><i class="fas fa-truck"></i> Free Installation & Delivery</p><p><i class="fas fa-coffee"></i> Coffee Services Available</p></div></div><div class="footer-bottom"><p>&copy; 2024 Jacksonville Vending Machines - VendSmart. All rights reserved. | Premium vending solutions in Jacksonville, Florida and surrounding areas. | <a href="privacy-policy.html">Privacy Policy</a> | <a href="terms-of-service.html">Terms of Service</a></p></div></div></footer>';

function loadNavigation() {
    var existingNav = document.querySelector('nav, .navbar');
    if (existingNav) return;
    var body = document.querySelector('body');
    if (body) {
        body.insertAdjacentHTML('afterbegin', NAV_HTML);
        initializeMobileNavigation();
    }
}

function loadFooter() {
    var existingFooter = document.querySelector('footer, .footer');
    if (existingFooter) return;
    var scriptTag = document.querySelector('script[src*="includes.js"]');
    if (scriptTag) {
        scriptTag.insertAdjacentHTML('beforebegin', FOOTER_HTML);
    } else {
        document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadNavigation();
    loadFooter();
    document.body.classList.add('loaded');
});

(function addLoadedClass() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addLoadedClass);
    } else if (document.body) {
        document.body.classList.add('loaded');
    }
})();

(function immediateNavInit() {
    var existingNav = document.querySelector('.navbar');
    if (existingNav) {
        try {
            initializeMobileNavigation();
        } catch (e) {}
    }
})();

function initializeMobileNavigation() {
    var hamburger = document.querySelector('.hamburger');
    var navMenu = document.querySelector('.nav-menu');
    if (!hamburger || !navMenu) return;
    if (hamburger.getAttribute('data-mobile-nav-initialized') === 'true') return;
    hamburger.setAttribute('data-mobile-nav-initialized', 'true');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        var isExpanded = navMenu.classList.contains('active');
        this.setAttribute('aria-expanded', isExpanded);
        document.body.style.overflow = isExpanded ? 'hidden' : '';
    });

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar') && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });

    var navLinks = navMenu.querySelectorAll('a');
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    }

    var dropdownToggles = navMenu.querySelectorAll('.dropdown-toggle');
    for (var j = 0; j < dropdownToggles.length; j++) {
        dropdownToggles[j].addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            var dropdown = this.parentElement;
            var isActive = dropdown.classList.contains('active');
            var dropdowns = navMenu.querySelectorAll('.dropdown');
            for (var k = 0; k < dropdowns.length; k++) {
                if (dropdowns[k] !== dropdown) dropdowns[k].classList.remove('active');
            }
            dropdown.classList.toggle('active');
            this.setAttribute('aria-expanded', !isActive);
        });
    }
}
