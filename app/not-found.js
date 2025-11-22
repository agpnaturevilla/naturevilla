import Link from 'next/link'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'

export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-primary-50">
        <div className="max-w-2xl w-full text-center">
          {/* 404 Number with Animation */}
          <div className="mb-8">
            <h1 className="text-[150px] sm:text-[200px] font-bold text-primary-600/10 leading-none select-none">
              404
            </h1>
          </div>

          {/* Content */}
          <div className="relative -mt-32 sm:-mt-40">
            <div className="mb-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Oops! Page Not Found
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                The page you're looking for seems to have wandered off into the Aravallis.
                Let's get you back on track.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Go to Homepage
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg border-2 border-primary-600"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact Us
              </Link>
            </div>

            {/* Quick Links */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4 font-medium">Popular Pages</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/villa-in-udaipur"
                  className="text-sm px-4 py-2 bg-white text-primary-700 rounded-full hover:bg-primary-50 transition-colors duration-200 border border-primary-200"
                >
                  The Villa
                </Link>
                <Link
                  href="/rooms"
                  className="text-sm px-4 py-2 bg-white text-primary-700 rounded-full hover:bg-primary-50 transition-colors duration-200 border border-primary-200"
                >
                  Rooms
                </Link>
                <Link
                  href="/faqs"
                  className="text-sm px-4 py-2 bg-white text-primary-700 rounded-full hover:bg-primary-50 transition-colors duration-200 border border-primary-200"
                >
                  FAQs
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-0 w-32 h-32 bg-primary-200/30 rounded-full blur-3xl -z-10"></div>
          <div className="absolute top-1/3 right-0 w-40 h-40 bg-primary-300/20 rounded-full blur-3xl -z-10"></div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
