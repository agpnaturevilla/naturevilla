/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  async rewrites() {
    return [
      // Maintain same URL structure as current site
      {
        source: '/villa-in-udaipur/',
        destination: '/villa-in-udaipur'
      },
      {
        source: '/rooms/',
        destination: '/rooms'
      },
      {
        source: '/contact/',
        destination: '/contact'
      },
      {
        source: '/guide-pdf',
        destination: '/guide-pdf'
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig