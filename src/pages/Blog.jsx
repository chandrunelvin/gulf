import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout.jsx'
import Seo from '../components/Seo.jsx'

const seoTitle = 'Journal | Furniture Guides & Project Stories | GST Concepts'
const seoDescription = 'GST Concepts journal — guides, project stories, and design insights on office, auditorium, and hospital furniture fit-outs in Oman.'

export default function Blog() {
  return (
    <SiteLayout active="blog">
      <Seo
        title={seoTitle}
        description={seoDescription}
        path="/blog"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
      />
      <section
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80')" }}
      >
        <div className="container">
          <div className="about-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Blog</span>
          </div>
          <h1 className="reveal-text hero-title-compact">Journal</h1>
          <p>Ideas, Projects & Furniture Stories from the Gulf</p>
        </div>
      </section>

      <section className="blog-page">
        <div className="container">
          <div className="gst-pillars-head reveal">
            <div className="projects-eyebrow">JOURNAL</div>
            <h2 className="section-title">Latest Articles</h2>
            <p>Guides, project stories, and design insights from GST Concepts.</p>
          </div>

          <Link to="/blog/venue-seating-oman" className="blog-featured reveal">
            <div className="blog-featured-media">
              <img
                src="/images/audiaitalia/Audia_Italia_realizzazione_True_Digital_poltrone_auditorium.webp"
                alt="Audia Italia auditorium seating installation"
              />
            </div>
            <div className="blog-featured-body">
              <div className="blog-meta">
                <span className="blog-tag">Guide</span>
                <span className="blog-date">15 October 2026</span>
              </div>
              <h2 className="blog-featured-title">Seating Solutions for Venues &amp; Institutions in Oman</h2>
              <p className="blog-excerpt">
                Auditorium, cinema, retractable, and conference seating from Leadcom and Audia Italia — and the
                fixed vs. retractable decision that drives everything else.
              </p>
              <span className="blog-more">Read Article &rarr;</span>
            </div>
          </Link>

          <div className="blog-grid">
            <Link to="/blog/office-furniture-oman" className="blog-card reveal">
              <div className="blog-card-media">
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
                  alt="Office and workplace furniture fit-out in Oman"
                />
              </div>
              <div className="blog-card-body">
                <div className="blog-meta">
                  <span className="blog-tag">Guide</span>
                  <span className="blog-date">24 July 2026</span>
                </div>
                <h3 className="blog-card-title">Office &amp; Workplace Furniture in Oman: A Practical Guide to Specifying Your Fit-Out</h3>
                <p className="blog-excerpt">
                  How to specify executive desks, open-plan workstations, ergonomic seating, storage, reception,
                  and lounge furniture for a commercial fit-out in Oman.
                </p>
                <span className="blog-more">Read Article &rarr;</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
