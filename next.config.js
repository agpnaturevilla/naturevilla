/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static site export for Vercel deployment
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  distDir: 'out'
}

module.exports = nextConfig