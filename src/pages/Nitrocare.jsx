import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PartnerPage from '../components/PartnerPage.jsx'
import { nitrocareProducts } from '../data/nitrocareProducts.js'

const seoTitle = 'Nitrocare Hospital Furniture Supplier Oman | GST Concepts'
const seoDescription = 'GST Concepts supplies Nitrocare hospital beds, examination furniture & patient seating for healthcare facility projects in Muscat and Oman.'


// Each item is rendered once as a visible question/answer card and reused, verbatim,
// to build the FAQPage schema below — one canonical answer per fact, not a restated copy.
const qaItems = [
  {
    question: 'Who supplies Nitrocare furniture in Muscat?',
    answer: 'Nitrocare furniture is available in Muscat through ModernCare Medical Devices & Equipment for retail and homecare orders, and through GST Concepts for hospital and clinic facility projects requiring bulk supply and installation.',
  },
  {
    question: 'What is Nitrocare’s manufacturing background?',
    answer: 'Nitrocare belongs to the Gökler Group, based in Sivas, Turkey, with over 20 years in the medical furniture industry — represented at Arab Health Dubai and Dubai WHX, the region’s largest healthcare trade fairs.',
  },
  {
    question: 'Who is a hospital furniture supplier for facility projects in Oman?',
    answer: 'GST Concepts supplies Nitrocare hospital beds, examination furniture, and ward furniture for healthcare facility builds and renovations across Oman.',
  },
  {
    question: 'What product categories does GST Concepts source from Nitrocare?',
    answer: [
      'Beds for hospitals & healthcare centers — motorized beds, adjustable beds, central braking systems',
      'Furniture for examinations & treatments — general, gynecological, dermatology, ENT',
      'Chairs for dialysis & chemotherapy',
      'Transport equipment for patients — stretchers, transport chairs, folding walkers',
      'Facility & ward furniture — bedside cabinets, over-bed tables, medication carts, lockers, group seating arrangements',
    ],
  },
  {
    question: 'What’s the difference between buying a Nitrocare bed retail and sourcing through GST Concepts?',
    answer: 'Retail and showroom channels sell individual units for homecare or single-room needs. GST Concepts handles facility-scale project supply, multiple units, delivery scheduling, and installation coordinated as part of a hospital or clinic build.',
  },
  {
    question: 'Does Nitrocare only offer hospital beds, or a wider range of medical furniture?',
    answer: 'A wider range. Hospital beds are one category among examination furniture, dialysis chairs, patient transport equipment, ward furniture, and clinical waiting-area seating.',
  },
]

export default function Nitrocare() {
  useEffect(() => {
    const previousTitle = document.title
    const metaDescription = document.querySelector('meta[name="description"]')
    const previousDescription = metaDescription?.getAttribute('content') || ''

    document.title = seoTitle
    if (metaDescription) metaDescription.setAttribute('content', seoDescription)

    const schemaScripts = [
      {
        id: 'nitrocare-org-schema',
        content: {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'GST Concepts',
          address: { '@type': 'PostalAddress', addressLocality: 'Muscat', addressCountry: 'Oman' },
          telephone: ['+968 9710 0007', '+968 9806 7601'],
          email: 'sales@gstconcepts.om',
          areaServed: ['Oman', 'Singapore'],
        },
      },
      {
        id: 'nitrocare-products-schema',
        content: [
          { name: 'Nitrocare Hospital Beds' },
          { name: 'Nitrocare Examination & Treatment Furniture' },
        ].map((p) => ({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: p.name,
          category: 'Hospital Furniture Supplier',
          brand: { '@type': 'Brand', name: 'Nitrocare' },
          seller: { '@type': 'Organization', name: 'GST Concepts' },
          areaServed: 'Oman',
        })),
      },
      {
        id: 'nitrocare-faq-schema',
        content: {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: qaItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: Array.isArray(item.answer) ? item.answer.join('; ') : item.answer,
            },
          })),
        },
      },
      {
        id: 'nitrocare-breadcrumb-schema',
        content: {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${window.location.origin}/` },
            { '@type': 'ListItem', position: 2, name: 'Partners', item: `${window.location.origin}/partners` },
            { '@type': 'ListItem', position: 3, name: 'Nitrocare', item: `${window.location.origin}/nitrocare` },
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
        bg: '/images/nitrocare/aesthetic-dermatology.jpg',
        title: 'Nitrocare Hospital & Medical Furniture | Facility Project Supply in Oman',
        subtitle: 'Facility-level hospital and medical furniture, supplied by GST Concepts across Oman.',
      }}
      breadcrumb={[
        { label: 'Home', href: '/' },
        { label: 'Partners', href: '/partners' },
        { label: 'Nitrocare' },
      ]}
      detail={{
        title: 'Engineered for Care & Recovery',
        paragraphs: [
          'Nitrocare delivers medical-grade furniture designed around patient wellbeing and clinical efficiency. Every recliner, bed, and table is built for hygiene, durability, and effortless adjustment — supporting both the people who heal and those who recover.',
          'From hospital wards and day-care clinics to dialysis and examination rooms, Nitrocare provides dependable solutions trusted by healthcare facilities across Oman and the wider Gulf.',
        ],
        media: <img src="/images/nitrocare/patient-beds.jpeg" alt="Nitrocare Patient Beds" />,
      }}
      galleryTitle="NITROCARE COLLECTION"
      galleryItems={nitrocareProducts}
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
      cta={{
        title: 'Fitting Out A Healthcare Facility In Oman?',
        body: 'Talk to GST Concepts about Nitrocare for your hospital, clinic, or ward project.',
        linkLabel: 'Contact GST Concepts',
        linkTo: '/contact',
      }}
      faq={{
        title: 'Nitrocare Hospital Furniture, Answered',
        description: 'How Nitrocare furniture is sourced, supplied, and installed for healthcare facility projects in Oman.',
        items: qaItems,
      }}
    />
  )
}
