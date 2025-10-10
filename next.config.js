/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable API routes (serverless functions)
  // API routes like /api/contact require server-side execution
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Force production deployment with serverless functions enabled
}

module.exports = nextConfig