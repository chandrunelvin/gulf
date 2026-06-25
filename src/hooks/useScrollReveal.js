import { useEffect } from 'react'

/**
 * Adds the `reveal-active` class to elements carrying the `reveal` class as they
 * scroll into view — mirrors the IntersectionObserver behaviour in the original
 * script.js. Re-runs whenever `deps` change so freshly mounted pages are wired up.
 */
export default function useScrollReveal(deps = []) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    const els = document.querySelectorAll('.reveal')
    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
