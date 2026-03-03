import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Jacksonville Vending Machines | Best Vending Company in Jacksonville FL | VendSmart',
  description: 'Jacksonville Vending Machines - Best vending company in Jacksonville FL. Smart vending machines, micro-markets, coffee services & fresh food solutions. Free placement, 24/7 support.',
  keywords: 'Jacksonville Vending Machines, vending company Jacksonville FL, micro markets Florida, smart vending',
  openGraph: { url: 'https://jacksonvillevendingmachines.com' },
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
