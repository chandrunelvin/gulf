import { useEffect } from 'react'
import PartnerPage from '../components/PartnerPage.jsx'
import ModelViewer from '../components/ModelViewer.jsx'

const seoTitle = 'Brunonic Office Furniture Dealer in Oman | GST Concepts'
const seoDescription = 'GST Concepts - workstations, seating & desks in Muscat & Oman.'

const projects = [
  { src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80', title: 'Corporate Headquarters Fit-Out', location: 'Muscat, Oman', desc: 'Full-floor workstation systems, executive chairs and storage delivered for a 300-desk corporate headquarters.' },
  { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80', title: 'Open-Plan Workspace', location: 'Dubai, UAE', desc: 'Collaborative bench desking and acoustic breakout sofas shaping an agile, light-filled open-plan office.' },
  { src: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&w=1400&q=80', title: 'Executive Suites & Boardrooms', location: 'Sohar, Oman', desc: 'Bespoke executive desking, conference tables and lounge seating for a suite of director offices and boardrooms.' },
]

// Each item is rendered once as a visible question/answer card and reused, verbatim,
// to build the FAQPage schema below — one canonical answer per fact, not a restated copy.
const qaItems = [
  {
    question: 'Who sells Brunonic furniture in Oman?',
    answer: 'GST Concepts is the regional partner for Brunonic in Oman and Muscat, sourcing through Brunonic’s UAE Sales Office and warehouse. Brunonic is an Italian office furniture manufacturer established in 1982 by Bruno Nicoletti under the name Metal Work, and was the first to develop a metal office desk, created for Castelli.',
  },
  {
    question: 'What is Brunonic’s manufacturing background?',
    answer: 'Production and R&D are based in Italy, with a Sales Office and warehouse in the UAE and operative/logistic representatives in Hong Kong and the DPRC (China) — a Europe–Middle East–Asia business network.',
  },
  {
    question: 'Is Brunonic furniture available in Muscat?',
    answer: 'Yes. GST Concepts in Muscat offers Brunonic office furniture — workstations, soft seating, executive and managerial desks, and storage — for commercial and office fit-outs in Oman.',
  },
  {
    question: 'What does Brunonic manufacture?',
    answer: 'Italian-made office furniture including workstations, soft seating, task and executive chairs, managerial desks, storage, and acoustic meeting pods, produced in Italy since the brand was established in 1982.',
  },
  {
    question: 'Which Brunonic product lines does GST Concepts source?',
    answer: [
      'Workstations — Bamboo, Soul, Radice, HH, Rise, Stricto, T-Round, Recta, Solo, A-Table',
      'Soft seating — Soft+, Point, Air, Amba, Boreal, Cirro, Crust, Domo, Light, Fold, and more',
      'Chairs — Cora Lounge, Arcus (Two/Air/Flow/One), Core, Miler Soft, Origo, Strata, Vertex',
      'Managerial & Executive Desks — Ardea, Armonia, Aurora, Centre D, Cielo, Leggero, Linea, Nodo, Onda, Side-D, Telaio, Vento',
      'Storage — Hang, Stricto',
      'Private space & Acoustic Pods — Round Pod, Meet',
    ],
  },
  {
    question: 'Who is a workstation supplier in Oman?',
    answer: 'GST Concepts supplies Brunonic workstations, including the Bamboo, Soul, Radice, and Rise collections, in Muscat and Oman through the UAE Sales Office, alongside Brunonic’s full office range — workstations, managerial desks, soft seating, and storage — for commercial fit-outs.',
  },
  {
    question: 'Does Brunonic make ergonomic office furniture?',
    answer: 'Yes. Brunonic’s task and executive chairs, including the Arcus and Vertex collections, are designed with a comprehensive range of ergonomic adjustments. GST Concepts can advise on the most suitable configuration for individual workstations or office systems in Oman.',
  },
  {
    question: 'Where can I buy Brunonic office furniture in Oman?',
    answer: 'Through GST Concepts, Muscat, Sultanate of Oman — the regional partner for Brunonic in Oman and Singapore. Contact +968 9710 0007, +968 9806 7601, or sales@gstconcepts.om for quotes and catalogs.',
  },
]

export default function Brunonic() {
  useEffect(() => {
    const previousTitle = document.title
    const metaDescription = document.querySelector('meta[name="description"]')
    const previousDescription = metaDescription?.getAttribute('content') || ''

    document.title = seoTitle
    if (metaDescription) metaDescription.setAttribute('content', seoDescription)

    const schemaScripts = [
      {
        id: 'brunonic-org-schema',
        content: {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'GST Concepts',
          address: { '@type': 'PostalAddress', addressLocality: 'Muscat', addressCountry: 'Oman' },
          telephone: ['+968 9710 0007', '+968 9806 7601'],
          email: 'sales@gstconcepts.om',
          areaServed: ['Oman', 'Singapore'],
          brand: {
            '@type': 'Brand',
            name: 'Brunonic',
            foundingDate: '1982',
            founder: { '@type': 'Person', name: 'Bruno Nicoletti' },
            url: 'https://www.brunonicoffice.com',
          },
        },
      },
      {
        id: 'brunonic-products-schema',
        content: [
          { name: 'Brunonic Workstations', category: 'Workstation Supplier' },
          { name: 'Brunonic Office & Workplace Furniture', category: 'Workplace Furniture Supplier' },
          { name: 'Brunonic Ergonomic Seating', category: 'Ergonomic Furniture' },
        ].map((p) => ({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: p.name,
          category: p.category,
          brand: { '@type': 'Brand', name: 'Brunonic' },
          seller: { '@type': 'Organization', name: 'GST Concepts' },
          areaServed: 'Oman',
        })),
      },
      {
        id: 'brunonic-faq-schema',
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
        id: 'brunonic-breadcrumb-schema',
        content: {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${window.location.origin}/` },
            { '@type': 'ListItem', position: 2, name: 'Partners', item: `${window.location.origin}/partners` },
            { '@type': 'ListItem', position: 3, name: 'Brunonic', item: `${window.location.origin}/brunonic` },
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
        bg: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80',
        logo: '/images/brunonicoffice-logo.png',
        logoOriginal: true,
        title: 'Brunonic Italian Office Furniture | Oman Partner: GST Concepts',
        subtitle: 'Workstations, seating & desks, supplied by GST Concepts in Muscat.',
      }}
      breadcrumb={[
        { label: 'Home', href: '/' },
        { label: 'Partners', href: '/partners' },
        { label: 'Brunonic' },
      ]}
      detail={{
        title: 'Redefining the Modern Workspace',
        paragraphs: [
          'Brunonic is a leading designer and manufacturer of contemporary office furniture, with a focus on creating spaces that foster collaboration, creativity, and well-being.',
        ],
        media: <ModelViewer glb="/images/3d model/brunonic-brand.glb" />,
      }}
      projects={{ title: 'BRUNONIC PROJECTS', items: projects }}
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
      cta={{
        title: 'Planning An Office Fit-Out In Oman?',
        body: 'Request a Brunonic quote from GST Concepts for your project.',
        linkLabel: 'Request a Brunonic Quote',
        linkTo: '/contact',
      }}
      faq={{
        title: 'Brunonic Office Furniture, Answered',
        description: 'How Brunonic office furniture is sourced and supplied for commercial fit-outs in Oman.',
        items: qaItems,
      }}
    />
  )
}
