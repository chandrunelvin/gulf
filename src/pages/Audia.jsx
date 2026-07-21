import { useEffect } from 'react'
import PartnerPage from '../components/PartnerPage.jsx'
import ModelViewer from '../components/ModelViewer.jsx'

const seoTitle = 'Audia Italia Seating Supplier in Oman | GST Concepts Muscat'
const seoDescription = 'Source Audia Italia auditorium, cinema, theatre & stadium seating in Oman through GST Concepts, Muscat.'

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

// Each item is rendered once as a visible question/answer card and reused, verbatim,
// to build the FAQPage schema below — one canonical answer per fact, not a restated copy.
const qaItems = [
  {
    question: 'Does Audia Italia have a showroom in Muscat?',
    answer: 'No. Audia Italia manufactures exclusively in Italy and works through regional partners rather than standalone retail showrooms. In Oman, that partner is GST Concepts, Muscat.',
  },
  {
    question: 'What does Audia Italia specialize in?',
    answer: 'Audia Italia builds around what it calls “Community Seating” — seats designed as part of a broader architectural project rather than sold as standalone furniture. Everything is made in Italy, with the company working alongside architects and designers on individual venues, across auditorium, theatre, cinema, conference, university, VIP stadium, cruise ship, and office furniture, plus acoustic panels (ANTEA, FLECTA, ATENEO, GEMINA, VESTA).',
  },
  {
    question: 'Who supplies auditorium seating in Oman?',
    answer: 'GST Concepts supplies Audia Italia auditorium seating for venues across Muscat and Oman, alongside Leadcom’s auditorium range.',
  },
  {
    question: 'Who is a cinema seating supplier in Oman?',
    answer: 'GST Concepts sources Audia Italia cinema seating for cinema and screening room projects in Oman, customized per venue for fire-rated upholstery and acoustic comfort.',
  },
  {
    question: 'Can Audia Italia seating be customized for a specific venue in Oman?',
    answer: 'Yes. Customization of finish, armrest style, upholstery, and configuration is standard practice for Audia Italia — seat width, tip-up mechanism, row spacing and upholstery are all specified per venue. Project specifications are coordinated through GST Concepts.',
  },
  {
    question: 'How do I get a quote for an Audia Italia project in Oman?',
    answer: 'Contact GST Concepts in Muscat directly: +968 9710 0007, +968 9806 7601, or sales@gstconcepts.om.',
  },
]

export default function Audia() {
  useEffect(() => {
    const previousTitle = document.title
    const metaDescription = document.querySelector('meta[name="description"]')
    const previousDescription = metaDescription?.getAttribute('content') || ''

    document.title = seoTitle
    if (metaDescription) metaDescription.setAttribute('content', seoDescription)

    const schemaScripts = [
      {
        id: 'audia-org-schema',
        content: {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'GST Concepts',
          alternateName: 'GST Concepts',
          sameAs: ['https://www.furniconcepts.com'],
          address: { '@type': 'PostalAddress', addressLocality: 'Muscat', addressCountry: 'Oman' },
          telephone: ['+968 9710 0007', '+968 9806 7601'],
          email: 'sales@gstconcepts.om',
          areaServed: ['Oman'],
          brand: {
            '@type': 'Brand',
            name: 'Audia Italia',
            url: 'https://www.audiaitalia.it/en/',
            location: { '@type': 'PostalAddress', addressLocality: 'Noceto', addressCountry: 'Italy' },
          },
        },
      },
      {
        id: 'audia-products-schema',
        content: [
          { name: 'Audia Italia Auditorium Seating', category: 'Auditorium Seating' },
          { name: 'Audia Italia Cinema Seating', category: 'Cinema Seating' },
        ].map((p) => ({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: p.name,
          category: p.category,
          brand: { '@type': 'Brand', name: 'Audia Italia' },
          seller: { '@type': 'Organization', name: 'GST Concepts' },
          areaServed: 'Oman',
        })),
      },
      {
        id: 'audia-faq-schema',
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
        id: 'audia-breadcrumb-schema',
        content: {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${window.location.origin}/` },
            { '@type': 'ListItem', position: 2, name: 'Partners', item: `${window.location.origin}/partners` },
            { '@type': 'ListItem', position: 3, name: 'Audia Italia', item: `${window.location.origin}/audia` },
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
        bg: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1600&q=80',
        logo: '/images/audia-logo.svg',
        title: 'Audia Italia Community Seating — Sourced in Oman Through GST Concepts',
        subtitle: 'Auditorium, cinema, theatre & stadium seating, supplied by GST Concepts in Muscat.',
      }}
      breadcrumb={[
        { label: 'Home', href: '/' },
        { label: 'Partners', href: '/partners' },
        { label: 'Audia Italia' },
      ]}
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
      cta={{
        title: 'Fitting Out A Venue In Oman?',
        body: 'Talk to GST Concepts about Audia Italia seating for your project.',
        linkLabel: 'Contact GST Concepts',
        linkTo: '/contact',
      }}
      faq={{
        title: 'Audia Italia Seating, Answered',
        description: 'How Audia Italia seating is sourced, customized, and supplied for venues in Oman.',
        items: qaItems,
      }}
    />
  )
}
