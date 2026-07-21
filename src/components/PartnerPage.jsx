import { Link } from 'react-router-dom'
import SiteLayout from './SiteLayout.jsx'
import CollectionGallery from './CollectionGallery.jsx'
import TabbedCollection from './TabbedCollection.jsx'
import ProjectSlider from './ProjectSlider.jsx'

/**
 * Shared scaffold for a partner brand detail page (Audia, Scab, Leadcom, etc.).
 *
 * Props:
 *  - hero: { bg, logo?, logoOriginal?, title, subtitle } — logoOriginal skips the white-recolor
 *    filter for logos that are already finished art (e.g. white-on-dark) rather than a flat mark
 *  - breadcrumb?: [{ label, href? }] — rendered under the hero heading, last item is the current page
 *  - detail: { title, paragraphs: string[], media: ReactNode }
 *  - galleryTitle, galleryItems? — gallery section is omitted entirely when galleryItems is not given
 *  - galleryCategories: [{ id, label }] — when given, renders category tabs
 *    and each gallery item is filtered by its `category` field
 *  - productRange?: { eyebrow?, title?, description?, icon?, categories: [{ name, icon?, items: string[] }] } —
 *    animated-background card grid of manufacturer product categories/model names, rendered right after
 *    the gallery section; `icon` is a Font Awesome class e.g. "fa-chair"
 *  - projects: { title?, items: [{ src, alt, title, location }] }
 *  - brochure: ReactNode rendered inside `.brochure-section > .container`
 *  - faq?: { eyebrow?, title?, description?, items: [{ question, answer }] } — numbered accordion,
 *    rendered after the brochure section; reuses the same copy for any FAQPage schema the page injects
 *  - cta?: { title, body?, linkLabel, linkTo } — full-bleed closing call-to-action band, always the last section
 */
export default function PartnerPage({ hero, breadcrumb, detail, galleryTitle, galleryItems, galleryCategories, projects, productRange, brochure, cta, faq }) {
  return (
    <SiteLayout active="partners">
      <section className="page-hero" style={{ backgroundImage: `url('${hero.bg}')` }}>
        <div className="container">
          {breadcrumb && (
            <div className="about-breadcrumb">
              {breadcrumb.map((crumb, i) => (
                <span key={crumb.label} style={{ display: 'contents' }}>
                  {i > 0 && <span>/</span>}
                  {crumb.href ? <Link to={crumb.href}>{crumb.label}</Link> : <span>{crumb.label}</span>}
                </span>
              ))}
            </div>
          )}
          {hero.logo && (
            <img
              src={hero.logo}
              alt={`${hero.title} Logo`}
              className={`hero-logo${hero.logoOriginal ? ' hero-logo-original' : ''}`}
            />
          )}
          <h1 className="reveal-text hero-title-compact">{hero.title}</h1>
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

      {galleryItems && galleryItems.length > 0 && (
        <section className="product-gallery">
          <div className="container">
            <h2 className="section-title">{galleryTitle}</h2>
            {galleryCategories ? (
              <TabbedCollection categories={galleryCategories} items={galleryItems} />
            ) : (
              <CollectionGallery items={galleryItems} />
            )}
          </div>
        </section>
      )}

      {productRange && productRange.categories?.length > 0 && (
        <section className="product-range-section">
          <div className="product-range-pattern" aria-hidden="true"></div>
          <div className="container">
            <div className="product-range-head reveal">
              <div className="product-range-badge"><i className={`fas ${productRange.icon || 'fa-layer-group'}`}></i></div>
              <div className="projects-eyebrow">{productRange.eyebrow || 'FULL RANGE'}</div>
              {productRange.title && <h2 className="section-title">{productRange.title}</h2>}
              {productRange.description && <p>{productRange.description}</p>}
            </div>
            <div className="product-range-grid">
              {productRange.categories.map((cat) => (
                <article className="product-range-card reveal" key={cat.name}>
                  <div className="product-range-card-head">
                    <span className="product-range-icon"><i className={`fas ${cat.icon || 'fa-circle'}`}></i></span>
                    <h3>{cat.name}</h3>
                  </div>
                  <ul className="product-range-list">
                    {cat.items.map((item) => (
                      <li key={item}><i className="fas fa-circle"></i>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {projects && projects.items?.length > 0 && (
        <section className="projects-section">
          <div className="container">
            <div className="projects-head">
              <div className="projects-eyebrow">SELECTED WORK — ACROSS THE GULF</div>
              <h2 className="section-title">{projects.title || 'PROJECTS'}</h2>
            </div>
            <ProjectSlider items={projects.items} />
          </div>
        </section>
      )}

      <section className="brochure-section">
        <div className="container">{brochure}</div>
      </section>

      {faq && faq.items?.length > 0 && (
        <section className="faq-section partner-faq-section">
          <div className="container">
            <div className="partner-faq-grid">
              <div className="partner-faq-head reveal">
                <div className="projects-eyebrow">{faq.eyebrow || 'FAQ'}</div>
                {faq.title && <h2 className="section-title">{faq.title}</h2>}
                {faq.description && <p>{faq.description}</p>}
              </div>
              <div className="faq-grid partner-faq-list">
                {faq.items.map((item, i) => (
                  <details className="faq-item partner-faq-item reveal" key={item.question} open={i === 0}>
                    <summary>
                      <span className="partner-faq-index">{String(i + 1).padStart(2, '0')}</span>
                      {item.question}
                    </summary>
                    <div className="faq-answer">
                      {Array.isArray(item.answer)
                        ? <ul>{item.answer.map((line) => <li key={line}>{line}</li>)}</ul>
                        : <p>{item.answer}</p>}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {cta && (
        <section className="partner-final-cta">
          <div className="container partner-final-cta-inner reveal">
            <h2>{cta.title}</h2>
            {cta.body && <p>{cta.body}</p>}
            <Link to={cta.linkTo} className="cta-btn partner-final-cta-btn">{cta.linkLabel}</Link>
          </div>
        </section>
      )}
    </SiteLayout>
  )
}
