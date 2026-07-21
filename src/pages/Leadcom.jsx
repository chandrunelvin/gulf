import { useEffect } from 'react'
import PartnerPage from '../components/PartnerPage.jsx'

const seoTitle = 'Leadcom Auditorium & Cinema Seating Supplier Oman | Muscat'
const seoDescription = 'GST Concepts supplies Leadcom auditorium, retractable, and cinema seating in Muscat and Oman including a confirmed local install at Cheltenham Muscat.'

const gallery = [
  { src: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80', alt: 'Leadcom Slide 1', caption: 'Cinema Recliners' },
  { src: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&w=500&q=80', alt: 'Leadcom Slide 2', caption: 'Stadium Seating' },
  { src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=500&q=80', alt: 'Leadcom Slide 3', caption: 'Airport Waiting Areas' },
]

const docs = [
  { title: 'Cinema Seating Flyer', cover: 'https://www.furniconcepts.com/images/leadcom/image%20(6).png', file: '/images/pdf/leedcom/Cinema_Seating_Flyer_-_Leadcom_Seating_2023_Version.pdf' },
  { title: 'Molio LS-12601 Series Demo', cover: 'https://www.furniconcepts.com/images/leadcom/image%20(7).png', file: '/images/pdf/leedcom/Molio LS-12601 Series Demo - Leadcom Seating - compressed.pdf' },
  { title: 'Stadium & Arena Telescopic Seating Datasheet', cover: 'https://www.furniconcepts.com/images/leadcom/image%20(8).png', file: '/images/pdf/leedcom/Datasheet Stadium and Arena Telescopic Seating.pdf' },
  { title: 'Telescopic Seating Installations', cover: 'https://www.furniconcepts.com/images/leadcom/retactable-image-profile.png', file: '/images/pdf/leedcom/Telescopic Seating installations - Leadcom Seating.pdf' },
  { title: 'Waiting Area Seating Brochure', cover: 'https://www.furniconcepts.com/images/leadcom/image%20(11).png', file: '/images/pdf/leedcom/Waiting_Area_Seating_Brochure_-_Leadcom_Seating_2020_Version.pdf' },
  { title: 'Retractable Seating', cover: 'https://www.furniconcepts.com/images/leadcom/image%20(12).png', file: '/images/pdf/leedcom/Retractable.pdf' },
  { title: 'Auditorium Seating Brochure', cover: 'https://www.furniconcepts.com/images/leadcom/image%20(13).png', file: '/images/pdf/leedcom/Auditorium_Seating_Brochure_-_Leadcom_Seating_2021_Version.pdf' },
  { title: 'Cinema Seating Brochure', cover: 'https://www.furniconcepts.com/images/leadcom/image10.png', file: '/images/pdf/leedcom/Cinema_Seating_Brochure_-_Leadcom_Seating_2022_Version.pdf' },
]

const projects = [
  { src: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1400&q=80', title: 'Multiplex Cinema Complex', location: 'Muscat, Oman', desc: 'Premium recliners and rocker seating across eight screens, fitted with cup holders and aisle lighting for full-house comfort.' },
  { src: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&w=1400&q=80', title: 'National Stadium Seating', location: 'Riyadh, KSA', desc: 'High-capacity telescopic and fixed arena seating engineered for safety, weatherproofing and rapid egress.' },
  { src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1400&q=80', title: 'International Airport Waiting Areas', location: 'Doha, Qatar', desc: 'Beam-mounted waiting area systems with integrated power, installed across departure lounges and gate holds.' },
]

// Each item here is rendered once as a visible question/answer card and reused, verbatim,
// to build the FAQPage schema below — one canonical answer per fact, not a restated copy.
const qaItems = [
  {
    question: 'Does Leadcom have any completed projects in Oman?',
    answer: 'Yes. Leadcom’s project documentation lists a completed installation at Cheltenham Muscat, Phase 2, Oman (Model LS-20603) — a real, named, verifiable project. GST Concepts supplies and coordinates Leadcom seating for Muscat and the wider Sultanate.',
  },
  {
    question: 'What is Leadcom’s manufacturing background?',
    answer: 'Leadcom Seating is a global manufacturer of public seating systems with more than 28 years in the field, supplying 170+ countries and having installed over 14 million seats and 1.5 million tables worldwide. Production runs across company-owned plants covering 120,000 sqm with capacity for 80,000 seats a month, BIFMA/BSI certified.',
  },
  {
    question: 'Who supplies auditorium seating in Muscat and Oman?',
    answer: 'GST Concepts sells and installs Leadcom auditorium chairs across Muscat and the wider Sultanate — seating built for conference rooms, performance centers, lecture theaters, churches and schools, with a curved backrest and a seat that holds its shape past 100,000 compressions.',
  },
  {
    question: 'Is retractable seating available for venues in Oman?',
    answer: 'Yes. GST Concepts supplies Leadcom’s motorized retractable seating — the same category used in the Cheltenham Muscat project — which collapses up to 50 rows onto the wall by motorized rail so the floor can clear for other uses.',
  },
  {
    question: 'Who is a cinema seating supplier in Oman?',
    answer: 'GST Concepts supplies Leadcom cinema seating from standard multiplex chairs through VIP recliners and boutique cinema seats, built for the daily wear of a cinema project and sourced as one supply relationship rather than two.',
  },
  {
    question: 'Does Leadcom supply office or workstation seating as well as auditorium seating?',
    answer: 'Yes. Leadcom manufactures both auditorium seating and standard office and workstation seating, which matters for Oman corporate fit-outs that need an auditorium or town hall and everyday office seating from a single source.',
  },
]

export default function Leadcom() {
  useEffect(() => {
    const previousTitle = document.title
    const metaDescription = document.querySelector('meta[name="description"]')
    const previousDescription = metaDescription?.getAttribute('content') || ''

    document.title = seoTitle
    if (metaDescription) metaDescription.setAttribute('content', seoDescription)

    const schemaScripts = [
      {
        id: 'leadcom-org-schema',
        content: {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'GST Concepts',
          parentOrganization: {
            '@type': 'Organization',
            name: 'Furniconcepts',
            url: 'https://www.furniconcepts.com',
          },
          address: { '@type': 'PostalAddress', addressLocality: 'Muscat', addressCountry: 'Oman' },
          telephone: ['+968 9710 0007', '+968 9806 7601'],
          email: 'sales@gstconcepts.om',
          areaServed: ['Oman'],
        },
      },
      {
        id: 'leadcom-products-schema',
        content: [
          { name: 'Leadcom Auditorium Seating', category: 'Auditorium Seating' },
          { name: 'Leadcom Retractable Seating', category: 'Retractable Seating' },
          { name: 'Leadcom Cinema Seating', category: 'Cinema Seating' },
          { name: 'Leadcom Workstation & Office Seating', category: 'Workstation Supplier' },
        ].map((p) => ({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: p.name,
          category: p.category,
          brand: { '@type': 'Brand', name: 'Leadcom' },
          seller: { '@type': 'Organization', name: 'GST Concepts' },
          areaServed: 'Oman',
        })),
      },
      {
        id: 'leadcom-faq-schema',
        content: {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: qaItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        },
      },
      {
        id: 'leadcom-breadcrumb-schema',
        content: {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${window.location.origin}/` },
            { '@type': 'ListItem', position: 2, name: 'Partners', item: `${window.location.origin}/partners` },
            { '@type': 'ListItem', position: 3, name: 'Leadcom', item: `${window.location.origin}/leadcom` },
          ],
        },
      },
    ]

    schemaScripts.forEach(({ id, content }) => {
      document.getElementById(id)?.remove()
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = id
      script.text = JSON.stringify(content)
      document.head.appendChild(script)
    })

    return () => {
      document.title = previousTitle
      if (metaDescription) metaDescription.setAttribute('content', previousDescription)
      schemaScripts.forEach(({ id }) => document.getElementById(id)?.remove())
    }
  }, [])

  return (
    <PartnerPage
      hero={{
        bg: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80',
        logo: '/images/lead-logo.png',
        title: 'Leadcom Seating in Oman | Auditorium, Retractable & Cinema Seating Supplier, Muscat',
        subtitle: 'Supplied and installed by GST Concepts across Muscat and the wider Sultanate.',
      }}
      breadcrumb={[
        { label: 'Home', href: '/' },
        { label: 'Partners', href: '/partners' },
        { label: 'Leadcom' },
      ]}
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
                  <img src={d.cover} alt={d.title} loading="lazy" />
                  <span className="profile-doc-badge">PDF</span>
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
      cta={{
        title: 'Planning An Auditorium, Cinema, Or Retractable Seating Project In Oman?',
        body: 'Talk to GST Concepts about Leadcom seating for your venue.',
        linkLabel: 'Contact GST Concepts',
        linkTo: '/contact',
      }}
      faq={{
        title: 'Leadcom Seating, Answered',
        description: 'What GST Concepts supplies and installs for auditorium, retractable, cinema and workstation seating projects in Oman.',
        items: qaItems,
      }}
    />
  )
}
