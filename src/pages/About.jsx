import { useEffect, useState } from 'react'
import SiteLayout from '../components/SiteLayout.jsx'

const team = [
  {
    name: 'Deepak Dinesh Prabakaran',
    role: 'Director',
    bio: 'Leads GST Concepts with a focus on premium furniture collections, client relationships, and long-term commercial growth across Oman and the Gulf.',
    img: '/images/teams/Deepak c.jpg',
  },
  {
    name: 'Shella',
    role: 'Sales Executive',
    bio: 'Supports clients with product selection, quotations, and day-to-day coordination to match each furniture requirement with the right solution.',
    img: '/images/teams/shella.png',
  },
  {
    name: 'Sunny',
    role: 'Account Manager',
    bio: 'Manages customer accounts and project follow-ups, helping ensure every furniture order moves smoothly from enquiry to delivery.',
    img: '/images/teams/Sunny.png',
  },
  {
    name: 'Suresh',
    role: 'IT Head',
    bio: 'Oversees the company’s digital systems and technical operations, supporting a seamless online presence for GST Concepts and its collections.',
    img: '/images/teams/Suresh c.jpg',
  },
  {
    name: 'Joel',
    role: 'Social Media Designer',
    bio: 'Shapes the visual storytelling of GST Concepts through branded content, campaign design, and creative presentation of the furniture collections.',
    img: '/images/teams/Joel c.jpg',
  },
  {
    name: 'Chandru',
    role: 'Web Developer',
    bio: 'Builds and maintains the digital experience for GST Concepts, helping present the brand’s furniture collections with clarity and style online.',
    img: '/images/teams/Chandru c.jpg',
  },
]

export default function About() {
  const [active, setActive] = useState(null)
  const open = active !== null
  const member = open ? team[active] : null

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setActive(null) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <SiteLayout active="about">
      <section
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80')" }}
      >
        <div className="container">
          <h1 className="reveal-text">About Gulf Supply and Services</h1>
          <p>Elevating Workspaces with Sophisticated Design</p>
        </div>
      </section>

      <section className="about-detail">
        <div className="container">
          <div className="about-flex">
            <div className="about-text reveal">
              <h2 className="section-title">Our Story</h2>
              <p>Gulf Supply and Services Trading is a leading provider of premium office and commercial furniture solutions in the IMEA region. We specialize in bringing sophisticated European design to modern workspaces, ensuring that every piece we provide is both functional and elegant.</p>
              <p>With years of experience in the industry, we have built a reputation for providing timeless and modern high-end pieces from the most renowned brands in Europe. Our mission is to transform ordinary offices into extraordinary environments that inspire productivity and creativity.</p>
            </div>
            <div className="about-image reveal">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="Modern Office" />
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card reveal">
              <i className="fas fa-gem"></i>
              <h3>Quality</h3>
              <p>We source only the highest quality materials and brands to ensure longevity and excellence.</p>
            </div>
            <div className="value-card reveal">
              <i className="fas fa-pencil-ruler"></i>
              <h3>Design</h3>
              <p>Our focus is on sophisticated design that blends aesthetics with practical functionality.</p>
            </div>
            <div className="value-card reveal">
              <i className="fas fa-users"></i>
              <h3>Client-Centric</h3>
              <p>We work closely with our clients to provide tailored solutions that meet their unique needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <div className="team-header reveal">
            <h2 className="section-title">Meet Our Team</h2>
          </div>
          <div className="team-grid">
            {team.map((m, i) => (
              <div
                key={m.name}
                className="team-member reveal"
                role="button"
                tabIndex={0}
                aria-label={`Open profile for ${m.name}`}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setActive(i)
                  }
                }}
              >
                <div className="member-image">
                  <img src={m.img} alt={m.name} />
                </div>
                <div className="team-member-copy">
                  <p className="team-role">{m.role}</p>
                  <h3>{m.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {open && (
        <div
          className="team-modal active"
          onClick={(e) => { if (e.target === e.currentTarget) setActive(null) }}
        >
          <div className="team-modal-dialog" role="dialog" aria-modal="true">
            <button className="team-modal-close" type="button" aria-label="Close team profile" onClick={() => setActive(null)}>
              <i className="fas fa-times"></i>
            </button>
            <div className="team-modal-image">
              <img className="team-modal-photo" src={member.img} alt={member.name} />
            </div>
            <div className="team-modal-copy">
              <div className="team-modal-role">{member.role}</div>
              <h3 className="team-modal-name">{member.name}</h3>
              <p className="team-modal-bio">{member.bio}</p>
              <div className="team-modal-linkedin">
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </SiteLayout>
  )
}
