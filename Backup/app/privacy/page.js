'use client'

import Layout from '../../components/Layout/Layout'
import { ShieldCheckIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

export default function PrivacyPage() {
  const lastUpdated = "December 6, 2025"

  return (
    <Layout>
      <div className="relative py-16 pb-16 bg-gradient-to-br from-slate-100 via-gray-50 to-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-500 to-slate-600 rounded-full mb-6">
              <ShieldCheckIcon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Last Updated: {lastUpdated}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-slate-600 mx-auto"></div>
          </div>

          {/* Content */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 lg:p-12 mb-8">
            <div className="prose prose-gray max-w-none space-y-10">
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed">
                  At AGP Nature Villa, we value your trust. This document explains how we handle your data, specifically regarding government compliance and security monitoring at our property.
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <DocumentTextIcon className="w-6 h-6 mr-3 text-gray-600" />
                  1. Information We Collect &amp; Why
                </h2>
                <p className="text-gray-700 mb-3">
                  Unlike digital-only businesses, as a hospitality provider in Rajasthan, we are required to collect specific physical data:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Guest Identity Data:</strong> We collect copies of Government IDs (Aadhar, Passport, Driving License) for every guest. <br /><em>Reason:</em> Mandatory compliance with local Police and Magistrate orders for tourist accommodation.</li>
                  <li><strong>Contact Details:</strong> Phone numbers and emails to send booking confirmations and location pins.</li>
                  <li><strong>Payment Data:</strong> We do not store credit card details on our servers. All payments are processed via secure third-party banking channels or UPI.</li>
                </ul>
              </section>

              <section className="bg-blue-50 border-l-4 border-blue-500 rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Security Cameras &amp; Surveillance (Important)</h2>
                <p className="text-gray-700 mb-2">To ensure the safety of our guests and the property, <strong>CCTV cameras are installed in the following outdoor public areas:</strong></p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Main Entrance Gate</li>
                  <li>Parking Area</li>
                  <li>Outer Perimeter Walls</li>
                </ul>
                <p className="text-gray-700 mt-3"><strong>Privacy Guarantee:</strong> There are ABSOLUTELY NO cameras inside bedrooms, bathrooms, the living room, or the pool deck area. Your privacy inside the living quarters is 100% respected.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">3. How We Share Your Data</h2>
                <p className="text-gray-700 mb-2">We do not sell your data. We only share information in the following strict scenarios:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Government Authorities:</strong> We are legally bound to submit guest details (Form C for foreigners) to the FRRO/Local Police Station if requested.</li>
                  <li><strong>Staff Communication:</strong> Your food preferences/allergies may be shared with our kitchen staff to prepare your meals.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Cookies &amp; Website Data</h2>
                <p className="text-gray-700 mb-2">Our website uses standard cookies to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Analyze traffic sources (e.g., to see if you found us via Google or Instagram).</li>
                  <li>Improve page loading speed.</li>
                </ul>
                <p className="text-gray-700 mt-2">You can disable cookies in your browser settings at any time.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Contact for Privacy Concerns</h2>
                <p className="text-gray-700 mb-2">
                  If you have questions about your data or wish to have your phone number removed from our marketing list, please contact:
                </p>
                <p className="text-gray-700">
                  <strong>AGP Nature Villa Management</strong><br />
                  Email:{' '}
                  <a href="mailto:agpnaturevilla@gmail.com" className="text-gray-600 hover:text-gray-800 underline transition-colors duration-200">
                    agpnaturevilla@gmail.com
                  </a>
                  <br />
                  Phone:{' '}
                  <a href="tel:+919892611983" className="text-gray-600 hover:text-gray-800 underline transition-colors duration-200">
                    +91 9892611983
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
