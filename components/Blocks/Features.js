'use client'

import { 
  HomeIcon,
  SparklesIcon,
  FireIcon,
  WifiIcon,
  TruckIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const iconMap = {
  home: HomeIcon,
  sparkles: SparklesIcon,
  fire: FireIcon,
  wifi: WifiIcon,
  car: TruckIcon,
  shield: ShieldCheckIcon
}

const iconColors = {
  home: 'text-blue-600',
  sparkles: 'text-purple-600', 
  fire: 'text-orange-600',
  wifi: 'text-green-600',
  car: 'text-yellow-600',
  shield: 'text-red-600'
}

const iconBgColors = {
  home: 'from-blue-100 to-blue-200',
  sparkles: 'from-purple-100 to-purple-200',
  fire: 'from-orange-100 to-orange-200', 
  wifi: 'from-green-100 to-green-200',
  car: 'from-yellow-100 to-yellow-200',
  shield: 'from-red-100 to-red-200'
}

export default function Features({ content, settings }) {
  const {
    title = 'Villa Amenities',
    subtitle = 'Experience luxury accommodation in the heart of Aravali mountains with world-class amenities',
    features = [
      {
        name: 'Private Swimming Pool',
        description: 'Enjoy a refreshing dip in your own private pool with stunning mountain views',
        icon: 'sparkles'
      },
      {
        name: '4 Air-Conditioned Bedrooms',
        description: 'Spacious bedrooms with modern AC and attached washrooms for ultimate comfort',
        icon: 'home'
      },
      {
        name: 'Open Kitchen',
        description: 'Fully equipped modern kitchen for all your culinary adventures',
        icon: 'fire'
      },
      {
        name: 'Bonfire Area',
        description: 'Cozy outdoor bonfire space perfect for evening gatherings under the stars',
        icon: 'fire'
      },
      {
        name: 'Mountain Location',
        description: 'Nestled in the beautiful Aravali mountains, just 15 minutes from airport',
        icon: 'home'
      },
      {
        name: 'Premium Amenities',
        description: 'High-speed WiFi, parking, and all modern conveniences included',
        icon: 'shield'
      }
    ]
  } = content || {}

  const { layout = 'grid', columns = 3 } = settings || {}

  return (
    <div className="relative py-24 bg-white overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-6">
            <SparklesIcon className="w-4 h-4 mr-2" />
            Premium Amenities
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-light text-gray-900 mb-6">
            <span className="font-serif italic text-primary-600">Premium</span> Villa Features
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mb-8"></div>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || HomeIcon
            const iconColor = iconColors[feature.icon] || 'text-primary-600'
            const iconBgColor = iconBgColors[feature.icon] || 'from-primary-100 to-primary-200'
            
            return (
              <div
                key={feature.name}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50">
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative">
                    {/* Colorful Icon */}
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${iconBgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className={`h-8 w-8 ${iconColor} group-hover:scale-110 transition-all duration-300`} />
                      </div>
                      {/* Colorful decorator */}
                      <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full opacity-60 group-hover:scale-125 group-hover:opacity-80 transition-all duration-300 ${iconBgColor.includes('blue') ? 'bg-blue-400' : iconBgColor.includes('purple') ? 'bg-purple-400' : iconBgColor.includes('orange') ? 'bg-orange-400' : iconBgColor.includes('green') ? 'bg-green-400' : iconBgColor.includes('yellow') ? 'bg-yellow-400' : 'bg-red-400'}`}></div>
                    </div>
                    
                    {/* Text Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-primary-700 transition-colors duration-300">
                        {feature.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg font-light">
                        {feature.description}
                      </p>
                    </div>

                    {/* Hover arrow */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                    <div className={`absolute top-2 right-2 w-16 h-16 border rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300 ${iconColor.replace('text', 'border')}`}></div>
                  </div>
                </div>

                {/* Colorful number indicator */}
                <div className={`absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br ${iconBgColor} rounded-full flex items-center justify-center shadow-lg`}>
                  <span className={`${iconColor} text-sm font-bold`}>{(index + 1).toString().padStart(2, '0')}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/30 shadow-xl">
            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
              Experience Luxury Living
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Every detail has been carefully crafted to ensure your stay is nothing short of extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <span className="relative flex items-center justify-center">
                  Book Your Stay
                  <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="px-8 py-4 border-2 border-primary-600 text-primary-700 rounded-full font-medium hover:bg-primary-50 transition-all duration-300">
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}