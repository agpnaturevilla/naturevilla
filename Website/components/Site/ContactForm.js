'use client'

import { useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import SpotlightCard from '../ReactBits/SpotlightCard'
import { PHONE, TEL, EMAIL, WHATSAPP } from './Chrome'

const empty = { name: '', email: '', phone: '', checkIn: '', checkOut: '', guests: '2', message: '' }
const ADDRESS = '5, Dangiyo Ki Hundar near Animal Aid, Udaipur, Rajasthan 313011'
const MAP_DIRECTIONS = 'https://maps.google.com/?q=24.6802778,73.6234722'
const MAP_EMBED = 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3625.3562399676302!2d73.6234722!3d24.680277800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQwJzQ5LjAiTiA3M8KwMzcnMjQuNSJF!5e0!3m2!1sen!2sin!4v1776221191355!5m2!1sen!2sin'

const methods = [
  { title: 'Call us', note: 'Speak directly with our team', value: PHONE, href: TEL },
  { title: 'Email us', note: 'Drop us a message anytime', value: EMAIL, href: `mailto:${EMAIL}` },
  { title: 'Visit us', note: 'Come see our beautiful location', value: 'Udaipur, Rajasthan', href: MAP_DIRECTIONS },
  { title: 'Availability', note: "We're here when you need us", value: '24/7 Available' },
]

// Same fields, validation and /api/contact call as the previous contact block; only the markup is new.
export default function ContactForm({ content = {} }) {
  const [form, setForm] = useState(empty)
  const [busy, setBusy] = useState(false)
  const [status, setStatus] = useState(null)
  const [captcha, setCaptcha] = useState(null)
  const recaptcha = useRef(null)
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
  const today = new Date().toISOString().split('T')[0]
  const set = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    if (siteKey && !captcha) {
      setStatus({ type: 'error', message: 'Please complete the reCAPTCHA challenge before submitting.' })
      return
    }
    setBusy(true)
    setStatus(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, recaptchaToken: captcha }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Failed to send message')
      }
      setStatus({ type: 'success', message: "Thank you! We'll get back to you soon." })
      setForm(empty)
      setCaptcha(null)
      recaptcha.current?.reset()
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Sorry, there was an error sending your message. Please try again or call us directly.' })
    } finally {
      setBusy(false)
    }
  }

  return (
    <section className="contact" id="enquiry" aria-label="Send an enquiry">
      <div className="wrap">
        {/* On the contact page the title band above already says this. */}
        {!content.noHead && (
          <>
            <h2 id="contact-h" className="display h2 rise">{content.title || 'Get in Touch'}</h2>
            <p className="lede">{content.subtitle || "Ready for an unforgettable stay? Let's make your dream vacation a reality"}</p>
          </>
        )}

        <div className="methods">
          {methods.map((m) => (
            <SpotlightCard key={m.title} className="method" spotlightColor="rgba(242, 178, 92, 0.35)" data-reveal>
              <h3 className="display">{m.title}</h3>
              <p>{m.note}</p>
              {m.href ? <a href={m.href}>{m.value}</a> : <strong>{m.value}</strong>}
            </SpotlightCard>
          ))}
        </div>

        <div className="contact-grid">
          <form onSubmit={submit} className="form" data-reveal>
            <h3 className="display">Plan your stay</h3>
            <p>Tell us about your perfect getaway</p>

            <fieldset>
              <legend>Personal information</legend>
              <label>Full name *<input type="text" name="name" required autoComplete="name" value={form.name} onChange={set} placeholder="Your full name" /></label>
              <label>Email address *<input type="email" name="email" required autoComplete="email" value={form.email} onChange={set} placeholder="your@email.com" /></label>
              <label>Phone number *<input type="tel" name="phone" required autoComplete="tel" value={form.phone} onChange={set} placeholder="+91 9876543210" /></label>
              <label>Number of guests
                <select name="guests" value={form.guests} onChange={set}>
                  {Array.from({ length: 15 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>)}
                </select>
              </label>
            </fieldset>

            <fieldset>
              <legend>Stay details</legend>
              <label>Check-in date<input type="date" name="checkIn" value={form.checkIn} onChange={set} min={today} /></label>
              <label>Check-out date<input type="date" name="checkOut" value={form.checkOut} onChange={set} min={form.checkIn || today} /></label>
              <label className="full">Your message
                <textarea name="message" rows={5} value={form.message} onChange={set} placeholder="Share your special requirements, occasions you're celebrating, activities you're interested in, or any questions you have..." />
              </label>
            </fieldset>

            {siteKey && <ReCAPTCHA ref={recaptcha} sitekey={siteKey} onChange={setCaptcha} />}

            {status && <p className={`form-status is-${status.type}`} role="status">{status.message}</p>}

            <button type="submit" className="btn btn-gold" disabled={busy}>{busy ? 'Sending message...' : 'Send message'}</button>
          </form>

          <div className="visit" data-reveal>
            <h3 className="display">Visit our villa</h3>
            <p>Located in the heart of nature</p>
            <h4>Our address</h4>
            <address>{ADDRESS}</address>
            <div className="map">
              <iframe src={MAP_EMBED} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" title="AGP Nature Villa Location" />
            </div>
            <a href={MAP_DIRECTIONS} target="_blank" rel="noopener noreferrer" className="btn btn-line">Get directions</a>
            <h4>Follow us</h4>
            <ul className="foot-inline">
              <li><a href="https://www.facebook.com/agpnaturevilla" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://www.instagram.com/agpnaturevilla" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
