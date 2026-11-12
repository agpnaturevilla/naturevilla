'use client'

import Image from 'next/image'

export default function PoolKitchen({ content, settings }) {
  const {
    poolTitle = 'POOL AREA',
    poolDescription = 'Enjoy a serene escape at our villa with a private pool, perfect for ultimate relaxation.',
    poolImage = '/images/Villa/pool-area-agp-nature-villa.jpg',
    kitchenTitle = 'OUTDOOR KITCHEN',
    kitchenDescription = 'Experience the joy of cooking and entertaining in our villa\'s spacious open kitchen.',
    kitchenImage = '/images/Villa/open-kitchen-and-dining-area.jpg'
  } = content || {}

  return (
    <section className="relative py-16 bg-gradient-to-br from-primary-100 via-primary-50 to-primary-200 overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Pool Area */}
          <div className="group relative" style={{ padding: '8px 8px 12px 8px' }}>
            <div 
              className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/50 transition-all duration-500 transform hover:-translate-y-2"
              style={{
                boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.04), 0 4px 16px 2px rgba(0, 0, 0, 0.03)'
              }}
            >
              {/* Pool Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={poolImage}
                  alt="Private Swimming Pool Area"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                </div>
              </div>
              
              <div className="p-8">
                <h4 className="text-2xl font-bold text-blue-700 uppercase tracking-wider mb-4">
                  {poolTitle}
                </h4>
                
                <p className="text-gray-600 leading-relaxed text-lg font-light">
                  {poolDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Outdoor Kitchen */}
          <div className="group relative" style={{ padding: '8px 8px 12px 8px' }}>
            <div 
              className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/50 transition-all duration-500 transform hover:-translate-y-2"
              style={{
                boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.04), 0 4px 16px 2px rgba(0, 0, 0, 0.03)'
              }}
            >
              {/* Kitchen Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={kitchenImage}
                  alt="Open Kitchen and Dining Area"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">Premium</span>
                </div>
              </div>
              
              <div className="p-8">
                <h4 className="text-2xl font-bold text-orange-700 uppercase tracking-wider mb-4">
                  {kitchenTitle}
                </h4>
                
                <p className="text-gray-600 leading-relaxed text-lg font-light">
                  {kitchenDescription}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}