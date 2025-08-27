'use client'

import { useState, useEffect, useRef } from 'react'
import { PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid'

export default function FloatingButtons({ phone = '+91 9892611983', directionLink }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const buttonsRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonsRef.current && !buttonsRef.current.contains(event.target)) {
        setIsExpanded(false)
      }
    }

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isExpanded])

  const handleCall = (e) => {
    if (!isExpanded) {
      e.preventDefault()
      setIsExpanded(true)
      setTimeout(() => {
        window.location.href = `tel:${phone}`
      }, 300)
    }
  }

  const handleDirections = (e) => {
    if (!isExpanded) {
      e.preventDefault()
      setIsExpanded(true)
      setTimeout(() => {
        window.open(directionLink, '_blank', 'noopener,noreferrer')
      }, 300)
    }
  }

  return (
    <div className="fixed z-50">
      {/* Mobile - Bottom flat buttons */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="flex space-x-3 max-w-sm mx-auto">
          <a
            href={`tel:${phone}`}
            className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-3 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            <PhoneIcon className="w-5 h-5" />
            <span className="font-medium">Call Now</span>
          </a>
          
          <a
            href={directionLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-accent-600 hover:bg-accent-700 text-white px-4 py-3 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            <MapPinIcon className="w-5 h-5" />
            <span className="font-medium">Direction</span>
          </a>
        </div>
      </div>

      {/* Desktop - Right side center floating buttons with slide animation */}
      <div className="hidden md:block fixed right-8 top-1/2 transform -translate-y-1/2">
        <div className="flex flex-col space-y-4" ref={buttonsRef}>
          <a
            href={`tel:${phone}`}
            onClick={handleCall}
            className={`group bg-primary-600 hover:bg-primary-700 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center overflow-hidden ${
              isExpanded ? 'px-6 py-4 min-w-[140px]' : 'p-4 w-14 h-14 justify-center'
            }`}
            title="Call Now"
          >
            <PhoneIcon className="w-5 h-5 flex-shrink-0" />
            <span className={`font-medium whitespace-nowrap transition-all duration-300 ${
              isExpanded ? 'ml-3 opacity-100 max-w-[100px]' : 'ml-0 opacity-0 max-w-0'
            }`}>
              Call Now
            </span>
          </a>
          
          <a
            href={directionLink}
            onClick={handleDirections}
            className={`group bg-accent-600 hover:bg-accent-700 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center overflow-hidden ${
              isExpanded ? 'px-6 py-4 min-w-[140px]' : 'p-4 w-14 h-14 justify-center'
            }`}
            title="Get Direction"
          >
            <MapPinIcon className="w-5 h-5 flex-shrink-0" />
            <span className={`font-medium whitespace-nowrap transition-all duration-300 ${
              isExpanded ? 'ml-3 opacity-100 max-w-[100px]' : 'ml-0 opacity-0 max-w-0'
            }`}>
              Get Direction
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}