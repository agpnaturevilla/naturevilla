'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { EyeIcon, HeartIcon, HomeIcon, StarIcon } from '@heroicons/react/24/outline'

export default function LuxuryRoomsShowcase({ content, settings }) {
  const [activeRoom, setActiveRoom] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef(null)

  const {
    title = "Luxury Rooms That Redefine Comfort",
    subtitle = "Three sanctuaries, each with its own story to tell",
    rooms = [
      {
        id: 1,
        name: "Love Nest",
        tagline: "Where Hearts Find Home",
        description: "Love Nest wraps you in warm tones and quiet nooks—perfect for couples craving a romantic stay or parents dodging the kids' racket. Pillows fluffed to sink into, lights dialed soft, and corners that feel lived-in.",
        features: ["King Size Bed", "Mountain Views", "Romantic Ambiance"],
        image: "/images/Rooms/image-6.jpg",
        gradient: "from-rose-500 via-pink-500 to-red-500",
        mood: "Intimate & Romantic"
      },
      {
        id: 2, 
        name: "Mountain Peak",
        tagline: "Touch the Aravalis",
        description: "Mountain Peak throws the Aravalis in your face, glass walls letting the peaks leer back over morning tea. Wake up to jagged hills painting the horizon, where every sunrise feels like a personal performance.",
        features: ["Floor-to-Ceiling Windows", "Mountain Views", "Morning Tea Setup", "Panoramic Vistas"],
        image: "/images/Rooms/image-7.jpg",
        gradient: "from-blue-500 via-indigo-500 to-purple-500",
        mood: "Majestic & Inspiring"
      },
      {
        id: 3,
        name: "Valley View", 
        tagline: "Green Dreams Unfold",
        description: "Valley View pulls the valley close, a green sweep that feels like your own secret. Watch the landscape breathe with morning mist, where rolling greens stretch endlessly and peace settles into your soul.",
        features: ["Valley Panorama", "Private Terrace", "Nature Immersion", "Serene Atmosphere"],
        image: "/images/Rooms/image-4.jpg",
        gradient: "from-green-500 via-emerald-500 to-teal-500",
        mood: "Tranquil & Refreshing"
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

  useEffect(() => {
    if (!isAutoPlaying || !isVisible) return

    const interval = setInterval(() => {
      setActiveRoom((prev) => (prev + 1) % rooms.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isVisible, rooms.length])

  const currentRoom = rooms[activeRoom]

  return (
    <div ref={sectionRef} className="luxury-rooms-section relative py-16 bg-gray-50" style={{overflowY: 'visible', scrollbarWidth: 'none'}}>
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {rooms.map((room, index) => (
          <div
            key={room.id}
            className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
              index === activeRoom ? 'opacity-10' : 'opacity-0'
            }`}
          >
            <Image
              src={room.image}
              alt={room.name}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${room.gradient} opacity-30`} />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 text-sm font-medium mb-6 border border-gray-200/50">
            <EyeIcon className="w-4 h-4 mr-2" />
            Three Unique Experiences
          </div>
          
          <h2 className="text-4xl font-light text-gray-900 mb-6" style={{ fontSize: '2.25rem' }}>
            {title}
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mb-8" />
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Room Showcase */}
        <div className="mb-4 lg:mb-8" style={{ overflow: 'visible' }}>
          {/* Mobile: Sliding Cards */}
          <div className="lg:hidden" style={{ overflow: 'visible' }}>
            {/* Swipe Hint */}
            <div className="flex justify-center mb-4 px-6">
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 text-sm">
                <span>Swipe to explore rooms</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
            <div className="flex gap-4 overflow-x-auto scrollbar-hide px-6" style={{ scrollSnapType: 'x mandatory', paddingTop: '20px', paddingBottom: '10px' }}>
              {rooms.map((room, index) => {
                return (
                  <button
                    key={room.id}
                    onClick={() => {
                      setActiveRoom(index)
                      setIsAutoPlaying(false)
                    }}
                    className={`group relative p-6 rounded-3xl transition-all duration-700 text-left flex-shrink-0 w-80 ${
                      activeRoom === index
                        ? 'bg-white ring-2 ring-primary-200'
                        : 'bg-white/80 backdrop-blur-sm hover:bg-white'
                    }`}
                    style={{ 
                      scrollSnapAlign: 'center'
                    }}
                  >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${room.gradient} transition-opacity duration-700 ${
                  activeRoom === index ? 'opacity-10' : 'opacity-0 group-hover:opacity-5'
                }`} />
                
                {/* Room Image */}
                <div className="relative aspect-[4/3] mb-6 rounded-2xl overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                  
                  {/* Icon Overlay */}
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center ${
                    activeRoom === index 
                      ? 'bg-white text-gray-900' 
                      : 'bg-white/20 backdrop-blur-sm text-white'
                  }`}>
                    {index === 0 && <HeartIcon className="w-6 h-6" />}
                    {index === 1 && <HomeIcon className="w-6 h-6" />}
                    {index === 2 && <StarIcon className="w-6 h-6" />}
                  </div>

                  {/* Mood Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                      {room.mood}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className={`font-bold text-2xl mb-2 transition-all duration-300 ${
                    activeRoom === index ? 'text-gray-900' : 'text-gray-800'
                  }`}>
                    {room.name}
                  </h3>
                  
                  <p className={`text-sm font-medium mb-4 transition-all duration-300 ${
                    activeRoom === index ? 'text-primary-600' : 'text-gray-600'
                  }`}>
                    {room.tagline}
                  </p>

                  <p className={`text-sm leading-relaxed mb-6 transition-all duration-300 ${
                    activeRoom === index ? 'text-gray-700' : 'text-gray-600'
                  }`}>
                    {room.description.slice(0, 120)}...
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {room.features.slice(0, 2).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                          activeRoom === index ? 'bg-primary-500' : 'bg-gray-400'
                        }`} />
                        <span className={`text-xs transition-colors duration-300 ${
                          activeRoom === index ? 'text-gray-700' : 'text-gray-600'
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Active Indicator */}
                <div className={`absolute bottom-4 right-4 w-3 h-3 rounded-full transition-all duration-300 ${
                  activeRoom === index ? 'bg-primary-500' : 'bg-transparent'
                }`} />
                  </button>
                )
              })}
            </div>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => {
              return (
                <button
                  key={room.id}
                  onClick={() => {
                    setActiveRoom(index)
                    setIsAutoPlaying(false)
                  }}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  className={`relative p-8 rounded-3xl text-left ${
                    activeRoom === index
                      ? 'bg-white shadow-2xl ring-2 ring-primary-200'
                      : 'bg-white/80 backdrop-blur-sm'
                  }`}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${room.gradient} ${
                    activeRoom === index ? 'opacity-10' : 'opacity-0'
                  }`} />
                  
                  {/* Room Image */}
                  <div className="aspect-[4/3] mb-6 rounded-2xl overflow-hidden">
                    <Image
                      src={room.image}
                      alt={room.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className={`font-bold text-2xl mb-2 transition-all duration-300 ${
                      activeRoom === index ? 'text-gray-900' : 'text-gray-800'
                    }`}>
                      {room.name}
                    </h3>
                    
                    <p className={`text-sm font-medium mb-4 transition-all duration-300 ${
                      activeRoom === index ? 'text-primary-600' : 'text-gray-600'
                    }`}>
                      {room.tagline}
                    </p>

                    <p className={`text-sm leading-relaxed mb-6 transition-all duration-300 ${
                      activeRoom === index ? 'text-gray-700' : 'text-gray-600'
                    }`}>
                      {room.description.slice(0, 120)}...
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {room.features.slice(0, 2).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                            activeRoom === index ? 'bg-primary-500' : 'bg-gray-400'
                          }`} />
                          <span className={`text-xs transition-colors duration-300 ${
                            activeRoom === index ? 'text-gray-700' : 'text-gray-600'
                          }`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Active Indicator */}
                  <div className={`absolute bottom-4 right-4 w-3 h-3 rounded-full transition-all duration-300 ${
                    activeRoom === index ? 'bg-primary-500' : 'bg-transparent'
                  }`} />
                </button>
              )
            })}
          </div>
        </div>

        {/* Detailed View */}
        <div className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left - Room Details */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currentRoom.gradient} flex items-center justify-center`}>
                      {activeRoom === 0 && <HeartIcon className="w-8 h-8 text-white" />}
                      {activeRoom === 1 && <HomeIcon className="w-8 h-8 text-white" />}
                      {activeRoom === 2 && <StarIcon className="w-8 h-8 text-white" />}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {currentRoom.name}
                      </h3>
                      <p className="text-lg text-primary-600 font-medium">
                        {currentRoom.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    {currentRoom.description}
                  </p>
                </div>

                {/* Features Grid */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Room Features</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {currentRoom.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentRoom.gradient}`} />
                        <span className="text-sm font-medium text-gray-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex space-x-4">
                  <Link
                    href="/rooms/"
                    className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    View All Rooms
                    <EyeIcon className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  
                  <Link
                    href="/contact/"
                    className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-2xl hover:border-primary-300 hover:text-primary-600 hover:scale-105 transition-all duration-300"
                  >
                    Book Now
                  </Link>
                </div>
              </div>

              {/* Right - Large Image */}
              <div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={currentRoom.image}
                    alt={currentRoom.name}
                    width={500}
                    height={375}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{activeRoom + 1}</div>
                    <div className="text-sm text-gray-600">of {rooms.length}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-4 mt-12 mb-8 py-4">
          {rooms.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveRoom(index)
                setIsAutoPlaying(false)
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeRoom ? 'bg-primary-500 scale-125' : 'bg-gray-300 hover:bg-primary-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}