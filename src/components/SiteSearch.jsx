import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { allProducts } from '../data/allProducts.js'

const searchablePages = [
  { label: 'Home', href: '/' },
  { label: 'Partners', href: '/partners' },
  { label: 'Audia Italia', href: '/audia' },
  { label: 'Scab', href: '/scab' },
  { label: 'Leadcom', href: '/leadcom' },
  { label: 'Brunonic', href: '/brunonic' },
  { label: 'Nitrocare', href: '/nitrocare' },
  { label: 'About Us', href: '/about' },
  { label: 'Collection', href: '/collection' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

/**
 * Site-wide search toggle + overlay, shared between the Gulf sub-page header
 * (PageHeader.jsx) and the standalone Home.jsx nav, which have separate markup.
 */
export default function SiteSearch({ onNavigate }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const close = () => {
    setOpen(false)
    setQuery('')
  }

  const openSearch = () => {
    onNavigate?.()
    setOpen(true)
  }

  const matchedPages = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return searchablePages.filter((p) => p.label.toLowerCase().includes(q))
  }, [query])

  const matchedProducts = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return allProducts
      .filter((p) => p.caption.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q))
      .slice(0, 6)
  }, [query])

  const hasQuery = query.trim().length > 0
  const hasResults = matchedPages.length > 0 || matchedProducts.length > 0

  const onSubmit = (e) => {
    e.preventDefault()
    if (!hasQuery) return
    navigate('/collection')
    close()
  }

  return (
    <>
      <button type="button" className="search-toggle" aria-label="Search" onClick={openSearch}>
        <i className="fas fa-search"></i>
      </button>

      {open && (
        <div className="search-overlay" onClick={close}>
          <div className="search-panel" onClick={(e) => e.stopPropagation()}>
            <form className="search-form" onSubmit={onSubmit}>
              <i className="fas fa-search"></i>
              <input
                type="text"
                autoFocus
                placeholder="Search products, brands, pages…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="button" className="search-close" aria-label="Close search" onClick={close}>
                <i className="fas fa-times"></i>
              </button>
            </form>

            {hasQuery && (
              <div className="search-results">
                {!hasResults && <div className="search-empty">No results for "{query}"</div>}

                {matchedPages.length > 0 && (
                  <div className="search-group">
                    <div className="search-group-label">Pages</div>
                    {matchedPages.map((p) => (
                      <Link key={p.href} to={p.href} className="search-result" onClick={close}>
                        <i className="fas fa-arrow-right"></i>
                        <span>{p.label}</span>
                      </Link>
                    ))}
                  </div>
                )}

                {matchedProducts.length > 0 && (
                  <div className="search-group">
                    <div className="search-group-label">Products</div>
                    {matchedProducts.map((p, i) => (
                      <Link key={`${p.brand}-${i}`} to="/collection" className="search-result search-result-product" onClick={close}>
                        <img src={p.src} alt={p.alt} loading="lazy" />
                        <span>{p.caption}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
