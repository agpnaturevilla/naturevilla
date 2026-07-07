'use client'

import { CheckCircleIcon, SparklesIcon } from '@heroicons/react/24/solid'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function PricingSection({ content }) {
  const {
    title = 'Special Tariffs for 2026',
    subtitle = 'Minimum 2 nights on weekends',
    price = '18,000',
    inclusions = [
      'Full 3 BHK Villa — Exclusively Yours',
      'Private Swimming Pool (24/7 Access)',
      '"Laziz" Indoor Kitchen & "The Little Paris" Open Kitchen',
      '"Infinity Garden" — 2000 sq. ft. Lawn',
      '"Heat Heaven" Bonfire Area',
      'Up to 15 Guests',
      'Pet Friendly'
    ]
  } = content || {}

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(107, 114, 128, 0.5) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gray-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gray-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-primary-600 rounded-full text-white text-sm font-medium mb-8 shadow-lg">
            <SparklesIcon className="w-4 h-4 mr-2" />
            Clear & Honest Pricing
          </div>

          <h2 className="text-4xl font-light text-gray-900 mb-4 leading-tight" style={{ fontSize: '2.25rem' }}>
            {title}
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full mx-auto mb-6"></div>

          <p className="text-lg text-gray-600 font-light italic">
            {subtitle}
          </p>
        </div>

        {/* Single Pricing Card */}
        <div className="mb-12">
          <div
            className="relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-primary-600"
            style={{ boxShadow: '0 4px 24px 0 rgba(0, 0, 0, 0.08)' }}
          >
            {/* Gradient Top Bar */}
            <div className="h-1 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600"></div>

            <div className="p-8 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start">

              {/* Price Block */}
              <div className="flex-shrink-0 text-center md:text-left">
                <p className="text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3">Per Night</p>
                <div className="flex items-baseline gap-1 justify-center md:justify-start">
                  <span className="text-6xl font-bold bg-gradient-to-r from-primary-700 to-primary-600 bg-clip-text text-transparent">
                    ₹{price}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Min. 2 nights on weekends</p>

                <a
                  href="/contact/"
                  className="mt-6 inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary-700 transition-all duration-300 group/btn"
                >
                  Book Now
                  <ArrowRightIcon className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px self-stretch bg-gray-200"></div>
              <div className="block md:hidden w-full h-px bg-gray-200"></div>

              {/* Inclusions */}
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Everything Included</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {inclusions.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Privacy Note */}
        <div>
          <div className="relative overflow-hidden bg-gradient-to-r from-primary-700 to-primary-600 rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/10 rounded-full"></div>

            <div className="relative flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                <CheckCircleIcon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div className="text-white">
                <p className="text-base md:text-lg font-semibold mb-1">
                  100% Private Booking Guarantee
                </p>
                <p className="text-sm md:text-base text-white/90 font-light">
                  You never share the villa with strangers. The entire property is exclusively yours.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
