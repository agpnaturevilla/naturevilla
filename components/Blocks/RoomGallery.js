'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon, CameraIcon } from '@heroicons/react/24/outline'

export default function RoomGallery({ content, settings }) {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentCategory, setCurrentCategory] = useState('all')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const sectionRef = useRef(null)
  const sliderRef = useRef(null)

  const {
    title = "Room Gallery",
    subtitle = "Explore every corner of luxury and comfort",
    categories = [
      { id: 'all', name: 'All Rooms', count: 8 },
      { id: 'love-nest', name: 'Love Nest', count: 2 },
      { id: 'mountain-peak', name: 'Mountain Peak', count: 3 },
      { id: 'valley-view', name: 'Valley View', count: 3 }
    ],
    images = [
      {
        id: 1,
        src: '/images/Rooms/image-1.jpg',
        category: 'love-nest',
        title: 'Love Nest - Romantic Ambiance',
        description: 'Intimate setting with warm tones and cozy corners'
      },
      {
        id: 2,
        src: '/images/Rooms/image-10.jpg',
        category: 'love-nest', 
        title: 'Love Nest - Reading Corner',
        description: 'Perfect nook for quiet moments together'
      },
      {
        id: 3,
        src: '/images/Rooms/image-3.jpg',
        category: 'mountain-peak',
        title: 'Mountain Peak - Panoramic Views',
        description: 'Floor-to-ceiling windows framing the Aravalis'
      },
      {
        id: 4,
        src: '/images/Rooms/image-6.jpg',
        category: 'mountain-peak',
        title: 'Mountain Peak - Morning Light',
        description: 'Wake up to breathtaking sunrise views'
      },
      {
        id: 5,
        src: '/images/Rooms/image-4.jpg',
        category: 'valley-view',
        title: 'Valley View - Green Serenity',
        description: 'Rolling green valleys as far as the eye can see'
      },
      {
        id: 6,
        src: '/images/Rooms/image-7.jpg',
        category: 'valley-view',
        title: 'Valley View - Private Terrace',
        description: 'Your personal outdoor sanctuary'
      },
      {
        id: 7,
        src: '/images/Rooms/image-8.jpg',
        category: 'mountain-peak',
        title: 'Mountain Peak - Spacious Interior',
        description: 'Generous space with mountain-inspired design'
      },
      {
        id: 8,
        src: '/images/Rooms/image-9.jpg',
        category: 'valley-view',
        title: 'Valley View - Natural Light',
        description: 'Sun-drenched spaces overlooking the valley'
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

  const filteredImages = currentCategory === 'all' 
    ? images 
    : images.filter(img => img.category === currentCategory)

  // Reset slide when category changes
  useEffect(() => {
    setCurrentSlide(0)
  }, [currentCategory])

  // Touch handlers for mobile swiping
  const handleTouchStart = (e) => {
    setTouchEnd(0) // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev >= filteredImages.length - 1 ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev <= 0 ? filteredImages.length - 1 : prev - 1
    )
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const openLightbox = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    let newIndex
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    }
    
    setSelectedImage(filteredImages[newIndex])
  }

  return (
    <>
      <div ref={sectionRef} className="relative py-16 bg-gray-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-100 via-transparent to-accent-100"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 text-sm font-medium mb-6 border border-gray-200/50">
              <CameraIcon className="w-4 h-4 mr-2" />
              Visual Tour
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              {title}
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mb-8" />
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              {subtitle}
            </p>
          </div>

          {/* Category Filters */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Mobile - 2x2 Grid */}
            <div className="grid grid-cols-2 gap-3 mb-12 md:hidden">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setCurrentCategory(category.id)}
                  className={`px-4 py-3 rounded-2xl font-medium transition-all duration-300 text-center ${
                    currentCategory === category.id
                      ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg scale-105'
                      : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md hover:scale-105 border border-gray-200/50'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-1">
                    <span className="text-sm font-semibold">{category.name}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      currentCategory === category.id ? 'bg-white/20 text-white' : 'bg-primary-100 text-primary-700'
                    }`}>
                      {category.count} photos
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Desktop - Horizontal Layout */}
            <div className="hidden md:flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setCurrentCategory(category.id)}
                  className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                    currentCategory === category.id
                      ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg scale-105'
                      : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md hover:scale-105 border border-gray-200/50'
                  }`}
                >
                  {category.name}
                  <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                    currentCategory === category.id ? 'bg-white/20' : 'bg-primary-100 text-primary-700'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Image Gallery - Mobile Slider */}
          <div className={`md:hidden transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Mobile Slider */}
            <div 
              className="relative overflow-hidden rounded-2xl"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              ref={sliderRef}
            >
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`
                }}
              >
                {filteredImages.map((image, index) => (
                  <div
                    key={image.id}
                    className="w-full flex-shrink-0"
                    onClick={() => openLightbox(image)}
                  >
                    <div className="relative aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-lg mx-2">
                      <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        className="object-cover block"
                        sizes="100vw"
                        priority={index === currentSlide}
                      />
                      
                      {/* Mobile Overlay - Always visible */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      
                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                        <p className="text-sm text-white/90">{image.description}</p>
                      </div>
                      
                      {/* Image Counter */}
                      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
                        {index + 1} / {filteredImages.length}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                disabled={filteredImages.length <= 1}
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                disabled={filteredImages.length <= 1}
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Slide Indicators */}
            <div className="flex justify-center space-x-2 mt-4">
              {filteredImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-primary-500 scale-125' 
                      : 'bg-gray-300 hover:bg-primary-300'
                  }`}
                />
              ))}
            </div>

            {/* Swipe Hint */}
            <div className="text-center mt-4">
              <p className="text-sm text-gray-500">← Swipe to explore more images →</p>
            </div>
          </div>

          {/* Image Gallery - Desktop Grid */}
          <div className={`hidden md:block transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                  onClick={() => openLightbox(image)}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="relative overflow-hidden aspect-square">
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover block transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      priority={index < 4}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                      <p className="text-sm text-white/90">{image.description}</p>
                    </div>
                    
                    {/* Camera Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <CameraIcon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/50">
              <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-6">
                Ready to Experience These Rooms?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Pictures tell a story, but the real magic happens when you step inside. 
                Book your perfect room and create memories that will last a lifetime.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Book Your Room Now
                </a>
                
                <a
                  href="tel:+919892611983"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 text-primary-700 font-semibold rounded-2xl hover:bg-primary-50 transition-all duration-300"
                >
                  Call for Availability
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
          <div className="absolute inset-0 flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>

            {/* Main Image */}
            <div className="relative max-w-5xl max-h-[80vh] w-full h-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
                <p className="text-white/90">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}