/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable API routes (serverless functions)
  // API routes like /api/contact require server-side execution
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig