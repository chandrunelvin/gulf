import { Link } from 'react-router-dom'
import PartnerPage from '../components/PartnerPage.jsx'

const gallery = [
  { src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=500&q=80', alt: 'Nitrocare Hospital Beds', caption: 'Hospital Beds' },
  { src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=500&q=80', alt: 'Nitrocare Patient Recliners', caption: 'Patient Recliners' },
  { src: 'https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=500&q=80', alt: 'Nitrocare Examination Tables', caption: 'Examination Tables' },
]

export default function Nitrocare() {
  return (
    <PartnerPage
      hero={{
        bg: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1600&q=80',
        title: 'NITROCARE',
        subtitle: 'Medical Furniture',
      }}
      detail={{
        title: 'Engineered for Care & Recovery',
        paragraphs: [
          'Nitrocare delivers medical-grade furniture designed around patient wellbeing and clinical efficiency. Every recliner, bed, and table is built for hygiene, durability, and effortless adjustment — supporting both the people who heal and those who recover.',
          'From hospital wards and day-care clinics to dialysis and examination rooms, Nitrocare provides dependable solutions trusted by healthcare facilities across Oman and the wider Gulf.',
        ],
        media: <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80" alt="Nitrocare Medical Furniture" />,
      }}
      galleryTitle="NITROCARE COLLECTION"
      galleryItems={gallery}
      brochure={
        <div className="brochure-card">
          <div className="brochure-copy">
            <h2>Request a Medical Furniture Quote</h2>
            <p>Planning a clinic, ward, or examination space? Speak with our team for product specifications, bulk pricing, and project support tailored to healthcare environments.</p>
          </div>
          <div className="brochure-actions">
            <Link to="/contact" className="cta-btn">Enquire Now</Link>
          </div>
        </div>
      }
    />
  )
}
