import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import homeCss from '../styles/home.css?inline'
import useScopedStyle from '../hooks/useScopedStyle.js'
import ModelViewer from '../components/ModelViewer.jsx'
import WhatsAppFloat from '../components/WhatsAppFloat.jsx'
import ProjectSlider from '../components/ProjectSlider.jsx'
import PageHeader from '../components/PageHeader.jsx'
import useContactForm from '../hooks/useContactForm.js'

const TOTAL = 288
const MOBILE_TOTAL = 55
const MOBILE_BREAKPOINT = '(max-width:768px)'

const tickerItems = [
  'GST CONCEPTS', 'BRUNONIC', 'S-CAB', 'LEADCOM', 'NITROCARE',
  'AUDIA AUDITORIUM SOLUTIONS', 'Italian Office Furniture',
  'Lifestyle Seating', 'Premium Auditorium Chairs', 'Medical Furniture',
  'VAT Invoice Included', '5-Year Warranty', 'Pan-Gulf Delivery',
  'Sultanate of Oman', 'Design to Deliver with Style', 'Muscat',
]

const projects = [
  { src: '/project/Amity-School-Qusais-project.jpeg', title: 'Amity School Qusais', location: 'Oman', desc: 'Classroom and campus furniture supplied and installed across the school, delivered to meet education-sector durability and safety standards.' },
  { src: '/project/tamayez-project.jpeg', title: 'SOS, Tamayez Architect', location: 'Oil & Gas · Muscat, Oman', desc: 'Furniture supply and installation delivered with Tamayez Architect for an oil & gas sector fit-out in Muscat.' },
  { src: '/project/telescopic-project.jpg', title: 'Telescopic Seating', location: 'Oman', desc: 'Telescopic retractable seating supplied and installed for a multi-purpose venue in Oman.' },
]

const brandCards = [
  { name: 'BRUNONIC', accent: '#1f3a8a', soft: '#ebeffb', num: '01', glb: '/images/3d model/brunonic-brand.glb', cat: 'Italian Office Furniture', prods: 'Workstations · Executive Chairs · Storage · Sofas', to: '/brunonic' },
  { name: 'S-CAB', accent: '#0f9b8e', soft: '#e4f7f4', num: '02', glb: '/images/3d model/sicab.glb', cat: 'Lifestyle Collection', prods: 'Chairs · Barstools · Sofas · Hanging Seats · Sunbeds', to: '/scab' },
  { name: 'LEADCOM', accent: '#8a1538', soft: '#fbe9ee', num: '03', glb: '/images/3d model/leadcom.glb', cat: 'Premium Seating', prods: 'Auditorium · Cinema · Lounge · Office · Stadium', to: '/leadcom' },
  { name: 'NITROCARE', accent: '#1f86a8', soft: '#e6f4f9', num: '04', glb: '/images/3d model/nitrocare.glb', cat: 'Medical Furniture', prods: 'Recliners · Hospital Beds · Examination Tables', to: '/nitrocare' },
  { name: 'AUDIA', accent: '#8a2b1f', soft: '#fbeae6', num: '05', glb: '/images/3d model/AUDIA.compressed.glb', cat: 'Auditorium Solutions', prods: 'Theatre Seating · Gulf Venues · Custom Colours', to: '/audia' },
]

const seoTitle = 'GST Concepts | Office, Seating & Hospital Furniture Supplier Oman'
const seoDescription = 'GST Concepts is a Muscat-based commercial furniture supplier in Oman — office furniture, auditorium and cinema seating, hospital furniture, and Italian contract brands.'

const trustBar = [
  { icon: 'fa-certificate', text: 'Authorized dealer for 5 international brands in seating, office & healthcare furniture' },
  { icon: 'fa-truck-ramp-box', text: 'Project-based logistics — bulk procurement, space planning, delivery & installation' },
  { icon: 'fa-location-dot', text: 'Muscat based — single-source solution for all your Oman project requirements' },
]

