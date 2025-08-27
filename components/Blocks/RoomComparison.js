'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckIcon, HeartIcon, EyeIcon, HomeIcon, StarIcon } from '@heroicons/react/24/outline'

export default function RoomComparison({ content, settings }) {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState(null)
  const sectionRef = useRef(null)

  const {
    title = "Compare Our Rooms",
    subtitle = "Find the perfect match for your mountain getaway",
    rooms = [
      {
        id: 1,
        name: "Love Nest",
        tagline: "Where Hearts Find Home",
        price: "₹8,500",
        priceNote: "per night",
        capacity: "2 guests",
        area: "320 sq ft",
        view: "Mountain & Garden",
        image: "/images/Rooms/image-1.jpg",
        gradient: "from-rose-500 via-pink-500 to-red-500",
        features: [
          "King Size Bed",
          "Mountain Views",
          "Romantic Ambiance",
          "Reading Corner",
          "Mood Lighting"
        ],
        highlights: ["Most Romantic", "Intimate Setting"],
        bestFor: "Couples & Honeymooners"
      },
      {
        id: 2,
        name: "Mountain Peak",
        tagline: "Touch the Aravalis", 
        price: "₹9,200",
        priceNote: "per night",
        capacity: "2-3 guests",
        area: "380 sq ft",
        view: "Aravali Mountains",
        image: "/images/Rooms/image-3.jpg",
        gradient: "from-blue-500 via-indigo-500 to-purple-500",
        features: [
          "Floor-to-Ceiling Windows",
          "Panoramic Mountain Views",
          "Morning Tea Setup",
          "Spacious Layout",
          "Work Desk",
          "Work Desk",
          "Sunrise Views"
        ],
        highlights: ["Best Views", "Largest Space"],
        bestFor: "Nature Enthusiasts & Photographers"
      },
      {
        id: 3,
        name: "Valley View",
        tagline: "Green Dreams Unfold",
        price: "₹8,800",
        priceNote: "per night", 
        capacity: "2-3 guests",
        area: "350 sq ft",
        view: "Valley & Gardens",
        image: "/images/Rooms/image-4.jpg",
        gradient: "from-green-500 via-emerald-500 to-teal-500",
        features: [
          "Valley Panorama",
          "Private Terrace",
          "Garden Access",
          "Bird Watching Setup",
          "Garden Access",
          "Bird Watching Setup",
          "Nature Immersion",
          "Meditation Corner"
        ],
        highlights: ["Most Peaceful", "Private Terrace", "Wellness Focus"],
        bestFor: "Wellness Seekers & Families"
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

  const getRoomIcon = (roomId) => {
    switch(roomId) {
      case 1: return <HeartIcon className="w-6 h-6" />
      case 2: return <EyeIcon className="w-6 h-6" />
      case 3: return <HomeIcon className="w-6 h-6" />
      default: return <StarIcon className="w-6 h-6" />
    }
  }

  return (
    <div id="room-comparison" ref={sectionRef} className="relative py-16 bg-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary-50 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent-50 rounded-full opacity-40 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center px-6 py-3 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-6">
            <StarIcon className="w-4 h-4 mr-2" />
            Room Comparison
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            {title}
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mb-8" />
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            {subtitle}
          </p>
        </div>

        {/* Comparison Table */}
        <div className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="grid lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div 
                key={room.id}
                className={`relative group bg-gradient-to-b from-white to-gray-50 rounded-3xl overflow-hidden shadow-xl border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  selectedRoom === room.id ? 'ring-4 ring-primary-300 shadow-2xl scale-105' : 'border-gray-200'
                }`}
                onClick={() => setSelectedRoom(selectedRoom === room.id ? null : room.id)}
              >
                {/* Room Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${room.gradient} opacity-40`} />
                  
                  {/* Room Icon */}
                  <div className={`absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-700`}>
                    {getRoomIcon(room.id)}
                  </div>

                  {/* Highlights */}
                  <div className="absolute top-4 right-4 space-y-2">
                    {room.highlights.slice(0, 2).map((highlight, idx) => (
                      <span key={idx} className="block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Price Badge */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2">
                      <div className="text-2xl font-bold text-gray-900">{room.price}</div>
                      <div className="text-sm text-gray-600">{room.priceNote}</div>
                    </div>
                  </div>
                </div>

                {/* Room Details */}
                <div className="p-6 lg:p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{room.name}</h3>
                    <p className={`text-sm font-medium bg-gradient-to-r ${room.gradient} bg-clip-text text-transparent`}>
                      {room.tagline}
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-100">
                    <div>
                      <div className="text-lg font-semibold text-gray-900">{room.capacity}</div>
                      <div className="text-sm text-gray-500">Capacity</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-gray-900">{room.area}</div>
                      <div className="text-sm text-gray-500">Area</div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-lg font-semibold text-gray-900">{room.view}</div>
                      <div className="text-sm text-gray-500">View</div>
                    </div>
                  </div>

                  {/* Best For */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Best For:</h4>
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${room.gradient} text-white`}>
                      {room.bestFor}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 mb-4">Key Features:</h4>
                    <div className="space-y-2">
                      {room.features.slice(0, 6).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckIcon className={`w-4 h-4 text-green-500 flex-shrink-0`} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                      {room.features.length > 6 && (
                        <div className="text-sm text-gray-500 pt-2">
                          +{room.features.length - 6} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/contact/"
                    className={`group w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r ${room.gradient} text-white font-semibold rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  >
                    Book {room.name}
                    <HeartIcon className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </Link>
                </div>

                {/* Selection Indicator */}
                {selectedRoom === room.id && (
                  <div className="absolute inset-0 bg-primary-500/10 pointer-events-none rounded-3xl">
                    <div className="absolute top-4 right-4 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                      <CheckIcon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 lg:p-12 border border-primary-100">
            <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-6">
              Can't Decide? We're Here to Help
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team knows each room intimately and can help you choose the perfect sanctuary for your mountain retreat. 
              Every room includes complimentary WiFi, AC, and access to all villa amenities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Get Personal Recommendation
              </Link>
              
              <a
                href="tel:+919892611983"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 text-primary-700 font-semibold rounded-2xl hover:bg-primary-50 transition-all duration-300"
              >
                Call +91 9892611983
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}