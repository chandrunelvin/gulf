import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout.jsx'
import ModelViewer from '../components/ModelViewer.jsx'

const team = [
  {
    name: 'Hamed',
    role: 'Managing Director',
    bio: 'Sets the strategic direction for GST Concepts, overseeing brand partnerships, major projects, and the company’s overall growth across Oman.',
    img: '/images/teams/hamed-gst.png',
  },
  {
    name: 'Deepak Dinesh Prabakaran',
    role: 'Director',
    bio: 'Leads GST Concepts with a focus on premium furniture collections, client relationships, and long-term commercial growth across Oman and the Gulf.',
    img: '/images/teams/Deepak c.jpg',
  },
  {
    name: 'Dharshan',
    role: 'Sales Manager',
    bio: 'Supports clients with product selection, quotations, and day-to-day coordination to match each furniture requirement with the right solution.',
    img: '/images/teams/Dharshan c.jpg',
  },
  {
    name: 'Shella',
    role: 'Sales Executive',
    bio: 'Supports clients with product selection, quotations, and day-to-day coordination to match each furniture requirement with the right solution.',
    img: '/images/teams/shella-pic.webp',
  },
  {
    name: 'Sunny',
    role: 'Account Manager',
    bio: 'Manages customer accounts and project follow-ups, helping ensure every furniture order moves smoothly from enquiry to delivery.',
    img: '/images/teams/Sunny.png',
  },
  {
    name: 'Suresh',
    role: 'IT Head',
    bio: 'Oversees the company’s digital systems and technical operations, supporting a seamless online presence for GST Concepts and its collections.',
    img: '/images/teams/Suresh c.jpg',
  },
  {
    name: 'Joel',
    role: 'Social Media Designer',
    bio: 'Shapes the visual storytelling of GST Concepts through branded content, campaign design, and creative presentation of the furniture collections.',
    img: '/images/teams/Joel c.jpg',
  },
  {
    name: 'Chandru',
    role: 'Web Developer',
    bio: 'Builds and maintains the digital experience for GST Concepts, helping present the brand’s furniture collections with clarity and style online.',
    img: '/images/teams/Chandru c.jpg',
  },
]

const seoTitle = 'About GST Concepts, Muscat, Oman'
const seoDescription = 'GST Concepts is a Muscat-based multi-brand commercial furniture supplier in Oman — sourcing across seating, office, and hospital furniture.'

const overviewSections = [
  {
    question: 'What is GST Concepts?',
    answers: [
      'GST Concepts is a Muscat-based commercial furniture supplier serving the Sultanate of Oman.',
      'Operating locally under GULF SERVICE AND TRADING, it brings together seating, workplace, and healthcare categories through one commercial relationship instead of functioning like a single-brand showroom.',
    ],
  },
  {
    question: 'Which brands does GST Concepts represent in Oman?',
    answers: [
      'GST Concepts is the authorized regional partner in Oman for five international brands — Leadcom, Audia Italia, Scab, Brunonic, and Nitrocare.',
      'That gives clients one local point of contact for auditorium seating, office furniture, and healthcare furniture, sourced directly from each manufacturer rather than through a general reseller.',
    ],
  },
  {
    question: 'What does GST Concepts do differently from other furniture suppliers in Oman?',
    answers: [
      'Most suppliers specialize in a single lane, such as office furniture, specialist seating, or hospital furniture. GST Concepts follows a project-first model instead.',
      'If a project needs workplace furniture, auditorium seating, and healthcare support furniture within one development, GST Concepts coordinates those needs as one commercial relationship rather than making the client manage separate category vendors.',
    ],
  },
  {
    question: 'Where is GST Concepts based, and which markets does it serve?',
    answers: [
      'GST Concepts is based in Muscat, Sultanate of Oman, at PC 112, PO Box 543.',
      'It supports commercial and institutional projects across the Sultanate of Oman, sourcing directly from its partner brands in Italy and beyond.',
    ],
  },
]