// Each item's question/answer text is reused verbatim for the FAQPage schema below —
// one canonical answer per fact, not a separately-worded restatement.
const homeFaqs = [
  {
    icon: 'fa-building',
    question: 'Who is an office furniture supplier in Muscat and Oman?',
    answers: [
      'There are existing companies in the market for office furniture in Muscat, such as Khimji Ramdas, Bahwan Furnishings, and Fahmy Furniture, who have been in the business for many years. GST Concepts does not offer its services as another local showroom for office furniture.',
      'Instead, it follows a project-based approach that includes fit-out solutions involving workstation and office furniture from Brunonic and Scab.',
    ],
    links: [
      { label: 'See Brunonic office furniture →', to: '/brunonic' },
      { label: 'See Scab workplace furniture →', to: '/scab' },
    ],
  },
  {
    icon: 'fa-couch',
    question: 'Who is a seating supplier in Oman and Muscat?',
    answers: [
      'Installation of auditorium, cinema, and retractable seating in Oman has been carried out by local fit-out companies such as CDD Oman, Fahmy Furniture, and Khimji Ramdas, which typically source their seats from international brands.',
      'GST Concepts, by comparison, supplies the seating directly — Leadcom and Audia Italia auditorium, cinema, and retractable seating systems.',
    ],
    links: [
      { label: 'See Leadcom auditorium & retractable seating →', to: '/leadcom' },
      { label: 'See Audia Italia seating →', to: '/audia' },
    ],
  },
  {
    icon: 'fa-house-medical',
    question: 'Who is a hospital furniture supplier in Oman and Muscat?',
    answers: [
      'In Oman, hospital furniture is provided by specialty firms like IMTAC, Al Khalili Specialized Projects, Jaza (Al Jazeera Medical Innovations), and Mediniq Oman — most of them retail/showroom or equipment suppliers by category.',
      'The Nitrocare range offered by GST Concepts comprises hospital beds, examination furniture, dialysis chairs, and ward furniture for facility projects.',
    ],
    links: [
      { label: 'See Nitrocare hospital furniture →', to: '/nitrocare' },
    ],
  },
  {
    icon: 'fa-gem',
    question: 'Where can I find Italian brand furniture in Muscat and Oman?',
    answers: [
      'Searching online for "Italian furniture in Muscat" mainly surfaces residential luxury brands like Fendi Casa, Bentley Home, Bonaldo, and Novamobili.',
      'GST Concepts specializes in Italian furniture for the commercial and contract sector instead — Audia Italia (auditorium and cinema seating), Scab (workplace furniture), and Brunonic (office workstations & seating).',
    ],
    links: [
      { label: 'Audia Italia →', to: '/audia' },
      { label: 'Scab →', to: '/scab' },
      { label: 'Brunonic →', to: '/brunonic' },
    ],
  },
]

const whyChoose = [
  {
    icon: 'fa-user-tie',
    title: 'Multiple brands, one contact person',
    body: 'Five brands under one project manager, rather than arranging different suppliers for seating, office furniture, and healthcare furniture.',
  },
  {
    icon: 'fa-file-signature',
    title: 'Contract-based, project-based approach',
    body: 'Bulk procurement and installation for office, venue, and healthcare settings, compared to retail sales of single pieces.',
  },
]

const zones = [
  { id: 'z_exterior', s: 0.0, e: 0.108, align: 'center' },
  { id: 'z_brunonic', s: 0.108, e: 0.296, align: 'left' },
  { id: 'z_scab', s: 0.296, e: 0.497, align: 'right' },
  { id: 'z_leadcom', s: 0.497, e: 0.664, align: 'left' },
  { id: 'z_nitro', s: 0.664, e: 0.917, align: 'right' },
  { id: 'z_audia', s: 0.917, e: 1.0, align: 'center' },
]
const FADE = 0.03

