import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SiteSearch from './SiteSearch.jsx'

/**
 * Shared header for the Gulf Supply & Services sub-pages (styled by site.css).
 * `active` marks the current nav item: 'home' | 'about' | 'collection' | 'contact'.
 */
export default function PageHeader({ active }) {
  const [scrolled, setScrolled] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
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
    <header className={scrolled ? 'header-scrolled' : ''}>
      <nav>
        <Link to="/" className="logo" onClick={closeNav}>GULF <span>SUPPLY AND SERVICES</span></Link>
        <ul className={`nav-links${navOpen ? ' nav-active' : ''}`}>
          <li><Link to="/" className={active === 'home' ? 'active' : ''} onClick={closeNav}>Home</Link></li>
          <li className={`dropdown${dropdownOpen ? ' active' : ''}`}>
            <Link to="/partners" onClick={onPartnersClick}>Partners <i className="fas fa-chevron-down"></i></Link>
            <ul className="dropdown-menu">
              <li><Link to="/audia" onClick={closeNav}>Audia</Link></li>
              <li><Link to="/scab" onClick={closeNav}>Scab</Link></li>
              <li><Link to="/leadcom" onClick={closeNav}>Leadcom</Link></li>
              <li><Link to="/brunonic" onClick={closeNav}>Brunonic</Link></li>
              <li><Link to="/nitrocare" onClick={closeNav}>Nitrocare</Link></li>
            </ul>
          </li>
          <li><Link to="/about" className={active === 'about' ? 'active' : ''} onClick={closeNav}>About Us</Link></li>
          <li><Link to="/collection" className={active === 'collection' ? 'active' : ''} onClick={closeNav}>Collection</Link></li>
          <li><Link to="/blog" className={active === 'blog' ? 'active' : ''} onClick={closeNav}>Blog</Link></li>
          <li><Link to="/contact" className={active === 'contact' ? 'active' : ''} onClick={closeNav}>Contact</Link></li>
        </ul>
        <div className="nav-actions">
          <SiteSearch onNavigate={closeNav} />
          <Link to="/contact" className="nav-cta">Get a Quote →</Link>
          <div
            className={`burger${navOpen ? ' toggle' : ''}`}
            role="button"
            tabIndex={0}
            aria-label="Toggle menu"
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
        </div>
      </nav>
    </header>
  )
}
