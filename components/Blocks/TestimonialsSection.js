'use client'

import { useState, useEffect } from 'react'
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { UserCircleIcon } from '@heroicons/react/24/outline'

export default function TestimonialsSection({ content, settings }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const {
    title = 'What Our Guests Say',
    subtitle = 'Real experiences from families and couples who made AGP Nature Villa their mountain retreat',
    testimonials = [
      {
        id: 1,
        name: 'Geetu Lamba',
        location: 'Udaipur',
        rating: 5,
        text: 'Had a great experience. Amazing place to stay, well maintained. The host, Mr. Gaurav, is very cooperative & friendly. Highly recommended 👍😍😍',
        experience: 'Family Stay',
        image: '/images/testimonials/family1.jpg'
      },
      {
        id: 2,
        name: 'Kunal Meena',
        location: 'Udaipur',
        rating: 5,
        text: 'The place is located in a quiet and tranquil place in the outskirts of Udaipur. The villa has great pool and so many cute spaces to enjoy your time over on a weekend with your family. The rooms were clean and spacious surrounded by lush greens. Loved the stay over here.',
        experience: 'Family Weekend',
        image: '/images/testimonials/family2.jpg'
      },
      {
        id: 3,
        name: 'Ajay Singh Panwar',
        location: 'Udaipur',
        rating: 5,
        text: 'Visited Last Friday on this Location. It\'s Amazing, Nature and mountain view is awesome. Nice property and facility. Good Location for Peacefully time spending with Friends and family.',
        experience: 'Friends & Family',
        image: '/images/testimonials/group1.jpg'
      },
      {
        id: 4,
        name: 'Aarzu Katara',
        location: 'Udaipur',
        rating: 5,
        text: 'Unforgettable experience at AGP nature villa! From the moment we arrived, the warm and welcoming staff made us feel right at home. The accommodations were immaculate, with spacious rooms offering stunning views of the surrounding landscape also the nature in way truly relaxes the soul.',
        experience: 'Nature Retreat',
        image: '/images/testimonials/couple1.jpg'
      },
      {
        id: 5,
        name: 'Sakshi Bhatt',
        location: 'Udaipur',
        rating: 5,
        text: 'Agp nature Villa is a ultimate heaven for those who want to spend quality time with friends and family. Beautiful lush green surroundings, perfect pool space and peace you will find there. Overall we had an amazing experience at this property.',
        experience: 'Friends & Family',
        image: '/images/testimonials/solo1.jpg'
      }
    ]
  } = content || {}

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[activeTestimonial]

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-white via-primary-50 to-primary-100">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.5) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-primary-600 rounded-full text-white text-sm font-medium mb-8 shadow-lg">
            <StarIcon className="w-4 h-4 mr-2" />
            Guest Experiences
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8 leading-tight">
            <span className="font-sans italic text-primary-600">{title.split(' ').slice(0, 2).join(' ')}</span>{' '}
            <span className="font-sans">{title.split(' ').slice(2).join(' ')}</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full mx-auto mb-8"></div>
          
          <p className="text-xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Mobile: Sliding Cards */}
        <div className="md:hidden px-4 py-8">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide px-4 py-4" style={{ scrollSnapType: 'x mandatory' }}>
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="bg-white rounded-3xl overflow-hidden border border-primary-200/50 flex-shrink-0 w-80"
                style={{
                  boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 4px 16px -4px rgba(0, 0, 0, 0.08)',
                  scrollSnapAlign: 'center'
                }}
              >
                <div className="p-6">
                  
                  {/* Quote */}
                  <div className="relative mb-6">
                    <svg className="absolute -top-4 -left-4 w-10 h-10 text-primary-600/20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                    <blockquote className="font-light text-gray-700 leading-relaxed pl-6 text-lg">
                      "{testimonial.text}"
                    </blockquote>
                  </div>

                  <div className="flex flex-col gap-4 text-center">
                    {/* Guest Info */}
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center shadow-lg">
                        <UserCircleIcon className="w-8 h-8 text-white" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xl font-semibold text-gray-900">{testimonial.name}</h4>
                        <div className="text-gray-600">
                          <span className="text-sm">{testimonial.experience}</span>
                        </div>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex flex-col items-center">
                      <div className="flex space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} className="h-6 w-6 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-gray-900 font-semibold">Excellent Review</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Single Card Display */}
        <div className="hidden md:block max-w-6xl mx-auto">
          
          {/* Featured Testimonial Card */}
          <div className="bg-white rounded-3xl overflow-hidden border border-primary-200/50" style={{
            boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 4px 16px -4px rgba(0, 0, 0, 0.08)'
          }}>
            <div className="p-6 md:p-12 lg:p-16">
              
              {/* Quote */}
              <div className="relative mb-6 md:mb-8">
                <svg className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-10 h-10 md:w-16 md:h-16 text-primary-600/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <blockquote className="font-light text-gray-700 leading-relaxed pl-6 md:pl-8 text-lg md:text-xl lg:text-2xl">
                  "{currentTestimonial.text}"
                </blockquote>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-center md:text-left">
                {/* Guest Info */}
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center shadow-lg">
                    <UserCircleIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold text-gray-900">{currentTestimonial.name}</h4>
                    <div className="text-gray-600">
                      <span className="text-sm">{currentTestimonial.experience}</span>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex flex-col items-center md:items-end">
                  <div className="flex space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-6 w-6 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-gray-900 font-semibold">Excellent Review</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation - Desktop Only */}
        <div className="hidden md:flex items-center justify-center space-x-4 mt-8 mb-4">
          <button
            onClick={prevTestimonial}
            className="w-14 h-14 rounded-full bg-white shadow-lg border border-primary-200 flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-all duration-300"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <div className="flex space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveTestimonial(index)
                  setIsAutoPlaying(false)
                }}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === activeTestimonial ? 'bg-primary-600 scale-125' : 'bg-primary-200 hover:bg-primary-400'
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextTestimonial}
            className="w-14 h-14 rounded-full bg-white shadow-lg border border-primary-200 flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-all duration-300"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>


      </div>
    </section>
  )
}