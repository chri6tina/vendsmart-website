import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Jacksonville Vending Machines - VendSmart</h3>
            <p>Premium vending solutions for Jacksonville, Florida. Smart technology, healthy options, and 24/7 support.</p>
            <p><Link href="/" style={{ color: '#00C5F5', textDecoration: 'none', fontWeight: 500 }}>← Back to Jacksonville Vending Machines Home</Link></p>
            <div className="social-links">
              <a href="https://www.facebook.com/vendsmart" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook"><i className="fab fa-facebook"></i></a>
              <a href="https://www.instagram.com/jacksonvillevendingmachines" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram"><i className="fab fa-instagram"></i></a>
              <a href="https://www.google.com/maps?cid=YOUR_GOOGLE_BUSINESS_ID" target="_blank" rel="noopener noreferrer" aria-label="View our Google Business Profile"><i className="fab fa-google"></i></a>
              <a href="https://www.yelp.com/biz/vendsmart-jacksonville" target="_blank" rel="noopener noreferrer" aria-label="Read our Yelp reviews"><i className="fab fa-yelp"></i></a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><Link href="/services">Smart Vending Machines</Link></li>
              <li><Link href="/setting-up-a-micro-market-in-your-jacksonville-office">Micro-Markets</Link></li>
              <li><Link href="/coffeeservices">Coffee Services</Link></li>
              <li><Link href="/vendingmachine-service">Vending Machine Service</Link></li>
              <li><Link href="/smart-coolers">Smart Coolers</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Locations</h3>
            <ul>
              <li><Link href="/jacksonville">Jacksonville Overview</Link></li>
              <li><Link href="/downtown-jacksonville">Downtown Jacksonville</Link></li>
              <li><Link href="/jacksonville-beach">Jacksonville Beach</Link></li>
              <li><Link href="/orange-park">Orange Park</Link></li>
              <li><Link href="/ponte-vedra">Ponte Vedra</Link></li>
              <li><Link href="/atlantic-beach">Atlantic Beach</Link></li>
              <li><Link href="/st-augustine">St. Augustine</Link></li>
              <li><Link href="/mandarin">Mandarin</Link></li>
              <li><Link href="/lakeside">Lakeside</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/customer-reviews-jacksonville">Customer Reviews</Link></li>
              <li><Link href="/how-we-help-jacksonville">How We Help</Link></li>
              <li><Link href="/vending-in-jacksonville-florida">Vending in Jacksonville</Link></li>
              <li><Link href="/vending-machine-faq-jacksonville">FAQ</Link></li>
              <li><Link href="/free-vending-machine-placement">Free Placement</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p><i className="fas fa-phone"></i> <a href="tel:904-456-3851">904-456-3851</a></p>
            <p><i className="fas fa-envelope"></i> <a href="mailto:vendsmartjacksonville@gmail.com">vendsmartjacksonville@gmail.com</a></p>
            <p><i className="fas fa-map-marker-alt"></i> Jacksonville, Florida & Surrounding Areas</p>
            <p><i className="fas fa-clock"></i> 24/7 Support Available</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Jacksonville Vending Machines - VendSmart. All rights reserved. | <Link href="/privacy-policy">Privacy Policy</Link> | <Link href="/terms-of-service">Terms of Service</Link></p>
        </div>
      </div>
    </footer>
  );
}
