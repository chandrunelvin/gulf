import PartnerPage from '../components/PartnerPage.jsx'
import ModelViewer from '../components/ModelViewer.jsx'

const gallery = [
  { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=500&q=80', alt: 'Audia Slide 1', caption: 'Lecture Hall Seating' },
  { src: 'https://images.unsplash.com/photo-1503095396549-807a8bc3667c?auto=format&fit=crop&w=500&q=80', alt: 'Audia Slide 2', caption: 'Concert Hall Chairs' },
  { src: 'https://images.unsplash.com/photo-1475721027464-585586198cb9?auto=format&fit=crop&w=500&q=80', alt: 'Audia Slide 3', caption: 'Retractable Systems' },
]

const projects = [
  { src: 'https://images.unsplash.com/photo-1503095396549-807a8bc3667c?auto=format&fit=crop&w=1400&q=80', title: 'Grand Theatre Auditorium', location: 'Muscat, Oman', desc: 'Flip-up velvet seating in curved tiered rows for a 1,200-seat national stage, delivered with acoustic panelling and gold arch detailing.' },
  { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=80', title: 'University Lecture Theatre', location: 'Salalah, Oman', desc: 'Ergonomic writing-tablet seating across three lecture halls, engineered for sightlines, durability and daily academic use.' },
  { src: 'https://images.unsplash.com/photo-1475721027464-585586198cb9?auto=format&fit=crop&w=1400&q=80', title: 'Performing Arts Centre', location: 'Doha, Qatar', desc: 'Custom-coloured auditorium chairs with integrated stage lighting coordination for a premier Gulf performing arts venue.' },
]

export default function Audia() {
  return (
    <PartnerPage
      hero={{
        bg: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1600&q=80',
        logo: '/images/audia-logo.svg',
        title: 'AUDIA',
        subtitle: 'Auditorium Solutions',
      }}
      detail={{
        title: 'Elevating Education & Performance',
        paragraphs: [
          'Audia specializes in high-quality seating for auditoriums, lecture halls, and performing arts centers. Their designs prioritize ergonomics, acoustic performance, and long-lasting durability.',
          'From university lecture theatres to professional concert halls, Audia provides versatile solutions that enhance the experience for every audience member.',
        ],
        media: <ModelViewer glb="/images/3d model/AUDIA.compressed.glb" />,
      }}
      galleryTitle="AUDIA COLLECTION"
      galleryItems={gallery}
      projects={{ title: 'AUDIA PROJECTS', items: projects }}
      brochure={
        <div className="brochure-card">
          <div className="brochure-copy">
            <h2>Profile & Brochure</h2>
            <p>Open the Audia profile directly for project planning, specifications, and client presentations.</p>
          </div>
          <div className="brochure-actions">
            <a href="/images/pdf/audia-pdf/Audia Italia profile.pdf" className="cta-btn" target="_blank" rel="noopener">View Profile</a>
          </div>
        </div>
      }
    />
  )
}
