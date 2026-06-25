import SiteLayout from './SiteLayout.jsx'
import CollectionGallery from './CollectionGallery.jsx'

/**
 * Shared scaffold for a partner brand detail page (Audia, Scab, Leadcom, etc.).
 *
 * Props:
 *  - hero: { bg, logo?, title, subtitle }
 *  - detail: { title, paragraphs: string[], media: ReactNode }
 *  - galleryTitle, galleryItems
 *  - brochure: ReactNode rendered inside `.brochure-section > .container`
 */
export default function PartnerPage({ hero, detail, galleryTitle, galleryItems, brochure }) {
  return (
    <SiteLayout active="partners">
      <section className="page-hero" style={{ backgroundImage: `url('${hero.bg}')` }}>
        <div className="container">
          {hero.logo && <img src={hero.logo} alt={`${hero.title} Logo`} className="hero-logo" />}
          <h1 className="reveal-text">{hero.title}</h1>
          <p>{hero.subtitle}</p>
        </div>
      </section>

      <section className="product-detail">
        <div className="container">
          <div className="about-flex">
            <div className="about-text">
              <h2 className="section-title">{detail.title}</h2>
              {detail.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="about-image">{detail.media}</div>
          </div>
        </div>
      </section>

      <section className="product-gallery">
        <div className="container">
          <h2 className="section-title">{galleryTitle}</h2>
          <CollectionGallery items={galleryItems} />
        </div>
      </section>

      <section className="brochure-section">
        <div className="container">{brochure}</div>
      </section>
    </SiteLayout>
  )
}
