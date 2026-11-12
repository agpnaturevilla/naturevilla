import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://agpnaturevilla.com/'),
  title: {
    default: 'Luxurious Private Pool Villa in Udaipur | AGP Nature Villa | Near Badi Lake',
    template: '%s | AGP Nature Villa'
  },
  description: 'Experience the Aravallis at AGP Nature Villa. A 3BHK luxury retreat featuring the \'Blue Wave\' private pool and \'Infinity Garden.\' Pet-friendly and just 20 mins from Udaipur City.',
  keywords: ['villa', 'udaipur', 'homestay', 'luxury', 'pool', 'rajasthan', 'vacation rental', 'nature villa', 'aravali mountains', 'private pool', 'badi lake', 'pet-friendly', '3bhk villa'],
  authors: [{ name: 'AGP Nature Villa', url: 'https://agpnaturevilla.com/' }],
  creator: 'AGP Nature Villa',
  publisher: 'AGP Nature Villa',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://agpnaturevilla.com/',
    siteName: 'AGP Nature Villa',
    title: 'Luxurious Private Pool Villa in Udaipur | AGP Nature Villa | Near Badi Lake',
    description: 'Experience the Aravallis at AGP Nature Villa. A 3BHK luxury retreat featuring the \'Blue Wave\' private pool and \'Infinity Garden.\' Pet-friendly and just 20 mins from Udaipur City.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AGP Nature Villa - Luxurious Private Pool Villa in Udaipur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@agpnaturevilla',
    creator: '@agpnaturevilla',
    title: 'Luxurious Private Pool Villa in Udaipur | AGP Nature Villa | Near Badi Lake',
    description: 'Experience the Aravallis at AGP Nature Villa. A 3BHK luxury retreat featuring the \'Blue Wave\' private pool and \'Infinity Garden.\' Pet-friendly and just 20 mins from Udaipur City.',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/logos/favicon.png',
    shortcut: '/images/logos/favicon.png',
    apple: '/images/logos/favicon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/images/logos/favicon.png',
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://agpnaturevilla.com/',
  },
  other: {
    'geo.region': 'IN-RJ',
    'geo.placename': 'Udaipur',
    'geo.position': '24.6802778;73.6234722',
    'ICBM': '24.6802778, 73.6234722',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#22c55e" />
        <meta name="color-scheme" content="light" />
        <meta name="google-site-verification" content="u4Lza026JrXPhS4p-saNayywdU3srXuij5sZF3MOU68" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="language" content="en" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        
        {/* Favicon and Touch Icons */}
        <link rel="icon" type="image/png" href="/images/logos/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/logos/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/logos/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/logos/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for third-party domains */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
      </head>
      <body className={inter.className}>
        <div id="root">
          {children}
        </div>
        
      </body>
    </html>
  )
}
