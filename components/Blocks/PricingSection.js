'use client'

import { CheckCircleIcon, SparklesIcon, UserGroupIcon, StarIcon } from '@heroicons/react/24/solid'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function PricingSection({ content }) {
  const {
    title = 'Transparent Luxury Pricing',
    subtitle = 'Rates valid for 2024-2025 (Excluding New Year\'s Eve)',
    note = '100% Private Booking – You never share the villa with strangers.',
    pricingTiers = [
      {
        name: 'Intimate Group',
        guests: '4-6 Guests',
        price: '8,000',
        inclusions: ['Full Villa Access', 'Pool', 'Kitchen'],
        popular: false
      },
      {
        name: 'Family Retreat',
        guests: '7-8 Guests',
        price: '10,000',
        inclusions: ['Full Villa Access', 'Pool', 'Kitchen'],
        popular: true
      },
      {
        name: 'Large Group',
        guests: '9-12 Guests',
        price: '12,000',
        inclusions: ['Extra Bedding', 'Full Amenities'],
        popular: false
      },
      {
        name: 'Grand Gathering',
        guests: '13-15 Guests',
        price: '15,000',
        inclusions: ['Full Property Exclusivity'],
        popular: false
      }
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

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

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

        {/* Pricing Cards Grid - All Screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 py-4">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative ${tier.popular ? 'pt-4' : ''}`}
              style={{ padding: '8px 8px 12px 8px' }}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-0 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase shadow-md flex items-center gap-1">
                    <StarIcon className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`relative h-full bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 ${
                  tier.popular ? 'border-2 border-primary-600' : 'border border-white/50'
                }`}
                style={{
                  boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.04), 0 4px 16px 2px rgba(0, 0, 0, 0.03)'
                }}
              >
                {/* Gradient Top Bar */}
                <div className={`h-1 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600'
                    : 'bg-gradient-to-r from-primary-500 to-primary-600'
                }`}></div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Icon */}
                  <div className={`mb-4 w-12 h-12 rounded-xl flex items-center justify-center ${
                    tier.popular
                      ? 'bg-gradient-to-br from-primary-600 to-primary-700'
                      : 'bg-gradient-to-br from-primary-500 to-primary-600'
                  } shadow-md`}>
                    <UserGroupIcon className="w-6 h-6 text-white" />
                  </div>

                  {/* Tier Name */}
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-600"></span>
                    {tier.guests}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold bg-gradient-to-r from-primary-700 to-primary-600 bg-clip-text text-transparent">
                        ₹{tier.price}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 font-medium">/night</p>
                  </div>

                  {/* Inclusions */}
                  <div className="space-y-3 mb-6">
                    {tier.inclusions.map((inclusion, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircleIcon className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm leading-relaxed">{inclusion}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href="/contact/"
                    className={`block w-full text-center px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 group/btn ${
                      tier.popular
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-200'
                    }`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Book This Plan
                      <ArrowRightIcon className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Privacy Note */}
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-r from-primary-700 to-primary-600 rounded-2xl p-6 md:p-8 shadow-lg">
            {/* Decorative circles */}
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
