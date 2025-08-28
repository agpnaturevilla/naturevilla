'use client'

import { MapPinIcon, ClockIcon, PhoneIcon, StarIcon } from '@heroicons/react/24/outline'

export default function VillaInfo({ content, settings }) {
  const {
    title = 'About AGP Nature Villa',
    description = 'AGP Nature Villa is a luxury homestay located in the serene Aravali mountains of Udaipur. Our villa offers the perfect blend of modern comfort and natural beauty, making it an ideal destination for families, couples, and groups seeking a peaceful retreat.',
    location = {
      address: 'Aravali Mountains, Udaipur, Rajasthan',
      distance: '15 minutes from Udaipur Airport',
      nearbyPlaces: [
        'City Palace - 25 km',
        'Lake Pichola - 22 km', 
        'Jagdish Temple - 20 km',
        'Saheliyon Ki Bari - 18 km'
      ]
    },
    highlights = [
      {
        title: '4 AC Bedrooms',
        description: 'Spacious rooms with attached washrooms',
        icon: 'home'
      },
      {
        title: 'Private Swimming Pool',
        description: 'Exclusive pool with mountain views',
        icon: 'water'
      },
      {
        title: 'Open Kitchen',
        description: 'Fully equipped for self-catering',
        icon: 'kitchen'
      },
      {
        title: 'Bonfire Area',
        description: 'Perfect for evening gatherings',
        icon: 'fire'
      }
    ]
  } = content || {}

  return (
    <section className="relative py-12 bg-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium">
                <MapPinIcon className="w-4 h-4 mr-2" />
                Luxury Villa Experience
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
                <span className="font-sans italic text-primary-600">Discover</span> Our Villa
              </h2>
              
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Location Info */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <MapPinIcon className="w-6 h-6 text-primary-600 mr-3" />
                Prime Location
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <ClockIcon className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                  <span className="font-medium">{location.distance}</span>
                </div>
                
                <div className="text-gray-600">
                  <p className="font-medium text-gray-800 mb-2">Nearby Attractions:</p>
                  <ul className="space-y-1">
                    {location.nearbyPlaces.map((place, index) => (
                      <li key={index} className="text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3 flex-shrink-0"></div>
                        {place}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+911234567890"
                className="group flex items-center justify-center px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <PhoneIcon className="w-5 h-5 mr-3" />
                Call to Book
              </a>
              
              <a
                href="/contact/"
                className="flex items-center justify-center px-6 py-4 border-2 border-primary-600 text-primary-700 rounded-2xl font-medium hover:bg-primary-50 transition-all duration-300"
              >
                Get Instant Quote
              </a>
            </div>
          </div>

          {/* Right column - Highlights */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {highlight.icon === 'home' && (
                        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      )}
                      {highlight.icon === 'water' && (
                        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      )}
                      {highlight.icon === 'kitchen' && (
                        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M10.5 3L12 2l1.5 1L15 3v5H9V3z" />
                        </svg>
                      )}
                      {highlight.icon === 'fire' && (
                        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 1-4 4-4 0 0 0 1 2 2 1 0 3 0 3 0a8 8 0 01-1.343 8.657z" />
                        </svg>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Rating section */}
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 border border-primary-100 shadow-lg">
              <div className="text-center">
                <div className="flex justify-center items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-6 w-6 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-2xl font-semibold text-gray-900 mb-2">4.8/5 Rating</p>
                <p className="text-gray-600">Based on 150+ happy guests</p>
                <p className="text-sm text-gray-500 mt-2 italic">"Perfect mountain getaway with luxury amenities"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}