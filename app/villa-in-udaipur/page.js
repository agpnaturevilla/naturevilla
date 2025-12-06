'use client'

import { useEffect } from 'react'

export default function VillaRedirect() {
  useEffect(() => {
    // Immediate redirect to home page
    if (typeof window !== 'undefined') {
      window.location.href = '/'
    }
  }, [])

  return (
    <>
      <head>
        <meta httpEquiv="refresh" content="0; url=/" />
        <link rel="canonical" href="https://agpnaturevilla.com/" />
      </head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Redirecting to home page...</p>
        </div>
      </div>
    </>
  )
}
