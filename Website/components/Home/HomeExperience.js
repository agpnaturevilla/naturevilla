'use client'

import Link from 'next/link'
import { preload } from 'react-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'
import Lenis from 'lenis'
import { useSite, SiteHeader, SiteFoot, PHONE, TEL, WHATSAPP } from '../Site/Chrome'
import './home.css'

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)

const spaceFacts = ['242 sq ft, open 24/7', 'Indoor and open-air', '2,000 sq ft lawn', 'Winter evenings']
const marquee = ['Blue Wave', 'Laziz', 'The Little Paris', 'Infinity Garden', 'Heat Heaven']

// Where each gallery photo hangs in the fly-through: x in vw, y in vh, off the centre line.
const flyX = [-26, 24, -6, 28, -30, 8, -22, 30, 0, -28, 22, -10, 30, -24, 12, -30, 0]
const flyY = [-10, 8, 14, -12, 6, -14, 12, 0, -8, 10, -12, 14, 4, -6, 10, -10, 0]
const GAP = 700

const frameUrls = (ch) => (ch.still ? [ch.still] : Array.from({ length: ch.n }, (_, i) => `/tour/${ch.id}/${i}.webp`))

const block = (page, type) => page.contentBlocks.find((b) => b.type === type)?.content || {}
const sentence = (s = '') => s.charAt(0) + s.slice(1).toLowerCase()
const clean = (s = '') => s.replace(/"/g, '')
const altFor = (src) => {
  const n = src.split('/').pop().replace('.jpg', '').replace(/-/g, ' ')
  return n.startsWith('slider image') ? `AGP Nature Villa, view ${n.split(' ').pop()}` : `AGP Nature Villa, ${n}`
}

export default function HomeExperience({ page }) {
  const { root, smooth, extras, rootProps } = useSite()
  // The hero poster is the largest thing on the first screen; ask for it before the CSS and JS.
  preload('/images/Villa/villa-gallery/night-time-outdoor.jpg', { as: 'image', fetchPriority: 'high' })
  const hero = block(page, 'villa-hero')
  const brand = block(page, 'brand-experience')
  const pk = block(page, 'pool-kitchen')
  const pricing = block(page, 'pricing-section')
  const spaces = block(page, 'signature-amenities')
  const gallery = block(page, 'our-gallery').images || []
  const stories = block(page, 'story-sections').sections || []
  const faq = block(page, 'faq-section')
  const cta = block(page, 'cta-section')
  const price = Number(String(pricing.price || '15000').replace(/\D/g, ''))
  const stats = hero.stats || {}
  const am = spaces.amenities || []
  // The walk through the villa: each chapter is one or more shots cut from the owner's own walkthrough reel.
  const tour = [
    { id: 'arrive', n: 70, title: 'Arrive at Dangiyo Ki Hundar', fact: 'Near Animal Aid, Udaipur', text: ['Escape the cramped city hotels and step into Dangiyo Ki Hundar, a sanctuary where silence is the ultimate luxury.'] },
    { id: 'pool', n: 62, title: clean(am[0]?.name), fact: spaceFacts[0], text: [am[0]?.description, pk.poolDescription] },
    { id: 'garden', n: 65, title: clean(am[2]?.name), fact: spaceFacts[2], text: [am[2]?.description] },
    { id: 'courtyard', n: 67, title: 'Three rooms around one courtyard', fact: 'Up to 15 guests', text: ['Three rooms wait inside: Love Nest, Mountain Peak, Valley View. Families split up and regroup; groups shuffle who gets what.'], link: { href: '/rooms/', label: 'See the rooms' } },
    { id: 'kitchen', n: 55, title: clean(am[1]?.name), fact: spaceFacts[1], text: [am[1]?.description, pk.kitchenDescription] },
    { id: 'bonfire', n: 44, title: clean(am[3]?.name), fact: spaceFacts[3], text: [am[3]?.description] },
    { id: 'hills', n: 61, title: 'The Aravalis, all around', fact: 'Near Badi Lake', text: ['The Aravalis hug AGP Nature Villa close, their rough slopes a wall against the world. No city clamor here, just the rustle of leaves and the odd bird call cutting through.'] },
  ]

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

        ScrollTrigger.create({ start: 80, onUpdate: (s) => q('.agp-head')[0].classList.toggle('is-solid', s.scroll() > 80) })

        // 1. Hero: the full-screen dusk scene tilts back into a framed card and the facts rise under it.
        const heroEl = q('.hero')[0]
        gsap.from(q('.hero-copy > *'), { y: 60, autoAlpha: 0, duration: 1.2, ease: 'expo.out', stagger: 0.09, delay: 0.15 })
        if (desktop) {
          heroEl.classList.add('is-pinned')
          gsap.set(q('.hero-after'), { autoAlpha: 0 })
          gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: { trigger: heroEl, start: 'top top', end: '+=130%', pin: true, scrub: 0.6 } })
            .to(q('.hero-copy'), { yPercent: -30, autoAlpha: 0, duration: 0.35 }, 0)
            .to(q('.hero-media'), { scale: 0.56, rotationX: 14, yPercent: -9, borderRadius: 28, '--shade': 0.15 }, 0)
            .to(q('.hero-media'), { rotationX: 0, duration: 0.3 }, 0.7)
            .to(q('.hero-after'), { autoAlpha: 1, duration: 0.2 }, 0.6)
            .from(q('.hero-after div'), { y: 50, stagger: 0.06, duration: 0.3 }, 0.6)
        } else {
          gsap.to(q('.hero-media video'), { yPercent: 10, ease: 'none', scrollTrigger: { trigger: heroEl, start: 'top top', end: 'bottom top', scrub: true } })
        }

        // 2. Statement fills in word by word as you read.
        SplitText.create(q('.brand .big'), {
          type: 'words',
          autoSplit: true,
          onSplit: (s) => gsap.from(s.words, { opacity: 0.12, ease: 'none', stagger: 0.1, scrollTrigger: { trigger: q('.brand')[0], start: 'top 75%', end: 'top 15%', scrub: true } }),
        })

        // Section headings rise line by line.
        q('.rise').forEach((el) => {
          SplitText.create(el, {
            type: 'lines',
            mask: 'lines',
            autoSplit: true,
            onSplit: (s) => gsap.from(s.lines, { yPercent: 105, duration: 1.1, ease: 'expo.out', stagger: 0.09, scrollTrigger: { trigger: el, start: 'top 88%' } }),
          })
        })

        // 3. The walk: real footage of the villa, split into frames and scrubbed by the scroll.
        const body = q('.tour-body')[0]
        const canvas = q('.tour-canvas')[0]
        const c2d = canvas.getContext('2d')
        const steps = q('.tour-step')
        const dots = q('.tour-rail button')
        const N = tour.length
        const store = tour.map(() => [])
        let cur = { c: 0, f: 0, z: 0 }
        const paint = () => {
          let im
          for (let i = cur.f; i >= 0 && !im; i--) im = store[cur.c][i]
          if (!im) return
          const cw = canvas.width, ch = canvas.height
          const k = Math.max(cw / im.naturalWidth, ch / im.naturalHeight) * (tour[cur.c].still ? 1 + cur.z * 0.18 : 1)
          const w = im.naturalWidth * k, h = im.naturalHeight * k
          c2d.drawImage(im, (cw - w) / 2, (ch - h) / 2, w, h)
        }
        const load = (ci) => {
          if (ci < 0 || ci >= N || store[ci].started) return
          store[ci].started = true
          frameUrls(tour[ci]).forEach((src, i) => {
            const im = new Image()
            im.decoding = 'async'
            im.onload = () => { store[ci][i] = im; if (ci === cur.c) paint() }
            im.src = src
          })
        }
        const size = () => {
          const dpr = Math.min(window.devicePixelRatio || 1, 2)
          canvas.width = canvas.offsetWidth * dpr
          canvas.height = canvas.offsetHeight * dpr
          paint()
        }
        const activate = (c) => {
          steps.forEach((el, i) => el.classList.toggle('is-active', i === c))
          dots.forEach((el, i) => el.setAttribute('aria-current', i === c ? 'step' : 'false'))
        }
        q('.tour')[0].classList.add('is-live')
        size()
        activate(0)
        ScrollTrigger.addEventListener('refreshInit', size)
        ScrollTrigger.create({ trigger: body, start: 'top 250%', once: true, onEnter: () => { load(0); load(1) } })
        const walk = ScrollTrigger.create({
          trigger: body,
          start: 'top center',
          end: 'bottom center',
          onUpdate: (self) => {
            const x = Math.min(self.progress * N, N - 0.0001)
            const c = Math.floor(x)
            const f = tour[c].still ? 0 : Math.round((x - c) * (tour[c].n - 1))
            if (c !== cur.c) { activate(c); load(c); load(c + 1); load(c + 2) }
            if (c !== cur.c || f !== cur.f || tour[c].still) { cur = { c, f, z: x - c }; paint() }
            gsap.set(q('.tour-bar i'), { scaleY: self.progress })
          },
        })
        dots.forEach((b, i) => b.addEventListener('click', () => lenis.scrollTo(walk.start + ((i + 0.5) / N) * (walk.end - walk.start))))
        if (desktop) {
          // The frame turns slowly as you walk, and leans towards the pointer.
          gsap.fromTo(q('.tour-frame'), { rotationY: 14, rotationX: 3 }, { rotationY: -14, rotationX: -3, ease: 'none', scrollTrigger: { trigger: body, start: 'top bottom', end: 'bottom top', scrub: 0.8 } })
          const tx = gsap.quickTo(q('.tour-glass'), 'rotationY', { duration: 0.8, ease: 'power3.out' })
          const ty = gsap.quickTo(q('.tour-glass'), 'rotationX', { duration: 0.8, ease: 'power3.out' })
          const lean = (e) => { tx((e.clientX / window.innerWidth - 0.5) * 10); ty((0.5 - e.clientY / window.innerHeight) * 8) }
          body.addEventListener('pointermove', lean)
          ctx.add(() => () => body.removeEventListener('pointermove', lean))
        }
        ctx.add(() => () => { ScrollTrigger.removeEventListener('refreshInit', size); q('.tour')[0].classList.remove('is-live') })

        // The named spaces slide past in outline type.
        gsap.fromTo(q('.marquee p'), { xPercent: 4 }, { xPercent: -42, ease: 'none', scrollTrigger: { trigger: q('.marquee')[0], start: 'top bottom', end: 'bottom top', scrub: 0.4 } })

        // 4. Price counts up.
        const num = q('.price b')[0]
        const o = { v: 0 }
        gsap.to(o, { v: price, duration: 1.8, ease: 'expo.out', scrollTrigger: { trigger: num, start: 'top 85%' }, onUpdate: () => (num.textContent = Math.round(o.v).toLocaleString('en-IN')) })
        gsap.from(q('.incl li'), { x: 40, autoAlpha: 0, duration: 0.8, ease: 'expo.out', stagger: 0.06, scrollTrigger: { trigger: q('.incl')[0], start: 'top 82%' } })

        // 6. Gallery: the photos hang in a corridor and the scroll flies you through it.
        if (desktop) {
          const sec = q('.gallery')[0]
          const figs = q('.fly figure')
          const last = figs.length - 1
          sec.classList.add('is-fly')
          gsap.set(figs, { autoAlpha: (i) => (i < 4 ? 1 : 0) })
          const tl = gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: { trigger: sec, start: 'top top', end: '+=' + last * 38 + '%', pin: true, scrub: 0.8 } })
          tl.to(q('.fly'), { z: last * GAP + 260, duration: last + 0.37 }, 0)
          figs.forEach((f, i) => {
            if (i >= 4) tl.to(f, { autoAlpha: 1, duration: 1 }, i - 4)
            if (i < last) tl.to(f, { autoAlpha: 0, duration: 0.3 }, i + 0.7)
          })
          ctx.add(() => () => sec.classList.remove('is-fly'))

          // 7. Stories: the picture on the left changes as each story reaches the middle.
          const pics = q('.story-pics img')
          q('.story').forEach((s, i) => {
            ScrollTrigger.create({ trigger: s, start: 'top 55%', end: 'bottom 55%', onToggle: (self) => self.isActive && pics.forEach((p, j) => p.classList.toggle('on', j <= i)) })
          })
        }

        // 9. Closing numbers tip up into place.
        gsap.from(q('.cta-stats div'), { y: 60, rotationX: 40, autoAlpha: 0, transformOrigin: '50% 100%', duration: 1, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: q('.cta-stats')[0], start: 'top 88%' } })

        return () => {
          heroEl.classList.remove('is-pinned')
          gsap.ticker.remove(tick)
          lenis.destroy()
          smooth.current = null
        }
      })
    },
    { scope: root },
  )

  return (
    <div {...rootProps}>
      <SiteHeader />

      <main>
        {/* 1. HERO */}
        <section className="hero">
          <div className="hero-media">
            <video autoPlay muted loop playsInline preload="metadata" poster="/images/Villa/villa-gallery/night-time-outdoor.jpg" aria-label="AGP Nature Villa and its private pool at dusk">
              <source src="/videos/hero-dusk.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="hero-copy">
            <p className="eyebrow">{hero.subtitle} · Feel the uniqueness</p>
            <h1 className="display">Private luxury pool villa <em>in Udaipur</em></h1>
            <div className="hero-sub">
              <p>{hero.description}</p>
              <div>
                <div className="cta-row">
                  <Link href="/contact/" className="btn btn-gold">Book your escape</Link>
                  <Link href="/rooms/" className="btn btn-line">Explore rooms</Link>
                </div>
                <p className="hero-rating">Rated {stats.rating} by {stats.reviews} guests</p>
              </div>
            </div>
          </div>
          <div className="hero-after">
            <div><b>{stats.rating}</b><span>Rating, from {stats.reviews} reviews</span></div>
            <div><b>{stats.rooms}</b><span>Luxury rooms</span></div>
            <div><b>20 min</b><span>From Udaipur city, in the Aravalis</span></div>
            <div><b>{stats.established}</b><span>Hosting since</span></div>
          </div>
        </section>

        {/* 2. BRAND */}
        <section className="brand wrap">
          <h2 className="display big">{brand.headline}</h2>
          <div className="cols">
            {(brand.bodyText || '').split('\n\n').map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
          </div>
        </section>

        {/* 3. POOL + KITCHEN */}
        <section className="tour" aria-labelledby="tour-h">
          <div className="wrap tour-head">
            <h2 id="tour-h" className="display h2 rise">{sentence(spaces.headline)}</h2>
            <p>Keep scrolling to walk through the villa. Every frame was filmed on the property.</p>
          </div>
          <div className="tour-body">
            <div className="tour-stage" aria-hidden="true">
              <div className="tour-frame"><div className="tour-glass"><canvas className="tour-canvas" /></div></div>
              <div className="tour-bar"><i /></div>
            </div>
            <ol className="tour-rail" aria-label="Parts of the villa">
              {tour.map((t, i) => <li key={t.id}><button type="button" aria-current={i ? 'false' : 'step'}>{t.title}</button></li>)}
            </ol>
            <div className="tour-steps">
              {tour.map((t, i) => (
                <article className="tour-step" key={t.id}>
                  <img className="tour-poster" src={t.still || `/tour/${t.id}/${Math.floor(t.n / 2)}.webp`} alt={t.title} loading="lazy" width="540" height="960" />
                  <div className="tour-card">
                    <p className="tour-count">{i + 1} / {tour.length}<span>{t.fact}</span></p>
                    <h3 className="display">{t.title}</h3>
                    {t.text.map((x) => <p key={x.slice(0, 24)}>{x}</p>)}
                    {t.link && <Link href={t.link.href} className="btn btn-line">{t.link.label}</Link>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <p className="display">{[...marquee, ...marquee].map((m, i) => <span key={i}>{m}</span>)}</p>
        </div>

        {/* 4. TARIFF */}
        <section className="tariff" aria-labelledby="tariff-h">
          <div className="wrap tariff-grid">
            <div>
              <h2 id="tariff-h" className="display h3 rise">{pricing.title}</h2>
              <p className="tariff-sub">Clear &amp; honest pricing</p>
              <p className="display price">₹<b>{price.toLocaleString('en-IN')}</b></p>
              <p className="tariff-per">Per night. {pricing.subtitle}.</p>
              <Link href="/contact/" className="btn btn-gold">Check your dates</Link>
            </div>
            <div>
              <p className="incl-h">Everything included</p>
              <ul className="incl">
                {(pricing.inclusions || []).map((x) => <li key={x}>{x}</li>)}
              </ul>
              <p className="tariff-note"><strong>{pricing.note}</strong> The entire property is exclusively yours.</p>
            </div>
          </div>
        </section>

        {/* 6. GALLERY */}
        <section className="gallery" aria-labelledby="gallery-h">
          <div className="gallery-head wrap">
            <h2 id="gallery-h" className="display h2">Our gallery</h2>
            <p>Visual experience. {gallery.length} photographs of the villa, by day and by night.</p>
          </div>
          <div className="fly-stage">
            <div className="fly">
              {gallery.map((src, i) => (
                <figure key={src} data-zoom tabIndex={0} role="button" aria-label={`Enlarge photo: ${altFor(src)}`} style={{ '--x': flyX[i % flyX.length], '--y': flyY[i % flyY.length], '--z': i }}>
                  <img src={src} alt={altFor(src)} loading="lazy" width="1024" height="700" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* 7. STORIES */}
        <section className="stories wrap">
          <div className="story-pics" aria-hidden="true">
            {stories.map((s, i) => <img key={s.title} data-zoom className={i ? '' : 'on'} src={s.image} alt="" loading="lazy" width="1024" height="700" />)}
          </div>
          <div className="story-list">
            {stories.map((s) => (
              <article className="story" key={s.title}>
                <img className="story-inline" data-zoom src={s.image} alt={s.title} loading="lazy" width="1024" height="700" />
                <h2 className="display h3">{s.title}</h2>
                {s.content.split('\n\n').map((p) => <p key={p.slice(0, 24)} dangerouslySetInnerHTML={{ __html: p }} />)}
              </article>
            ))}
          </div>
        </section>

        {/* 8. FAQ */}
        <section className="faq" aria-labelledby="faq-h">
          <div className="wrap">
            <p className="faq-kicker">Your questions answered</p>
            <h2 id="faq-h" className="display h3 rise">{faq.title}</h2>
            <div className="faq-grid">
              <div>
                {(faq.faqs || []).map((f) => (
                  <details key={f.question}>
                    <summary>{f.question}</summary>
                    <p>{f.answer}</p>
                  </details>
                ))}
                <Link href="/faqs/" className="btn btn-line" style={{ marginTop: '2rem' }}>Read all customer FAQs</Link>
              </div>
              <div className="faq-video">
                <video controls playsInline preload="none" poster="/images/Villa/slider-image-1.jpg" aria-label="Walkthrough video of AGP Nature Villa">
                  <source src={faq.videoUrl} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 9. CALL + FOOTER */}
      <footer className="call">
        <div className="wrap">
          <p className="call-kicker">Your mountain escape awaits</p>
          <h2 className="display mega">{sentence(cta.title)}</h2>
          <div className="call-row">
            <p>{cta.description}</p>
            <div className="cta-row">
              <a href={TEL} className="btn btn-gold">Call {cta.phone || PHONE}</a>
              <a href={WHATSAPP} className="btn btn-line">WhatsApp</a>
              <a href={cta.directionLink} className="btn btn-line">Get directions</a>
            </div>
          </div>
          <div className="cta-stats">
            <div><b>{stats.rating}</b><span>Average rating</span></div>
            <div><b>24hr</b><span>Response time, always available</span></div>
            <div><b>{stats.rooms}</b><span>Luxury rooms, mountain views</span></div>
            <div><b>{stats.established}</b><span>Established</span></div>
          </div>

          <SiteFoot />
        </div>
      </footer>

      {extras}
    </div>
  )
}
