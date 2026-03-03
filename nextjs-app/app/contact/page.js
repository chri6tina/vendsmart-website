import Hero from '@/components/Hero';

export const metadata = {
  title: 'Contact Us | Jacksonville Vending Machines | VendSmart',
  description: 'Contact Jacksonville vending machine company VendSmart. Free quotes, 24/7 support. Call 904-456-3851 or request quote online.',
};

export default function Contact() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Get in touch with VendSmart for all your vending needs in Jacksonville"
        features={[
          { text: '24/7 Support', icon: 'fa-clock' },
          { text: 'Free Quotes', icon: 'fa-check-circle' },
          { text: 'Local Expertise', icon: 'fa-map-marker-alt' },
        ]}
      />
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-container">
              <h2>Request Vending Machine Placement</h2>
              <p>Fill out the form below to request vending machine placement at your location. We&apos;ll get back to you within 24 hours.</p>
              <form className="contact-form" action="https://formspree.io/f/mwplbjpz" method="POST">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company Name *</label>
                  <input type="text" id="company" name="company" required />
                </div>
                <div className="form-group">
                  <label htmlFor="employees">Number of Employees *</label>
                  <select id="employees" name="employees" required>
                    <option value="">Select employee count</option>
                    <option value="1-50">1-50 employees</option>
                    <option value="50-100">50-100 employees</option>
                    <option value="100-250">100-250 employees</option>
                    <option value="250-500">250-500 employees</option>
                    <option value="1000+">1000+ employees</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="zipcode">Zip Code *</label>
                  <input type="text" id="zipcode" name="zipcode" required placeholder="32202" pattern="[0-9]{5}" maxLength={5} />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" rows={5} required placeholder="Tell us about your vending needs..." />
                </div>
                <button type="submit" className="btn btn-primary">Request Placement</button>
              </form>
            </div>
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p><i className="fas fa-phone"></i> <a href="tel:904-456-3851">904-456-3851</a></p>
              <p><i className="fas fa-envelope"></i> <a href="mailto:vendsmartjacksonville@gmail.com">vendsmartjacksonville@gmail.com</a></p>
              <p><i className="fas fa-map-marker-alt"></i> Jacksonville, Florida & Surrounding Areas</p>
              <p><i className="fas fa-clock"></i> 24/7 Support Available</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
