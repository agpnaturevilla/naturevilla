'use client'

import Image from 'next/image'

export default function SignatureAmenities({ content }) {
  const {
    headline = 'Curated Spaces for Every Mood',
    amenities = [
      {
        name: 'The "Blue Wave" Private Pool',
        description: 'Dive into our 242 sq. ft. crystal-clear private pool. Unlike hotel pools with restricted timings, the Blue Wave is yours 24/7. Whether it\'s a sunrise swim or a midnight dip under the stars, the water is always inviting.',
        image: '/images/Villa/pool-area-agp-nature-villa.jpg'
      },
      {
        name: '"Laziz" & "The Little Paris" Kitchens',
        description: 'Food tastes better when it\'s fresh. Use "Laziz," our fully equipped modern indoor kitchen, to whip up comfort food for your kids. For the evenings, step out to "The Little Paris," our chic open-air kitchenette perfect for barbecues, cocktails, and dining alfresco with a mountain view.',
        image: '/images/Villa/open-kitchen.jpg'
      },
      {
        name: 'The "Infinity Garden"',
        description: 'A sprawling 2000 sq. ft. lawn that lives up to its name. It is the perfect stage for your intimate events, morning yoga sessions, or simply letting your pets stretch their legs in a secure, walled environment.',
        image: '/images/Villa/villa-gallery/villa-outdoor-area-1.jpg'
      },
      {
        name: '"Heat Heaven" Bonfire Area',
        description: 'As the desert air cools at night, gather around Heat Heaven. Perfect for winter evenings, acoustic music sessions, and roasting marshmallows with family.',
        image: '/images/Villa/villa-gallery/bonfire-place.jpg'
      }
    ]
  } = content || {}

  return (
    <section className="relative py-12 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.5) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-light text-gray-900 mb-4 leading-tight" style={{ fontSize: '2.25rem' }}>
            {headline}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full mx-auto"></div>
        </div>

        {/* Amenities Grid - 2x2 Layout */}
        <div className="grid md:grid-cols-2 gap-8 pb-4">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={amenity.image}
                  alt={amenity.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {amenity.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
