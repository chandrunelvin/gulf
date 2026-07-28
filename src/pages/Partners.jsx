import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout.jsx'
import useDocumentMeta from '../hooks/useDocumentMeta.js'
import useSeoMeta from '../hooks/useSeoMeta.js'

const seoTitle = 'Our Partner Brands | Audia, Scab, Leadcom, Brunonic | GST Concepts'
const seoDescription = 'GST Concepts partners with Audia Italia, Scab, Leadcom, and Brunonic to bring European auditorium, hospitality, and commercial furniture brands to Oman.'

const partners = [
  { to: '/audia', logo: '/images/audia-logo.svg', alt: 'Audia Logo', tag: 'Auditorium' },
  { to: '/scab', logo: '/images/s-cab_logo.svg', alt: 'Scab Logo', tag: 'Hospitality & Home' },
  { to: '/leadcom', logo: '/images/lead-logo.png', alt: 'Leadcom Logo', tag: 'Education & Auditorium' },
  { to: '/brunonic', logo: '/images/brunonicoffice-logo.png', alt: 'Brunonic Logo', tag: 'Commercial Furniture' },
]

export default function Partners() {
  useDocumentMeta(seoTitle, seoDescription)
  useSeoMeta({
    title: seoTitle,
    description: seoDescription,
    path: '/partners',
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1600&q=80',
  })

  return (
    <SiteLayout active="partners">
      <section
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1600&q=80')" }}
      >
        <div className="container">
          <h1 className="reveal-text">Our Partners</h1>
          <p>Collaborating with World-Renowned Brands</p>
        </div>
      </section>

      <section className="partners-grid-section">
        <div className="container">
          <div className="section-head reveal">
            <h2 className="section-title">A curated house of European brands.</h2>
          </div>
          <p className="intro-text reveal">We take pride in providing timeless and modern high-end pieces from the most renowned brands in Europe. Our partners share our commitment to quality, design, and functionality.</p>
          <div className="partner-grid">
            {partners.map((p) => (
              <Link key={p.to} to={p.to} className="partner-card reveal">
                <img src={p.logo} alt={p.alt} className="partner-logo" />
                <p>{p.tag}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
