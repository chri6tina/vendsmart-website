import Link from 'next/link';
import Carousel from '@/components/Carousel';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import BentoServices from '@/components/BentoServices';

export default function Home() {
  return (
    <main>
      <Hero city="Jacksonville" state="FL" />
      <AboutSection city="Jacksonville" state="FL" />
      <Carousel />
      <BentoServices city="Jacksonville" state="FL" />

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container reveal">
          <h2>Ready to Transform Your Vending Experience?</h2>
          <p>Join hundreds of Jacksonville businesses that trust VendSmart for their vending machine needs.</p>
          <div className="cta-buttons">
            <Link href="/get-a-free-vending-machine-in-jacksonville-florida" className="btn btn-secondary">Get Free Machine</Link>
            <Link href="/contact" className="btn btn-outline">Contact Us Today</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
