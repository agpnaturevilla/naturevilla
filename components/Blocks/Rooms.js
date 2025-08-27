'use client'

import Image from 'next/image'
import Link from 'next/link'
import { 
  UserGroupIcon, 
  WifiIcon, 
  TvIcon, 
  FireIcon,
  SparklesIcon,
  HomeIcon
} from '@heroicons/react/24/outline'

const amenityIcons = {
  wifi: WifiIcon,
  tv: TvIcon,
  fire: FireIcon,
  sparkles: SparklesIcon,
  home: HomeIcon,
  users: UserGroupIcon
}

export default function Rooms({ content, settings }) {
  const {
    title = 'Our Rooms',
    subtitle = 'Choose from our beautifully designed rooms',
    rooms = [
      {
        name: 'Love Nest',
        description: 'A cozy and romantic room with warm tones and intimate atmosphere',
        image: '/images/room-default.svg',
        capacity: 2,
        amenities: ['wifi', 'tv', 'fire'],
        features: [
          'King-size bed',
          'Private balcony',
          'Mountain view',
          'En-suite bathroom'
        ]
      },
      {
        name: 'Mountain Peak',
        description: 'Rooms with stunning views of the craggy hills and mountains',
        image: '/images/room-default.svg',
        capacity: 4,
        amenities: ['wifi', 'tv', 'sparkles'],
        features: [
          'Two double beds',
          'Panoramic windows',
          'Sitting area',
          'Premium amenities'
        ]
      },
      {
        name: 'Valley View',
        description: 'Enjoy sweeping views of green landscapes and valleys',
        image: '/images/room-default.svg',
        capacity: 3,
        amenities: ['wifi', 'tv', 'home'],
        features: [
          'Queen bed + single',
          'Large windows',
          'Work desk',
          'Garden access'
        ]
      }
    ]
  } = content || {}

  const { layout = 'grid' } = settings || {}

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className={`${
          layout === 'grid' 
            ? 'grid gap-8 md:grid-cols-2 lg:grid-cols-3'
            : 'space-y-12'
        }`}>
          {rooms.map((room, index) => (
            <div
              key={room.name}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2">
                    <UserGroupIcon className="h-5 w-5" />
                    <span className="text-sm font-medium">Up to {room.capacity} guests</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {room.name}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {room.description}
                </p>

                {room.features && room.features.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                      Features
                    </h4>
                    <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                      {room.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {room.amenities && room.amenities.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                      Amenities
                    </h4>
                    <div className="flex space-x-3">
                      {room.amenities.map((amenity) => {
                        const Icon = amenityIcons[amenity] || HomeIcon
                        return (
                          <div
                            key={amenity}
                            className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center"
                            title={amenity}
                          >
                            <Icon className="h-5 w-5 text-primary-600" />
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
                >
                  Book This Room
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Need help choosing the perfect room for your stay?
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center px-6 py-3 border border-primary-600 text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 transition-colors duration-200"
          >
            Contact Us for Recommendations
          </Link>
        </div>
      </div>
    </div>
  )
}