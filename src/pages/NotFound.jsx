import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout.jsx'
import Seo from '../components/Seo.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/collection', label: 'Collection' },
  { to: '/partners', label: 'Partners' },
  { to: '/contact', label: 'Contact' },
]

export default function NotFound() {
  return (
    <SiteLayout>
      <Seo
        title="Page Not Found | GST Concepts"
        description="The page you are looking for does not exist or has been moved."
        path="/404"
        noindex
      />
      <section
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1600&q=80')" }}
      >
        <div className="container">
          <h1 className="reveal-text">404 — Page Not Found</h1>
          <p style={{ fontSize: '15px', fontWeight: 600 }}>The page you are looking for does not exist or has been moved.</p>
        </div>
      </section>

      <section className="partners-grid-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="intro-text" style={{ fontSize: '15px', fontWeight: 600, margin: '0 auto' }}>Try one of these pages instead:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginTop: '24px' }}>
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="cta-btn" style={{ padding: '10px 20px', fontSize: '15px', fontWeight: 700, letterSpacing: '2px' }}>{l.label}</Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
