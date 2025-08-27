'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'The Villa', href: '/villa-in-udaipur/' },
  { name: 'Rooms', href: '/rooms/' },
  { name: 'Contact', href: '/contact/' },
]

export default function Header({ style = 'default', isScrolled = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  if (!mounted) return null

  const isHome = pathname === '/'
  const isTransparent = style === 'transparent' && !isScrolled && isHome

  return (
    <>
      {/* Top bar - only show on desktop */}
      <div className="hidden lg:block bg-primary-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                <a href="tel:+919892611983" className="hover:text-primary-200 transition-colors">
                  +91 9892611983
                </a>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-4 w-4 mr-2" />
                <a href="mailto:hello@agpnaturevilla.com" className="hover:text-primary-200 transition-colors">
                  hello@agpnaturevilla.com
                </a>
              </div>
            </div>
            <div className="text-sm">
              <span>5, Dangiyo Ki Hundar near Animal Aid, Udaipur, Rajasthan 313011</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isTransparent 
          ? 'bg-transparent' 
          : 'bg-white shadow-md'
      }`}>
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="flex w-full items-center justify-between py-4 lg:py-6">
            {/* Mobile Logo - Centered */}
            <div className="flex items-center lg:hidden flex-1 justify-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logos/agp-nature-villa-logo-main.png"
                  alt="AGP Nature Villa"
                  width={160}
                  height={50}
                  className="h-12 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Layout - Three sections */}
            <div className="hidden lg:flex lg:w-full lg:items-center lg:justify-center">
              {/* Left Navigation */}
              <div className="flex items-center space-x-6 mr-12">
                {navigation.slice(0, 2).map((item) => {
                  const isActive = pathname === item.href || 
                    (item.href !== '/' && pathname.startsWith(item.href))

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? isTransparent
                            ? 'text-white border-b-2 border-white'
                            : 'text-primary-600 border-b-2 border-primary-600'
                          : isTransparent
                            ? 'text-gray-200 hover:text-white'
                            : 'text-gray-700 hover:text-primary-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                })}
              </div>

              {/* Center Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/images/logos/agp-nature-villa-logo-main.png"
                    alt="AGP Nature Villa"
                    width={160}
                    height={50}
                    className="h-12 w-auto"
                    priority
                  />
                </Link>
              </div>

              {/* Right Navigation */}
              <div className="flex items-center space-x-6 ml-12">
                {navigation.slice(2).map((item) => {
                  const isActive = pathname === item.href || 
                    (item.href !== '/' && pathname.startsWith(item.href))

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? isTransparent
                            ? 'text-white border-b-2 border-white'
                            : 'text-primary-600 border-b-2 border-primary-600'
                          : isTransparent
                            ? 'text-gray-200 hover:text-white'
                            : 'text-gray-700 hover:text-primary-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                })}
                
                {/* CTA Button */}
                <Link
                  href="/contact/"
                  className="bg-primary-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors duration-200 shadow-lg"
                >
                  Book Now
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className={`rounded-md p-2 inline-flex items-center justify-center ${
                  isTransparent 
                    ? 'text-white hover:bg-white hover:bg-opacity-20' 
                    : 'text-gray-700 hover:bg-gray-100'
                } transition-colors duration-200`}
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="fixed inset-0 z-50 flex">
              <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setMobileMenuOpen(false)} />
              <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white shadow-xl">
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>

                <div className="pb-4 pt-5 px-6">
                  <div className="flex items-center">
                    <Image
                      src="/images/logos/agp-nature-villa-logo-main.png"
                      alt="AGP Nature Villa"
                      width={120}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </div>
                </div>

                <nav className="mt-5 flex-1 px-6 space-y-1">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href || 
                      (item.href !== '/' && pathname.startsWith(item.href))

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`group flex items-center px-2 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                          isActive
                            ? 'bg-primary-50 text-primary-600 border-r-2 border-primary-600'
                            : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </nav>

                <div className="p-6 border-t border-gray-200">
                  <Link
                    href="/contact/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors duration-200 text-center block"
                  >
                    Book Now
                  </Link>
                  
                  <div className="mt-4 space-y-2">
                    <a href="tel:+919892611983" className="flex items-center text-sm text-gray-600">
                      <PhoneIcon className="h-4 w-4 mr-2" />
                      +91 9892611983
                    </a>
                    <a href="mailto:hello@agpnaturevilla.com" className="flex items-center text-sm text-gray-600">
                      <EnvelopeIcon className="h-4 w-4 mr-2" />
                      hello@agpnaturevilla.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}