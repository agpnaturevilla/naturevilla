'use client'

import { PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function BookingSection({ content, settings }) {
  const {
    title = 'Book Your Break Now',
    description = 'Spots at AGP Nature Villa don\'t hang around. Fall through spring, the Aravalis turn crisp and clear—prime for a getaway. Don\'t wait; this isn\'t the kind of place that sits quiet. Come see why AGP Nature Villa turns a quick trip into something you\'ll carry home.',
    phone = '+91 9892611983',
    getawayTitle = 'Plan Your Getaway to Our Villa Now',
    directionLink = 'http://maps.google.com/maps/dir/?api=1&destination=AGP%20Nature%20Villa%20-%20Villa%20in%20Udaipur,%205,%20Dangiyo%20Ki%20Hundar,%20near%20Animal%20Aid,%20Udaipur,%20Rajasthan%20313011'
  } = content || {}

  return (
    <section className="relative py-16 bg-gradient-to-br from-slate-100 via-gray-50 to-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left Column - Booking Message */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 md:p-12">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gray-500 to-slate-600 rounded-xl mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 12h6m-8-8h8m-8 4h8" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {description}
            </p>
            
            {/* Mountain Location Highlight */}
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-200">
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <h4 className="text-lg font-semibold text-emerald-800">Aravali Mountain Escape</h4>
              </div>
              <p className="text-emerald-700 text-sm leading-relaxed">
                Experience the pristine beauty of Rajasthan's ancient mountains, where every sunrise paints the peaks in golden hues and every sunset brings peaceful tranquility.
              </p>
            </div>
          </div>

          {/* Right Column - Seasonal Appeal */}
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900">Perfect Weather Season</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Fall through spring brings the most beautiful weather to the Aravalis. Crystal clear skies, comfortable temperatures, and breathtaking mountain vistas await.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 16h10a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900">Limited Availability</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our villa doesn't stay quiet for long. With only exclusive bookings and high demand during peak season, securing your dates early is essential.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900">Unforgettable Memories</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                This isn't just accommodation—it's an experience that transforms a quick trip into stories you'll treasure and memories you'll carry home forever.
              </p>
            </div>
          </div>
        </div>

        {/* Action Section */}
        <div className="bg-gradient-to-br from-gray-600 to-slate-700 rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {getawayTitle}
            </h3>
            <p className="text-gray-200 text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
              The mountains are calling, and the perfect getaway is just one call away. Don't let this opportunity slip by—your mountain retreat is waiting.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              
              {/* Call Action */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PhoneIcon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">Instant Booking</h4>
                <p className="text-gray-300 text-sm mb-4">Call now for immediate confirmation and special rates</p>
                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center justify-center w-full bg-white text-gray-800 px-4 py-3 rounded-xl font-semibold hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  <PhoneIcon className="w-4 h-4 mr-2" />
                  {phone}
                </a>
              </div>

              {/* Online Booking */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Easy Online Booking</h4>
                <p className="text-gray-300 text-sm mb-4">Complete booking form with flexible payment options</p>
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center w-full border-2 border-white text-white px-4 py-3 rounded-xl font-semibold hover:bg-white/10 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Book Online
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Directions */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPinIcon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">Find Us Easily</h4>
                <p className="text-gray-300 text-sm mb-4">Just 15 minutes from Udaipur airport in the Aravalis</p>
                <a
                  href={directionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-white/20 text-white px-4 py-3 rounded-xl font-semibold hover:bg-white/30 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  <MapPinIcon className="w-4 h-4 mr-2" />
                  Get Directions
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl p-6 border border-orange-300/30">
              <h4 className="text-white font-semibold mb-2">⏰ Act Fast - Peak Season Booking</h4>
              <p className="text-gray-200 text-sm">
                The crisp mountain air and perfect weather won't last forever. Secure your Aravali mountain escape before availability runs out.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}