'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon, HomeIcon, StarIcon, UsersIcon } from '@heroicons/react/24/outline'

export default function RoomHero({ content, settings }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const {
    title = 'Luxury Rooms',
    subtitle = 'Your Perfect Mountain Retreat',
    description = 'Three beautifully designed rooms, each offering a unique perspective of the majestic Aravali mountains. From intimate romance to panoramic vistas, find your perfect sanctuary.',
    images = [
      '/images/Rooms/image-1.jpg',
      '/images/Rooms/image-3.jpg',
      '/images/Rooms/image-4.jpg',
      '/images/Rooms/image-6.jpg'
    ],
    stats = {
      rooms: 3,
      capacity: '2-3 guests per room',
      amenities: '15+ luxury amenities',
      rating: 4.9
    }
  } = content || {}

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* Dynamic Background Images with Ken Burns Effect */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
              index === currentImageIndex ? 'opacity-70 scale-110' : 'opacity-0 scale-100'
            }`}
          >
            <Image
              src={image}
              alt={`AGP Nature Villa Room ${index + 1}`}
              fill
              className="object-cover object-center transition-transform duration-20000 ease-out"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-gray-900/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 via-transparent to-gray-900/50" />
      </div>

      {/* Floating Statistics Cards */}
      <div className="absolute top-20 right-8 z-20 space-y-4 hidden lg:block">
        <div className={`bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 transition-all duration-1000 delay-500 ${
          isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
        }`}>
          <div className="flex items-center space-x-3">
            <StarIcon className="h-6 w-6 text-amber-400" />
            <div>
              <div className="text-white font-bold text-xl">{stats.rating}</div>
              <div className="text-white/70 text-xs">Guest Rating</div>
            </div>
          </div>
        </div>
        
        <div className={`bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 transition-all duration-1000 delay-700 ${
          isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
        }`}>
          <div className="flex items-center space-x-3">
            <HomeIcon className="h-6 w-6 text-primary-400" />
            <div>
              <div className="text-white font-bold text-xl">{stats.rooms}</div>
              <div className="text-white/70 text-xs">Luxury Rooms</div>
            </div>
          </div>
        </div>

        <div className={`bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 transition-all duration-1000 delay-900 ${
          isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
        }`}>
          <div className="flex items-center space-x-3">
            <UsersIcon className="h-6 w-6 text-green-400" />
            <div>
              <div className="text-white font-bold text-sm">4</div>
              <div className="text-white/70 text-xs">Guests/Room</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center pt-0 pb-8 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Title and Description */}
            <div className="space-y-8">
              {/* Mobile Statistics Cards - Above Experience Text */}
              <div className={`lg:hidden mb-6 mt-8 transition-all duration-1000 delay-200 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <div className="flex flex-wrap gap-3 justify-center">
                  <div className="bg-white/10 backdrop-blur-xl rounded-xl px-3 py-2 border border-white/20 flex items-center space-x-2">
                    <StarIcon className="h-4 w-4 text-amber-400" />
                    <div>
                      <div className="text-white font-bold text-sm">{stats.rating}</div>
                      <div className="text-white/70 text-xs">Rating</div>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-xl rounded-xl px-3 py-2 border border-white/20 flex items-center space-x-2">
                    <HomeIcon className="h-4 w-4 text-primary-400" />
                    <div>
                      <div className="text-white font-bold text-sm">{stats.rooms}</div>
                      <div className="text-white/70 text-xs">Rooms</div>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-xl rounded-xl px-3 py-2 border border-white/20 flex items-center space-x-2">
                    <UsersIcon className="h-4 w-4 text-green-400" />
                    <div>
                      <div className="text-white font-bold text-sm">4</div>
                      <div className="text-white/70 text-xs">Guests</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-1000 delay-300 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <div className="inline-flex items-center px-4 py-2 bg-primary-500/20 backdrop-blur-sm rounded-full text-primary-300 text-sm font-medium mb-6 border border-primary-400/30">
                  <HomeIcon className="w-4 h-4 mr-2" />
                  Three Unique Experiences • Aravali Mountains
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-light text-white leading-tight tracking-tight mb-6">
                  <span className="block text-3xl lg:text-5xl text-primary-300 font-serif italic mb-2">
                    {subtitle}
                  </span>
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {title}
                  </span>
                </h1>
                
                <div className="h-1 w-32 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 rounded-full mb-8"></div>
              </div>

              <div className={`transition-all duration-1000 delay-500 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-8 font-light">
                  {description}
                </p>
                
                <p className="text-lg text-white/70 leading-relaxed mb-8">
                  Whether you seek romance, mountain vistas, or valley tranquility, our thoughtfully designed rooms provide the perfect backdrop for your <span className="text-primary-400 font-semibold">unforgettable mountain escape</span>.
                </p>
              </div>

              <div className={`flex flex-col sm:flex-row gap-4 mb-8 transition-all duration-1000 delay-700 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <Link
                  href="/contact/"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">
                    Book Your Stay
                  </span>
                </Link>
                
                <button
                  onClick={() => document.getElementById('room-details').scrollIntoView({ behavior: 'smooth' })}
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white/40 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/60 hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-3 opacity-70 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Explore Rooms
                </button>
              </div>
            </div>

            {/* Right Column - Image Thumbnails */}
            <div className="hidden lg:block">
              <div className="overflow-visible">
                <div className={`grid grid-cols-2 gap-4 p-6 transition-all duration-1000 delay-900 ${
                  isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}>
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`relative group cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 ${
                      index === currentImageIndex ? 'ring-4 ring-primary-400 scale-105' : 'hover:scale-105'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <div className="aspect-square relative">
                      <Image
                        src={image}
                        alt={`Room view ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className={`absolute inset-0 ring-2 ring-white/30 rounded-2xl transition-all duration-300 ${
                        index === currentImageIndex ? 'ring-primary-400 ring-4' : ''
                      }`} />
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}