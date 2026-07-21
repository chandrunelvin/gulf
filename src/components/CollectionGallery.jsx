import { useCallback, useEffect, useState } from 'react'

const PAGE_SIZE = 20

/**
 * Renders a `.collection-grid` of items with a click-to-open lightbox, keyboard
 * navigation and a counter — a React port of the gallery lightbox in script.js.
 * `items`: [{ src, alt, caption }]
 *
 * Only the first 20 items render initially; a "See More" button reveals the
 * next 20 at a time so large collections (100+ products) don't load or paint at once.
 */
export default function CollectionGallery({ items, reveal = true }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const visibleItems = items.slice(0, visibleCount)
  const hasMore = visibleCount < items.length

  const [index, setIndex] = useState(-1)
  const open = index >= 0

  const close = useCallback(() => setIndex(-1), [])
  const next = useCallback(
    () => setIndex((i) => (i + 1) % visibleItems.length),
    [visibleItems.length]
  )
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + visibleItems.length) % visibleItems.length),
    [visibleItems.length]
  )

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, close, next, prev])

  const current = open ? visibleItems[index] : null

  return (
    <>
      <div className="collection-grid">
        {visibleItems.map((item, i) => (
          <div
            key={i}
            className={`collection-item${reveal ? ' reveal' : ''}`}
            role="button"
            tabIndex={0}
            aria-label="Open gallery image"
            onClick={() => setIndex(i)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setIndex(i)
              }
            }}
          >
            <img src={item.src} alt={item.alt} />
            <div className="overlay"><span>{item.caption}</span></div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="collection-load-more">
          <button type="button" className="cta-btn collection-load-more-btn" onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}>
            See More
          </button>
          <span className="collection-load-more-count">Showing {visibleItems.length} of {items.length}</span>
        </div>
      )}

      {open && (
        <div
          className="gallery-lightbox active"
          onClick={(e) => {
            if (e.target === e.currentTarget) close()
          }}
        >
          <div className="gallery-lightbox-dialog">
            <button className="gallery-lightbox-close" type="button" aria-label="Close gallery" onClick={close}>
              <i className="fas fa-times"></i>
            </button>
            <button className="gallery-lightbox-nav gallery-lightbox-prev" type="button" aria-label="Previous image" onClick={prev}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="gallery-lightbox-image-wrap">
              <img className="gallery-lightbox-image" src={current.src} alt={current.alt || current.caption} />
            </div>
            <button className="gallery-lightbox-nav gallery-lightbox-next" type="button" aria-label="Next image" onClick={next}>
              <i className="fas fa-chevron-right"></i>
            </button>
            <div className="gallery-lightbox-caption">
              <span className="gallery-lightbox-title">{current.caption}</span>
              <span className="gallery-lightbox-counter">{index + 1} / {visibleItems.length}</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
