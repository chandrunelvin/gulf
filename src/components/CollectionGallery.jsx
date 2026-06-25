import { useCallback, useEffect, useState } from 'react'

/**
 * Renders a `.collection-grid` of items with a click-to-open lightbox, keyboard
 * navigation and a counter — a React port of the gallery lightbox in script.js.
 * `items`: [{ src, alt, caption }]
 */
export default function CollectionGallery({ items, reveal = true }) {
  const [index, setIndex] = useState(-1)
  const open = index >= 0

  const close = useCallback(() => setIndex(-1), [])
  const next = useCallback(
    () => setIndex((i) => (i + 1) % items.length),
    [items.length]
  )
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + items.length) % items.length),
    [items.length]
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

  const current = open ? items[index] : null

  return (
    <>
      <div className="collection-grid">
        {items.map((item, i) => (
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
              <span className="gallery-lightbox-counter">{index + 1} / {items.length}</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
