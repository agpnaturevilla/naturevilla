'use client'

import { useState } from 'react'
import Image from 'next/image'
import { SparklesIcon } from '@heroicons/react/24/outline'

export default function UniqueOfferings({ content, settings }) {
  const [imageErrors, setImageErrors] = useState({})
  
  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }))
  }
  
  // Hardcoded offerings with working images
  const offerings = [
    {
      title: 'Luxurious Rooms',
      image: '/images/Rooms/image-3.jpg',
      description: 'Elegant bedrooms with modern amenities and mountain views'
    },
    {
      title: 'Swimming Pool',
      image: '/images/Villa/pool-area-agp-nature-villa.jpg',
      description: 'Exclusive pool with stunning Aravali mountain backdrop'
    },
    {
      title: 'Modern Open Kitchen',
      image: '/images/Villa/open-kitchen-and-dining-area.jpg',
      description: 'Fully equipped kitchen for culinary adventures'
    },
    {
      title: 'Villa Exterior',
      image: '/images/Villa/agp-nature-villa-outer-area.jpg',
      description: 'Beautiful villa architecture in mountain setting'
    }
  ]

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-8">
            <SparklesIcon className="w-4 h-4 mr-2" />
            Luxury Experience
          </div>
          
          <h3 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8 leading-tight">
            <span className="font-sans italic text-primary-600">Unique Offerings</span> of Our Villa
          </h3>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mb-8"></div>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Step into a world of refined luxury, where every corner of our villa exudes elegance, comfort, and an ambiance crafted to offer you a truly unforgettable escape.
          </p>
        </div>

        {/* Offerings Grid - Desktop / Slider - Mobile */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((offering, index) => (
            <div
              key={`offering-${index}-${offering.title}`}
              className="group relative"
              style={{ padding: '8px 8px 12px 8px' }}
            >
              <div 
                className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 border border-white/50"
                style={{
                  boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.04), 0 4px 16px 2px rgba(0, 0, 0, 0.03)'
                }}
              >
                
                {/* Villa Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={offering.image}
                    alt={offering.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                  
                  {/* Title overlay on image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-bold text-lg mb-1 drop-shadow-lg">
                      {offering.title}
                    </h4>
                    <div className="w-12 h-0.5 bg-white/80 rounded-full"></div>
                  </div>
                  
                  {/* Number badge */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {/* Title below image as fallback */}
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors duration-300 mb-3">
                    {offering.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {offering.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide" style={{ scrollSnapType: 'x mandatory' }}>
            {offerings.map((offering, index) => (
              <div
                key={`mobile-offering-${index}-${offering.title}`}
                className="group relative flex-none w-72"
                style={{ 
                  padding: '8px 8px 12px 8px',
                  scrollSnapAlign: 'start'
                }}
              >
                <div 
                  className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 border border-white/50"
                  style={{
                    boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.04), 0 4px 16px 2px rgba(0, 0, 0, 0.03)'
                  }}
                >
                  
                  {/* Villa Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={offering.image}
                      alt={offering.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 288px, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                    
                    {/* Title overlay on image */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-bold text-lg mb-1 drop-shadow-lg">
                        {offering.title}
                      </h4>
                      <div className="w-12 h-0.5 bg-white/80 rounded-full"></div>
                    </div>
                    
                    {/* Number badge */}
                    <div className="absolute top-3 right-3">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    {/* Title below image as fallback */}
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors duration-300 mb-3">
                      {offering.title}
                    </h4>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {offering.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}