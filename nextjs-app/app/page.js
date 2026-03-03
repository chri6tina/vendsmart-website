import Link from 'next/link';
import Carousel from '@/components/Carousel';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img src="/jacksonville-vending-micro-market.jpg" alt="Jacksonville Vending Machines - Micro-market with fresh food and beverages" className="hero-bg-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <h1>Jacksonville Vending Machines | Best Vending Company in Jacksonville FL</h1>
            <p className="hero-subtitle">Smart vending machines, micro-markets, and coffee services with free placement for qualified businesses. Serving Jacksonville and surrounding areas with cutting-edge technology and exceptional service.</p>
            <div className="hero-features">
              <div className="hero-feature">
                <i className="fas fa-check-circle"></i>
                <span>Free Machine Placement</span>
              </div>
              <div className="hero-feature">
                <i className="fas fa-check-circle"></i>
                <span>24/7 Support</span>
              </div>
              <div className="hero-feature">
                <i className="fas fa-check-circle"></i>
                <span>Smart Technology</span>
              </div>
            </div>
            <div className="hero-buttons">
              <Link href="/get-a-free-vending-machine-in-jacksonville-florida" className="btn btn-primary">Get Free Machine</Link>
              <Link href="/contact" className="btn btn-secondary">Request Quote</Link>
            </div>
            <div className="hero-links">
              <p>Popular services: <Link href="/coffeeservices">Jacksonville Coffee Services</Link> | <Link href="/setting-up-a-micro-market-in-your-jacksonville-office">Micro-Markets</Link> | <Link href="/locations">Jacksonville Locations</Link></p>
            </div>
          </div>
        </div>
      </section>

      <Carousel />

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Jacksonville Vending Machines - VendSmart</h2>
              <p>Jacksonville Vending Machines by VendSmart is a leading vending machine company serving Jacksonville, Florida and the surrounding areas. We specialize in providing comprehensive vending solutions including smart vending machines, micro-markets, fresh food options, snacks, energy drinks, coffee services, and customized markets tailored to your specific needs.</p>
              <p>Our mission is to revolutionize the vending experience by combining cutting-edge technology with exceptional service. We understand that every business has unique requirements, which is why we offer customized vending solutions that enhance your workplace environment and provide convenient access to quality food and beverages.</p>
              <p>With years of experience in the vending industry, our team of professionals is committed to delivering reliable, innovative, and customer-focused vending services.</p>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <h3>500+</h3>
                <p>Machines Installed</p>
              </div>
              <div className="stat-item">
                <h3>24/7</h3>
                <p>Support Available</p>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>Businesses Served</p>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <p>Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <div className="section-header">
            <h2>Jacksonville Vending Machines - Premier Vending Solutions</h2>
            <p className="section-subtitle">Transform your workplace with cutting-edge vending technology and exceptional service.</p>
          </div>
          <div className="services-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Machines Installed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Businesses Served</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Free Installation</div>
            </div>
          </div>
          <div className="services-grid">
            <Link href="/vending-services-jacksonville" className="service-card-link">
              <div className="service-card featured">
                <div className="service-icon"><i className="fas fa-robot"></i></div>
                <h3>Vending Services</h3>
                <p>Comprehensive vending services throughout Jacksonville FL. Smart vending machines, micro-markets, coffee services & fresh food solutions.</p>
                <ul className="service-features">
                  <li>Contactless payment systems</li>
                  <li>Real-time sales analytics</li>
                  <li>Energy-efficient operation</li>
                  <li>Advanced security features</li>
                </ul>
                <div className="service-cta">
                  <span className="learn-more">Vending Services <i className="fas fa-arrow-right"></i></span>
                </div>
              </div>
            </Link>
            <Link href="/setting-up-a-micro-market-in-your-jacksonville-office" className="service-card-link">
              <div className="service-card">
                <div className="service-icon"><i className="fas fa-store"></i></div>
                <h3>Micro-Markets</h3>
                <p>Transform your break room into a modern convenience store with fresh food, healthy options, and seamless self-checkout.</p>
                <ul className="service-features">
                  <li>Fresh food & healthy options</li>
                  <li>Self-checkout convenience</li>
                  <li>Mobile app integration</li>
                  <li>Customized product mix</li>
                </ul>
                <div className="service-cta">
                  <span className="learn-more">Discover Micro-Markets <i className="fas fa-arrow-right"></i></span>
                </div>
              </div>
            </Link>
            <Link href="/coffeeservices" className="service-card-link">
              <div className="service-card">
                <div className="service-icon"><i className="fas fa-coffee"></i></div>
                <h3>Coffee Services</h3>
                <p>Elevate your workplace with premium coffee solutions from single-serve convenience to barista-quality espresso.</p>
                <ul className="service-features">
                  <li>Premium coffee machines</li>
                  <li>Specialty beverage options</li>
                  <li>Regular maintenance included</li>
                  <li>Quick setup & installation</li>
                </ul>
                <div className="service-cta">
                  <span className="learn-more">Get Coffee Services <i className="fas fa-arrow-right"></i></span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Vending Experience?</h2>
          <p>Join hundreds of Jacksonville businesses that trust VendSmart for their vending machine needs.</p>
          <div className="cta-buttons">
            <Link href="/get-a-free-vending-machine-in-jacksonville-florida" className="btn btn-secondary">Get Free Machine</Link>
            <Link href="/contact" className="btn btn-outline">Contact Us Today</Link>
          </div>
        </div>
      </section>
    </>
  );
}
