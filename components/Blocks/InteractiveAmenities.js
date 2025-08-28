'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { 
  HomeIcon, 
  FireIcon, 
  SparklesIcon,
  HeartIcon,
  SunIcon,
  StarIcon
} from '@heroicons/react/24/solid'

export default function InteractiveAmenities({ content, settings }) {
  const [selectedAmenity, setSelectedAmenity] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredAmenity, setHoveredAmenity] = useState(null)
  const sectionRef = useRef(null)

  const {
    title = "What's Present at AGP Nature Villa",
    subtitle = "Every detail crafted for your perfect mountain escape",
    amenities = [
      {
        id: 1,
        name: "3 Luxury Rooms",
        shortDesc: "Love Nest • Mountain Peak • Valley View",
        fullDesc: "Three uniquely designed sanctuaries: Love Nest wraps you in warm tones and quiet nooks—perfect for couples. Mountain Peak throws the Aravalis in your face with glass walls. Valley View pulls the valley close, a green sweep that feels like your own secret.",
        icon: HomeIcon,
        color: "from-blue-500 to-indigo-600",
        image: "/images/Rooms/image-1.jpg",
        stats: { count: "3", unit: "Rooms" }
      },
      {
        id: 2,
        name: "Modern Kitchen",
        shortDesc: "Fully stocked with essentials",
        fullDesc: "The modern kitchen shines—steel counters, stocked shelves, ready for a midnight snack or a full-blown feast. Every essential material at your fingertips, with a dedicated helper available to assist with your culinary adventures.",
        icon: FireIcon,
        color: "from-orange-500 to-red-600",
        image: "/images/Villa/open-kitchen-and-dining-area.jpg",
        stats: { count: "2", unit: "Kitchens" }
      },
      {
        id: 3,
        name: "Swimming Pool",
        shortDesc: "Private jewel with mountain views",
        fullDesc: "A swimming pool glimmers like a private jewel. Kids leap in, water exploding as yells bounce off the hills; adults float, drink in hand, the Aravalis brooding above. It's not just a dip—it's the heart of this private getaway.",
        icon: SparklesIcon,
        color: "from-cyan-500 to-blue-600",
        image: "/images/Villa/pool-area-agp-nature-villa.jpg",
        stats: { count: "1", unit: "Pool" }
      },
      {
        id: 4,
        name: "Bonfire Place",
        shortDesc: "Where stories come alive",
        fullDesc: "The bonfire place sits rough-hewn, logs piled like a challenge. Strike a match, and flames lick the dark, embers swirling as the Aravalis swallow the haze. Families cluster tight, kids jabbing sticks into the glow; friends trade tales that grow wilder.",
        icon: FireIcon,
        color: "from-yellow-500 to-orange-600",
        image: "/images/Villa/slider-image-2.jpg",
        stats: { count: "1", unit: "Firepit" }
      },
      {
        id: 5,
        name: "Outdoor Kitchen",
        shortDesc: "Rugged culinary adventures",
        fullDesc: "Out back, the outdoor kitchen's grittier—coals flare, meat sizzles, smoke stings your eyes just right. This is where authentic flavors are born, where barbecue sessions turn into legendary feasts under the starlit Aravali sky.",
        icon: SunIcon,
        color: "from-green-500 to-teal-600",
        image: "/images/Villa/agp-nature-villa-outer-area.jpg",
        stats: { count: "1", unit: "Outdoor" }
      },
      {
        id: 6,
        name: "Big Garden",
        shortDesc: "Sprawling playground",
        fullDesc: "The big garden seals it. Grass wears thin from tag games, a blanket lies crumpled where lunch dragged on, and a lone chair sits crooked from someone chasing the sunset. A sprawl space for family chaos, group sprawls, or just soaking in the quiet.",
        icon: HeartIcon,
        color: "from-emerald-500 to-green-600",
        image: "/images/Villa/slider-image-1.jpg",
        stats: { count: "∞", unit: "Memories" }
      }
    ]
  } = content || {}

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const selectedAmenityData = amenities[selectedAmenity]

  return (
    <div ref={sectionRef} className="relative py-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary-100 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-100 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center px-6 py-3 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-6">
            <StarIcon className="w-4 h-4 mr-2" />
            Premium Villa Amenities
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-light text-gray-900 mb-6">
            <span className="font-sans italic text-primary-600">{title.split(' ')[0]}</span>{' '}
            {title.split(' ').slice(1).join(' ')}
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mb-8" />
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left - Amenity Grid */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="grid grid-cols-2 gap-6">
              {amenities.map((amenity, index) => {
                const IconComponent = amenity.icon
                return (
                  <button
                    key={amenity.id}
                    onClick={() => setSelectedAmenity(index)}
                    onMouseEnter={() => setHoveredAmenity(index)}
                    onMouseLeave={() => setHoveredAmenity(null)}
                    className={`group relative p-6 rounded-2xl border-2 transition-all duration-500 text-left ${
                      selectedAmenity === index
                        ? 'border-primary-300 bg-primary-50 shadow-xl scale-105'
                        : 'border-gray-200 bg-white hover:border-primary-200 hover:shadow-lg hover:scale-102'
                    }`}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${amenity.color} opacity-0 rounded-2xl transition-opacity duration-500 ${
                      selectedAmenity === index ? 'opacity-10' : 'group-hover:opacity-5'
                    }`} />
                    
                    {/* Icon */}
                    <div className={`relative mb-4 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      selectedAmenity === index 
                        ? `bg-gradient-to-br ${amenity.color} text-white` 
                        : 'bg-gray-100 text-gray-600 group-hover:bg-primary-100 group-hover:text-primary-600'
                    }`}>
                      <IconComponent className="w-7 h-7" />
                      
                      {/* Stats Badge */}
                      <div className={`absolute top-0 right-0 px-2 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                        selectedAmenity === index
                          ? 'bg-white text-primary-600 shadow-lg'
                          : 'bg-primary-500 text-white'
                      }`}>
                        {amenity.stats.count}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative">
                      <h3 className={`font-semibold text-lg mb-2 transition-colors duration-300 ${
                        selectedAmenity === index ? 'text-primary-900' : 'text-gray-900'
                      }`}>
                        {amenity.name}
                      </h3>
                      <p className={`text-sm transition-colors duration-300 ${
                        selectedAmenity === index ? 'text-primary-700' : 'text-gray-600'
                      }`}>
                        {amenity.shortDesc}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    <div className={`absolute bottom-2 right-2 w-2 h-2 rounded-full transition-all duration-300 ${
                      selectedAmenity === index ? 'bg-primary-500' : 'bg-transparent'
                    }`} />
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right - Feature Showcase */}
          <div className={`sticky top-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-900">
                <div className="absolute inset-0 transition-all duration-700">
                  <Image
                    src={selectedAmenityData.image}
                    alt={selectedAmenityData.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent`} />
                </div>

                {/* Overlay Info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-white font-bold text-2xl">
                        {selectedAmenityData.name}
                      </h3>
                      <div className="text-right">
                        <div className="text-white font-bold text-xl">
                          {selectedAmenityData.stats.count}
                        </div>
                        <div className="text-white/70 text-sm">
                          {selectedAmenityData.stats.unit}
                        </div>
                      </div>
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {selectedAmenityData.shortDesc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description Panel */}
              <div className="mt-8 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedAmenityData.color} flex items-center justify-center`}>
                    <selectedAmenityData.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-gray-900">
                      {selectedAmenityData.name}
                    </h4>
                    <p className="text-primary-600 font-medium">
                      {selectedAmenityData.shortDesc}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-lg">
                  {selectedAmenityData.fullDesc}
                </p>

                {/* Progress Indicators */}
                <div className="flex space-x-2 mt-6">
                  {amenities.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                        index === selectedAmenity ? 'bg-primary-500' : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-primary-50 via-white to-accent-50 rounded-3xl p-8 border border-primary-100">
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              <strong>Equipped with all modern amenities and adhering to the highest safety standards</strong>, 
              the property ensures a comfortable and secure stay. A dedicated helper is available to assist 
              with your needs, adding convenience to your experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}