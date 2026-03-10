'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';

export default function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      // 1. Send to Telegram API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company,
          employees: data.employees,
          zipcode: data.zipcode,
          source: 'Contact Page Form',
          message: data.message
        }),
      });

      // 2. Fallback to Formspree for dual-delivery (optional, but requested on form action previously)
      await fetch('https://formspree.io/f/mwplbjpz', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

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

              {status === 'success' && (
                <div style={{ background: '#dcfce7', color: '#166534', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                  ✅ Thank you! Your request has been sent successfully. We will contact you soon.
                </div>
              )}

              {status === 'error' && (
                <div style={{ background: '#fee2e2', color: '#991b1b', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                  ❌ Something went wrong sending your message. Please try calling us instead.
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" required disabled={status === 'submitting'} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" required disabled={status === 'submitting'} />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" disabled={status === 'submitting'} />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company Name *</label>
                  <input type="text" id="company" name="company" required disabled={status === 'submitting'} />
                </div>
                <div className="form-group">
                  <label htmlFor="employees">Number of Employees *</label>
                  <select id="employees" name="employees" required disabled={status === 'submitting'}>
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
                  <input type="text" id="zipcode" name="zipcode" required placeholder="32202" pattern="[0-9]{5}" maxLength={5} disabled={status === 'submitting'} />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" rows={5} required placeholder="Tell us about your vending needs..." disabled={status === 'submitting'} />
                </div>
                <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending...' : 'Request Placement'}
                </button>
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
