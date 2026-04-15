'use client'

import { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from '../UI/ScrollToTop'
import FloatingButtons from '../UI/FloatingButtons'

export default function Layout({ children, headerStyle = 'default' }) {
  const [isScrolled, setIsScrolled] = useState(false)
  
  // Debug log
  console.log('Layout component is rendering')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header style={headerStyle} isScrolled={isScrolled} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
      <FloatingButtons 
        phone="+91 9892611983"
        directionLink="https://maps.google.com/?q=24.6802778,73.6234722"
      />
    </div>
  )
}