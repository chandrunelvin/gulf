import PartnerPage from '../components/PartnerPage.jsx'

const gallery = [
  { src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=500&q=80', alt: 'Brunonic Slide 1', caption: 'Collaborative Desks' },
  { src: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&w=500&q=80', alt: 'Brunonic Slide 2', caption: 'Executive Suites' },
  { src: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=500&q=80', alt: 'Brunonic Slide 3', caption: 'Lounge & Breakout' },
]

export default function Brunonic() {
  return (
    <PartnerPage
      hero={{
        bg: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80',
        logo: '/images/brunonicoffice-logo.png',
        title: 'BRUNONIC',
        subtitle: 'Commercial Furniture',
      }}
      detail={{
        title: 'Redefining the Modern Workspace',
        paragraphs: [
          'Brunonic is a leading designer and manufacturer of contemporary office furniture, with a focus on creating spaces that foster collaboration, creativity, and well-being.',
        ],
        media: <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="Brunonic Office Furniture" />,
      }}
      galleryTitle="BRUNONIC COLLECTION"
      galleryItems={gallery}
      brochure={
        <div className="brochure-card">
          <div className="brochure-copy">
            <h2>Profile & Brochure</h2>
            <p>Open the Brunonic profile directly for project planning, specifications, and client presentations.</p>
          </div>
          <div className="brochure-actions">
            <a href="/images/pdf/brunonic-pdf/Brunonic Catalogue.pdf" className="cta-btn" target="_blank" rel="noopener">View Profile</a>
          </div>
        </div>
      }
    />
  )
}
