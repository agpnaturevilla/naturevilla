'use client'

import { useState } from 'react'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

// Social media icons as SVG components
const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24">
    <defs>
      <radialGradient id="instagram-gradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#405DE6" />
        <stop offset="25%" stopColor="#5851DB" />
        <stop offset="50%" stopColor="#833AB4" />
        <stop offset="75%" stopColor="#C13584" />
        <stop offset="100%" stopColor="#FD1D1D" />
      </radialGradient>
    </defs>
    <path fill="url(#instagram-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const WhatsAppIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
)

export default function Contact({ content, settings }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const {
    title = 'Get in Touch',
    subtitle = 'Ready for an unforgettable stay? Let\'s make your dream vacation a reality',
    contactInfo = {
      phone: '+91 9892611983',
      email: 'agpnaturevilla@gmail.com',
      address: '5, Dangiyo Ki Hundar near Animal Aid, Udaipur, Rajasthan 313011',
      hours: '24/7 Available'
    }
  } = content || {}

  const { showMap = true, layout = 'split' } = settings || {}

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thank you! We\'ll get back to you soon.' })
        setFormData({
          name: '',
          email: '',
          phone: '',
          checkIn: '',
          checkOut: '',
          guests: '2',
          message: ''
        })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Sorry, there was an error sending your message. Please try again or call us directly.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: PhoneIcon,
      title: 'Call Us',
      description: 'Speak directly with our team',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
      color: 'gray'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Us',
      description: 'Drop us a message anytime',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      color: 'gray'
    },
    {
      icon: MapPinIcon,
      title: 'Visit Us',
      description: 'Come see our beautiful location',
      value: 'Udaipur, Rajasthan',
      href: 'https://maps.google.com/maps/dir/?api=1&destination=AGP%20Nature%20Villa,%20Udaipur',
      color: 'gray'
    },
    {
      icon: ClockIcon,
      title: 'Availability',
      description: 'We\'re here when you need us',
      value: contactInfo.hours,
      color: 'gray'
    }
  ]

  const socialLinks = [
    {
      icon: FacebookIcon,
      name: 'Facebook',
      href: 'https://www.facebook.com/agpnaturevilla'
    },
    {
      icon: InstagramIcon,
      name: 'Instagram', 
      href: 'https://www.instagram.com/agpnaturevilla'
    },
    {
      icon: WhatsAppIcon,
      name: 'WhatsApp',
      href: `https://wa.me/${contactInfo.phone.replace(/\D/g, '')}`
    }
  ]

  return (
    <div className="relative py-20 pb-16">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-gray-50 to-slate-200"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-500 to-slate-600 rounded-full mb-6">
            <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="group">
              {method.href ? (
                <a 
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block h-full"
                >
                  <ContactMethodCard method={method} />
                </a>
              ) : (
                <ContactMethodCard method={method} />
              )}
            </div>
          ))}
        </div>

        <div className={`grid ${layout === 'split' ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-12 pb-8`}>
          {/* Enhanced Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gray-500 to-slate-600 rounded-xl mr-4">
                  <SparklesIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Plan Your Stay</h3>
                  <p className="text-gray-600">Tell us about your perfect getaway</p>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-gray-800 flex items-center">
                    <UserGroupIcon className="w-5 h-5 mr-2 text-emerald-600" />
                    Personal Information
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-white/50"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-white/50"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-white/50"
                        placeholder="+91 9876543210"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
                        Number of Guests
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-white/50"
                      >
                        {[1,2,3,4,5,6,7,8].map(num => (
                          <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Stay Details */}
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-gray-800 flex items-center">
                    <CalendarDaysIcon className="w-5 h-5 mr-2 text-emerald-600" />
                    Stay Details
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700">
                        Check-in Date
                      </label>
                      <input
                        type="date"
                        id="checkIn"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-white/50"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700">
                        Check-out Date
                      </label>
                      <input
                        type="date"
                        id="checkOut"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        min={formData.checkIn || new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-white/50"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Tell us about your ideal stay
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-white/50 resize-none"
                    placeholder="Share your special requirements, occasions you're celebrating, activities you're interested in, or any questions you have..."
                  ></textarea>
                </div>

                {submitStatus && (
                  <div className={`rounded-xl p-4 ${
                    submitStatus.type === 'success' ? 'bg-emerald-50 border border-emerald-200' : 'bg-red-50 border border-red-200'
                  }`}>
                    <div className="flex">
                      {submitStatus.type === 'success' ? (
                        <CheckCircleIcon className="h-5 w-5 text-emerald-500" />
                      ) : (
                        <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                      )}
                      <p className={`ml-3 text-sm font-medium ${
                        submitStatus.type === 'success' ? 'text-emerald-800' : 'text-red-800'
                      }`}>
                        {submitStatus.message}
                      </p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative overflow-hidden bg-gradient-to-r from-gray-600 to-slate-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  <div className="relative flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <SparklesIcon className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* Enhanced Location & Map */}
          <div className="order-1 lg:order-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gray-500 to-slate-600 rounded-xl mr-4">
                  <MapPinIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Visit Our Villa</h3>
                  <p className="text-gray-600">Located in the heart of nature</p>
                </div>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="p-4 bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Our Address</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {contactInfo.address}
                  </p>
                </div>
                

                {/* Social Media Links */}
                <div className="pt-6">
                  <h4 className="font-semibold text-gray-900 mb-4 text-center">Follow Us</h4>
                  <div className="flex justify-center space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-3 bg-white/50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-200"
                        title={social.name}
                      >
                        <social.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {showMap && (
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.0123456789!2d73.691544!3d24.57127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDM0JzE2LjYiTiA3M8KwNDEnMjkuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="AGP Nature Villa Location"
                    ></iframe>
                  </div>
                  <div className="absolute top-4 right-4">
                    <a
                      href="https://maps.google.com/maps/dir/?api=1&destination=AGP%20Nature%20Villa,%20Udaipur"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-medium rounded-lg shadow-lg hover:bg-white transition-all duration-200"
                    >
                      <MapPinIcon className="w-4 h-4 mr-2" />
                      Get Directions
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ContactMethodCard({ method }) {
  const colorClasses = {
    gray: 'from-gray-500 to-slate-600 group-hover:from-gray-600 group-hover:to-slate-700'
  }

  return (
    <div className="h-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 text-center transform group-hover:scale-105 group-hover:shadow-xl transition-all duration-200">
      <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${colorClasses[method.color]} rounded-xl mb-4`}>
        <method.icon className="w-6 h-6 text-white" />
      </div>
      <h4 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h4>
      <p className="text-sm text-gray-600 mb-3">{method.description}</p>
      <p className="text-sm font-semibold text-gray-900">{method.value}</p>
    </div>
  )
}