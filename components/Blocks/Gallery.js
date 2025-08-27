'use client'

import { useState } from 'react'
import Image from 'next/image'
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export default function Gallery({ content, settings }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const {
    title = 'Photo Gallery',
    subtitle,
    images = [],
    categories = ['all']
  } = content || {}

  const {
    columns = 3,
    showCategories = false,
    spacing = 'gap-4'
  } = settings || {}

  const [activeCategory, setActiveCategory] = useState('all')

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory)

  const openLightbox = (image, index) => {
    setSelectedImage(image)
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (lightboxIndex + 1) % filteredImages.length
    setLightboxIndex(nextIndex)
    setSelectedImage(filteredImages[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = (lightboxIndex - 1 + filteredImages.length) % filteredImages.length
    setLightboxIndex(prevIndex)
    setSelectedImage(filteredImages[prevIndex])
  }

  const getGridCols = () => {
    switch (columns) {
      case 2: return 'grid-cols-1 sm:grid-cols-2'
      case 3: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      case 4: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
      default: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
    }
  }

  if (!images.length) return null

  return (
    <>
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>

          {showCategories && categories.length > 1 && (
            <div className="flex justify-center mb-8">
              <div className="flex space-x-2 bg-white rounded-lg p-1 shadow">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 capitalize ${
                      activeCategory === category
                        ? 'bg-primary-600 text-white shadow'
                        : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className={`grid ${getGridCols()} ${spacing} masonry-grid`}>
            {filteredImages.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                onClick={() => openLightbox(image, index)}
              >
                <div className="aspect-w-4 aspect-h-3">
                  <Image
                    src={image.src}
                    alt={image.alt || `Gallery image ${index + 1}`}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </div>
                
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white rounded-full p-3">
                      <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {image.title && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white font-medium text-sm">
                      {image.title}
                    </h3>
                    {image.description && (
                      <p className="text-gray-200 text-xs mt-1">
                        {image.description}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <div className="relative max-w-5xl max-h-full p-4">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>

            <div className="relative">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt || 'Gallery image'}
                width={1200}
                height={800}
                className="max-w-full max-h-[80vh] object-contain"
              />

              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200"
                  >
                    <ChevronLeftIcon className="h-8 w-8" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200"
                  >
                    <ChevronRightIcon className="h-8 w-8" />
                  </button>
                </>
              )}
            </div>

            {(selectedImage.title || selectedImage.description) && (
              <div className="mt-4 text-center text-white">
                {selectedImage.title && (
                  <h3 className="text-xl font-medium mb-2">
                    {selectedImage.title}
                  </h3>
                )}
                {selectedImage.description && (
                  <p className="text-gray-300">
                    {selectedImage.description}
                  </p>
                )}
              </div>
            )}

            <div className="flex justify-center mt-4 text-sm text-gray-400">
              {lightboxIndex + 1} of {filteredImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  )
}