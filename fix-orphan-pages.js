// Fix Orphan Pages Script
// This script helps automate the process of adding internal links to orphaned pages

const orphanPageData = {
    // Location pages that need related services sections
    locationPages: [
        'downtown-jacksonville.html',
        'jacksonville-beach.html',
        'orange-park.html',
        'ponte-vedra.html',
        'atlantic-beach.html',
        'st-augustine.html',
        'mandarin.html',
        'lakeside.html',
        'jacksonville.html'
    ],
    
    // Service pages that need related locations sections
    servicePages: [
        'vending-services-jacksonville.html',
        'setting-up-a-micro-market-in-your-jacksonville-office.html',
        'vendingmachine-service.html',
        'smart-coolers.html',
        'top-5-micro-market-kiosks.html',
        'vending-machines-for-gyms.html',
        'vending-machines-for-hotels.html',
        'vending-machines-for-manufacturing.html',
        'vending-machines-for-retail.html',
        'vending-machines-for-hospitals.html',
        'vending-machines-for-schools.html',
        'vending-machines-for-office-buildings.html'
    ],
    
    // Blog/content pages that need navigation integration
    blogPages: [
        'how-to-start-a-vending-machine-business.html',
        'choosing-right-locations-for-your-vending-machines.html',
        'where-to-put-vending-machines-for-maximum-profit.html',
        'best-vending-machine-companies-in-jacksonville.html',
        'jacksonvilles-top-5-vending-machine-companies.html',
        'free-vending-machine-placement-jacksonville-downtown.html',
        'free-vending-machine-placement-jacksonville-orange-park.html',
        'free-vending-machine-placement-jacksonville-ponte-vedra.html',
        'get-a-free-vending-machine-in-jacksonville-florida.html',
        'lost-the-keys-to-my-vending-machine.html',
        'egg-vending-machine.html',
        'social-media-marketing.html'
    ]
};

// Related services for each location
const locationServices = {
    'downtown-jacksonville.html': [
        { name: 'Micro-Markets', url: 'setting-up-a-micro-market-in-your-jacksonville-office.html', icon: 'fas fa-store' },
        { name: 'Coffee Services', url: 'coffeeservices.html', icon: 'fas fa-coffee' },
        { name: 'Office Building Solutions', url: 'vending-machines-for-office-buildings.html', icon: 'fas fa-building' },
        { name: 'Healthcare Vending', url: 'vending-machines-for-hospitals.html', icon: 'fas fa-hospital' },
        { name: 'Hotel Vending', url: 'vending-machines-for-hotels.html', icon: 'fas fa-hotel' },
        { name: 'Vending Machine Service', url: 'vendingmachine-service.html', icon: 'fas fa-tools' }
    ],
    'jacksonville-beach.html': [
        { name: 'Micro-Markets', url: 'setting-up-a-micro-market-in-your-jacksonville-office.html', icon: 'fas fa-store' },
        { name: 'Coffee Services', url: 'coffeeservices.html', icon: 'fas fa-coffee' },
        { name: 'Retail Vending', url: 'vending-machines-for-retail.html', icon: 'fas fa-shopping-cart' },
        { name: 'Hotel Vending', url: 'vending-machines-for-hotels.html', icon: 'fas fa-hotel' },
        { name: 'Smart Coolers', url: 'smart-coolers.html', icon: 'fas fa-snowflake' },
        { name: 'Vending Machine Service', url: 'vendingmachine-service.html', icon: 'fas fa-tools' }
    ],
    'orange-park.html': [
        { name: 'Micro-Markets', url: 'setting-up-a-micro-market-in-your-jacksonville-office.html', icon: 'fas fa-store' },
        { name: 'Coffee Services', url: 'coffeeservices.html', icon: 'fas fa-coffee' },
        { name: 'Manufacturing Vending', url: 'vending-machines-for-manufacturing.html', icon: 'fas fa-industry' },
        { name: 'Office Building Solutions', url: 'vending-machines-for-office-buildings.html', icon: 'fas fa-building' },
        { name: 'Smart Coolers', url: 'smart-coolers.html', icon: 'fas fa-snowflake' },
        { name: 'Vending Machine Service', url: 'vendingmachine-service.html', icon: 'fas fa-tools' }
    ]
    // Add more locations as needed
};

