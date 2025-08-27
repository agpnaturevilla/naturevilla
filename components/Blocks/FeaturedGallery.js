'use client'

import { useState } from 'react'
import Image from 'next/image'
import { PhotoIcon } from '@heroicons/react/24/outline'

export default function FeaturedGallery({ content, settings }) {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const {
    title = 'Villa Gallery',
    subtitle = 'Explore our luxurious spaces and amenities',
    categories = {
      all: 'All Photos',
      villa: 'Villa Exterior',
      rooms: 'Rooms',
      amenities: 'Pool & Kitchen'
    },
    images = {
      villa: [
        '/images/Villa/agp-nature-villa-outer-area.jpg',
        '/images/Villa/slider-image-1.jpg',
        '/images/Villa/slider-image-2.jpg',
        '/images/Villa/slider-image-3.jpg'
      ],
      rooms: [
        '/images/Rooms/image-1.jpg',
        '/images/Rooms/image-3.jpg',
        '/images/Rooms/image-4.jpg',
        '/images/Rooms/image-6.jpg'
      ],
      amenities: [
        '/images/Villa/pool-area-agp-nature-villa.jpg',
        '/images/Villa/open-kitchen-and-dining-area.jpg',
        '/images/Gallery/gallery-image-1.jpg',
        '/images/Gallery/gallery-image-2.jpg'
      ]
    }
  } = content || {}

  const getAllImages = () => {
    return [...images.villa, ...images.rooms, ...images.amenities]
  }

  const getFilteredImages = () => {
    if (selectedCategory === 'all') {
      return getAllImages()
    }
    return images[selectedCategory] || []
  }

  const filteredImages = getFilteredImages()

  return (
    <section className="relative py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-accent-100 rounded-full opacity-30 blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-6">
            <PhotoIcon className="w-4 h-4 mr-2" />
            Featured Images
          </div>
          
          <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            <span className="font-serif italic text-primary-600">Featured</span> Gallery
          </h3>
          
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mb-6"></div>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            {subtitle}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === key
                  ? 'bg-primary-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-primary-300 hover:bg-primary-50'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={`${selectedCategory}-${index}`}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
            >
              <div className="aspect-square relative">
                <Image
                  src={image}
                  alt={`AGP Nature Villa ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-sm font-medium">
                    {categories[selectedCategory] || 'Villa Photo'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Showing {filteredImages.length} photos
            {selectedCategory !== 'all' && (
              <span> in {categories[selectedCategory]}</span>
            )}
          </p>
        </div>

      </div>
    </section>
  )
}