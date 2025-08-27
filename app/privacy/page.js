'use client'

import Layout from '../../components/Layout/Layout'
import { ShieldCheckIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

export default function PrivacyPage() {
  const lastUpdated = "January 2025"

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
            <div className="prose prose-gray max-w-none">
              
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Welcome to AGP Nature Villa. Your privacy is critically important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit or interact with our website at{' '}
                  <a href="https://agpnaturevilla.com/" className="text-gray-600 hover:text-gray-800 underline transition-colors duration-200">
                    https://agpnaturevilla.com/
                  </a>
                  . By using our website, you agree to the terms outlined in this Privacy Policy.
                </p>
              </div>

              <div className="space-y-10">
                {/* Information We Collect */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <DocumentTextIcon className="w-6 h-6 mr-3 text-gray-600" />
                    Information We Collect
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
                      <p className="text-gray-700 mb-4">
                        We may collect the following personal information when you voluntarily provide it to us:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Billing and mailing address</li>
                        <li>Payment information (when making bookings or purchases)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Non-Personal Information</h3>
                      <p className="text-gray-700 mb-4">
                        We may also collect non-personal information automatically, including:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                        <li>Browser type and version</li>
                        <li>Operating system</li>
                        <li>IP address</li>
                        <li>Geographic location</li>
                        <li>Pages viewed and time spent on the website</li>
                        <li>Referring website or search engine</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* How We Use Your Information */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                  <p className="text-gray-700 mb-4">
                    The information we collect is used to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Process bookings and transactions</li>
                    <li>Respond to inquiries and provide customer support</li>
                    <li>Send promotional offers and updates (with your consent)</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal requirements</li>
                  </ul>
                </section>

                {/* Cookies and Tracking Technologies */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
                  <p className="text-gray-700 mb-4">
                    Our website uses cookies and similar tracking technologies to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                    <li>Enhance user experience</li>
                    <li>Analyze website traffic and performance</li>
                    <li>Remember your preferences and settings</li>
                  </ul>
                  <p className="text-gray-700">
                    You can manage or disable cookies through your browser settings. Note that disabling cookies may affect your ability to use certain features of our website.
                  </p>
                </section>

                {/* Sharing Your Information */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Sharing Your Information</h2>
                  <p className="text-gray-700 mb-4">
                    We respect your privacy and will not sell, rent, or share your personal information with third parties except in the following cases:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>To complete transactions (e.g., payment processors)</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect the rights and safety of AGP Nature Villa and its users</li>
                  </ul>
                </section>

                {/* Data Security */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                  <p className="text-gray-700">
                    We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no online transmission or storage system can guarantee absolute security.
                  </p>
                </section>

                {/* Third-Party Services */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
                  <p className="text-gray-700">
                    Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties, and we encourage you to review their privacy policies.
                  </p>
                </section>

                {/* Your Rights */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                  <p className="text-gray-700 mb-4">
                    As a user, you have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Access:</strong> You can request access to the information we hold about you.</li>
                    <li><strong>Correction:</strong> You can request corrections to any inaccurate or incomplete information.</li>
                    <li><strong>Deletion:</strong> You can request the deletion of your personal information, subject to legal or contractual obligations.</li>
                    <li><strong>Opt-out:</strong> You can opt out of receiving promotional emails by following the unsubscribe instructions included in the emails.</li>
                  </ul>
                </section>

                {/* Changes to This Privacy Policy */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
                  <p className="text-gray-700">
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with the "Last Updated" date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
                  </p>
                </section>

                {/* Contact Us */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                  <p className="text-gray-700 mb-4">
                    If you have any questions or concerns about this Privacy Policy or how your data is handled, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-3">AGP Nature Villa</h3>
                    <div className="space-y-2 text-gray-700">
                      <p>
                        <strong>Email:</strong>{' '}
                        <a href="mailto:hello@agpnaturevilla.com" className="text-gray-600 hover:text-gray-800 underline transition-colors duration-200">
                          hello@agpnaturevilla.com
                        </a>
                        {' | '}
                        <a href="mailto:agpnaturevilla@gmail.com" className="text-gray-600 hover:text-gray-800 underline transition-colors duration-200">
                          agpnaturevilla@gmail.com
                        </a>
                      </p>
                      <p>
                        <strong>Phone:</strong>{' '}
                        <a href="tel:+919892611983" className="text-gray-600 hover:text-gray-800 underline transition-colors duration-200">
                          +91 9892611983
                        </a>
                      </p>
                      <p>
                        <strong>Address:</strong> 5, Dangiyo Ki Hundar, near Animal Aid, Udaipur, Rajasthan 313011
                      </p>
                    </div>
                  </div>
                </section>

                {/* Closing Statement */}
                <section className="border-t border-gray-200 pt-8">
                  <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-6 text-center">
                    <p className="text-gray-700 font-medium">
                      Thank you for trusting AGP Nature Villa with your information. We are committed to ensuring your privacy and providing a secure experience.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}