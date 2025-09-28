'use client'

import Layout from '../../components/Layout/Layout'
import { DocumentTextIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function TermsPage() {
  const lastUpdated = "January 2025"

  return (
    <Layout>
      <div className="relative py-16 pb-16 bg-gradient-to-br from-slate-100 via-gray-50 to-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-500 to-slate-600 rounded-full mb-6">
              <DocumentTextIcon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
              Terms and Conditions
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
                  "Exceptional nature, a unique world"—at AGP Nature Villa, we're here to make your Udaipur getaway as magical as an Aravalli sunrise.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  To keep things running smoothly for everyone, we've put together these Terms and Conditions.
                  They're our way of setting clear expectations, so you can focus on soaking in the mountain views and sipping chai in our beautiful villa.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Let's go through the basics, shall we? If anything's unclear, just reach out—we're always up for a chat!
                </p>
              </div>

              <div className="space-y-10">
                {/* Booking and Reservation */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <DocumentTextIcon className="w-6 h-6 mr-3 text-gray-600" />
                    Booking and Reservation Terms
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Booking Confirmation</h3>
                      <p className="text-gray-700 mb-4">
                        Your booking is confirmed only upon receipt of the required advance payment and written confirmation from AGP Nature Villa.
                        We reserve the right to decline any booking request.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Payment Terms</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                        <li>30% advance payment required to confirm booking</li>
                        <li>Remaining 70% balance due upon check-in</li>
                        <li>Security deposit may be required and will be refunded after checkout</li>
                        <li>All payments subject to applicable taxes</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Minimum Stay Requirements</h3>
                      <p className="text-gray-700">
                        Minimum stay requirements vary by season. During peak periods (festivals, holidays),
                        extended minimum stays may apply. Please confirm at the time of booking.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Cancellation and Refund Policy */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation and Refund Policy</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Cancellation by Guest</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                        <li><strong>7+ days before arrival:</strong> Full refund minus processing charges</li>
                        <li><strong>3-6 days before arrival:</strong> 50% refund of total amount</li>
                        <li><strong>Less than 3 days:</strong> No refund</li>
                        <li><strong>No-show:</strong> Full charges apply</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Force Majeure</h3>
                      <p className="text-gray-700">
                        In case of circumstances beyond our control (natural disasters, government restrictions, etc.),
                        we will work with guests to reschedule or provide appropriate refunds.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Check-in and Check-out */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Check-in and Check-out Policies</h2>
                  <div className="space-y-4">
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li><strong>Check-in:</strong> 2:00 PM onwards</li>
                      <li><strong>Check-out:</strong> 11:00 AM</li>
                      <li><strong>Early check-in/Late check-out:</strong> Subject to availability and may incur additional charges</li>
                      <li><strong>Valid ID:</strong> Government-issued photo identification required for all guests</li>
                      <li><strong>Age requirement:</strong> Primary guest must be 18+ years old</li>
                    </ul>
                  </div>
                </section>

                {/* Guest Responsibilities */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Guest Responsibilities and Conduct</h2>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Guest Conduct</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Respect the property and surrounding environment</li>
                      <li>Comply with local laws and regulations</li>
                      <li>No smoking inside the villa (outdoor areas permitted)</li>
                      <li>Responsible alcohol consumption (guests 21+ only)</li>
                      <li>Noise levels to be maintained, especially during evening hours</li>
                      <li>Maximum occupancy limits must be respected</li>
                    </ul>
                  </div>
                </section>

                {/* Property Use and Amenities */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Use and Amenities</h2>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Included Amenities</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Private swimming pool access</li>
                      <li>Fully equipped open kitchen</li>
                      <li>Garden and outdoor spaces</li>
                      <li>Bonfire area</li>
                      <li>Basic housekeeping</li>
                      <li>Wi-Fi internet access</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Pool and Safety</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Pool use at guest's own risk</li>
                      <li>Children must be supervised at all times</li>
                      <li>Pool timing restrictions may apply</li>
                      <li>No lifeguard on duty</li>
                    </ul>
                  </div>
                </section>

                {/* Liability and Insurance */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Liability and Insurance</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Guests stay at AGP Nature Villa at their own risk. The villa owner and management are not liable for:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Personal injury or accidents on the property</li>
                      <li>Loss or theft of personal belongings</li>
                      <li>Damage to guest vehicles</li>
                      <li>Weather-related inconveniences</li>
                      <li>Power outages or utility disruptions</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      We strongly recommend guests obtain travel insurance to cover unforeseen circumstances.
                    </p>
                  </div>
                </section>

                {/* Damage and Security Deposit */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Damage and Security Deposit</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 mb-4">
                      Guests are responsible for any damage to the property beyond normal wear and tear:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Security deposit may be held to cover potential damages</li>
                      <li>Deposit refunded within 7 days after checkout if no damages</li>
                      <li>Repair costs will be deducted from security deposit</li>
                      <li>Guests liable for damages exceeding deposit amount</li>
                      <li>Smoking inside the villa incurs additional cleaning charges</li>
                    </ul>
                  </div>
                </section>

                {/* Pets Policy */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Pet Policy</h2>
                  <p className="text-gray-700 mb-4">
                    AGP Nature Villa welcomes well-behaved pets with prior approval:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Pet approval required during booking</li>
                    <li>Additional cleaning fee may apply</li>
                    <li>Pets must be supervised at all times</li>
                    <li>Owners responsible for pet behavior and any damages</li>
                  </ul>
                </section>

                {/* Privacy and Data Protection */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy and Data Protection</h2>
                  <p className="text-gray-700">
                    Your privacy is important to us. Guest information is collected solely for booking and
                    communication purposes. We do not share personal information with third parties except as
                    required by law. Please refer to our Privacy Policy for detailed information.
                  </p>
                </section>

                {/* Modifications to Terms */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Modifications to Terms</h2>
                  <p className="text-gray-700">
                    AGP Nature Villa reserves the right to modify these terms and conditions at any time.
                    Updated terms will be posted on our website. Bookings made before changes will honor
                    the original terms agreed upon at the time of booking.
                  </p>
                </section>

                {/* Governing Law */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
                  <p className="text-gray-700">
                    These terms and conditions are governed by the laws of India and the state of Rajasthan.
                    Any disputes shall be subject to the jurisdiction of courts in Udaipur, Rajasthan.
                  </p>
                </section>

                {/* Contact Information */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                  <p className="text-gray-700 mb-4">
                    For questions about these terms and conditions or your booking, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-3">AGP Nature Villa</h3>
                    <div className="space-y-2 text-gray-700">
                      <p>
                        <strong>Email:</strong>{' '}
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
                      <p>
                        <strong>Website:</strong>{' '}
                        <a href="https://agpnaturevilla.com/" className="text-gray-600 hover:text-gray-800 underline transition-colors duration-200">
                          https://agpnaturevilla.com/
                        </a>
                      </p>
                    </div>
                  </div>
                </section>

                {/* Acknowledgment */}
                <section className="border-t border-gray-200 pt-8">
                  <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-6 text-center">
                    <p className="text-gray-700 font-medium">
                      By making a booking with AGP Nature Villa, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
                    </p>
                    <p className="text-gray-600 mt-2">
                      Thank you for choosing AGP Nature Villa for your Udaipur getaway!
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