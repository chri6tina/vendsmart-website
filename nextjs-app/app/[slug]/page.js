import Link from 'next/link';
import { getAllSlugs, getPage } from '@/data/pages';
import Hero from '@/components/Hero';

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) return { title: 'Page Not Found' };
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `https://jacksonvillevendingmachines.com/${slug}` },
  };
}

export default async function SlugPage({ params }) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) return null;

  return (
    <>
      <Hero
        title={page.title}
        subtitle={page.description}
        features={[
          { text: 'Free Machine Placement', icon: 'fa-check-circle' },
          { text: '24/7 Support', icon: 'fa-check-circle' },
          { text: 'Smart Technology', icon: 'fa-check-circle' },
        ]}
      />
      {page.content ? (
        <section className="page-content container" style={{ padding: '2rem 1rem', maxWidth: 1200, margin: '0 auto' }}>
          <div dangerouslySetInnerHTML={{ __html: page.content }} />
        </section>
      ) : (
        <section className="page-content container" style={{ padding: '2rem 1rem', maxWidth: 1200, margin: '0 auto' }}>
          <p>{page.description}</p>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/get-a-free-vending-machine-in-jacksonville-florida" className="btn btn-primary">Get Free Machine</Link>
            <Link href="/contact" className="btn btn-secondary" style={{ marginLeft: '1rem' }}>Contact Us</Link>
          </div>
        </section>
      )}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Contact VendSmart for free vending machine placement in Jacksonville and surrounding areas.</p>
          <div className="cta-buttons">
            <Link href="/get-a-free-vending-machine-in-jacksonville-florida" className="btn btn-secondary">Get Free Machine</Link>
            <Link href="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
