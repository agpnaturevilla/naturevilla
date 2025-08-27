'use client'

import { useState, useEffect } from 'react'
import { ChevronUpIcon } from '@heroicons/react/24/outline'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110"
      aria-label="Scroll to top"
    >
      <ChevronUpIcon className="h-6 w-6" />
    </button>
  )
}