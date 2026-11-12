import SitePage, { PageHead } from '../../components/Site/SitePage'

export const metadata = {
  title: 'Terms and Conditions',
  description: 'Booking, payment, cancellation, house rules, pet policy and liability terms for staying at AGP Nature Villa, Udaipur.',
  alternates: { canonical: 'https://agpnaturevilla.com/terms/' },
  openGraph: { title: 'Terms and Conditions', description: 'Booking, payment, cancellation, house rules, pet policy and liability terms for staying at AGP Nature Villa, Udaipur.', url: 'https://agpnaturevilla.com/terms/' },
}

export default function TermsPage() {
  const lastUpdated = 'December 6, 2025'

  return (
    <SitePage plain>
      <PageHead title="Terms and Conditions" note={`Last Updated: ${lastUpdated}`} />
      <article className="legal wrap">
              <div>
                <section>
                  <h2>
                    Booking &amp; Payments
                  </h2>
                  <ul>
                    <li><strong>Confirmation:</strong> A booking is confirmed only upon receipt of <strong>30% advance payment</strong>. Verbal confirmations are not valid.</li>
                    <li><strong>Balance Payment:</strong> The remaining <strong>70% balance</strong> must be cleared <strong>upon arrival/check-in</strong>. We do not offer credit.</li>
                    <li><strong>Security Deposit:</strong> A refundable security deposit of <strong>₹5,000 - ₹10,000</strong> (depending on group size) is collected at check-in. This is fully refunded at checkout, subject to a damage inspection.</li>
                    <li><strong>Taxes:</strong> Rates are exclusive of GST (18%) unless stated otherwise.</li>
                  </ul>
                </section>

                <section>
                  <h2>Cancellation &amp; Refund Policy</h2>
                  <p>We understand plans change. Our policy is designed to be fair to both you and our business.</p>
                  <ul>
                    <li><strong>15+ Days before Check-in:</strong> 100% Refund (minus 5% bank processing fee).</li>
                    <li><strong>7-14 Days before Check-in:</strong> 50% Refund.</li>
                    <li><strong>Less than 7 Days:</strong> No Refund.</li>
                    <li><strong>Rescheduling:</strong> Dates can be moved free of cost if informed 14 days prior, subject to availability.</li>
                  </ul>
                </section>

                <section>
                  <h2>Check-in &amp; Identity</h2>
                  <ul>
                    <li><strong>Timings:</strong> Check-in: <strong>02:00 PM</strong> | Check-out: <strong>11:00 AM</strong>.</li>
                    <li><strong>ID Proofs:</strong> Every guest (above 18) must present a valid Photo ID (Aadhar Card, Passport, Driving License). <em>PAN Cards are NOT accepted as valid address proof.</em></li>
                    <li><strong>Foreign Nationals:</strong> Must present a valid Passport and Visa. Form C will be filed as per law.</li>
                  </ul>
                </section>

                <section>
                  <h2>The "Sanctuary" Rules (Noise &amp; Conduct)</h2>
                  <p>We are located in a serene nature belt. To respect the local village and wildlife, we enforce the following:</p>
                  <ul>
                    <li><strong>Music Policy:</strong> Outdoor music (speakers/sound systems) is <strong>STRICTLY prohibited after 10:00 PM</strong>. You may play music indoors at a moderate volume.</li>
                    <li><strong>Drug Zero-Tolerance:</strong> Consumption or possession of illegal drugs/narcotics is strictly prohibited. We reserve the right to evict guests immediately without refund if found violating this law.</li>
                    <li><strong>Hookah/Shisha:</strong> Using coal hookahs inside the rooms is prohibited due to fire hazards. Please use outdoor designated areas only.</li>
                  </ul>
                </section>

                <section>
                  <h2>Pool Safety &amp; Indemnity (Crucial)</h2>
                  <p>The "Blue Wave" pool is a private facility and does not have a lifeguard on duty.</p>
                  <ul>
                    <li><strong>Swim at Your Own Risk:</strong> Guests are solely responsible for their safety. AGP Nature Villa is not liable for any accidents or injuries.</li>
                    <li><strong>Children:</strong> Minors (under 12) must be supervised by an adult at all times near the pool.</li>
                    <li><strong>Glassware:</strong> Absolutely <strong>NO glass bottles or glasses</strong> are allowed on the pool deck. Please use the plastic/fiber tumblers provided.</li>
                    <li><strong>Attire:</strong> Proper swimwear is mandatory. Street clothes (jeans/cotton) are not allowed in the pool.</li>
                  </ul>
                </section>

                <section>
                  <h2>Visitor Policy</h2>
                  <ul>
                    <li>Our villa is for the exclusive use of booked guests.</li>
                    <li><strong>No Overnight Visitors:</strong> Only guests listed on the booking are allowed to sleep at the property.</li>
                    <li><strong>Day Visitors:</strong> Casual visitors (for a few hours) require prior approval and must leave by 9:00 PM.</li>
                  </ul>
                </section>

                <section>
                  <h2>Pet Policy ("Paws &amp; Rules")</h2>
                  <p>We love hosting your furry friends! To keep the villa luxury-grade:</p>
                  <ul>
                    <li>Pets are <strong>not allowed inside the swimming pool</strong>.</li>
                    <li>Please do not allow pets on the beds or sofas.</li>
                    <li>Owners are responsible for cleaning up after their pets in the garden.</li>
                    <li>Any damage caused by pets (chewed furniture, soiled linen) will be chargeable from the security deposit.</li>
                  </ul>
                </section>

                <section>
                  <h2>Limitation of Liability</h2>
                  <p>AGP Nature Villa, its owners, and staff are not responsible for:</p>
                  <ul>
                    <li>Loss of cash, jewelry, or valuables.</li>
                    <li>Accidents or injuries occurring on the premises, including the pool and garden areas.</li>
                    <li>Power outages caused by the electricity board (though we have backup for lights/fans).</li>
                  </ul>
                </section>

                <section>
                  <p>
                    By proceeding with the payment and booking, you acknowledge that you have read and agreed to these Terms &amp; Conditions.
                  </p>
                </section>
              </div>
      </article>
    </SitePage>
  )
}
