import Link from 'next/link'
import SitePage, { PageHead } from '../components/Site/SitePage'

export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <SitePage plain>
      <PageHead title="Oops! Page Not Found" note="404" />
      <div className="lost wrap">
        <p className="lede">
          The page you&apos;re looking for seems to have wandered off into the Aravallis. Let&apos;s get you back on track.
        </p>
        <div className="cta-row">
          <Link href="/" className="btn btn-gold">Go to Homepage</Link>
          <Link href="/contact/" className="btn btn-line">Contact Us</Link>
        </div>
        <h2 className="display h3" style={{ marginTop: '3rem' }}>Popular Pages</h2>
        <div className="cta-row">
          <Link href="/3bhk-private-villa-udaipur/" className="btn btn-line">The Villa</Link>
          <Link href="/rooms/" className="btn btn-line">Rooms</Link>
          <Link href="/faqs/" className="btn btn-line">FAQs</Link>
        </div>
      </div>
    </SitePage>
  )
}
