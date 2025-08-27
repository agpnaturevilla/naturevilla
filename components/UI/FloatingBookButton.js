'use client'

import { useState, useEffect } from 'react'
import { PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid'

export default function FloatingBookButton() {
  const [isVisible, setIsVisible] = useState(true) // Always visible in development

  useEffect(() => {
    // Always keep it visible for now - remove scroll logic
    setIsVisible(true)
  }, [])

  return (
    <div 
      className={`fixed bottom-4 left-4 right-4 z-[9999] md:hidden transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-20'
      }`}
    >
      <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
        <div className="grid grid-cols-2 divide-x divide-gray-200">
          <a
            href="tel:+919892611983"
            className="flex items-center justify-center py-4 px-4 bg-primary-600 hover:bg-primary-700 transition-colors duration-200 text-white font-semibold"
          >
            <PhoneIcon className="w-5 h-5 mr-2" />
            Call Now
          </a>
          <a
            href="https://maps.google.com/maps/dir/?api=1&destination=AGP%20Nature%20Villa,%20Udaipur"
            target="_blank"
            rel="noopener noreferrer" 
            className="flex items-center justify-center py-4 px-4 bg-green-600 hover:bg-green-700 transition-colors duration-200 text-white font-semibold"
          >
            <MapPinIcon className="w-5 h-5 mr-2" />
            Direction
          </a>
        </div>
      </div>
    </div>
  )
}