import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'GST Concepts'
const SITE_URL = 'https://www.gstconcepts.om'
const DEFAULT_IMAGE = '/images/GST_logo.png'

/**
 * Declarative replacement for the old hand-rolled useSeoMeta/useDocumentMeta hooks
 * and per-page manual <script type="application/ld+json"> injection. Renders title,
 * description, canonical, Open Graph, Twitter card, and JSON-LD schema tags via
 * react-helmet-async, which handles tag replacement/cleanup on unmount and route
 * change automatically.
 */
export default function Seo({ title, description, path, image = DEFAULT_IMAGE, type = 'website', jsonLd }) {
  const url = `${SITE_URL}${path}`
  const absoluteImage = image.startsWith('http') ? image : `${SITE_URL}${image}`
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={absoluteImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
