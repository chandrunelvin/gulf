import PartnerPage from '../components/PartnerPage.jsx'
import { scabCategories, scabProducts } from '../data/scabProducts.js'

const projects = [
  { src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=80', title: 'Boutique Hotel Lounge', location: 'Muscat, Oman', desc: 'Italian-designed armchairs and coffee tables furnishing an intimate lobby lounge with warm, contemporary character.' },
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80', title: 'Waterfront Restaurant Terrace', location: 'Dubai, UAE', desc: 'Weather-resistant chairs and barstools for an all-day dining terrace, combining SCAB material research with coastal durability.' },
  { src: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1400&q=80', title: 'Resort Pool & Garden Seating', location: 'Salalah, Oman', desc: 'Sunbeds, hanging seats and garden collections styled across a resort landscape for effortless outdoor living.' },
]

export default function Scab() {
  return (
    <PartnerPage
      hero={{
        bg: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80',
        logo: '/images/s-cab_logo.svg',
        title: 'SCAB',
        subtitle: 'Hospitality & Home',
      }}
      detail={{
        title: 'Italian Heritage & Modern Design',
        paragraphs: [
          'SCAB is a benchmark in the production of furniture for the contract, home, and garden sectors. Their products are characterized by a focus on aesthetics and research into materials and technical processes.',
          'With more than 60 years of history, SCAB continues to innovate and create furniture that is perfect for any modern environment, combining quality with functional design.',
        ],
        media: <img src="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=800&q=80" alt="Scab Seating" />,
      }}
      galleryTitle="SCAB COLLECTION"
      galleryItems={scabProducts}
      galleryCategories={scabCategories}
      projects={{ title: 'SCAB PROJECTS', items: projects }}
      brochure={
        <div className="brochure-card">
          <div className="brochure-copy">
            <h2>Profile & Brochure</h2>
            <p>Open the Scab profile directly for project planning, specifications, and client presentations.</p>
          </div>
          <div className="brochure-actions">
            <a href="/images/pdf/scab-pdf/scab_outdoor25.pdf" className="cta-btn" target="_blank" rel="noopener">View Profile</a>
          </div>
        </div>
      }
    />
  )
}
