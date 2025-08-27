'use client'

import { 
  HeartIcon, 
  StarIcon, 
  MapPinIcon,
  HomeIcon,
  FireIcon
} from '@heroicons/react/24/solid'

export default function VillaStory({ content, settings }) {
  const benefits = [
    {
      icon: <MapPinIcon className="w-8 h-8" />,
      title: "Prime Location",
      description: "Nestled in the serene Aravali mountains, just 15 minutes from Udaipur airport",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <HomeIcon className="w-8 h-8" />,
      title: "Luxury Accommodation",
      description: "4 beautifully designed AC rooms with modern amenities and stunning views",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Private Swimming Pool",
      description: "Enjoy exclusive access to your own sparkling swimming pool",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Modern Kitchen",
      description: "Fully equipped open kitchen perfect for cooking and entertaining",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Spacious Garden",
      description: "Large private garden ideal for relaxation and outdoor activities",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FireIcon className="w-8 h-8" />,
      title: "Bonfire Area",
      description: "Cozy bonfire place for memorable evenings under the stars",
      color: "from-red-500 to-red-600"
    }
  ]

  const stats = [
    { number: "4.9", label: "Guest Rating", icon: <StarIcon className="w-6 h-6" /> },
    { number: "180+", label: "Happy Guests", icon: <HeartIcon className="w-6 h-6" /> },
    { number: "15", label: "Min to Airport", icon: <MapPinIcon className="w-6 h-6" /> },
    { number: "8", label: "Max Capacity", icon: <HomeIcon className="w-6 h-6" /> }
  ]

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-100 via-gray-50 to-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-500 to-slate-600 rounded-full mb-6">
            <HeartIcon className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
            Why Choose AGP Nature Villa?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect blend of luxury, comfort, and natural beauty in the heart of Rajasthan
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-slate-600 mx-auto mt-8"></div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gray-500 to-slate-600 rounded-xl mx-auto mb-3">
                <div className="text-white">{stat.icon}</div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">{benefit.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-gray-600 to-slate-700 rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for Your Perfect Getaway?
            </h3>
            <p className="text-gray-200 text-lg mb-8 leading-relaxed">
              Experience luxury, comfort, and tranquility in the beautiful Aravali mountains. 
              Your unforgettable vacation awaits at AGP Nature Villa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact/"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-800 font-semibold rounded-xl hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Book Your Stay
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/villa-in-udaipur/"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore Villa
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}