/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export to enable API routes
  // Vercel will handle this as a serverless Next.js app
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig