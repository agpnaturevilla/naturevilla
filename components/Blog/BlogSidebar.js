'use client'

import Link from 'next/link'
import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

function SearchWidget() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/blog/?search=${encodeURIComponent(searchQuery.trim())}`
    }
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Search Stories</h3>
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          placeholder="Search stories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-xl bg-white/50 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-200"
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center justify-center w-12 text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <MagnifyingGlassIcon className="h-5 w-5" />
        </button>
      </form>
    </div>
  )
}

function CategoriesWidget({ categories = [] }) {
  if (categories.length === 0) return null

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category}>
            <Link
              href={`/blog/?category=${encodeURIComponent(category)}`}
              className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-white/50 rounded-xl transition-all duration-200 capitalize font-medium"
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function TagsWidget({ tags = [] }) {
  if (tags.length === 0) return null

  // Show only first 20 tags
  const displayTags = tags.slice(0, 20)

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Tags</h3>
      <div className="flex flex-wrap gap-2">
        {displayTags.map((tag) => (
          <Link
            key={tag}
            href={`/blog/?tag=${encodeURIComponent(tag)}`}
            className="inline-flex items-center px-3 py-2 rounded-xl text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition-all duration-200 font-medium"
          >
            #{tag}
          </Link>
        ))}
      </div>
    </div>
  )
}

function NewsletterWidget() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email.trim()) return

    setStatus('subscribing')
    
    try {
      // Here you would typically send to your newsletter API
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus(''), 3000)
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus(''), 3000)
    }
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Stay Updated</h3>
      <p className="text-gray-600 mb-4 text-sm">
        Get the latest travel tips and villa updates delivered to your inbox.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white/50 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 text-sm transition-all duration-200"
        />
        <button
          type="submit"
          disabled={status === 'subscribing'}
          className="w-full bg-gradient-to-r from-gray-600 to-slate-700 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:transform-none"
        >
          {status === 'subscribing' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>

      {status === 'success' && (
        <p className="mt-3 text-sm text-green-600 font-medium">Thanks for subscribing!</p>
      )}
      {status === 'error' && (
        <p className="mt-3 text-sm text-red-600 font-medium">Something went wrong. Please try again.</p>
      )}
    </div>
  )
}

function AboutWidget() {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">About AGP Nature Villa</h3>
      <div className="space-y-4">
        <p className="text-gray-600 text-sm leading-relaxed">
          Nestled in the Aravali mountains near Udaipur, AGP Nature Villa offers 
          luxury accommodation with breathtaking views and modern amenities.
        </p>
        <div className="space-y-3 text-sm">
          <div className="flex items-center text-gray-600 p-2 bg-white/50 rounded-lg">
            <span className="font-semibold text-gray-900 w-20">Location:</span>
            Udaipur, Rajasthan
          </div>
          <div className="flex items-center text-gray-600 p-2 bg-white/50 rounded-lg">
            <span className="font-semibold text-gray-900 w-20">Capacity:</span>
            Up to 8 guests
          </div>
          <div className="flex items-center text-gray-600 p-2 bg-white/50 rounded-lg">
            <span className="font-semibold text-gray-900 w-20">Features:</span>
            Pool, Garden, Kitchen
          </div>
        </div>
        <Link
          href="/villa-in-udaipur/"
          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-600 to-slate-700 text-white text-sm font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
        >
          Learn More About Our Villa
          <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default function BlogSidebar({ categories = [], tags = [], currentPost = null }) {
  return (
    <aside className="space-y-8">
      <SearchWidget />
      
      {categories.length > 0 && (
        <CategoriesWidget categories={categories} />
      )}
      
      {tags.length > 0 && (
        <TagsWidget tags={tags} />
      )}
      
      <NewsletterWidget />
      
      <AboutWidget />
      
      {/* Book Now CTA */}
      <div className="bg-gradient-to-br from-gray-600 to-slate-700 rounded-2xl p-6 text-white shadow-2xl">
        <h3 className="text-lg font-semibold mb-2">Ready to Visit?</h3>
        <p className="text-gray-200 mb-4 text-sm">
          Experience the luxury and tranquility of AGP Nature Villa yourself.
        </p>
        <Link
          href="/contact/"
          className="inline-flex items-center justify-center w-full bg-white text-gray-800 px-4 py-3 rounded-xl text-sm font-semibold hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
        >
          Book Your Stay
        </Link>
      </div>
    </aside>
  )
}