'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { LOCATION_PAGES } from '@/data/locations';

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const pathname = usePathname();

  // Close all mobile menus and dropdowns when the route changes
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setLocationsOpen(false);
  }, [pathname]);

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <Link href="/" aria-label="Jacksonville Vending Machines Homepage">
            <img src="/vendsmart-logo-jacksonville-vending.png" alt="Jacksonville Vending Machines - VendSmart Logo" loading="lazy" width={180} height={50} />
          </Link>
        </div>

        <ul className={`nav-menu ${mobileOpen ? 'active' : ''}`} role="menubar">
          <li role="none"><Link href="/" role="menuitem">Home</Link></li>

          <li className={`dropdown ${servicesOpen ? 'active' : ''}`} role="none">
            <button className="dropdown-toggle" aria-expanded={servicesOpen} aria-haspopup="true" role="menuitem" onClick={() => { setServicesOpen(!servicesOpen); setLocationsOpen(false); }}>
              Services <i className="fas fa-chevron-down" aria-hidden="true"></i>
            </button>
            <ul className="dropdown-menu" role="menu" aria-label="Services submenu">
              <li role="none"><Link href="/vending-services-jacksonville" role="menuitem">Vending Services</Link></li>
              <li role="none"><Link href="/setting-up-a-micro-market-in-your-jacksonville-office" role="menuitem">Micro-Markets</Link></li>
              <li role="none"><Link href="/coffeeservices" role="menuitem">Coffee Services</Link></li>
              <li role="none"><Link href="/smart-coolers" role="menuitem">Smart Coolers</Link></li>
              <li className="dropdown-divider" role="separator"></li>
              <li role="none"><Link href="/services" role="menuitem">All Services</Link></li>
            </ul>
          </li>

          <li className={`dropdown ${locationsOpen ? 'active' : ''}`} role="none">
            <button className="dropdown-toggle" aria-expanded={locationsOpen} aria-haspopup="true" role="menuitem" onClick={() => { setLocationsOpen(!locationsOpen); setServicesOpen(false); }}>
              Locations <i className="fas fa-chevron-down" aria-hidden="true"></i>
            </button>
            <ul className="dropdown-menu" role="menu" aria-label="Locations submenu">
              <li role="none"><Link href="/jacksonville" role="menuitem">Jacksonville</Link></li>
              <li role="none"><Link href="/jacksonville-beach" role="menuitem">Jacksonville Beach</Link></li>
              <li role="none"><Link href="/orange-park" role="menuitem">Orange Park</Link></li>
              <li role="none"><Link href="/ponte-vedra" role="menuitem">Ponte Vedra</Link></li>
              <li role="none"><Link href="/atlantic-beach" role="menuitem">Atlantic Beach</Link></li>
              <li role="none"><Link href="/st-augustine" role="menuitem">St. Augustine</Link></li>
              <li className="dropdown-divider" role="separator"></li>
              <li role="none"><Link href="/locations" role="menuitem" style={{ fontWeight: '600', color: 'var(--primary-dark)' }}>View All Locations →</Link></li>
            </ul>
          </li>

          <li role="none"><Link href="/products" role="menuitem">Products</Link></li>
          <li role="none"><Link href="/contact" className="cta-button" role="menuitem">Contact Us</Link></li>
        </ul>

        <div className="nav-phone">
          <a href="tel:904-456-3851" className="phone-link" aria-label="Call us at 904-456-3851">
            <i className="fas fa-phone" aria-hidden="true"></i>
            <span>904-456-3851</span>
          </a>
        </div>

        <button className={`hamburger ${mobileOpen ? 'active' : ''}`} aria-label="Toggle navigation menu" aria-expanded={mobileOpen} aria-controls="nav-menu" type="button" onClick={() => setMobileOpen(!mobileOpen)}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </nav>
  );
}
