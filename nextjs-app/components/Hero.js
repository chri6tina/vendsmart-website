'use client';

import { useState } from 'react';

export default function Hero({
  city = "Jacksonville",
  state = "FL",
  title,
  subtitle
}) {
  const [status, setStatus] = useState(null);

  // Use a default background image, or let it be passed as a prop later if needed
  const bgImage = "/jacksonville-vending-micro-market.jpg";

  const displayTitle = title ? title : (
    <>{city} Vending Machines | <span className="text-gradient-primary">Best Vending Company</span> in {city} {state}</>
  );

  const displaySubtitle = subtitle ? subtitle : `Smart vending machines, micro-markets, and coffee services with free placement for qualified businesses. Serving ${city} and surrounding areas with cutting-edge technology and exceptional service.`;

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
          phone: data.phone || 'N/A', // Add phone if added to hero, else N/A
          company: data.business_name,
          employees: data.employees,
          serviceType: data.service_type,
          source: data.source,
          message: 'Lead captured directly from the Hero Section form.'
        }),
      });

      // 2. Fallback to Formspree for dual-delivery
      await fetch('https://formspree.io/f/mqkenwnv', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
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
    <section className="hero bg-mesh">
      <div className="hero-background">
        <img src={bgImage} alt={`${city} Vending Machines Background`} className="hero-bg-image" />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-container">
        {/* Typography Side */}
        <div className="hero-content reveal">
          <h1 className="text-gradient">
            {displayTitle}
          </h1>
          <p className="hero-subtitle reveal reveal-delay-1">
            {displaySubtitle}
          </p>

          <div className="hero-features reveal reveal-delay-2">
            <div className="hero-feature">
              <i className="fas fa-check"></i>
              <span>Free Machine Placement</span>
            </div>
            <div className="hero-feature">
              <i className="fas fa-check"></i>
              <span>24/7 Support</span>
            </div>
            <div className="hero-feature">
              <i className="fas fa-check"></i>
              <span>Smart Technology</span>
            </div>
          </div>
        </div>

        {/* Hero Lead Form Side */}
        <div className="hero-image-wrapper reveal reveal-delay-2">
          <div className="hero-glow-orb"></div>
          <div className="hero-form-container">
            <div className="hero-form-header">
              <h3>Get a Free Machine</h3>
              <p>Fill out the form below to see if your business qualifies for a free vending machine placement.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="source" value={`${city} Hero Form`} />

              {status === 'success' && (
                <div style={{ background: '#dcfce7', color: '#166534', padding: '12px', borderRadius: '6px', marginBottom: '1rem', fontSize: '0.9rem', fontWeight: 'bold' }}>
                  ✅ Request received! We will be in touch shortly.
                </div>
              )}

              {status === 'error' && (
                <div style={{ background: '#fee2e2', color: '#991b1b', padding: '12px', borderRadius: '6px', marginBottom: '1rem', fontSize: '0.9rem', fontWeight: 'bold' }}>
                  ❌ Could not send. Please contact us directly.
                </div>
              )}

              <div className="form-group">
                <div className="input-icon-wrapper">
                  <i className="fas fa-user input-icon"></i>
                  <input type="text" name="name" className="form-control" placeholder="Your Name" required disabled={status === 'submitting'} />
                </div>
              </div>
              <div className="form-group">
                <div className="input-icon-wrapper">
                  <i className="fas fa-envelope input-icon"></i>
                  <input type="email" name="email" className="form-control" placeholder="Email Address" required disabled={status === 'submitting'} />
                </div>
              </div>
              <div className="form-group">
                <div className="input-icon-wrapper">
                  <i className="fas fa-building input-icon"></i>
                  <input type="text" name="business_name" className="form-control" placeholder="Business Name" required disabled={status === 'submitting'} />
                </div>
              </div>
              <div className="form-group">
                <div className="input-icon-wrapper">
                  <i className="fas fa-users input-icon"></i>
                  <select name="employees" className="form-control" required style={{ appearance: 'none' }} defaultValue="" disabled={status === 'submitting'}>
                    <option value="" disabled>Number of Employees</option>
                    <option value="1-50">1 - 50 Employees</option>
                    <option value="51-100">51 - 100 Employees</option>
                    <option value="100+">100+ Employees</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <div className="input-icon-wrapper">
                  <i className="fas fa-cogs input-icon"></i>
                  <select name="service_type" className="form-control" required style={{ appearance: 'none' }} defaultValue="" disabled={status === 'submitting'}>
                    <option value="" disabled>Type of Service Needed</option>
                    <option value="Vending Machines">Vending Machines</option>
                    <option value="Micro-Markets">Micro-Markets</option>
                    <option value="Coffee Services">Coffee Services</option>
                    <option value="All of the above">All of the Above</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-block pulse-cta" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending...' : 'Request Free Placement'} <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
              </button>
              <div className="hero-social-proof">
                <span className="stars">★★★★★</span> Trusted by 50+ {city} Businesses
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
