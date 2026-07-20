import PartnerPage from '../components/PartnerPage.jsx'

const gallery = [
  { src: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80', alt: 'Leadcom Slide 1', caption: 'Cinema Recliners' },
  { src: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&w=500&q=80', alt: 'Leadcom Slide 2', caption: 'Stadium Seating' },
  { src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=500&q=80', alt: 'Leadcom Slide 3', caption: 'Airport Waiting Areas' },
]

const docs = [
  { title: 'Auditorium Seating Brochure', initials: 'AS', file: '/images/pdf/leedcom/Auditorium_Seating_Brochure_-_Leadcom_Seating_2021_Version.pdf' },
  { title: 'Cinema Seating Brochure', initials: 'CS', file: '/images/pdf/leedcom/Cinema_Seating_Brochure_-_Leadcom_Seating_2022_Version.pdf' },
  { title: 'Cinema Seating Flyer', initials: 'CF', file: '/images/pdf/leedcom/Cinema_Seating_Flyer_-_Leadcom_Seating_2023_Version.pdf' },
  { title: 'Waiting Area Seating Brochure', initials: 'WA', file: '/images/pdf/leedcom/Waiting_Area_Seating_Brochure_-_Leadcom_Seating_2020_Version.pdf' },
  { title: 'Molio LS-12601 Series Demo', initials: 'ML', file: '/images/pdf/leedcom/Molio LS-12601 Series Demo - Leadcom Seating - compressed.pdf' },
  { title: 'Telescopic Seating Installations', initials: 'TS', file: '/images/pdf/leedcom/Telescopic Seating installations - Leadcom Seating.pdf' },
  { title: 'Stadium & Arena Telescopic Seating Datasheet', initials: 'SA', file: '/images/pdf/leedcom/Datasheet Stadium and Arena Telescopic Seating.pdf' },
  { title: 'Retractable Seating', initials: 'RS', file: '/images/pdf/leedcom/Retractable.pdf' },
]

const projects = [
  { src: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1400&q=80', title: 'Multiplex Cinema Complex', location: 'Muscat, Oman', desc: 'Premium recliners and rocker seating across eight screens, fitted with cup holders and aisle lighting for full-house comfort.' },
  { src: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&w=1400&q=80', title: 'National Stadium Seating', location: 'Riyadh, KSA', desc: 'High-capacity telescopic and fixed arena seating engineered for safety, weatherproofing and rapid egress.' },
  { src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1400&q=80', title: 'International Airport Waiting Areas', location: 'Doha, Qatar', desc: 'Beam-mounted waiting area systems with integrated power, installed across departure lounges and gate holds.' },
]

export default function Leadcom() {
  return (
    <PartnerPage
      hero={{
        bg: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80',
        logo: '/images/lead-logo.png',
        title: 'LEADCOM',
        subtitle: 'Education & Auditorium',
      }}
      detail={{
        title: 'The Standard of Comfort & Reliability',
        paragraphs: [
          'Leadcom is a leading manufacturer of premium seating solutions for cinemas, auditoriums, airports, and sports venues. Their commitment to innovation and manufacturing excellence makes them the choice for major projects worldwide.',
        ],
        media: <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80" alt="Leadcom Cinema Seating" />,
      }}
      galleryTitle="LEADCOM COLLECTION"
      galleryItems={gallery}
      projects={{ title: 'LEADCOM PROJECTS', items: projects }}
      brochure={
        <>
          <div className="brochure-card">
            <div className="brochure-copy">
              <h2>Leadcom Profiles</h2>
              <p>Browse every Leadcom profile and brochure below. Click any profile card or the View Profile button to open the PDF directly.</p>
            </div>
            <div className="brochure-actions">
              <a href={docs[0].file} className="cta-btn" target="_blank" rel="noopener">View Profiles</a>
            </div>
          </div>
          <div className="brochure-doc-gallery">
            {docs.map((d) => (
              <article className="profile-doc-card" key={d.title}>
                <a href={d.file} className="profile-doc-preview" target="_blank" rel="noopener" aria-label={`Open ${d.title}`}>
                  <span className="profile-doc-badge">PDF</span>
                  <span className="profile-doc-initials">{d.initials}</span>
                </a>
                <div className="profile-doc-copy">
                  <h3>{d.title}</h3>
                  <div className="profile-doc-actions">
                    <a href={d.file} className="brochure-doc-item" target="_blank" rel="noopener">View Profile</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </>
      }
    />
  )
}
