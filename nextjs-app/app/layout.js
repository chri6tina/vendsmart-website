import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Jacksonville Vending Machines | Best Vending Company in Jacksonville FL | VendSmart',
  description: 'Jacksonville Vending Machines - Best vending company in Jacksonville FL. Smart vending machines, micro-markets, coffee services & fresh food solutions. Free placement, 24/7 support.',
  keywords: 'Jacksonville Vending Machines, vending company Jacksonville FL, micro markets Florida, smart vending',
  openGraph: { url: 'https://jacksonvillevendingmachines.com' },
  alternates: { canonical: 'https://jacksonvillevendingmachines.com/' },
  icons: { icon: '/favicon.ico' },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'VendSmart Jacksonville',
  description: 'Jacksonville vending machines, micro-markets, and coffee services. Free placement for qualified businesses.',
  url: 'https://jacksonvillevendingmachines.com',
  telephone: '904-456-3851',
  email: 'vendsmartjacksonville@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jacksonville',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  areaServed: 'Jacksonville, FL and surrounding areas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="/blog-styles.css" />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
