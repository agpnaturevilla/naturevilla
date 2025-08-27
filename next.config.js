/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static site export for Vercel deployment
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig