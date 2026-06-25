import { useInsertionEffect } from 'react'

/**
 * Injects a raw CSS string into a <style> tag for the lifetime of the component
 * and removes it on unmount. This keeps the two distinct page designs (the GST
 * homepage vs. the Gulf sub-pages) from clashing, since their stylesheets reuse
 * many of the same class names. Only one design's CSS is mounted at a time.
 */
export default function useScopedStyle(cssText) {
  useInsertionEffect(() => {
    const el = document.createElement('style')
    el.setAttribute('data-scoped', 'true')
    el.textContent = cssText
    document.head.appendChild(el)
    return () => {
      document.head.removeChild(el)
    }
  }, [cssText])
}
