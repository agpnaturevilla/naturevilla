'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from './AdminProvider'
import {
  HomeIcon,
  DocumentTextIcon,
  NewspaperIcon,
  PhotoIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  UsersIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: HomeIcon },
  { name: 'Pages', href: '/admin/pages', icon: DocumentTextIcon },
  { name: 'Blog', href: '/admin/blog', icon: NewspaperIcon },
  { name: 'Media Library', href: '/admin/media', icon: PhotoIcon },
  { name: 'Analytics', href: '/admin/analytics', icon: ChartBarIcon },
  { name: 'Users', href: '/admin/users', icon: UsersIcon, adminOnly: true },
  { name: 'Settings', href: '/admin/settings', icon: Cog6ToothIcon, adminOnly: true },
]

export default function AdminSidebar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { user, logout } = useAuth()

  const filteredNavigation = navigation.filter(item => 
    !item.adminOnly || (item.adminOnly && user?.role === 'admin')
  )

  const isActive = (href) => {
    if (href === '/admin') {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between bg-white border-b border-gray-200 px-4 py-2">
          <div className="flex items-center">
            <img
              className="h-8 w-8"
              src="/logo.svg"
              alt="AGP Nature Villa"
            />
            <span className="ml-2 text-lg font-semibold text-gray-900">Admin</span>
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 flex">
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setMobileMenuOpen(false)} />
            <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <XMarkIcon className="h-6 w-6 text-white" />
                </button>
              </div>
              <Sidebar />
            </div>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <Sidebar />
      </div>
    </>
  )

  function Sidebar() {
    return (
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 shadow-xl">
        <div className="flex h-16 shrink-0 items-center">
          <img
            className="h-8 w-auto"
            src="/logo.svg"
            alt="AGP Nature Villa"
          />
          <span className="ml-3 text-xl font-bold text-gray-900">AGP Admin</span>
        </div>
        
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {filteredNavigation.map((item) => {
                  const active = isActive(item.href)
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold ${
                          active
                            ? 'bg-primary-50 text-primary-600'
                            : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <item.icon
                          className={`h-6 w-6 shrink-0 ${
                            active ? 'text-primary-600' : 'text-gray-400 group-hover:text-primary-600'
                          }`}
                        />
                        {item.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </li>
            
            <li className="mt-auto">
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center gap-x-4 px-2 py-3 text-sm font-semibold leading-6 text-gray-900">
                  <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-sm font-medium text-primary-700">
                      {user?.name?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                    <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
                  </div>
                </div>
                
                <button
                  onClick={logout}
                  className="group flex w-full gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-700 hover:text-red-600 hover:bg-red-50"
                >
                  <ArrowRightOnRectangleIcon className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-red-600" />
                  Sign out
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}