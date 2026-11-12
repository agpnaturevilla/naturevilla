'use client'

import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'
import Lenis from 'lenis'
import { useSite, SiteHeader, SiteFoot, PHONE, TEL, WHATSAPP } from './Chrome'
import SpotlightCard from '../ReactBits/SpotlightCard'
import TiltedCard from '../ReactBits/TiltedCard'
import Magnet from '../ReactBits/Magnet'
import ContactForm from './ContactForm'
import './pages.css'

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)

const GLOW = 'rgba(242, 178, 92, 0.35)'
const statLabels = { rating: 'Guest rating', reviews: 'Reviews', rooms: 'Luxury rooms', established: 'Hosting since', capacity: 'Capacity', amenities: 'Amenities' }
const slug = (s = '') => s.toLowerCase().replace(/\(.*?\)/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

// Motion for the inner pages: quieter than the home page. Smooth scroll, headings that rise,
// content that settles in as it arrives, pictures that open, and the pinned story picture.
function usePageMotion({ root, smooth }) {
  useGSAP(
    () => {
      const q = gsap.utils.selector(root)
      const mm = gsap.matchMedia()
      mm.add({ desktop: '(min-width: 900px)', motion: '(prefers-reduced-motion: no-preference)' }, (ctx) => {
        const { desktop, motion } = ctx.conditions
        if (!motion) return

        const lenis = new Lenis()
        smooth.current = lenis
        lenis.on('scroll', ScrollTrigger.update)
        const tick = (t) => lenis.raf(t * 1000)
        gsap.ticker.add(tick)
        gsap.ticker.lagSmoothing(0)

        // Same-page links glide instead of jumping.
        const jump = (e) => {
          const a = e.target.closest('a[href^="#"]')
          const target = a && root.current.querySelector(a.getAttribute('href'))
          if (!target) return
          e.preventDefault()
          lenis.scrollTo(target, { offset: -110 })
        }
        root.current.addEventListener('click', jump)

        ScrollTrigger.create({ start: 40, onUpdate: (s) => q('.agp-head')[0].classList.toggle('is-solid', s.scroll() > 40) })

        q('.rise').forEach((el) => {
          SplitText.create(el, {
            type: 'lines',
            mask: 'lines',
            autoSplit: true,
            onSplit: (s) => gsap.from(s.lines, { yPercent: 105, duration: 1.1, ease: 'expo.out', stagger: 0.09, scrollTrigger: { trigger: el, start: 'top 90%' } }),
          })
        })

        // Cards settle in as they arrive. A class toggle and a CSS transition: nothing to get stuck half-way.
        const io = new IntersectionObserver((entries) => {
          entries.filter((e) => e.isIntersecting).forEach((e, i) => {
            e.target.style.transitionDelay = `${i * 60}ms`
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          })
        }, { rootMargin: '0px 0px -6% 0px' })
        root.current.classList.add('has-reveal')
        q('[data-reveal]').forEach((el) => io.observe(el))

        q('[data-wipe]').forEach((el) => {
          gsap.fromTo(el, { clipPath: 'inset(10% 10% 10% 10% round 24px)' }, { clipPath: 'inset(0% 0% 0% 0% round 24px)', ease: 'none', scrollTrigger: { trigger: el, start: 'top 95%', end: 'top 45%', scrub: 0.5 } })
        })

        if (q('.phero').length) {
          gsap.from(q('.phero-copy > *, .phero-stats > div'), { y: 50, autoAlpha: 0, duration: 1.2, ease: 'expo.out', stagger: 0.07, delay: 0.15 })
          gsap.to(q('.phero-media'), { yPercent: 14, ease: 'none', scrollTrigger: { trigger: q('.phero')[0], start: 'top top', end: 'bottom top', scrub: true } })
        }

        if (desktop) {
          q('.stories').forEach((sec) => {
            const pics = sec.querySelectorAll('.story-pics img')
            sec.querySelectorAll('.story').forEach((s, i) => {
              ScrollTrigger.create({ trigger: s, start: 'top 55%', end: 'bottom 55%', onToggle: (self) => self.isActive && pics.forEach((p, j) => p.classList.toggle('on', j <= i)) })
            })
          })
        }

        return () => {
          root.current?.removeEventListener('click', jump)
          io.disconnect()
          root.current?.classList.remove('has-reveal')
          gsap.ticker.remove(tick)
          lenis.destroy()
          smooth.current = null
        }
      })
    },
    { scope: root },
  )
}

// The frame around every inner page: header, content, footer, zoom, back to top.
export default function SitePage({ children, plain }) {
  const site = useSite()
  usePageMotion(site)
  return (
    <div {...site.rootProps} data-page={plain ? 'plain' : 'hero'}>
      <SiteHeader />
      <main>{children}</main>
      <footer className="site-foot"><div className="wrap"><SiteFoot /></div></footer>
      {site.extras}
    </div>
  )
}

// A dark title band for pages that have no picture hero (FAQs, contact, legal).
export function PageHead({ title, note }) {
  return (
    <header className="page-head">
      <div className="wrap">
        <h1 className="display">{title}</h1>
        {note && <p>{note}</p>}
      </div>
    </header>
  )
}

function Hero({ content, video }) {
  const { title = '', subtitle, description = '', images = [], stats = {} } = content
  return (
    <>
      <section className="phero">
        <div className="phero-media">
          {images.map((src, i) => <img key={src} src={src} alt="" style={{ '--i': i }} fetchPriority={i ? 'low' : 'high'} />)}
        </div>
        <div className="wrap phero-copy">
          <h1 className="display">{title}</h1>
          {subtitle && <p className="phero-sub">{subtitle}</p>}
          {description.split('\n\n').map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
          <div className="cta-row">
            <Magnet padding={50} magnetStrength={4}><Link href="/contact/" className="btn btn-gold">{video ? 'Book your stay' : 'Book your escape'}</Link></Magnet>
            <Link href="/rooms/" className="btn btn-line">Explore rooms</Link>
          </div>
        </div>
        <dl className="wrap phero-stats">
          {Object.entries(stats).map(([k, v]) => <div key={k}><dt>{statLabels[k] || k}</dt><dd className="display">{v}</dd></div>)}
        </dl>
      </section>
      {video && (
        <section className="watch">
          <div className="wrap watch-grid">
            <h2 className="display h3 rise">Watch: a walkthrough of your private kingdom</h2>
            <div className="watch-video" data-wipe>
              <video controls playsInline preload="none" poster={images[0]} aria-label="Walkthrough video of AGP Nature Villa">
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

function Stories({ content }) {
  const sections = content.sections || []
  return (
    <section className="stories-wrap">
      {content.title && <div className="wrap"><h2 className="display h2 rise">{content.title}</h2></div>}
      <div className="stories wrap">
        <div className="story-pics" aria-hidden="true">
          {sections.map((s, i) => <img key={s.title} data-zoom className={i ? '' : 'on'} src={s.image} alt="" loading="lazy" width="1024" height="700" />)}
        </div>
        <div className="story-list">
          {sections.map((s) => (
            <article className="story" key={s.title}>
              <img className="story-inline" data-zoom src={s.image} alt={s.title} loading="lazy" width="1024" height="700" />
              <h3 className="display h3">{s.title}</h3>
              {s.content.includes('<p>')
                ? <div className="prose" dangerouslySetInnerHTML={{ __html: s.content }} />
                : s.content.split('\n\n').map((p) => <p key={p.slice(0, 24)} dangerouslySetInnerHTML={{ __html: p }} />)}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Faq({ content }) {
  const video = content.videoUrl
  return (
    <section className="faq" aria-label={content.title}>
      <div className="wrap">
        <h2 className="display h3 rise">{content.title}</h2>
        <div className={video ? 'faq-grid' : 'faq-one'}>
          <div>
            {(content.faqs || []).map((f) => (
              <details key={f.question} name={`faq-${slug(content.title)}`}>
                <summary>{f.question}</summary>
                <p>{f.answer}</p>
              </details>
            ))}
            <Link href="/faqs/" className="btn btn-line" style={{ marginTop: '2rem' }}>Read all customer FAQs</Link>
          </div>
          {video && (
            <div>
              <div className="faq-video">
                <video controls playsInline preload="none" poster="/images/Villa/slider-image-1.jpg" aria-label={content.videoTitle || 'Walkthrough video of AGP Nature Villa'}>
                  <source src={video} type="video/mp4" />
                </video>
              </div>
              {content.videoTitle && <h3 className="display faq-video-h">{content.videoTitle}</h3>}
              {content.videoDescription && <p className="faq-video-p">{content.videoDescription}</p>}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function Cta({ content }) {
  return (
    <section className="call cta">
      <div className="wrap">
        <h2 className="display mega rise">{content.title}</h2>
        <div className="call-row">
          <p>{content.description}</p>
          <div className="cta-row">
            <Magnet padding={50} magnetStrength={4}><a href={TEL} className="btn btn-gold">Call {content.phone || PHONE}</a></Magnet>
            <a href={WHATSAPP} className="btn btn-line">WhatsApp</a>
            <a href={content.directionLink} className="btn btn-line">Get directions</a>
            <Link href="/contact/" className="btn btn-line">Check availability</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// Each room: a picture that tilts under the pointer and flips to its spec sheet, beside the full write-up.
function Rooms({ content }) {
  return (
    <section className="rooms" aria-labelledby="rooms-h">
      <div className="wrap">
        <h2 id="rooms-h" className="display h2 rise">{content.title}</h2>
        <p className="lede">{content.subtitle}</p>
        <nav className="room-nav" aria-label="Rooms">
          {content.rooms.map((r) => <a key={r.id} href={`#${slug(r.name)}`}>{r.name.replace(/\s*\(.*\)/, '')}</a>)}
        </nav>
      </div>
      {content.rooms.map((r) => (
        <article className="room wrap" id={slug(r.name)} key={r.id}>
          <div className="room-card" data-reveal>
            <TiltedCard
              imageSrc={r.images[0]}
              altText={`${r.name} at AGP Nature Villa`}
              captionText="Click to see the spec sheet"
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={9}
              scaleOnHover={1.03}
              radius={24}
              gyroscope={false}
              backContent={
                <div className="room-back">
                  <p className="display">{r.mood}</p>
                  <dl>
                    <div><dt>Capacity</dt><dd>{r.capacity}</dd></div>
                    <div><dt>Beds</dt><dd>{r.beds}</dd></div>
                    <div><dt>Area</dt><dd>{r.area}</dd></div>
                    <div><dt>View</dt><dd>{r.view}</dd></div>
                  </dl>
                </div>
              }
            />
          </div>
          <div className="room-text">
            <h3 className="display">{r.name}</h3>
            <p className="room-tag">{r.tagline}</p>
            <p>{r.description}</p>
            <p className="room-short">{r.shortDescription}</p>
            <dl className="room-specs" data-reveal>
              <div><dt>Capacity</dt><dd>{r.capacity}</dd></div>
              <div><dt>Beds</dt><dd>{r.beds}</dd></div>
              <div><dt>Area</dt><dd>{r.area}</dd></div>
            </dl>
            <h4>Room features</h4>
            <ul className="room-features">{r.features.map((f) => <li key={f}>{f}</li>)}</ul>
            <h4>Amenities</h4>
            <ul className="chips">{r.amenities.map((a) => <li key={a}>{a}</li>)}</ul>
          </div>
        </article>
      ))}
    </section>
  )
}

function Compare({ content }) {
  return (
    <section className="compare" aria-labelledby="compare-h">
      <div className="wrap">
        <h2 id="compare-h" className="display h2 rise">{content.title}</h2>
        <div className="compare-grid">
          {content.rooms.map((r) => (
            <SpotlightCard key={r.id} className="compare-card" spotlightColor={GLOW} data-reveal>
              <img src={r.image} alt={`${r.name} room`} loading="lazy" width="1024" height="700" data-zoom />
              <h3 className="display">{r.name}</h3>
              <p className="room-tag">{r.tagline}</p>
              <ul>
                {r.features.map((f) => <li key={f}>{f}</li>)}
                <li>Size: {r.area}</li>
                <li>View: {r.view}</li>
              </ul>
              <ul className="chips">{r.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
              <p className="compare-best">{r.bestFor}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}

const blocks = {
  'villa-hero': (c) => <Hero content={c} />,
  'room-hero': (c) => <Hero content={c} video="/agp-nature-villa.MP4" />,
  'story-sections': (c) => <Stories content={c} />,
  'faq-section': (c) => <Faq content={c} />,
  'cta-section': (c) => <Cta content={c} />,
  'detailed-room-showcase': (c) => <Rooms content={c} />,
  'room-comparison': (c) => <Compare content={c} />,
  contact: (c) => <ContactForm content={c} />,
}

// Renders a data-defined page (Villa, Rooms, Contact) block by block, in the order the data gives.
export function PageExperience({ page }) {
  const list = [...page.contentBlocks].sort((a, b) => a.order - b.order)
  const hasHero = /hero/.test(list[0]?.type)
  return (
    <SitePage plain={!hasHero}>
      {!hasHero && <PageHead title={list[0]?.content.title || page.title} note={list[0]?.content.subtitle} />}
      {list.map((b, i) => blocks[b.type] && <div key={b.type + b.order} style={{ display: 'contents' }}>{blocks[b.type](!hasHero && !i ? { ...b.content, noHead: true } : b.content)}</div>)}
    </SitePage>
  )
}
