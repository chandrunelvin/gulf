import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import homeCss from '../styles/home.css?inline'
import useScopedStyle from '../hooks/useScopedStyle.js'
import ModelViewer from '../components/ModelViewer.jsx'

const TOTAL = 288

const tickerItems = [
  'GST CONCEPTS', 'BRUNONIC', 'S-CAB', 'LEADCOM', 'NITROCARE',
  'AUDIA AUDITORIUM SOLUTIONS', 'Italian Office Furniture',
  'Lifestyle Seating', 'Premium Auditorium Chairs', 'Medical Furniture',
  'VAT Invoice Included', '5-Year Warranty', 'Pan-Gulf Delivery',
  'Sultanate of Oman', 'Design to Deliver with Style', 'Muscat',
]

const brandCards = [
  { name: 'BRUNONIC', accent: '#1f3a8a', soft: '#ebeffb', num: '01', glb: '/images/3d model/brunonic-brand.glb', cat: 'Italian Office Furniture', prods: 'Workstations · Executive Chairs · Storage · Sofas', to: '/brunonic' },
  { name: 'S-CAB', accent: '#0f9b8e', soft: '#e4f7f4', num: '02', glb: '/images/3d model/sicab.glb', cat: 'Lifestyle Collection', prods: 'Chairs · Barstools · Sofas · Hanging Seats · Sunbeds', to: '/scab' },
  { name: 'LEADCOM', accent: '#8a1538', soft: '#fbe9ee', num: '03', glb: '/images/3d model/leadcom.glb', cat: 'Premium Seating', prods: 'Auditorium · Cinema · Lounge · Office · Stadium', to: '/leadcom' },
  { name: 'NITROCARE', accent: '#1f86a8', soft: '#e6f4f9', num: '04', glb: '/images/3d model/nitrocare.glb', cat: 'Medical Furniture', prods: 'Recliners · Hospital Beds · Examination Tables', to: '/nitrocare' },
  { name: 'AUDIA', accent: '#8a2b1f', soft: '#fbeae6', num: '05', glb: '/images/3d model/AUDIA.compressed.glb', cat: 'Auditorium Solutions', prods: 'Theatre Seating · Gulf Venues · Custom Colours', to: '/audia' },
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
  const [scrolled, setScrolled] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const finalRef = useRef(null)

  useEffect(() => {
    let disposed = false
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W = (canvas.width = window.innerWidth)
    let H = (canvas.height = window.innerHeight)
    const frames = new Array(TOTAL)
    let currentFrame = 0
    let rafPending = false

    const drawFrame = (idx) => {
      const img = frames[Math.max(0, Math.min(idx, TOTAL - 1))]
      if (!img || !img.complete) {
        ctx.fillStyle = '#ffffff'
        ctx.fillRect(0, 0, W, H)
        return
      }
      const s = Math.max(W / img.naturalWidth, H / img.naturalHeight)
      const w = img.naturalWidth * s
      const h = img.naturalHeight * s
      ctx.clearRect(0, 0, W, H)
      ctx.drawImage(img, (W - w) / 2, (H - h) / 2, w, h)
    }

    const onResize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
      drawFrame(currentFrame)
    }
    window.addEventListener('resize', onResize)

    // ---------- LOADER ----------
    const loader = document.getElementById('loader')
    const loFill = document.getElementById('loFill')
    const loCount = document.getElementById('loCounter')
    let loaded = 0
    document.body.style.overflow = 'hidden'

    for (let i = 1; i <= TOTAL; i++) {
      const img = new Image()
      const n = String(i).padStart(3, '0')
      img.src = `/gst-concepts-image/ezgif-frame-${n}.jpg`
      const done = () => {
        if (disposed) return
        frames[i - 1] = img
        loaded++
        const pct = Math.floor((loaded / TOTAL) * 100)
        if (loFill) loFill.style.width = pct + '%'
        if (loCount) loCount.textContent = `Loading collection · ${String(pct).padStart(3, '0')}%`
        if (loaded === TOTAL && loader) {
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

    // ---------- OVERLAYS ----------
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

    const onScroll = () => {
      setScrolled(window.scrollY > 80)
      const el = document.getElementById('scrollContainer')
      if (!el) return
      const r = el.getBoundingClientRect()
      const tot = el.offsetHeight - window.innerHeight
      const scrolledPx = Math.max(0, -r.top)
      const prog = Math.max(0, Math.min(1, scrolledPx / tot))

      const fi = Math.min(Math.floor(prog * (TOTAL - 1)), TOTAL - 1)
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
      updateOverlays(prog)
      updateProgressBar()
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // initial paint
    drawFrame(0)
    updateOverlays(0)
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

  const closeNav = () => {
    setNavOpen(false)
    setDropdownOpen(false)
  }
  const onPartnersClick = (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault()
      setDropdownOpen((v) => !v)
    }
  }

  return (
    <>
      {/* SCROLL PROGRESS */}
      <div id="progressBar"></div>

      {/* LOADER */}
      <div id="loader">
        <div className="lo-gst">GST</div>
        <div className="lo-con">CONCEPTS</div>
        <div className="lo-line"></div>
        <div className="lo-tag">Furniture collections. Scroll to explore.</div>
        <div className="lo-track"><div className="lo-fill" id="loFill"></div></div>
        <div className="lo-counter" id="loCounter">Loading collection · 000%</div>
      </div>

      {/* NAV */}
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
        <Link to="/" className="logo">
          <img src="/images/GST logo-footer.jpg" alt="GST Concepts" className="logo-img footer-logo-state" />
          <img src="/images/GST_logo.png" alt="GST Concepts" className="logo-img sticky-logo-state" />
        </Link>
        <ul className={`nav-links${navOpen ? ' nav-active' : ''}`} id="navLinks">
          <li><Link to="/" onClick={closeNav}>Home</Link></li>
          <li className={`dropdown${dropdownOpen ? ' active' : ''}`}>
            <Link to="/partners" onClick={onPartnersClick}>Partners <i className="fas fa-chevron-down"></i></Link>
            <ul className="dropdown-menu">
              <li><Link to="/audia" onClick={closeNav}>Audia</Link></li>
              <li><Link to="/scab" onClick={closeNav}>Scab</Link></li>
              <li><Link to="/leadcom" onClick={closeNav}>Leadcom</Link></li>
              <li><Link to="/brunonic" onClick={closeNav}>Brunonic</Link></li>
            </ul>
          </li>
          <li><Link to="/about" onClick={closeNav}>About Us</Link></li>
          <li><Link to="/collection" onClick={closeNav}>Collection</Link></li>
          <li><Link to="/contact" onClick={closeNav}>Contact</Link></li>
        </ul>
        <button className="nav-cta" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>Explore Collection ↓</button>
        <div
          className={`burger${navOpen ? ' toggle' : ''}`}
          id="navBurger"
          aria-label="Open menu"
          aria-expanded={navOpen}
          role="button"
          tabIndex={0}
          onClick={() => setNavOpen((v) => !v)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              setNavOpen((v) => !v)
            }
          }}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-radial"></div>
        <div className="hero-text">
          <div className="hero-eyebrow">EST. MUSCAT · MMXXVI — 5 COLLECTIONS</div>
          <div className="hero-h">Furniture for</div>
          <div className="hero-h">Every space</div>
          <div className="hero-h gold">furnished.</div>
          <div className="hero-sub">Gulf Supply &amp; Services Trading — Muscat, Oman.<br />Design to Deliver with Style.</div>
          <div className="scroll-ind"></div>
        </div>
      </section>

      {/* CANVAS SCROLL */}
      <div id="scrollContainer">
        <div id="stickyWrap">
          <canvas id="canvas" ref={canvasRef}></canvas>
          <div id="overlays">
            <div className="ov ov-center" id="z_exterior" style={{ bottom: '22%' }}>
              <div className="ext-eyebrow">GST CONCEPTS FURNITURE · MUSCAT, OMAN</div>
              <div className="ext-h">Five collections.</div>
              <div className="ext-h gold">One address.</div>
              <div className="ext-scroll">↓  Scroll to enter</div>
            </div>

            <div className="sweep" id="z_entrance"></div>

            <div className="ov ov-left" id="z_brunonic">
              <div className="ov-card">
                <div className="kicker">01 / 05</div>
                <div className="zone-tag">ZONE 01 — BRUNONIC</div>
                <div>
                  <span className="h-line">The workspace</span>
                  <span className="h-line">that thinks</span>
                  <span className="h-line gold">like you do.</span>
                </div>
                <p className="body">Italian engineering. Ergonomic precision. Workstations, executive chairs, storage units and sofas — built for the modern professional.</p>
                <div className="price-grid"></div>
                <Link to="/brunonic" className="btn-block">EXPLORE BRUNONIC →</Link>
              </div>
            </div>

            <div className="ov ov-right" id="z_scab">
              <div className="ov-card">
                <div className="kicker">02 / 05</div>
                <div className="zone-tag">ZONE 02 — S-CAB</div>
                <div>
                  <span className="h-line">Where every room</span>
                  <span className="h-line">tells a story</span>
                  <span className="h-line gold">worth living.</span>
                </div>
                <p className="body">Chairs. Armchairs. Barstools. Sofas. Hanging seats. Sunbeds. Coffee tables. Accessories. S-CAB — furniture that feels like home.</p>
                <Link to="/scab" className="btn-block gold">EXPLORE S-CAB →</Link>
              </div>
            </div>

            <div className="ov ov-left" id="z_leadcom">
              <div className="ov-card">
                <div className="kicker">03 / 05</div>
                <div className="zone-tag">ZONE 03 — LEADCOM</div>
                <div>
                  <span className="h-line">Seating built</span>
                  <span className="h-line">for every</span>
                  <span className="h-line gold">great moment.</span>
                </div>
                <p className="body">Auditorium. Cinema. Lecture halls. Corporate lounges. Waiting areas. Stadiums. LEADCOM — where people gather, LEADCOM seats them.</p>
                <div className="pills">
                  <span className="pill">Auditorium</span>
                  <span className="pill">Cinema</span>
                  <span className="pill">Education</span>
                </div>
                <div className="price-note" style={{ marginTop: '6px' }}>Bulk pricing · Venues across the Gulf</div>
                <Link to="/leadcom" className="btn-block">EXPLORE LEADCOM →</Link>
              </div>
            </div>

            <div className="ov ov-right" id="z_nitro">
              <div className="ov-card">
                <div className="kicker">04 / 05</div>
                <div className="zone-tag">ZONE 04 — NITROCARE</div>
                <div>
                  <span className="h-line">Care deserves</span>
                  <span className="h-line">a proper</span>
                  <span className="h-line gold">place to rest.</span>
                </div>
                <p className="body">Medical-grade vinyl. Chrome frames. IV pole mounts. Adjustable backrests. Electric positioning. Engineered for patient comfort and clinical precision.</p>
                <div className="gst-callout">
                  <div className="l1">MEDICAL-GRADE — TAX EXEMPT CATEGORY</div>
                  <div className="l2">Specialised pricing for healthcare institutions</div>
                </div>
                <Link to="/nitrocare" className="btn-block">ENQUIRE FOR MEDICAL →</Link>
              </div>
            </div>

            <div className="ov ov-center bottom-lg audia" id="z_audia">
              <div className="ov-card dark">
                <div className="kicker" style={{ color: 'rgba(255,255,255,0.30)' }}>05 / 05</div>
                <div className="zone-tag" style={{ justifyContent: 'center' }}>ZONE 05 — AUDIA AUDITORIUM SOLUTIONS</div>
                <div>
                  <span className="h-finale">Built for the moment</span>
                  <span className="h-finale gold">before silence.</span>
                </div>
                <div className="sub-line">200+ venues. One name.</div>
                <p className="body">Flip-up velvet seats. Curved tiered rows. Custom colour options. Gold arch entrances. Stage lighting integration. AUDIA — the Gulf's premier auditorium seating.</p>
                <div className="price-sub">Grand Theatre Series · Bulk pricing available</div>
                <div className="audia-btns">
                  <Link to="/audia" className="btn-pri">GET BULK QUOTE →</Link>
                  <Link to="/audia" className="btn-ghost">VIEW CATALOGUE</Link>
                </div>
              </div>
            </div>
          </div>
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
            <p className="about-body">GST Concepts is the destination for sophisticated furniture in the IMEA region — five world-class collections under one roof in Muscat. From Italian office systems to auditorium seating and medical-grade comfort, every piece is selected for craftsmanship, function, and quiet confidence.</p>
            <p className="about-body">We partner directly with the finest manufacturers across Europe and deliver across the Sultanate of Oman and the wider Gulf, with valid VAT invoicing on every order.</p>
            <div className="about-stats">
              <div className="about-stat"><div className="n">05</div><div className="l">Collections</div></div>
              <div className="about-stat"><div className="n">Gulf</div><div className="l">Delivery</div></div>
              <div className="about-stat"><div className="n">10+</div><div className="l">Years</div></div>
            </div>
          </div>
          <div className="about-img">
            <video className="about-video" autoPlay muted loop playsInline aria-label="GST Concepts furniture collection video placeholder"></video>
            <div className="about-video-placeholder" aria-hidden="true">
              <div className="about-video-card">
                <div className="about-video-kicker">Collection Film</div>
                <div className="about-video-title">Video Placeholder</div>
                <div className="about-video-note">Add your furniture video source here</div>
              </div>
            </div>
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
                  <div className="contact-item-v">Muscat, Oman</div>
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
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Tell us about your project" rows="4" required></textarea>
              <button type="submit" className="contact-submit">Send Message →</button>
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
          <div className="final-eyebrow">— AVAILABLE NOW · MUSCAT, OMAN</div>
          <div className="final-h">Furniture for</div>
          <div className="final-h gold">Every space furnished.</div>
          <div className="final-sup">
            VAT compliant · Valid invoice with every order<br />
            White-glove delivery · Assembled at your door<br />
            Pan-Gulf shipping · Gulf Supply &amp; Services Trading, Muscat
          </div>
          <div className="specs">
            <div className="spec"><div className="spec-l">COLLECTIONS</div><div className="spec-v">5 BRANDS</div></div>
            <div className="spec"><div className="spec-l">BILLING</div><div className="spec-v">VAT INVOICE INCLUDED</div></div>
            <div className="spec"><div className="spec-l">DELIVERY</div><div className="spec-v">ACROSS OMAN</div></div>
            <div className="spec"><div className="spec-l">SHIPPING</div><div className="spec-v">PAN-GULF</div></div>
          </div>
          <div className="final-btns">
            <Link to="/contact" className="btn-final-pri">VISIT GST CONCEPTS</Link>
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
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
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
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Info</h4>
            <div className="footer-contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>Muscat, Sultanate of Oman</p>
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
          <span>Design to Deliver with Style.</span>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a href="https://wa.me/96897100007" className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <span className="whatsapp-label">WhatsApp</span>
        <span className="whatsapp-float-icon">
          <img src="/images/whatsapp-icon.jpeg" alt="WhatsApp" />
        </span>
      </a>
    </>
  )
}
