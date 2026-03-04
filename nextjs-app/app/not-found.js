import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="not-found-section">
      <div className="container">
        <div className="not-found">
          <h1>404</h1>
          <p>Page not found.</p>
          <p className="not-found-subtitle">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
          <div className="not-found-links">
            <Link href="/" className="btn btn-primary">Back to Home</Link>
            <Link href="/locations" className="btn btn-outline">View Locations</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