export default function Home() {
  useScopedStyle(homeCss)
  const canvasRef = useRef(null)
  const mobileCanvasRef = useRef(null)
  const finalRef = useRef(null)
  const { status: homeContactStatus, errorMessage: homeContactError, submit: submitHomeContact } = useContactForm()

  useEffect(() => {
    const previousTitle = document.title
    const metaDescription = document.querySelector('meta[name="description"]')
    const previousDescription = metaDescription?.getAttribute('content') || ''

    document.title = seoTitle
    if (metaDescription) metaDescription.setAttribute('content', seoDescription)

    const schemaScripts = [
      {
        id: 'home-localbusiness-schema',
        content: {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'GST Concepts',
          address: { '@type': 'PostalAddress', addressLocality: 'Muscat', addressCountry: 'Oman' },
          telephone: ['+968 9710 0007', '+968 9806 7601'],
          email: 'sales@gstconcepts.om',
          areaServed: ['Oman', 'Singapore'],
          description: seoDescription,
        },
      },
      {
        id: 'home-itemlist-schema',
        content: {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'GST Concepts Brand & Category Pages',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Leadcom Auditorium & Retractable Seating', url: `${window.location.origin}/leadcom` },
            { '@type': 'ListItem', position: 2, name: 'Audia Italia Seating', url: `${window.location.origin}/audia` },
            { '@type': 'ListItem', position: 3, name: 'Scab Workplace Furniture', url: `${window.location.origin}/scab` },
            { '@type': 'ListItem', position: 4, name: 'Brunonic Office Furniture', url: `${window.location.origin}/brunonic` },
            { '@type': 'ListItem', position: 5, name: 'Nitrocare Hospital Furniture', url: `${window.location.origin}/nitrocare` },
          ],
        },
      },
      {
        id: 'home-faq-schema',
        content: {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: homeFaqs.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answers.join(' ') },
          })),
        },
      },
      {
        id: 'home-breadcrumb-schema',
        content: {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${window.location.origin}/` },
          ],
        },
      },
    ]

    schemaScripts.forEach(({ id, content }) => {
      document.getElementById(id)?.remove()
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = id
      script.text = JSON.stringify(content)
      document.head.appendChild(script)
    })

    return () => {
      document.title = previousTitle
      if (metaDescription) metaDescription.setAttribute('content', previousDescription)
      schemaScripts.forEach(({ id }) => document.getElementById(id)?.remove())
    }
  }, [])

  useEffect(() => {
    let disposed = false
    // Mobile gets its own lighter frame sequence + scroll track (#mobileScrollContainer)
    // instead of the desktop 288-frame canvas, so it never loads the desktop set.
    const isMobile = window.matchMedia(MOBILE_BREAKPOINT).matches

    const canvas = isMobile ? mobileCanvasRef.current : canvasRef.current
    const ctx = canvas.getContext('2d')
    // Size the canvas off its own rendered box (not window.innerHeight) so it always
    // matches the sticky wrap's CSS height (100svh) — on real mobile browsers
    // window.innerHeight can diverge from svh as the address bar collapses, which
    // previously left the drawn frame shorter than its box and exposed the
    // background underneath as a white gap.
    const canvasBox = () => canvas.getBoundingClientRect()
    let box = canvasBox()
    let W = (canvas.width = box.width)
    let H = (canvas.height = box.height)
    const total = isMobile ? MOBILE_TOTAL : TOTAL
    const frames = new Array(total)
    let currentFrame = 0
    let rafPending = false

    const drawFrame = (idx) => {
      const img = frames[Math.max(0, Math.min(idx, total - 1))]
      if (!img || !img.complete || !img.naturalWidth) {
        // Frame missing/failed to load — keep whatever is already painted
        // rather than flashing the canvas to blank white.
        return
      }
      const s = Math.max(W / img.naturalWidth, H / img.naturalHeight)
      const w = img.naturalWidth * s
      const h = img.naturalHeight * s
      ctx.clearRect(0, 0, W, H)
      ctx.drawImage(img, (W - w) / 2, (H - h) / 2, w, h)
    }

    const onResize = () => {
      box = canvasBox()
      W = canvas.width = box.width
      H = canvas.height = box.height
      drawFrame(currentFrame)
    }
    window.addEventListener('resize', onResize)

    // ---------- LOADER ----------
    const loader = document.getElementById('loader')
    let loaded = 0
    document.body.style.overflow = 'hidden'

    for (let i = 1; i <= total; i++) {
      const img = new Image()
      const n = String(i).padStart(3, '0')
      img.src = isMobile
        ? `/mobile-hero-scroling/ezgif-frame-${n}.png`
        : `/gst-concepts-image/ezgif-frame-${n}.jpg`
      const done = () => {
        if (disposed) return
        frames[i - 1] = img
        loaded++
        if (loaded === total && loader) {
          setTimeout(() => {
            loader.style.transition = 'opacity 1s ease'
            loader.style.opacity = '0'
            setTimeout(() => {
              loader.style.display = 'none'
              document.body.style.overflow = 'auto'
              drawFrame(0)
            }, 1000)
          }, 400)
        }
      }
      img.onload = done
      img.onerror = done
    }

    // ---------- OVERLAYS (desktop only — mobile has no zone overlays) ----------
    const updateOverlays = (prog) => {
      zones.forEach((z) => {
        const el = document.getElementById(z.id)
        if (!el) return
        let op = 0
        let ty = 22
        if (prog >= z.s && prog <= z.e) {
          const fadeIn = (prog - z.s) / FADE
          const fadeOut = (z.e - prog) / FADE
          op = Math.min(1, Math.min(fadeIn, fadeOut))
          ty = 22 * (1 - op)
        }
        el.style.opacity = op
        if (z.align === 'center') {
          el.style.transform = `translateX(-50%) translateY(${ty}px)`
        } else {
          el.style.transform = `translateY(calc(-50% + ${ty}px))`
        }
      })

      const sweep = document.getElementById('z_entrance')
      if (sweep) {
        if (prog >= 0.095 && prog <= 0.14) {
          const phase1 = Math.min(1, Math.max(0, (prog - 0.095) / 0.025))
          const phase2 = Math.min(1, Math.max(0, (prog - 0.12) / 0.02))
          sweep.style.transform = `scaleX(${phase1})`
          sweep.style.opacity = 1 - phase2
        } else {
          sweep.style.opacity = 0
          sweep.style.transform = 'scaleX(0)'
        }
      }
    }

    // ---------- SCROLL ----------
    const progressBar = document.getElementById('progressBar')
    const updateProgressBar = () => {
      const doc = document.documentElement
      const totalScroll = doc.scrollHeight - window.innerHeight
      const p = totalScroll > 0 ? window.scrollY / totalScroll : 0
      if (progressBar) progressBar.style.width = p * 100 + '%'
    }

    const scrollContainerId = isMobile ? 'mobileScrollContainer' : 'scrollContainer'
    const onScroll = () => {
      const el = document.getElementById(scrollContainerId)
      if (!el) return
      const r = el.getBoundingClientRect()
      const tot = el.offsetHeight - box.height
      const scrolledPx = Math.max(0, -r.top)
      const prog = Math.max(0, Math.min(1, scrolledPx / tot))

      const fi = Math.min(Math.floor(prog * (total - 1)), total - 1)
      if (fi !== currentFrame) {
        currentFrame = fi
        if (!rafPending) {
          rafPending = true
          requestAnimationFrame(() => {
            drawFrame(currentFrame)
            rafPending = false
          })
        }
      }
      if (!isMobile) updateOverlays(prog)
      updateProgressBar()
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // initial paint
    drawFrame(0)
    if (!isMobile) updateOverlays(0)
    updateProgressBar()

    // ---------- FINAL CTA 3D PARALLAX ----------
    const finalSection = finalRef.current
    const onPointerMove = (e) => {
      const rect = finalSection.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width - 0.5
      const py = (e.clientY - rect.top) / rect.height - 0.5
      finalSection.style.setProperty('--rx', `${(-py * 8).toFixed(2)}deg`)
      finalSection.style.setProperty('--ry', `${(px * 10).toFixed(2)}deg`)
    }
    const onPointerLeave = () => {
      finalSection.style.setProperty('--rx', '0deg')
      finalSection.style.setProperty('--ry', '0deg')
    }
    if (finalSection) {
      finalSection.addEventListener('pointermove', onPointerMove)
      finalSection.addEventListener('pointerleave', onPointerLeave)
    }

    return () => {
      disposed = true
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onScroll)
      if (finalSection) {
        finalSection.removeEventListener('pointermove', onPointerMove)
        finalSection.removeEventListener('pointerleave', onPointerLeave)
      }
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <>
      {/* SCROLL PROGRESS */}
      <div id="progressBar"></div>

      {/* LOADER */}
      <div id="loader">
        <img className="lo-truck" src="/images/loading-image.webp" alt="Loading…" />
      </div>

      {/* NAV */}
      <PageHeader active="home" />

      {/* MOBILE HERO — scroll-scrubbed canvas hero shown on small screens only, mirrors the desktop CANVAS SCROLL below */}
      <section className="mobile-hero">
        <div id="mobileScrollContainer">
          <div id="mobileStickyWrap">
            <canvas id="mobileCanvas" ref={mobileCanvasRef}></canvas>
          </div>
        </div>
      </section>

      {/* CANVAS SCROLL */}
      <div id="scrollContainer">
        <div id="stickyWrap">
          <canvas id="canvas" ref={canvasRef}></canvas>
        </div>
      </div>

      {/* TICKER */}
      <div className="ticker">
        <div className="ticker-track" id="tickerTrack">
          {[...tickerItems, ...tickerItems].map((t, i) => (
            <span key={i}>
              <span>{t}</span>
              <span className="star">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* BRAND GRID */}
      <section className="collection">
        <div className="coll-head">
          <h2 className="coll-h">The GST Concepts Collection</h2>
          <div className="coll-sub">Five luxury brands. One destination.</div>
          <div className="coll-sep"></div>
        </div>
        <div className="brand-grid">
          {brandCards.map((b) => (
            <Link key={b.name} to={b.to} className="brand-card" style={{ '--accent': b.accent, '--accent-soft': b.soft }}>
              <div className="brand-name">{b.name}</div>
              <div className="brand-visual">
                <span className="bv-orb"></span>
                <span className="bv-watermark">{b.num}</span>
                <ModelViewer glb={b.glb} className="bv-model" maxPixelRatio={1.5} />
              </div>
              <div className="brand-cat">{b.cat}</div>
              <div className="brand-prods">{b.prods}</div>
              <span className="brand-link">EXPLORE →</span>
            </Link>
          ))}
        </div>
      </section>


          {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-wrap">
          <div className="about-text">
            <div className="about-eyebrow">— ABOUT GST CONCEPTS</div>
            <h2 className="about-h">Design to Deliver <span className="gold">with Style.</span></h2>
            <div className="about-sep"></div>
            <p className="about-body">GST Concepts is a commercial furniture supplier serving the Sultanate of Oman, bringing together seating, workplace, and healthcare furniture through one relationship instead of a single-brand showroom.</p>
            <p className="about-body">GST Concepts is the authorized regional partner in Oman for five international brands — Leadcom, Audia Italia, Scab, Brunonic, and Nitrocare — covering auditorium and cinema seating, office and workplace furniture, and hospital and healthcare furniture for commercial and institutional projects across Oman.</p>
            <Link to="/about" className="about-cta-btn">About Us →</Link>
          </div>
          <div className="about-img">
            <video className="about-video" autoPlay muted loop playsInline aria-label="GST Concepts furniture collection video">
              <source src="/images/gst-about-us-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>


      {/* PROJECTS */}
      <section className="home-projects">
        <div className="home-projects-inner">
          <div className="home-projects-head">
            <div className="home-projects-eyebrow">SELECTED WORK — ACROSS THE GULF</div>
            <h2 className="home-projects-title">Featured Projects</h2>
          </div>
          <ProjectSlider items={projects} />
        </div>
      </section>

      {/* SEO INTRO / H1 / TRUST BAR */}
      <section className="intro-seo">
        <div className="intro-seo-wrap">
          <div className="intro-eyebrow">MUSCAT, SULTANATE OF OMAN</div>
          <h1 className="intro-h1">GST Concepts — Commercial Furniture Supplier for Oman, Muscat</h1>
          <div className="intro-sep"></div>
          <p className="intro-body">
            GST Concepts, located in Muscat, offers office furniture, auditorium and cinema seating, hospital and healthcare furniture, and Italian contract brands for commercial and institutional projects throughout the Sultanate. Unlike single-brand retail showrooms, GST Concepts sources across five authorized brands — Audia Italia, Scab, Leadcom, Brunonic and Nitrocare.
          </p>
          <div className="trust-bar">
            {trustBar.map((t) => (
              <div className="trust-item" key={t.text}>
                <span className="trust-icon"><i className={`fas ${t.icon}`}></i></span>
                <span className="trust-text">{t.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOME FAQ — CATEGORY SUPPLIER Q&A */}
      <section className="home-faq-section">
        <div className="home-faq-pattern" aria-hidden="true"></div>
        <div className="home-faq-wrap">
          <div className="home-faq-grid">
            {homeFaqs.map((item, i) => (
              <div className="home-faq-card" key={item.question}>
                <div className="home-faq-top">
                  <div className="home-faq-icon"><i className={`fas ${item.icon}`}></i></div>
                  <div className="home-faq-num">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <h2 className="home-faq-q">{item.question}</h2>
                {item.answers.map((a) => (
                  <p className="home-faq-a" key={a}>{a}</p>
                ))}
                <div className="home-faq-links">
                  {item.links.map((l) => (
                    <Link key={l.to} to={l.to} className="home-faq-link-pill">{l.label}</Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="home-why-card-outer">
            <h2 className="home-faq-q">Why choose GST Concepts over a single-brand or single-category supplier?</h2>
            <div className="home-why">
              {whyChoose.map((w) => (
                <div className="home-why-card" key={w.title}>
                  <div className="home-why-icon"><i className={`fas ${w.icon}`}></i></div>
                  <h4>{w.title}</h4>
                  <p>{w.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="home-seo-cta">
            <div className="home-seo-cta-lead">Planning a commercial or institutional project in Oman?</div>
            <Link to="/contact" className="home-seo-cta-btn">Start Your Project →</Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact-wrap">
          <div className="contact-head">
            <div className="contact-eyebrow">— GET IN TOUCH</div>
            <h2 className="contact-h">Let's transform <span className="gold">your space.</span></h2>
            <div className="contact-sep"></div>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <h3 className="contact-info-h">Visit our Muscat furniture office.</h3>
              <p className="contact-info-p">Speak with our design team for quotations, bulk orders, or furniture project support. We respond within one business day.</p>
              <div className="contact-item">
                <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div>
                  <div className="contact-item-l">Office</div>
                  <div className="contact-item-v">Muscat<br />Sultanate of Oman<br />PC 112, PO Box 543</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><i className="fas fa-phone"></i></div>
                <div>
                  <div className="contact-item-l">Call Us</div>
                  <div className="contact-item-v">+968 9710 0007 / +968 9806 7601</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                <div>
                  <div className="contact-item-l">Email</div>
                  <div className="contact-item-v">sales@gstconcepts.om</div>
                </div>
              </div>
            </div>
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault()
                submitHomeContact(e.target)
              }}
            >
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <input type="text" name="subject" placeholder="Subject" />
              <textarea name="message" placeholder="Tell us about your project" rows="4" required></textarea>
              <button type="submit" className="contact-submit" disabled={homeContactStatus === 'sending'}>
                {homeContactStatus === 'sending' ? 'Sending…' : 'Send Message →'}
              </button>
              {homeContactStatus === 'success' && <p className="form-status form-status-success">Thanks — your message has been sent. We'll be in touch shortly.</p>}
              {homeContactStatus === 'error' && <p className="form-status form-status-error">{homeContactError}</p>}
            </form>
          </div>
        </div>
      </section>

      

      {/* FINAL CTA */}
      <section className="final" ref={finalRef}>
        <div className="final-scene" aria-hidden="true">
          <div className="final-aurora"></div>
          <div className="final-floor"></div>
          <div className="final-ring"></div>
          <div className="final-panel panel-left"></div>
          <div className="final-panel panel-center"></div>
          <div className="final-panel panel-right"></div>
          <div className="final-orb orb-a"></div>
          <div className="final-orb orb-b"></div>
          <div className="final-orb orb-c"></div>
        </div>
        <div className="final-ghost">GST</div>
        <div className="final-glow"></div>
        <div className="final-inner">
          <div className="final-eyebrow">— GST CONCEPTS · MUSCAT, OMAN</div>
          <div className="final-h">Furnishing Oman's</div>
          <div className="final-h gold">Commercial &amp; Institutional Spaces.</div>
          <div className="final-sup">
            Office, seating &amp; healthcare furniture · Five authorized international brands<br />
            Project-based procurement, delivery &amp; installation — not single-piece retail<br />
            Pan-Gulf shipping · Gulf Supply &amp; Services Trading, Muscat
          </div>
          <div className="specs">
            <div className="spec"><div className="spec-l">COLLECTIONS</div><div className="spec-v">5 BRANDS</div></div>
            <div className="spec"><div className="spec-l">DELIVERY</div><div className="spec-v">ACROSS OMAN</div></div>
            <div className="spec"><div className="spec-l">SHIPPING</div><div className="spec-v">PAN-GULF</div></div>
          </div>
          <div className="final-btns">
            <Link to="/contact" className="btn-final-pri">START YOUR PROJECT</Link>
            <Link to="/contact" className="btn-final-ghost">REQUEST A QUOTE</Link>
          </div>
        </div>
      </section>

      {/* SITE FOOTER */}
      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="footer-brand"><img src="/images/GST_logo.png" alt="GST Concepts" className="footer-logo-img" /></Link>
            <p>Elevating workspaces with sophisticated European design across the Sultanate of Oman and the wider Gulf. Five luxury collections under one roof in Muscat.</p>
            <div className="footer-social">
              <a href="https://www.instagram.com/gstconcepts_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/company/gst-concepts/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="https://www.facebook.com/profile.php?id=61590278432514" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.youtube.com/@GSTConcepts" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/collection">Collection</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Our Partners</h4>
            <ul>
              <li><Link to="/audia">Audia</Link></li>
              <li><Link to="/scab">Scab</Link></li>
              <li><Link to="/leadcom">Leadcom</Link></li>
              <li><Link to="/brunonic">Brunonic</Link></li>
              <li><Link to="/nitrocare">Nitrocare</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Info</h4>
            <div className="footer-contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>Muscat<br />Sultanate of Oman<br />PC 112, PO Box 543</p>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-phone"></i>
              <p>+968 9710 0007 / +968 9806 7601</p>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-envelope"></i>
              <p>sales@gstconcepts.om</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Gulf Supply and Services Trading. All Rights Reserved.</span>
        </div>
      </footer>

      <WhatsAppFloat />
    </>
  )
}
