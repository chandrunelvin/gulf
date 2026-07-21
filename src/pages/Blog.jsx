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
          <h1 className="reveal-text">Journal</h1>
          <p>Ideas, Projects & Furniture Stories from the Gulf</p>
        </div>
      </section>

      <section className="blog-page coming-soon-section">
        <div className="container">
          <div className="coming-soon-block reveal">
            <h2 className="section-title">Coming Soon</h2>
            <p className="intro-text">
              We're working on project stories, furniture guides, and design insights from GST Concepts.
              Check back soon — or get in touch directly for advice on your project.
            </p>
            <Link to="/contact" className="cta-btn">Contact GST Concepts</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
