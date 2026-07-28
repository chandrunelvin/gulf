import { useEffect } from 'react'

const SITE_NAME = 'GST Concepts'
const DEFAULT_IMAGE = '/images/GST_logo.png'

/**
 * Sets canonical link + Open Graph / Twitter card meta tags for the current route.
 * Complements the per-page document.title / meta[name=description] / JSON-LD
 * handling already done in each page — this only covers the tags no page sets.
 */
export default function useSeoMeta({ title, description, path, image = DEFAULT_IMAGE, type = 'website' }) {
  useEffect(() => {
    const url = `${window.location.origin}${path}`
    const absoluteImage = image.startsWith('http') ? image : `${window.location.origin}${image}`

    let canonical = document.querySelector('link[rel="canonical"]')
    const canonicalCreated = !canonical
    const previousCanonicalHref = canonical?.getAttribute('href') ?? null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)

    const metaTags = [
      ['property', 'og:site_name', SITE_NAME],
      ['property', 'og:type', type],
      ['property', 'og:title', title],
      ['property', 'og:description', description],
      ['property', 'og:url', url],
      ['property', 'og:image', absoluteImage],
      ['name', 'twitter:card', 'summary_large_image'],
      ['name', 'twitter:title', title],
      ['name', 'twitter:description', description],
      ['name', 'twitter:image', absoluteImage],
    ]

    const createdEls = []
    const restoredEls = []

    metaTags.forEach(([attr, key, content]) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
        createdEls.push(el)
      } else {
        restoredEls.push([el, el.getAttribute('content')])
      }
      el.setAttribute('content', content)
    })

    return () => {
      createdEls.forEach((el) => el.remove())
      restoredEls.forEach(([el, previousContent]) => el.setAttribute('content', previousContent))
      if (canonicalCreated) canonical.remove()
      else canonical.setAttribute('href', previousCanonicalHref)
    }
  }, [title, description, path, image, type])
}
