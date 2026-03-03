import Link from 'next/link';
import Hero from '@/components/Hero';

export const metadata = {
  title: 'About Us | Jacksonville Vending Machines | VendSmart',
  description: 'Learn about VendSmart, Jacksonville\'s premier vending machine company. 20+ years experience, 500+ machines installed, 24/7 support.',
};

export default function AboutUs() {
  return (
    <>
      <Hero
        title="Jacksonville Vending Machines - About Us"
        subtitle="Learn about VendSmart, Jacksonville's premier vending machine company. 20+ years of experience, 500+ machines installed, and 24/7 support."
        features={[
          { text: '20+ Years Experience', icon: 'fa-calendar-alt' },
          { text: '500+ Machines Installed', icon: 'fa-robot' },
          { text: '24/7 Support', icon: 'fa-clock' },
        ]}
      />
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Jacksonville Vending Machines - VendSmart</h2>
              <p>Jacksonville Vending Machines by VendSmart is a leading vending machine company serving Jacksonville, Florida and the surrounding areas. We specialize in providing comprehensive vending solutions including smart vending machines, micro-markets, fresh food options, snacks, energy drinks, coffee services, and customized markets tailored to your specific needs.</p>
              <p>Our mission is to revolutionize the vending experience by combining cutting-edge technology with exceptional service. We understand that every business has unique requirements, which is why we offer customized vending solutions that enhance your workplace environment and provide convenient access to quality food and beverages.</p>
              <p>With years of experience in the vending industry, our team of professionals is committed to delivering reliable, innovative, and customer-focused vending services.</p>
              <Link href="/contact" className="btn btn-primary">Contact Us</Link>
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
    </>
  );
}
