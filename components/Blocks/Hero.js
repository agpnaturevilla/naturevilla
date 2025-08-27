'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeftIcon, ChevronRightIcon, StarIcon, PlayIcon } from '@heroicons/react/24/solid'

export default function Hero({ content, settings }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)

  const {
    title = 'AGP Nature Villa',
    subtitle = 'Best Luxurious Villa in Udaipur',
    description = 'A beautiful villa cum Homestay nestled amidst the Aravali mountains of Udaipur is a perfect destination to spend time with your family or friends. The care and comfort given here at our property is very personalized.',
    ctaText = 'Book Your Stay',
    ctaLink = '/contact/',
    images = [
      '/images/hero-villa.svg',
      '/images/hero-pool.svg',
      '/images/placeholder.svg'
    ],
    showRating = true,
    rating = 4.9,
    reviewCount = 182
  } = content || {}

  const slides = images.length > 0 ? images : ['/images/hero-default.jpg']

  useEffect(() => {
    setIsLoaded(true)
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [slides.length, isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <div className="hero-section relative min-h-screen overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900" style={{overflowX: 'hidden', scrollbarWidth: 'none'}}>
      {/* Background slides with parallax effect */}
      <div className="absolute inset-0">
        {slides.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
          >
            <Image
              src={image}
              alt={`Villa view ${index + 1}`}
              fill
              className="object-cover object-center transition-transform duration-[10000ms] ease-out hover:scale-110"
              priority={index === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
          </div>
        ))}
      </div>

      {/* Simple decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-white/50 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-white/45 rounded-full animate-pulse delay-2000"></div>

      {/* Navigation arrows with luxury design */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-30 group"
            aria-label="Previous slide"
          >
            <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110 group-hover:border-white/30">
              <ChevronLeftIcon className="h-6 w-6 text-white group-hover:text-white" />
            </div>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-8 top-1/2 -translate-y-1/2 z-30 group"
            aria-label="Next slide"
          >
            <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110 group-hover:border-white/30">
              <ChevronRightIcon className="h-6 w-6 text-white group-hover:text-white" />
            </div>
          </button>
        </>
      )}

      {/* Content overlay with sophisticated typography */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left column - Main content */}
            <div className={`space-y-8 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
              {showRating && rating && (
                <div className="flex items-center space-x-3 mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(rating) ? 'text-amber-400' : 'text-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-white">
                    <span className="font-semibold text-lg">{rating}</span>
                    <span className="text-white/80 ml-2">({reviewCount} reviews)</span>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-light text-white leading-tight tracking-tight">
                  <span className="font-serif italic text-4xl lg:text-6xl text-primary-200 block mb-2">
                    AGP Nature Villa
                  </span>
                  <br />
                  <span className="font-sans font-extralight text-3xl lg:text-5xl">
                    Best Luxurious Villa in Udaipur
                  </span>
                </h1>
                
                <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
                
                <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl font-light">
                  {description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Link
                  href={ctaLink}
                  className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-medium text-white overflow-hidden rounded-full transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center">
                    {ctaText}
                    <svg className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
                
                <Link
                  href="/villa-in-udaipur/"
                  className="group inline-flex items-center justify-center px-10 py-4 text-lg font-medium text-white border-2 border-white/40 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/60 hover:scale-105"
                >
                  <PlayIcon className="w-5 h-5 mr-3 opacity-70 group-hover:opacity-100" />
                  Explore Villa
                </Link>
              </div>
            </div>

            {/* Right column - Feature cards - Hidden on mobile */}
            <div className="hidden xl:block">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M10.5 3L12 2l1.5 1L15 3v5H9V3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">3 AC Bedrooms</h3>
                      <p className="text-white/70">Air-conditioned rooms with attached washrooms</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">Private Pool</h3>
                      <p className="text-white/70">Exclusive swimming pool with mountain views</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">Mountain Views</h3>
                      <p className="text-white/70">Breathtaking Aravali mountain scenery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant slide indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
          <div className="flex space-x-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/40 hover:bg-white/70 hover:scale-110'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}

    </div>
  )
}