const brands = [
  {
    name: 'Leadcom',
    href: '/leadcom',
    accent: '#8a1538',
    soft: '#fbe9ee',
    num: '01',
    glb: '/images/3d model/leadcom.glb',
    tag: 'Auditorium & Cinema Seating',
    blurb: 'Auditorium, cinema, retractable, stadium, and waiting-area seating for large-scale commercial and institutional settings.',
  },
  {
    name: 'Audia Italia',
    href: '/audia',
    accent: '#8a2b1f',
    soft: '#fbeae6',
    num: '02',
    glb: '/images/3d model/AUDIA.compressed.glb',
    tag: 'Community Seating',
    blurb: 'Italian community seating for auditoriums, theatres, cinemas, lecture halls, and acoustically sensitive environments.',
  },
  {
    name: 'Scab',
    href: '/scab',
    accent: '#0f9b8e',
    soft: '#e4f7f4',
    num: '03',
    glb: '/images/3d model/sicab.glb',
    tag: 'Contract Furniture',
    blurb: 'Italian contract furniture for workplaces, meeting rooms, collaborative hubs, and refined hospitality-adjacent settings.',
  },
  {
    name: 'Brunonic',
    href: '/brunonic',
    accent: '#1f3a8a',
    soft: '#ebeffb',
    num: '04',
    glb: '/images/3d model/brunonic-brand.glb',
    tag: 'Office Systems',
    blurb: 'Office furniture systems including workstations, executive suites, meeting spaces, and ergonomic workplace solutions.',
  },
  {
    name: 'Nitrocare',
    href: '/nitrocare',
    accent: '#1f86a8',
    soft: '#e6f4f9',
    num: '05',
    glb: '/images/3d model/nitrocare.glb',
    tag: 'Healthcare Furniture',
    blurb: 'Hospital and healthcare furniture for wards, clinics, treatment rooms, attendant areas, and medical support spaces.',
  },
]

const faqs = [
  {
    question: 'Is GST Concepts a single-brand showroom?',
    answer: 'No. GST Concepts operates under GULF SERVICE AND TRADING as a Muscat-based commercial furniture supplier, coordinating five international brands under one project relationship rather than selling one brand out of a retail showroom.',
  },
  {
    question: 'Which brands does GST Concepts represent?',
    answer: 'GST Concepts works across Leadcom, Audia Italia, Scab, Brunonic, and Nitrocare, covering auditorium seating, workplace furniture, contract seating, and hospital furniture requirements.',
  },
  {
    question: 'What does GST Concepts do differently from other furniture suppliers in Oman?',
    answer: 'GST Concepts follows a project-first model, coordinating multiple furniture categories through one relationship instead of requiring clients to manage separate suppliers for each part of a project.',
  },
  {
    question: 'What quality standards does GST Concepts furniture meet?',
    answer: 'GST Concepts sources directly from established international manufacturers — Leadcom, Audia Italia, Scab, Brunonic, and Nitrocare — each producing to their own certified quality and manufacturing standards.',
  },
  {
    question: 'Where is GST Concepts based?',
    answer: 'GST Concepts is based in Muscat, Sultanate of Oman at PC 112, PO Box 543, serving commercial and institutional projects across the Sultanate.',
  },
]

