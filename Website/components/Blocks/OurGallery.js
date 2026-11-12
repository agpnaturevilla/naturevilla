'use client'

import { useState } from 'react'
import Image from 'next/image'
import { PhotoIcon, XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { GeometricDivider, GradientDivider } from '../UI/SectionDividers'

export default function OurGallery({ content, settings }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const {
    title = 'OUR Gallery',
    subtitle = 'Discover the beauty and luxury of AGP Nature Villa through our curated collection of images',
    images = [
      '/images/Gallery/gallery-image-1.jpg',
      '/images/Gallery/gallery-image-2.jpg',
      '/images/Gallery/gallery-image-3.jpg',
      '/images/Gallery/gallery-image-4.jpg',
      '/images/Gallery/gallery-image-5.jpg',
      '/images/Gallery/gallery-image-6.jpg',
      '/images/Gallery/gallery-image-7.jpg',
      '/images/Gallery/gallery-image-8.jpg',
      '/images/Gallery/gallery-image-9.jpg',
      '/images/Gallery/gallery-image-10.jpg',
      '/images/Gallery/gallery-image-11.jpg',
      '/images/Villa/slider-image-1.jpg'
    ]
  } = content || {}

  const openLightbox = (image, index) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length
    setCurrentIndex(nextIndex)
    setSelectedImage(images[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length
    setCurrentIndex(prevIndex)
    setSelectedImage(images[prevIndex])
  }

  return (
    <section className="relative py-16 bg-gradient-to-br from-primary-100 via-primary-50 to-primary-200 overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-8">
            <PhotoIcon className="w-4 h-4 mr-2" />
            Visual Experience
          </div>
          
          <h3 className="text-4xl font-light text-gray-900 mb-8 leading-tight" style={{ fontSize: '2.25rem' }}>
Our Gallery
          </h3>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mb-8"></div>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Gallery Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                openLightbox(image, index)
              }}
            >
              
              {/* Actual Villa Image */}
              <div className="aspect-[4/3] relative">
                <Image
                  src={image}
                  alt={`AGP Nature Villa Gallery ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-semibold text-lg mb-2">
                    Villa Gallery {index + 1}
                  </h4>
                  <p className="text-white/80 text-sm">
                    Experience luxury at its finest
                  </p>
                </div>
              </div>

              {/* View button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                  <PhotoIcon className="w-8 h-8 text-white" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Gallery Slider - Mobile */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto gap-4 pb-6 scrollbar-hide" style={{ scrollSnapType: 'x mandatory' }}>
            {images.map((image, index) => (
              <div 
                key={`mobile-${index}`}
                className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer flex-none w-80"
                style={{ scrollSnapAlign: 'start' }}
                onClick={(e) => {
                  e.preventDefault()
                  openLightbox(image, index)
                }}
              >
                
                {/* Actual Villa Image */}
                <div className="aspect-[4/3] relative">
                  <Image
                    src={image}
                    alt={`AGP Nature Villa Gallery ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="320px"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-semibold text-lg mb-2">
                      Villa Gallery {index + 1}
                    </h4>
                    <p className="text-white/80 text-sm">
                      Experience luxury at its finest
                    </p>
                  </div>
                </div>

                {/* View button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                    <PhotoIcon className="w-8 h-8 text-white" />
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-[10000] w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <XMarkIcon className="w-7 h-7" />
          </button>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-[10000] w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <ChevronLeftIcon className="w-7 h-7" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-[10000] w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <ChevronRightIcon className="w-7 h-7" />
              </button>
            </>
          )}

          {/* Main Image Container */}
          <div 
            className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt={`AGP Nature Villa Gallery ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 text-white text-lg font-medium border border-white/20">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  )
}