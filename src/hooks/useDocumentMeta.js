import { useEffect } from 'react'

/** Sets document.title and meta[name=description] for the lifetime of the component. */
export default function useDocumentMeta(title, description) {
  useEffect(() => {
    const previousTitle = document.title
    const metaDescription = document.querySelector('meta[name="description"]')
    const previousDescription = metaDescription?.getAttribute('content') || ''

    document.title = title
    if (metaDescription) metaDescription.setAttribute('content', description)

    return () => {
      document.title = previousTitle
      if (metaDescription) metaDescription.setAttribute('content', previousDescription)
    }
  }, [title, description])
}
