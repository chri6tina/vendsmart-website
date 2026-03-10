import Link from 'next/link';
import { LOCATION_PAGES } from '@/data/locations';
import Hero from '@/components/Hero';

export const metadata = {
  title: 'Vending Machine Locations - Jacksonville & Surrounding Areas | VendSmart',
  description: 'Vending machines and micro-markets in Jacksonville, Jacksonville Beach, Orange Park, Ponte Vedra, St. Augustine, Mandarin, Lakeside, and surrounding areas. Free placement for qualified businesses.',
};

export default function LocationsPage() {
  return (
    <>
      <Hero
        title={<>Vending Machine <span className="text-gradient-primary">Locations</span></>}
        subtitle="Smart vending machines and micro-markets throughout Jacksonville, Florida and surrounding areas. Free placement for qualified businesses."
      />

      <section className="about-section locations-areas">
        <div className="container">
          <div className="section-header">
            <h2>Our Service Areas</h2>
            <p className="section-subtitle">
              Click any location to learn about vending machines and micro-markets in that area.
            </p>
          </div>
          <div className="areas-grid">
            {LOCATION_PAGES.map(({ slug, label }) => (
              <Link key={slug} href={`/${slug}`} className="area-card-link">
                <div className="area-card">
                  <h3>{label}</h3>
                  <p>Vending machines & micro-markets in {label}</p>
                  <span className="learn-more">View {label} <i className="fas fa-arrow-right"></i></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get a Free Vending Machine?</h2>
          <p>Contact VendSmart for free placement in Jacksonville and surrounding areas.</p>
          <div className="cta-buttons">
            <Link href="/get-a-free-vending-machine-in-jacksonville-florida" className="btn btn-secondary">Get Free Machine</Link>
            <Link href="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
