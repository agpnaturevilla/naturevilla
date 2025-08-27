'use client'

import { useState } from 'react'
import { useAuth } from './AdminProvider'
import { MagnifyingGlassIcon, BellIcon } from '@heroicons/react/24/outline'

export default function AdminHeader() {
  const [searchQuery, setSearchQuery] = useState('')
  const { user } = useAuth()

  const handleSearch = (e) => {
    e.preventDefault()
    // Implement search functionality
    console.log('Searching for:', searchQuery)
  }

  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form className="relative flex flex-1" onSubmit={handleSearch}>
          <label htmlFor="search-field" className="sr-only">
            Search
          </label>
          <MagnifyingGlassIcon
            className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
            aria-hidden="true"
          />
          <input
            id="search-field"
            className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
            placeholder="Search pages, blog posts, media..."
            type="search"
            name="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
        
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          {/* Notifications */}
          <button
            type="button"
            className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
            {/* Notification badge */}
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
              3
            </span>
          </button>

          {/* Separator */}
          <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" />

          {/* Quick actions */}
          <div className="flex items-center gap-x-2">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              View Site
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}