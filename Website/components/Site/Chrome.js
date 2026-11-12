'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Bodoni_Moda, Jost } from 'next/font/google'
import '../Home/home.css'

// Type follows the logo: a high-contrast serif for "AGP", a wide geometric sans for "NATURE VILLA".
const display = Bodoni_Moda({ subsets: ['latin'], style: ['normal', 'italic'], variable: '--font-display', display: 'swap', adjustFontFallback: false })
const body = Jost({ subsets: ['latin'], variable: '--font-body', display: 'swap' })

export const PHONE = '+91 9892611983'
export const TEL = 'tel:+919892611983'
export const WHATSAPP = 'https://wa.me/919892611983'
export const EMAIL = 'agpnaturevilla@gmail.com'
// The owner's corrected map pin (April 2026).
export const DIRECTIONS = 'https://maps.google.com/?q=24.6802778,73.6234722'

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/3bhk-private-villa-udaipur/', label: 'The Villa' },
  { href: '/rooms/', label: 'Rooms' },
  { href: '/faqs/', label: 'Customer FAQs' },
  { href: '/contact/', label: 'Contact' },
]

const footAmenities = ['Private Swimming Pool', 'Open Kitchen', 'Large Garden', 'Mountain Views', 'Bonfire Area', 'Outdoor Entertainment']

// Everything every page shares: the root element's props, click-to-zoom, back to top and the phone bar.
// `smooth` holds the Lenis instance when a page starts one.
export function useSite() {
  const root = useRef(null)
  const zoom = useRef(null)
  const smooth = useRef(null)

  // Back-to-top button appears after the first screen.
  useEffect(() => {
    const on = () => root.current?.toggleAttribute('data-scrolled', window.scrollY > window.innerHeight)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  const openZoom = (e) => {
    if (e.type === 'keydown' && e.key !== 'Enter') return
    const el = e.target.closest?.('[data-zoom]')
    const img = el?.tagName === 'IMG' ? el : el?.querySelector('img')
    if (!img) return
    zoom.current.querySelector('img').src = img.currentSrc || img.src
    zoom.current.querySelector('img').alt = img.alt
    zoom.current.showModal()
  }
  const toTop = () => (smooth.current ? smooth.current.scrollTo(0) : window.scrollTo({ top: 0 }))

  const extras = (
    <>
      <button type="button" className="to-top" onClick={toTop} aria-label="Back to top">↑</button>

      <dialog ref={zoom} className="zoom" onClick={(e) => { e.stopPropagation(); zoom.current.close() }}>
        <img alt="" />
        <button type="button" className="btn btn-gold">Close</button>
      </dialog>

      <div className="agp-bar">
        <a href={TEL} className="btn btn-gold">Call</a>
        <a href={WHATSAPP} className="btn btn-line">WhatsApp</a>
      </div>
    </>
  )
  return { root, smooth, extras, rootProps: { ref: root, className: `agp ${display.variable} ${body.variable}`, onClick: openZoom, onKeyDown: openZoom } }
}

export function SiteHeader() {
  return (
    <header className="agp-head">
      <Link href="/" aria-label="AGP Nature Villa, home">
        <img className="logo" src="/images/logos/agp-nature-villa-logo-white-180.webp" alt="AGP Nature Villa" width="180" height="180" />
      </Link>
      <nav aria-label="Main">
        {nav.slice(1).map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}
      </nav>
      <Link href="/contact/" className="btn btn-gold">Book now</Link>
    </header>
  )
}

export function SiteFoot() {
  return (
    <div className="foot">
      <div>
        <img className="logo" src="/images/logos/agp-nature-villa-logo-white-180.webp" alt="AGP Nature Villa" width="180" height="180" loading="lazy" />
        <p>Experience the perfect blend of luxury and nature at AGP Nature Villa. Nestled amidst the Aravali mountains, our villa offers an unforgettable stay with modern amenities and breathtaking views.</p>
        <h3>Follow us</h3>
        <ul className="foot-inline">
          <li><a href="https://www.facebook.com/agpnaturevilla" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.instagram.com/agpnaturevilla" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
        </ul>
      </div>
      <div>
        <h3>Quick links</h3>
        <ul>{nav.map((n) => <li key={n.href}><Link href={n.href}>{n.label}</Link></li>)}</ul>
      </div>
      <div>
        <h3>Villa amenities</h3>
        <ul>{footAmenities.map((a) => <li key={a}>{a}</li>)}</ul>
      </div>
      <div>
        <h3>Contact information</h3>
        <address>
          5, Dangiyo Ki Hundar, near Animal Aid<br />Udaipur, Rajasthan 313011<br />India<br />
          <a href={TEL}>{PHONE}</a><br />
          <a href="mailto:agpnaturevilla@gmail.com">agpnaturevilla@gmail.com</a>
        </address>
        <Link href="/contact/" className="btn btn-gold" style={{ marginTop: '1.2rem' }}>Book your stay</Link>
      </div>
      <div className="foot-legal">
        <span>© {new Date().getFullYear()} AGP Nature Villa. All rights reserved. Made with love in Udaipur.</span>
        <span className="foot-inline">
          <Link href="/privacy/">Privacy Policy</Link>
          <Link href="/terms/">Terms of Service</Link>
          <a href="/sitemap.xml">Sitemap</a>
        </span>
      </div>
    </div>
  )
}
