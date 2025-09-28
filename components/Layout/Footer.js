'use client'

import Link from 'next/link'
import Image from 'next/image'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'The Villa', href: '/villa-in-udaipur/' },
    { name: 'Rooms', href: '/rooms/' },
    { name: 'Customer FAQs', href: '/faqs/' },
    { name: 'Contact', href: '/contact/' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/agpnaturevilla',
      icon: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
          <path
            fill="#1877F2"
            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/agpnaturevilla',
      icon: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
          <defs>
            <radialGradient id="footer-instagram-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#405DE6" />
              <stop offset="25%" stopColor="#5851DB" />
              <stop offset="50%" stopColor="#833AB4" />
              <stop offset="75%" stopColor="#C13584" />
              <stop offset="100%" stopColor="#FD1D1D" />
            </radialGradient>
          </defs>
          <path
            fill="url(#footer-instagram-gradient)"
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
          />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/919892611983',
      icon: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
          <path
            fill="#25D366"
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"
          />
        </svg>
      ),
    },
  ],
}

const amenities = [
  'Private Swimming Pool',
  'Open Kitchen',
  'Large Garden',
  'Mountain Views',
  'Bonfire Area',
  'Outdoor Entertainment',
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Brand section */}
          <div className="lg:col-span-1 mb-8 lg:mb-0">
            <div className="flex items-center justify-center lg:justify-start">
              <Image
                src="/images/logos/agp-nature-villa-logo-main.png"
                alt="AGP Nature Villa"
                width={160}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <p className="mt-4 text-gray-300 text-sm leading-6 text-center lg:text-left">
              Experience the perfect blend of luxury and nature at AGP Nature Villa. 
              Nestled amidst the Aravali mountains, our villa offers an unforgettable 
              stay with modern amenities and breathtaking views.
            </p>
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase text-center lg:text-left">
                Follow Us
              </h3>
              <div className="mt-4 flex justify-center lg:justify-start space-x-6">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity duration-200"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:col-span-2">
            {/* Quick Links & Amenities */}
            <div className="space-y-8 sm:space-y-0 sm:grid sm:grid-cols-1 md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase text-center sm:text-left">
                  Quick Links
                </h3>
                <ul className="mt-4 space-y-3 text-center sm:text-left">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 sm:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase text-center sm:text-left">
                  Villa Amenities
                </h3>
                <ul className="mt-4 space-y-3 text-center sm:text-left">
                  {amenities.map((amenity) => (
                    <li key={amenity} className="text-sm sm:text-base text-gray-300">
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 sm:mt-0">
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase text-center sm:text-left">
                Contact Information
              </h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-start justify-center sm:justify-start">
                  <MapPinIcon className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
                  <div className="ml-3 text-center sm:text-left">
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      5, Dangiyo Ki Hundar near Animal Aid<br />
                      Udaipur, Rajasthan 313011<br />
                      India
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center sm:justify-start">
                  <PhoneIcon className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <a
                    href="tel:+919892611983"
                    className="ml-3 text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    +91 9892611983
                  </a>
                </div>
                <div className="flex items-center justify-center sm:justify-start">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <a
                    href="mailto:agpnaturevilla@gmail.com"
                    className="ml-3 text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200 break-all"
                  >
                    agpnaturevilla@gmail.com
                  </a>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 text-center sm:text-left">
                <Link
                  href="/contact/"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200 shadow-lg"
                >
                  Book Your Stay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="order-2 md:order-1">
              <p className="text-center text-xs sm:text-sm text-gray-400 leading-relaxed">
                &copy; {currentYear} AGP Nature Villa. All rights reserved. Made with{' '}
                <HeartIcon className="h-4 w-4 inline text-red-500" /> in Udaipur.
              </p>
            </div>
            <div className="order-1 md:order-2 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6">
              <Link
                href="/privacy/"
                className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200 text-center"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms/"
                className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200 text-center"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap.xml"
                className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200 text-center"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}