export default function About() {
  const [active, setActive] = useState(null)
  const open = active !== null
  const member = open ? team[active] : null

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const previousTitle = document.title
    const metaDescription = document.querySelector('meta[name="description"]')
    const previousDescription = metaDescription?.getAttribute('content') || ''

    document.title = seoTitle
    if (metaDescription) metaDescription.setAttribute('content', seoDescription)

    const schemaScripts = [
      {
        id: 'about-page-schema',
        content: {
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About GST Concepts',
          description: seoDescription,
          about: {
            '@type': 'Organization',
            name: 'GST Concepts',
            legalName: 'GULF SERVICE AND TRADING',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'PC 112, PO Box 543',
              addressLocality: 'Muscat',
              addressCountry: 'Oman',
            },
            areaServed: ['Oman'],
            brand: brands.map((brand) => ({
              '@type': 'Brand',
              name: brand.name,
            })),
          },
        },
      },
      {
        id: 'about-faq-schema',
        content: {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        },
      },
      {
        id: 'about-breadcrumb-schema',
        content: {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${window.location.origin}/`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'About',
              item: `${window.location.origin}/about`,
            },
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
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setActive(null) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <SiteLayout active="about">
      <section
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80')" }}
      >
        <div className="container">
          <div className="about-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About</span>
          </div>
          <h1 className="reveal-text hero-title-compact">About GST Concepts — Muscat, Oman</h1>
          <p>One company. Five brands. Commercial furniture support for Oman.</p>
        </div>
      </section>

      <section className="about-detail">
        <div className="container">
          <div className="about-flex">
            <div className="about-text reveal">
              <h2 className="section-title">What Is GST Concepts?</h2>
              <p>GST Concepts is a Muscat-based commercial furniture supplier serving the Sultanate of Oman.</p>
              <p>Operating locally under GULF SERVICE AND TRADING, it was built for commercial and institutional clients who need a single point of contact across multiple furniture categories rather than a separate supplier for each one.</p>
              <p>That includes auditorium and cinema seating, office and workplace furniture, and hospital and healthcare furniture across a focused portfolio of international brands.</p>
            </div>
            <div className="about-image reveal">
              <img src="https://www.furniconcepts.com/images/leadcom/products/AUDITORIUM-SEATING-CHAIR-A03.jpg" alt="Leadcom FIPO LUXE auditorium seating, supplied by GST Concepts in Oman" />
            </div>
          </div>
        </div>
      </section>

      <section className="gst-pillars-section">
        <div className="container">
          <div className="gst-pillars-head reveal">
            <div className="projects-eyebrow">WHY GST CONCEPTS</div>
            <h2 className="section-title">What Makes GST Concepts Different?</h2>
            <p>A clearer look at the brand access, company structure, and project-led approach behind GST Concepts in Oman.</p>
          </div>
          <div className="gst-pillars-list">
            {overviewSections.map((section, i) => (
              <article className="gst-pillar reveal" key={section.question}>
                <div className="gst-pillar-index">{String(i + 1).padStart(2, '0')}</div>
                <div className="gst-pillar-body">
                  <h3>{section.question}</h3>
                  {section.answers.map((answer) => (
                    <p key={answer}>{answer}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-detail">
        <div className="container">
          <div className="team-header reveal">
            <h2 className="section-title">The GST Concepts Collection</h2>
            <p>Five distinct brands covering seating, workplace, and healthcare requirements.</p>
          </div>
          <div className="about-collection-grid">
            {brands.map((brand) => (
              <Link
                key={brand.name}
                to={brand.href}
                className="about-collection-card reveal"
                style={{ '--about-accent': brand.accent, '--about-accent-soft': brand.soft }}
              >
                <div className="about-collection-name">{brand.name}</div>
                <div className="about-collection-visual">
                  <span className="about-collection-orb"></span>
                  <span className="about-collection-watermark">{brand.num}</span>
                  <ModelViewer glb={brand.glb} className="about-collection-model" maxPixelRatio={1.5} />
                </div>
                <div className="about-collection-tag">{brand.tag}</div>
                <div className="about-collection-copy">{brand.blurb}</div>
                <span className="about-collection-link">Explore Brand</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <div className="team-header reveal">
            <h2 className="section-title">Who Leads GST Concepts?</h2>
            <p>Named people matter on an About page. GST Concepts is led locally in Muscat by a real team handling sales, accounts, digital systems, and day-to-day client coordination.</p>
          </div>
          <div className="team-grid">
            {team.map((m, i) => (
              <div
                key={m.name}
                className="team-member reveal"
                role="button"
                tabIndex={0}
                aria-label={`Open profile for ${m.name}`}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setActive(i)
                  }
                }}
              >
                <div className="member-image">
                  <img src={m.img} alt={m.name} />
                </div>
                <div className="team-member-copy">
                  <p className="team-role">{m.role}</p>
                  <h3>{m.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="values faq-section">
        <div className="container">
          <div className="team-header reveal">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p>Quick answers on company structure, brands, certification, and location.</p>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <details className="faq-item reveal" key={faq.question} open={index === 0}>
                <summary>{faq.question}</summary>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="partner-final-cta">
        <div className="container partner-final-cta-inner reveal">
          <h2>Have A Commercial Or Institutional Project In Oman?</h2>
          <p>Talk to GST Concepts for coordinated sourcing across auditorium seating, office furniture, workplace fit-outs, and healthcare furniture requirements.</p>
          <Link to="/contact" className="cta-btn partner-final-cta-btn">Contact GST Concepts</Link>
        </div>
      </section>

      {open && (
        <div
          className="team-modal active"
          onClick={(e) => { if (e.target === e.currentTarget) setActive(null) }}
        >
          <div className="team-modal-dialog" role="dialog" aria-modal="true">
            <button className="team-modal-close" type="button" aria-label="Close team profile" onClick={() => setActive(null)}>
              <i className="fas fa-times"></i>
            </button>
            <div className="team-modal-image">
              <img className="team-modal-photo" src={member.img} alt={member.name} />
            </div>
            <div className="team-modal-copy">
              <div className="team-modal-role">{member.role}</div>
              <h3 className="team-modal-name">{member.name}</h3>
              <p className="team-modal-bio">{member.bio}</p>
              <div className="team-modal-linkedin">
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </SiteLayout>
  )
}
