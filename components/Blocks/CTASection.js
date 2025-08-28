'use client'

import Link from 'next/link'
import { PhoneIcon, CalendarDaysIcon, StarIcon, MapPinIcon } from '@heroicons/react/24/solid'

export default function CTASection({ content, settings }) {
  const {
    title = 'Book Your Break Now',
    description = `Spots at AGP Nature Villa don't hang around. Fall through spring, the Aravalis turn crisp and clear—prime for a getaway. Call +91 9892611983 or lock it in on the site. Don't wait; this isn't the kind of place that sits quiet. Come see why AGP Nature Villa turns a quick trip into something you'll carry home.`,
    phone = '+91 9892611983',
    ctaText = 'Reserve Now',
    directionLink = 'http://maps.google.com/maps/dir/?api=1&destination=AGP%20Nature%20Villa%20-%20Villa%20in%20Udaipur,%205,%20Dangiyo%20Ki%20Hundar,%20near%20Animal%20Aid,%20Udaipur,%20Rajasthan%20313011',
    features = [
      'Peak Season Available',
      'Instant Booking', 
      'Mountain Views Guaranteed',
      'Personalized Experience'
    ]
  } = content || {}

  // Calculate years since establishment (2023)
  const currentYear = new Date().getFullYear()
  const establishedYear = 2023
  const yearsSinceEstablishment = currentYear - establishedYear + 1 // +1 to include the establishment year

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Decorative lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Main Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-primary-200 text-sm font-medium border border-white/20">
              <CalendarDaysIcon className="w-4 h-4 mr-2" />
              Your Mountain Escape Awaits
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-light text-white leading-tight">
                <span className="font-sans italic text-primary-300">Book Your</span>{' '}
                <span className="font-sans">Break Now</span>
              </h2>
              
              <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full mx-auto lg:mx-0"></div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-xl text-white/90 leading-relaxed font-light">
                {description.split('Call +91 9892611983')[0]}
                <span>Call </span>
                <a 
                  href={`tel:${phone}`}
                  className="text-primary-300 font-medium hover:text-primary-200 transition-colors duration-300 underline decoration-primary-400"
                >
                  {phone}
                </a>
                {description.split('Call +91 9892611983')[1]}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={`tel:${phone}`}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-primary-900 overflow-hidden rounded-full transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white to-primary-100 rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-accent-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center">
                  <PhoneIcon className="w-5 h-5 mr-3" />
                  Call Now
                </span>
              </a>
              
              <a
                href={directionLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white/40 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/60 hover:scale-105"
              >
                <MapPinIcon className="w-5 h-5 mr-3" />
                Get Directions
              </a>
            </div>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-center">
                <div className="text-4xl font-bold text-white mb-2">4.9</div>
                <div className="text-white/70">Average Rating</div>
                <div className="flex justify-center mt-3 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-amber-400" />
                  ))}
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-center">
                <div className="text-4xl font-bold text-white mb-2">24hr</div>
                <div className="text-white/70">Response Time</div>
                <div className="text-primary-300 text-sm mt-2 font-medium">Always Available</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-center">
                <div className="text-4xl font-bold text-white mb-2">3</div>
                <div className="text-white/70">Luxury Rooms</div>
                <div className="text-accent-300 text-sm mt-2 font-medium">Mountain Views</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-center">
                <div className="text-4xl font-bold text-white mb-2">2023</div>
                <div className="text-white/70">Established</div>
                <div className="text-green-300 text-sm mt-2 font-medium">{yearsSinceEstablishment}+ Years</div>
              </div>
            </div>

            {/* Urgency Badge */}
            <div className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl px-4 py-2 text-white font-bold text-xs transform rotate-6 shadow-lg animate-pulse">
              <div className="flex items-center">
                <CalendarDaysIcon className="w-3 h-3 mr-1" />
                Peak Season
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-16">
          <blockquote className="text-2xl lg:text-3xl font-light text-white/90 italic max-w-4xl mx-auto">
            "Don't wait; this isn't the kind of place that sits quiet."
          </blockquote>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto mt-6"></div>
        </div>

      </div>
    </section>
  )
}