// Related locations for each service
const serviceLocations = {
    'vending-services-jacksonville.html': [
        { name: 'Downtown Jacksonville', url: 'downtown-jacksonville.html' },
        { name: 'Jacksonville Beach', url: 'jacksonville-beach.html' },
        { name: 'Orange Park', url: 'orange-park.html' },
        { name: 'Ponte Vedra', url: 'ponte-vedra.html' },
        { name: 'Atlantic Beach', url: 'atlantic-beach.html' },
        { name: 'St. Augustine', url: 'st-augustine.html' }
    ],
    'setting-up-a-micro-market-in-your-jacksonville-office.html': [
        { name: 'Downtown Jacksonville', url: 'downtown-jacksonville.html' },
        { name: 'Jacksonville Beach', url: 'jacksonville-beach.html' },
        { name: 'Orange Park', url: 'orange-park.html' },
        { name: 'Ponte Vedra', url: 'ponte-vedra.html' }
    ]
    // Add more services as needed
};

// Function to generate related services HTML
function generateRelatedServicesHTML(locationName, services) {
    return `
    <!-- Related Services Section -->
    <section class="related-services">
        <div class="container">
            <h2>Related Vending Services for ${locationName}</h2>
            <p class="section-subtitle">Explore our comprehensive vending solutions designed specifically for ${locationName} businesses</p>
            
            <div class="services-grid">
                ${services.map(service => `
                <div class="service-card">
                    <div class="service-icon">
                        <i class="${service.icon}"></i>
                    </div>
                    <h3>${service.name}</h3>
                    <p>Professional vending solutions tailored for ${locationName} businesses.</p>
                    <a href="${service.url}" class="service-link">Learn More <i class="fas fa-arrow-right"></i></a>
                </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;
}

// Function to generate related locations HTML
function generateRelatedLocationsHTML(serviceName, locations) {
    return `
    <!-- Related Locations Section -->
    <section class="related-locations">
        <div class="container">
            <h2>${serviceName} Available in These Locations</h2>
            <p class="section-subtitle">We provide ${serviceName.toLowerCase()} throughout the Jacksonville area and surrounding communities</p>
            
            <div class="locations-grid">
                ${locations.map(location => `
                <div class="location-card">
                    <div class="location-icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <h3>${location.name}</h3>
                    <p>Professional vending services available in ${location.name}.</p>
                    <a href="${location.url}" class="location-link">Learn More <i class="fas fa-arrow-right"></i></a>
                </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;
}

// Function to generate breadcrumb HTML
function generateBreadcrumbHTML(pageType, pageName) {
    const breadcrumbs = {
        'location': [
            { name: 'Home', url: 'index.html' },
            { name: 'Locations', url: 'locations.html' },
            { name: pageName, url: '#', current: true }
        ],
        'service': [
            { name: 'Home', url: 'index.html' },
            { name: 'Services', url: 'services.html' },
            { name: pageName, url: '#', current: true }
        ],
        'blog': [
            { name: 'Home', url: 'index.html' },
            { name: 'Blog', url: 'blog.html' },
            { name: pageName, url: '#', current: true }
        ]
    };
    
    const breadcrumbData = breadcrumbs[pageType];
    
    return `
    <!-- Breadcrumb Navigation -->
    <section class="breadcrumb-nav">
        <div class="container">
            <nav aria-label="Breadcrumb">
                <ol class="breadcrumb-list">
                    ${breadcrumbData.map((item, index) => `
                    <li class="breadcrumb-item"${item.current ? ' aria-current="page"' : ''}>
                        ${item.current ? item.name : `<a href="${item.url}">${item.name}</a>`}
                    </li>
                    `).join('')}
                </ol>
            </nav>
        </div>
    </section>
    `;
}

// Function to add related content sections to a page
function addRelatedContentToPage(pageType, pageName, pageData) {
    console.log(`Adding related content to ${pageName}...`);
    
    let htmlToAdd = '';
    
    if (pageType === 'location' && locationServices[pageName]) {
        const locationDisplayName = pageName.replace('.html', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        htmlToAdd = generateRelatedServicesHTML(locationDisplayName, locationServices[pageName]);
    } else if (pageType === 'service' && serviceLocations[pageName]) {
        const serviceDisplayName = pageName.replace('.html', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        htmlToAdd = generateRelatedLocationsHTML(serviceDisplayName, serviceLocations[pageName]);
    }
    
    if (htmlToAdd) {
        console.log(`Generated HTML for ${pageName}:`, htmlToAdd);
        return htmlToAdd;
    }
    
    return null;
}

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        orphanPageData,
        locationServices,
        serviceLocations,
        generateRelatedServicesHTML,
        generateRelatedLocationsHTML,
        generateBreadcrumbHTML,
        addRelatedContentToPage
    };
}

console.log('Fix Orphan Pages Script loaded successfully!');
console.log('Use this script to generate HTML for related content sections and breadcrumbs.');
