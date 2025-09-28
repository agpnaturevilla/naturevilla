/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static site export for Vercel deployment
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig