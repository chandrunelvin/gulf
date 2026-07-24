import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout.jsx'

export default function Blog() {
  return (
    <SiteLayout active="blog">
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

          <Link to="/blog/office-furniture-oman" className="blog-featured reveal">
            <div className="blog-featured-media">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
                alt="Office and workplace furniture fit-out in Oman"
              />
            </div>
            <div className="blog-featured-body">
              <div className="blog-meta">
                <span className="blog-tag">Guide</span>
                <span className="blog-date">24 July 2026</span>
              </div>
              <h2 className="blog-featured-title">Office &amp; Workplace Furniture in Oman: A Practical Guide to Specifying Your Fit-Out</h2>
              <p className="blog-excerpt">
                How to specify executive desks, open-plan workstations, ergonomic seating, storage, reception,
                and lounge furniture for a commercial fit-out in Oman.
              </p>
              <span className="blog-more">Read Article &rarr;</span>
            </div>
          </Link>
        </div>
      </section>
    </SiteLayout>
  )
}
