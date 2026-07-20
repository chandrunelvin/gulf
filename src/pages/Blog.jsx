import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout.jsx'

const featured = {
  src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
  category: 'Design Trends',
  date: 'July 12, 2026',
  title: 'Designing Workspaces That Inspire: Office Furniture Trends in the Gulf',
  excerpt:
    'From collaborative bench desking to acoustic lounge pods, the modern Gulf office is changing fast. We look at the trends shaping how companies in Oman and the wider region furnish spaces people actually want to work in.',
}

const posts = [
  {
    src: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80',
    category: 'Outdoor Living',
    date: 'July 5, 2026',
    title: 'Choosing Outdoor Furniture That Survives the Gulf Climate',
    excerpt: 'Heat, humidity and salt air are hard on furniture. Here is what to look for in materials and finishes before furnishing a terrace, garden or poolside.',
  },
  {
    src: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
    category: 'Projects',
    date: 'June 24, 2026',
    title: 'Inside a Cinema Fit-Out: How Venue Seating Comes Together',
    excerpt: 'From row spacing and sightlines to recliner mechanisms, a look behind the scenes at what it takes to seat a full house in comfort.',
  },
  {
    src: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&w=800&q=80',
    category: 'Workspace',
    date: 'June 10, 2026',
    title: 'Ergonomics at Work: Why the Right Chair Pays for Itself',
    excerpt: 'Back pain and fatigue cost more than a good chair does. A practical guide to lumbar support, adjustability and posture for long office days.',
  },
  {
    src: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80',
    category: 'Healthcare',
    date: 'May 28, 2026',
    title: 'Furnishing for Care: What Medical-Grade Furniture Really Means',
    excerpt: 'Hygiene, adjustability and patient dignity all start with the right furniture. What clinics and hospitals should ask before they specify.',
  },
  {
    src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
    category: 'Materials',
    date: 'May 14, 2026',
    title: 'The Craft of Italian Furniture: Materials Worth Investing In',
    excerpt: 'Why European manufacturing still sets the standard — and how to tell lasting quality from a good-looking imitation.',
  },
  {
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    category: 'Projects',
    date: 'April 30, 2026',
    title: 'Seating an Auditorium: Five Questions to Answer Before You Order',
    excerpt: 'Capacity, acoustics, sightlines, safety and maintenance — the essential checklist for anyone planning a lecture hall or theatre.',
  },
]

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

      <section className="blog-page">
        <div className="container">
          <article className="blog-featured reveal">
            <div className="blog-featured-media">
              <img src={featured.src} alt={featured.title} />
            </div>
            <div className="blog-featured-body">
              <div className="blog-meta">
                <span className="blog-tag">{featured.category}</span>
                <span className="blog-date">{featured.date}</span>
              </div>
              <h2 className="blog-featured-title">{featured.title}</h2>
              <p className="blog-excerpt">{featured.excerpt}</p>
              <Link to="/contact" className="blog-more">READ THE STORY →</Link>
            </div>
          </article>

          <div className="blog-grid">
            {posts.map((post) => (
              <article className="blog-card reveal" key={post.title}>
                <div className="blog-card-media">
                  <img src={post.src} alt={post.title} loading="lazy" />
                </div>
                <div className="blog-card-body">
                  <div className="blog-meta">
                    <span className="blog-tag">{post.category}</span>
                    <span className="blog-date">{post.date}</span>
                  </div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <Link to="/contact" className="blog-more">READ MORE →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
