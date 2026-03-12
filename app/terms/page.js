'use client'

import Layout from '../../components/Layout/Layout'
import { DocumentTextIcon } from '@heroicons/react/24/outline'

export default function TermsPage() {
  const lastUpdated = 'December 6, 2025'

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
            <div className="prose prose-gray max-w-none space-y-10">
              <div className="space-y-10">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <DocumentTextIcon className="w-6 h-6 mr-3 text-gray-600" />
                    Booking &amp; Payments
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Confirmation:</strong> A booking is confirmed only upon receipt of <strong>30% advance payment</strong>. Verbal confirmations are not valid.</li>
                    <li><strong>Balance Payment:</strong> The remaining <strong>70% balance</strong> must be cleared <strong>upon arrival/check-in</strong>. We do not offer credit.</li>
                    <li><strong>Security Deposit:</strong> A refundable security deposit of <strong>₹5,000 - ₹10,000</strong> (depending on group size) is collected at check-in. This is fully refunded at checkout, subject to a damage inspection.</li>
                    <li><strong>Taxes:</strong> Rates are exclusive of GST (18%) unless stated otherwise.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation &amp; Refund Policy</h2>
                  <p className="text-gray-700 mb-3">We understand plans change. Our policy is designed to be fair to both you and our business.</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>15+ Days before Check-in:</strong> 100% Refund (minus 5% bank processing fee).</li>
                    <li><strong>7-14 Days before Check-in:</strong> 50% Refund.</li>
                    <li><strong>Less than 7 Days:</strong> No Refund.</li>
                    <li><strong>Rescheduling:</strong> Dates can be moved free of cost if informed 14 days prior, subject to availability.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Check-in &amp; Identity</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Timings:</strong> Check-in: <strong>02:00 PM</strong> | Check-out: <strong>11:00 AM</strong>.</li>
                    <li><strong>ID Proofs:</strong> Every guest (above 18) must present a valid Photo ID (Aadhar Card, Passport, Driving License). <em>PAN Cards are NOT accepted as valid address proof.</em></li>
                    <li><strong>Foreign Nationals:</strong> Must present a valid Passport and Visa. Form C will be filed as per law.</li>
                  </ul>
                </section>

                <section className="bg-red-50 rounded-2xl border border-red-200 p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">The "Sanctuary" Rules (Noise &amp; Conduct)</h2>
                  <p className="text-gray-700 mb-2">We are located in a serene nature belt. To respect the local village and wildlife, we enforce the following:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Music Policy:</strong> Outdoor music (speakers/sound systems) is <strong>STRICTLY prohibited after 10:00 PM</strong>. You may play music indoors at a moderate volume.</li>
                    <li><strong>Drug Zero-Tolerance:</strong> Consumption or possession of illegal drugs/narcotics is strictly prohibited. We reserve the right to evict guests immediately without refund if found violating this law.</li>
                    <li><strong>Hookah/Shisha:</strong> Using coal hookahs inside the rooms is prohibited due to fire hazards. Please use outdoor designated areas only.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Pool Safety &amp; Indemnity (Crucial)</h2>
                  <p className="text-gray-700 mb-2">The "Blue Wave" pool is a private facility and does not have a lifeguard on duty.</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Swim at Your Own Risk:</strong> Guests are solely responsible for their safety. AGP Nature Villa is not liable for any accidents or injuries.</li>
                    <li><strong>Children:</strong> Minors (under 12) must be supervised by an adult at all times near the pool.</li>
                    <li><strong>Glassware:</strong> Absolutely <strong>NO glass bottles or glasses</strong> are allowed on the pool deck. Please use the plastic/fiber tumblers provided.</li>
                    <li><strong>Attire:</strong> Proper swimwear is mandatory. Street clothes (jeans/cotton) are not allowed in the pool.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Visitor Policy</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Our villa is for the exclusive use of booked guests.</li>
                    <li><strong>No Overnight Visitors:</strong> Only guests listed on the booking are allowed to sleep at the property.</li>
                    <li><strong>Day Visitors:</strong> Casual visitors (for a few hours) require prior approval and must leave by 9:00 PM.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Pet Policy ("Paws &amp; Rules")</h2>
                  <p className="text-gray-700 mb-2">We love hosting your furry friends! To keep the villa luxury-grade:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Pets are <strong>not allowed inside the swimming pool</strong>.</li>
                    <li>Please do not allow pets on the beds or sofas.</li>
                    <li>Owners are responsible for cleaning up after their pets in the garden.</li>
                    <li>Any damage caused by pets (chewed furniture, soiled linen) will be chargeable from the security deposit.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                  <p className="text-gray-700 mb-2">AGP Nature Villa, its owners, and staff are not responsible for:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Loss of cash, jewelry, or valuables.</li>
                    <li>Accidents or injuries occurring on the premises, including the pool and garden areas.</li>
                    <li>Power outages caused by the electricity board (though we have backup for lights/fans).</li>
                  </ul>
                </section>

                <section className="border-t border-gray-200 pt-6">
                  <p className="text-gray-700 italic">
                    By proceeding with the payment and booking, you acknowledge that you have read and agreed to these Terms &amp; Conditions.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
