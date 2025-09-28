'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HeartIcon, EyeIcon, HomeIcon, StarIcon, WifiIcon, TvIcon, AcademicCapIcon, CameraIcon } from '@heroicons/react/24/outline'

export default function DetailedRoomShowcase({ content, settings }) {
  const [activeRoom, setActiveRoom] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [imageGalleryIndex, setImageGalleryIndex] = useState({})
  const sectionRef = useRef(null)

  const {
    title = "Choose Your Perfect Room",
    subtitle = "Each room tells its own story, offers its own magic",
    rooms = [
      {
        id: 1,
        name: "Love Nest",
        tagline: "Where Hearts Find Home",
        description: "Love Nest wraps you in warm tones and quiet nooks—perfect for couples craving a romantic stay or parents dodging the kids' racket. Pillows fluffed to sink into, lights dialed soft, and corners that feel lived-in. Every detail whispers intimacy, with cozy corners bathed in golden light and peaceful mountain views.",
        shortDescription: "Intimate sanctuary for couples seeking romance and tranquility",
        features: ["King Size Bed", "Mountain Views", "Romantic Ambiance", "Reading Corner", "Mood Lighting"],
        amenities: ["AC", "WiFi", "TV", "Room Service"],
        images: ["/images/Rooms/image-1.jpg", "/images/Rooms/image-10.jpg"],
        gradient: "from-rose-500 via-pink-500 to-red-500",
        mood: "Intimate & Romantic",
        capacity: "2 guests",
        area: "320 sq ft",
        view: "Mountain & Garden"
      },
      {
        id: 2,
        name: "Mountain Peak",
        tagline: "Touch the Aravalis",
        description: "Mountain Peak throws the Aravalis in your face, glass walls letting the peaks leer back over morning tea. Wake up to jagged hills painting the horizon, where every sunrise feels like a personal performance. Floor-to-ceiling windows frame nature's theater, while the spacious layout gives you room to breathe and appreciate the raw beauty of Rajasthan's ancient mountains.",
        shortDescription: "Breathtaking mountain vistas through panoramic windows",
        features: ["Floor-to-Ceiling Windows", "Mountain Views", "Panoramic Vistas", "Spacious Layout", "Sunrise Views"],
        amenities: ["AC", "WiFi", "TV", "Work Desk"],
        images: ["/images/Rooms/image-3.jpg", "/images/Rooms/image-6.jpg"],
        gradient: "from-blue-500 via-indigo-500 to-purple-500",
        mood: "Majestic & Inspiring",
        capacity: "2-3 guests",
        area: "380 sq ft",
        view: "Aravali Mountains"
      },
      {
        id: 3,
        name: "Valley View",
        tagline: "Green Dreams Unfold",
        description: "Valley View pulls the valley close, a green sweep that feels like your own secret. Watch the landscape breathe with morning mist, where rolling greens stretch endlessly and peace settles into your soul. The spacious room becomes your peaceful retreat, while large windows blur the line between indoor comfort and outdoor serenity.",
        shortDescription: "Serene valley panoramas with private terrace retreat",
        features: ["Valley Panorama", "Nature Immersion", "Serene Atmosphere", "Garden Access", "Bird Watching"],
        amenities: ["AC", "WiFi", "TV"],
        images: ["/images/Rooms/image-4.jpg", "/images/Rooms/image-7.jpg"],
        gradient: "from-green-500 via-emerald-500 to-teal-500",
        mood: "Tranquil & Refreshing",
        capacity: "2-3 guests",
        area: "350 sq ft",
        view: "Valley & Gardens"
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

  // Initialize image gallery indices
  useEffect(() => {
    const initialIndices = {}
    rooms.forEach(room => {
      initialIndices[room.id] = 0
    })
    setImageGalleryIndex(initialIndices)
  }, [rooms])

  const currentRoom = rooms[activeRoom]

  const getRoomIcon = (roomId) => {
    switch(roomId) {
      case 1: return <HeartIcon className="w-8 h-8 text-white" />
      case 2: return <EyeIcon className="w-8 h-8 text-white" />
      case 3: return <HomeIcon className="w-8 h-8 text-white" />
      default: return <StarIcon className="w-8 h-8 text-white" />
    }
  }

  const getAmenityIcon = (amenity) => {
    switch(amenity.toLowerCase()) {
      case 'wifi': return <WifiIcon className="w-5 h-5 text-primary-600" />
      case 'tv': return <TvIcon className="w-5 h-5 text-primary-600" />
      case 'ac': return <AcademicCapIcon className="w-5 h-5 text-primary-600" />
      default: return <StarIcon className="w-5 h-5 text-primary-600" />
    }
  }

  const nextImage = (roomId) => {
    const room = rooms.find(r => r.id === roomId)
    if (room) {
      setImageGalleryIndex(prev => ({
        ...prev,
        [roomId]: (prev[roomId] + 1) % room.images.length
      }))
    }
  }

  return (
    <div id="room-details" ref={sectionRef} className="relative py-16 pb-24 bg-gray-50 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 transition-all duration-2000 ease-in-out opacity-5`}>
          <Image
            src={currentRoom?.images[0]}
            alt={currentRoom?.name}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${currentRoom?.gradient} opacity-30`} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 text-sm font-medium mb-6 border border-gray-200/50">
            <HomeIcon className="w-4 h-4 mr-2" />
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

        {/* Room Navigation Pills */}
        <div className={`flex justify-center mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-white/50">
            {rooms.map((room, index) => (
              <button
                key={room.id}
                onClick={() => setActiveRoom(index)}
                className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeRoom === index 
                    ? `bg-gradient-to-r ${room.gradient} text-white shadow-lg` 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                }`}
              >
                <span className="relative z-10">{room.name}</span>
                {activeRoom === index && (
                  <div className="absolute inset-0 bg-white/20 rounded-xl animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Active Room Showcase */}
        <div className={`mb-8 transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <div className="grid lg:grid-cols-2">
              
              {/* Left - Room Images */}
              <div className="relative">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={currentRoom.images[imageGalleryIndex[currentRoom.id] || 0]}
                    alt={currentRoom.name}
                    fill
                    className="object-cover transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${currentRoom.gradient} opacity-20`} />
                  
                  {/* Image Navigation */}
                  {currentRoom.images.length > 1 && (
                    <>
                      <button
                        onClick={() => nextImage(currentRoom.id)}
                        className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                      >
                        <CameraIcon className="w-6 h-6" />
                      </button>
                      
                      <div className="absolute bottom-4 left-4 flex space-x-2">
                        {currentRoom.images.map((_, imgIndex) => (
                          <button
                            key={imgIndex}
                            onClick={() => setImageGalleryIndex(prev => ({...prev, [currentRoom.id]: imgIndex}))}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              imgIndex === (imageGalleryIndex[currentRoom.id] || 0) ? 'bg-white scale-125' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
                
                {/* Room Stats Overlay */}
                <div className="absolute top-6 left-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currentRoom.gradient} flex items-center justify-center shadow-lg`}>
                    {getRoomIcon(currentRoom.id)}
                  </div>
                </div>

                {/* Room Full Description - Below Image */}
                <div className="mt-6 px-6 pb-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-100/50">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Experience {currentRoom.name}
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {currentRoom.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right - Room Details */}
              <div className="p-6 lg:p-8">
                <div className="space-y-6">
                  {/* Header */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${currentRoom.gradient} text-white`}>
                        {currentRoom.mood}
                      </span>
                      <div className="flex items-center space-x-2">
                        <StarIcon className="w-5 h-5 text-amber-400 fill-current" />
                        <span className="text-gray-600 font-medium">4.9</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                      {currentRoom.name}
                    </h3>
                    <p className={`text-lg font-medium mb-4 bg-gradient-to-r ${currentRoom.gradient} bg-clip-text text-transparent`}>
                      {currentRoom.tagline}
                    </p>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {currentRoom.shortDescription}
                    </p>
                  </div>

                  {/* Room Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4 pb-2 border-t border-gray-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{currentRoom.capacity}</div>
                      <div className="text-sm text-gray-500">Capacity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{currentRoom.beds}</div>
                      <div className="text-sm text-gray-500">Beds</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{currentRoom.area}</div>
                      <div className="text-sm text-gray-500">Area</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="-mt-2">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Room Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {currentRoom.features.slice(0, 6).map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentRoom.gradient}`} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Amenities</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentRoom.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-xl">
                          {getAmenityIcon(amenity)}
                          <span className="text-sm font-medium text-gray-700">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link
                      href="/contact/"
                      className={`group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r ${currentRoom.gradient} text-white font-semibold rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300`}
                    >
                      Book This Room
                      <HeartIcon className="ml-3 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </Link>
                    
                    <Link
                      href="/villa-in-udaipur/"
                      className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-2xl hover:border-primary-300 hover:text-primary-600 hover:scale-105 transition-all duration-300"
                    >
                      Explore Villa
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}