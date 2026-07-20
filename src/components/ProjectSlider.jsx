import { useCallback, useEffect, useRef, useState } from 'react'

const AUTOPLAY_MS = 6000

/**
 * Editorial project showcase used on partner brand pages: a crossfading image
 * stage beside a caption panel with index watermark, autoplay progress bar,
 * arrow controls and line-style pagination. Pauses on hover, supports swipe.
 * `items`: [{ src, alt, title, location, desc? }]
 */
export default function ProjectSlider({ items }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchX = useRef(null)

  const next = useCallback(() => setIndex((i) => (i + 1) % items.length), [items.length])
  const prev = useCallback(() => setIndex((i) => (i - 1 + items.length) % items.length), [items.length])

  useEffect(() => {
    if (paused || items.length < 2) return
    const id = setInterval(next, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [paused, next, items.length])

  const current = items[index]
  const pad = (n) => String(n).padStart(2, '0')

  return (
    <div
      className="pslider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return
        const dx = e.changedTouches[0].clientX - touchX.current
        if (dx < -40) next()
        if (dx > 40) prev()
        touchX.current = null
      }}
    >
      <div className="pslider-media">
        {items.map((item, i) => (
          <div className={`pslider-img${i === index ? ' active' : ''}`} key={i} aria-hidden={i !== index}>
            <img src={item.src} alt={item.alt || item.title} loading="lazy" />
          </div>
        ))}
        <div className="pslider-media-frame"></div>
        <div className="pslider-counter">
          {pad(index + 1)} <span>/ {pad(items.length)}</span>
        </div>
      </div>

      <div className="pslider-panel">
        <span className="pslider-watermark" aria-hidden="true">{pad(index + 1)}</span>

        <div className="pslider-copy" key={index}>
          <div className="pslider-eyebrow">{current.location}</div>
          <h3 className="pslider-title">{current.title}</h3>
          {current.desc && <p className="pslider-desc">{current.desc}</p>}
        </div>

        <div className="pslider-foot">
          <div className="pslider-progress">
            <span
              key={index}
              style={{
                animationDuration: `${AUTOPLAY_MS}ms`,
                animationPlayState: paused ? 'paused' : 'running',
              }}
            ></span>
          </div>

          <div className="pslider-controls">
            <div className="pslider-lines">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`pslider-line${i === index ? ' active' : ''}`}
                  aria-label={`Go to project ${i + 1}`}
                  onClick={() => setIndex(i)}
                ></button>
              ))}
            </div>
            <div className="pslider-arrows">
              <button className="pslider-arrow" type="button" aria-label="Previous project" onClick={prev}>
                <i className="fas fa-arrow-left"></i>
              </button>
              <button className="pslider-arrow" type="button" aria-label="Next project" onClick={next}>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
