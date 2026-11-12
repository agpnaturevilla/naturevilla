import SitePage, { PageHead } from '../../components/Site/SitePage'

export const metadata = {
  title: 'Privacy Policy',
  description: 'How AGP Nature Villa collects, uses and shares guest data, including government ID requirements in Rajasthan, CCTV locations and website cookies.',
  alternates: { canonical: 'https://agpnaturevilla.com/privacy/' },
  openGraph: { title: 'Privacy Policy', description: 'How AGP Nature Villa collects, uses and shares guest data, including government ID requirements in Rajasthan, CCTV locations and website cookies.', url: 'https://agpnaturevilla.com/privacy/' },
}

export default function PrivacyPage() {
  const lastUpdated = "December 6, 2025"

  return (
    <SitePage plain>
      <PageHead title="Privacy Policy" note={`Last Updated: ${lastUpdated}`} />
      <article className="legal wrap">
              <div>
                <p>
                  At AGP Nature Villa, we value your trust. This document explains how we handle your data, specifically regarding government compliance and security monitoring at our property.
                </p>
              </div>

              <section>
                <h2>
                  1. Information We Collect &amp; Why
                </h2>
                <p>
                  Unlike digital-only businesses, as a hospitality provider in Rajasthan, we are required to collect specific physical data:
                </p>
                <ul>
                  <li><strong>Guest Identity Data:</strong> We collect copies of Government IDs (Aadhar, Passport, Driving License) for every guest. <br /><em>Reason:</em> Mandatory compliance with local Police and Magistrate orders for tourist accommodation.</li>
                  <li><strong>Contact Details:</strong> Phone numbers and emails to send booking confirmations and location pins.</li>
                  <li><strong>Payment Data:</strong> We do not store credit card details on our servers. All payments are processed via secure third-party banking channels or UPI.</li>
                </ul>
              </section>

              <section>
                <h2>2. Security Cameras &amp; Surveillance (Important)</h2>
                <p>To ensure the safety of our guests and the property, <strong>CCTV cameras are installed in the following outdoor public areas:</strong></p>
                <ul>
                  <li>Main Entrance Gate</li>
                  <li>Parking Area</li>
                  <li>Outer Perimeter Walls</li>
                </ul>
                <p><strong>Privacy Guarantee:</strong> There are ABSOLUTELY NO cameras inside bedrooms, bathrooms, the living room, or the pool deck area. Your privacy inside the living quarters is 100% respected.</p>
              </section>

              <section>
                <h2>3. How We Share Your Data</h2>
                <p>We do not sell your data. We only share information in the following strict scenarios:</p>
                <ul>
                  <li><strong>Government Authorities:</strong> We are legally bound to submit guest details (Form C for foreigners) to the FRRO/Local Police Station if requested.</li>
                  <li><strong>Staff Communication:</strong> Your food preferences/allergies may be shared with our kitchen staff to prepare your meals.</li>
                </ul>
              </section>

              <section>
                <h2>4. Cookies &amp; Website Data</h2>
                <p>Our website uses standard cookies to:</p>
                <ul>
                  <li>Analyze traffic sources (e.g., to see if you found us via Google or Instagram).</li>
                  <li>Improve page loading speed.</li>
                </ul>
                <p>You can disable cookies in your browser settings at any time.</p>
              </section>

              <section>
                <h2>5. Contact for Privacy Concerns</h2>
                <p>
                  If you have questions about your data or wish to have your phone number removed from our marketing list, please contact:
                </p>
                <p>
                  <strong>AGP Nature Villa Management</strong><br />
                  Email:{' '}
                  <a href="mailto:agpnaturevilla@gmail.com">
                    agpnaturevilla@gmail.com
                  </a>
                  <br />
                  Phone:{' '}
                  <a href="tel:+919892611983">
                    +91 9892611983
                  </a>
                </p>
              </section>
      </article>
    </SitePage>
  )
}
