import PartnerPage from '../components/PartnerPage.jsx'
import ModelViewer from '../components/ModelViewer.jsx'

const gallery = [
  { src: '/images/audiaitalia/image-5.webp', alt: 'Audia Antea auditorium chair', caption: 'ANTEA' },
  { src: '/images/audiaitalia/image-6.webp', alt: 'Audia Antea COM 1 auditorium chair', caption: 'ANTEA COM 1' },
  { src: '/images/audiaitalia/image-7.webp', alt: 'Audia Antea COM 2 auditorium chair', caption: 'ANTEA COM 2' },
  { src: '/images/audiaitalia/image-8.webp', alt: 'Audia Antea COM 3 auditorium chair', caption: 'ANTEA COM 3' },
  { src: '/images/audiaitalia/image-9.webp', alt: 'Audia Antea ELI auditorium chair', caption: 'ANTEA ELI' },
  { src: '/images/audiaitalia/image-10.webp', alt: 'Audia Antea ELI 2 auditorium chair', caption: 'ANTEA ELI 2' },
  { src: '/images/audiaitalia/image-11.webp', alt: 'Audia Antea GIA auditorium chair', caption: 'ANTEA GIA' },
  { src: '/images/audiaitalia/image-12.webp', alt: 'Audia Antea GON auditorium chair', caption: 'ANTEA GON' },
  { src: '/images/audiaitalia/image-13.webp', alt: 'Audia Antea LUG auditorium chair', caption: 'ANTEA LUG' },
  { src: '/images/audiaitalia/image-14.webp', alt: 'Audia Antea MDV auditorium chair', caption: 'ANTEA MDV' },
  { src: '/images/audiaitalia/image-15.webp', alt: 'Audia Antea MOV auditorium chair', caption: 'ANTEA MOV' },
  { src: '/images/audiaitalia/image-16.webp', alt: 'Audia Antea SIM auditorium chair', caption: 'ANTEA SIM' },
  { src: '/images/audiaitalia/image-17.webp', alt: 'Audia Ateneo auditorium chair', caption: 'ATENEO' },
  { src: '/images/audiaitalia/image-18.webp', alt: 'Audia Flecta auditorium chair', caption: 'FLECTA' },
  { src: '/images/audiaitalia/image-19.webp', alt: 'Audia Flecta 2 auditorium chair', caption: 'FLECTA 2' },
  { src: '/images/audiaitalia/image-20.webp', alt: 'Audia Gemina auditorium chair', caption: 'GEMINA' },
  { src: '/images/audiaitalia/image-21.webp', alt: 'Audia Vesta Angolare auditorium chair', caption: 'VESTA ANGOLARE' },
  { src: '/images/audiaitalia/image-22.webp', alt: 'Audia Vesta Minimal auditorium chair', caption: 'VESTA MINIMAL' },
  { src: '/images/audiaitalia/image-23.webp', alt: 'Audia Vesta Pozzetto auditorium chair', caption: 'VESTA POZZETTO' },
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
