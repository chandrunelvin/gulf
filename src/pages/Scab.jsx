import { useEffect } from 'react'
import PartnerPage from '../components/PartnerPage.jsx'
import { scabCategories, scabProducts } from '../data/scabProducts.js'

const seoTitle = 'Scab Italy Contract Furniture Supplier Oman | GST Concepts'
const seoDescription = 'GST Concepts supplies S•CAB (Scab Italy) contract and workspace furniture for commercial projects in Muscat and Oman — bulk supply & installation.'

const projects = [
  { src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=80', title: 'Boutique Hotel Lounge', location: 'Muscat, Oman', desc: 'Italian-designed armchairs and coffee tables furnishing an intimate lobby lounge with warm, contemporary character.' },
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80', title: 'Waterfront Restaurant Terrace', location: 'Dubai, UAE', desc: 'Weather-resistant chairs and barstools for an all-day dining terrace, combining SCAB material research with coastal durability.' },
  { src: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1400&q=80', title: 'Resort Pool & Garden Seating', location: 'Salalah, Oman', desc: 'Sunbeds, hanging seats and garden collections styled across a resort landscape for effortless outdoor living.' },
]

// Each item is rendered once as a visible question/answer card and reused, verbatim,
// to build the FAQPage schema below — one canonical answer per fact, not a restated copy.
const qaItems = [
  {
    question: 'Is Scab furniture available in Oman?',
    answer: 'Yes — both through selected Muscat retail showrooms for individual purchases, and through GST Concepts for commercial project-scale supply. S•CAB, officially Scab Giardino S.p.a., has designed and manufactured furniture in Coccaglio, Italy, since 1957.',
  },
  {
    question: 'What’s the difference between buying Scab from a Muscat retailer and through GST Concepts?',
    answer: 'Retail showrooms in Muscat sell individual pieces for homes and small private-label projects. GST Concepts handles large-scale commercial orders — supplying S•CAB products and managing space-planning and installation. For a single piece or small project, visit the Muscat showrooms directly.',
  },
  {
    question: 'Does S•CAB make office furniture, or only outdoor and garden pieces?',
    answer: 'Both. S•CAB’s furnishing solutions span three “worlds” — Outdoor, Indoor, and Workspace. Workspace is the contract-sector, modular line, covering the Si-Si, Mentha, Brezza, Squid, and Tiffany collections for offices, coworking spaces, meeting rooms, and lounges.',
  },
  {
    question: 'Who is a workplace furniture supplier in Oman?',
    answer: 'GST Concepts supplies S•CAB’s Workspace collections for corporate office fit-outs in Muscat and Oman, alongside Brunonic’s office seating range.',
  },
  {
    question: 'What product categories does GST Concepts source from Scab for commercial projects?',
    answer: [
      'Chairs and armchairs — contract and hospitality furniture',
      'Tables and table bases — for meetings, conferences, and coworking',
      'Sofas and lounge chairs — for receptions and leisure areas',
      'Barstools — for F&B outlets and catering',
      'Accessories — to complete the arrangement of an office or hospitality space',
    ],
  },
  {
    question: 'How do I get a quote for a Scab commercial project in Oman?',
    answer: 'Contact GST Concepts, Muscat: +968 9710 0007, +968 9806 7601, or sales@gstconcepts.om.',
  },
]

export default function Scab() {
  useEffect(() => {
    const previousTitle = document.title
    const metaDescription = document.querySelector('meta[name="description"]')
    const previousDescription = metaDescription?.getAttribute('content') || ''

    document.title = seoTitle
    if (metaDescription) metaDescription.setAttribute('content', seoDescription)

    const schemaScripts = [
      {
        id: 'scab-org-schema',
        content: {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'GST Concepts',
          address: { '@type': 'PostalAddress', addressLocality: 'Muscat', addressCountry: 'Oman' },
          telephone: ['+968 9710 0007', '+968 9806 7601'],
          email: 'sales@gstconcepts.om',
          areaServed: ['Oman'],
          brand: {
            '@type': 'Brand',
            name: 'Scab Italy',
            legalName: 'Scab Giardino S.p.a.',
            foundingDate: '1957',
            url: 'https://www.s-cab.it/en/',
            location: { '@type': 'PostalAddress', addressLocality: 'Coccaglio', addressCountry: 'Italy' },
          },
        },
      },
      {
        id: 'scab-products-schema',
        content: {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'S•CAB Workspace Collection',
          category: 'Workplace Furniture Supplier',
          brand: { '@type': 'Brand', name: 'Scab Italy' },
          seller: { '@type': 'Organization', name: 'GST Concepts' },
          areaServed: 'Oman',
        },
      },
      {
        id: 'scab-faq-schema',
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
        id: 'scab-breadcrumb-schema',
        content: {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${window.location.origin}/` },
            { '@type': 'ListItem', position: 2, name: 'Partners', item: `${window.location.origin}/partners` },
            { '@type': 'ListItem', position: 3, name: 'Scab Italy', item: `${window.location.origin}/scab` },
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
        bg: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80',
        logo: '/images/s-cab_logo.svg',
        title: 'S•CAB (Scab Italy) | Contract Furniture Supply for Commercial Projects in Oman',
        subtitle: 'Contract, workspace, and hospitality furniture, supplied by GST Concepts in Muscat.',
      }}
      breadcrumb={[
        { label: 'Home', href: '/' },
        { label: 'Partners', href: '/partners' },
        { label: 'Scab Italy' },
      ]}
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
      cta={{
        title: 'Outfitting An Office Or Commercial Space In Oman?',
        body: 'Talk to GST Concepts about Scab for your project.',
        linkLabel: 'Contact GST Concepts',
        linkTo: '/contact',
      }}
      faq={{
        title: 'Scab Italy Contract Furniture, Answered',
        description: 'How S•CAB furniture is sourced and supplied for commercial and workplace projects in Oman.',
        items: qaItems,
      }}
    />
  )
}
