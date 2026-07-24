import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout.jsx'

const seoTitle = 'Office & Workplace Furniture in Oman: A Guide to Specifying Your Fit-Out | GST Concepts'
const seoDescription = 'A practical guide to specifying executive desks, workstations, ergonomic seating, storage, reception, and lounge furniture for an office fit-out in Oman.'
const publishDate = '2026-07-24'

const categories = [
  {
    num: '01',
    title: 'Executive Desks',
    body: 'Private-office and leadership workspaces, where finish and AV/meeting infrastructure compatibility outweigh the need for space optimization per square meter. Range includes Ardea, Armonia, Aurora, Centre D, Cielo, Leggero, Linea, Nodo, Onda, Side-D, Telaio, and Vento.',
  },
  {
    num: '02',
    title: 'Workstations',
    body: 'Desks form the backbone of any open-plan office. The primary design constraint is maximizing seats per square meter without sacrificing comfort. The series of modular workstations includes Bamboo, Soul, Radice, HH, Rise, Stricto, T-Round, Recta, Solo, and A-Table.',
  },
  {
    num: '03',
    title: 'Ergonomic Seating',
    body: 'Task chairs built for at least 8 hours/day of continuous use. Unlike conference-room seats, these products must balance comfort and productivity — the task-chair range spans Arcus (Two, Air, Flow, One) and Vertex.',
  },
  {
    num: '04',
    title: 'Storage Systems',
    body: 'Filing, lockable storage, and open shelving, designed to optimize how much information — paper or digital — is retained in the office versus archived elsewhere. Represented by the Hang and Stricto categories.',
  },
  {
    num: '05',
    title: 'Reception Areas',
    body: 'Reception desking, chosen to reflect organizational brand values, with a strong emphasis on aesthetics over functionality.',
  },
  {
    num: '06',
    title: 'Lounge Areas',
    body: 'Staff seating and breakout rooms, primarily specified using the same soft-seat upholstery ranges as reception, but focused on long-duration comfort rather than image. Ranges include Soft+, Point, Air, Amba, Boreal, Cirro, Crust, Domo, Light, and Fold.',
  },
]

const steps = [
  {
    question: 'Start From Headcount And Layout, Not From A Product Catalogue',
    answers: [
      'Think through the fit-out requirements from a numbers and space-planning perspective before choosing any particular products.',
      'Establishing headcount and growth projections for the tenure of the lease, combined with the right allocation of space between open plan, private offices, and hybrid, is critical to ensuring the chosen furnishing solutions actually fit the office.',
      'The wrong choice of products — including storage — is the most common reason new offices end up with ill-fitting solutions, such as desks too big for the available square meters or storage blocking the sole means of emergency evacuation.',
    ],
  },
  {
    question: 'Executive Desks vs. Workstations Isn’t Just A Hierarchy Decision',
    answers: [
      'It’s tempting to treat this as "executives get desks, everyone else gets workstations," but the real driver is function.',
      'Roles doing focused solo work or client-facing meetings in their own space suit an executive desk; roles that collaborate constantly suit workstation clusters — regardless of seniority.',
    ],
  },
  {
    question: 'Ergonomic Seating Is A Specification, Not A Price Point',
    answers: [
      'A considerable number of office chairs sold in Oman do not actually offer the degrees of freedom and support needed for a continuous 8-hour work interval.',
      'A good rule of thumb: ask for a chair that adjusts seat height, seat depth, lumbar support, and armrest height independently at the time of purchase. Reputable manufacturers such as Brunonic distinguish between task and occasional seating, so their Arcus and Vertex office chair series can be relied on for extensive use in modern open-plan offices.',
    ],
  },
  {
    question: 'Storage: Measure What You Actually Need To Keep On-Site',
    answers: [
      'Storage should be purchased according to actual needs, not perceived requirements. Companies frequently fail to define which items actually need to be stored in the office and in what capacity.',
      'To maximize efficiency, prioritize the inventory — keep the most frequently accessed items in lockers, and digitize or move less important documents off-site. This is especially true for furniture and equipment, where storage space is often wasted on items used rarely or not at all.',
    ],
  },
  {
    question: 'Reception And Lounge Furniture Are Often The Same Family, Different Job',
    answers: [
      'Reception and lounge furnishings are two different categories of equipment, albeit similar in some areas. While appearance, materials, and furniture solutions tend to blend for the two spaces, the selection criteria differ.',
      'The most important consideration for reception furnishings is the image the company wants to project, whereas lounge furnishings focus on the comfort required by employees. In both cases, select items based on intended use rather than conflating the two categories.',
    ],
  },
]

const faqs = [
  {
    question: 'Are there office furniture suppliers I can compare in Oman?',
    answer: 'Besides GST Concepts there are other office furniture suppliers in Oman, such as Khimji Ramdas, Bahwan Furnishings, and Fahmy Furniture. GST Concepts differs in that it sells brand-specific office furniture — Brunonic, alongside Scab, Leadcom, and Audia — as part of a project, rather than operating as a general showroom.',
  },
  {
    question: 'Best companies supplying ergonomic office desks in Oman?',
    answer: 'Seek out ergonomic office furniture suppliers in Oman that can talk through the details of seat adjustment and confirm whether a chair is suitable for intensive, full-day use. GST Concepts, as Brunonic’s Oman supplier, can talk through the specifications of the Arcus and Vertex chair range and Brunonic’s executive desk range.',
  },
  {
    question: 'Where can I find showrooms for executive office desks in Muscat?',
    answer: 'Brunonic’s managerial desk range is available in Muscat via GST Concepts. Contact +968 9710 0007 / +968 9806 7601 / sales@gstconcepts.om to inquire about availability for viewing.',
  },
  {
    question: 'Can I compare prices for ergonomic office chairs suitable for long hours?',
    answer: 'Confirm with GST Concepts directly — pricing for fully adjustable, intensive-use office chairs such as Brunonic’s Arcus and Vertex range is typically discussed per specification rather than a flat price per seat. You can request a quotation based on your requirements rather than a published list price.',
  },
  {
    question: 'How to choose quality office furniture for a startup in Oman?',
    answer: 'Look for office furniture that grows with you, such as the modular workstations (Bamboo, Soul, Rise) from Brunonic, which allow a desk to be added onto an existing row, and budget for adjustable sit-stand desks as a foundation for your office furniture purchasing.',
  },
  {
    question: 'What are the benefits of modular office workstations?',
    answer: 'Modular workstations allow a new desk to be added onto an existing row, instead of re-purchasing a whole new row of desks, should a new role be created in an otherwise established team. That makes modular workstations more cost-effective over a long lease period than traditional desking for a growing business.',
  },
  {
    question: 'Which companies offer custom office furniture design services in Oman?',
    answer: 'Custom office furniture design — working within a set floorplan or matching a specific brand aesthetic — is built into fit-out contracts, such as those offered by GST Concepts. Contact GST Concepts to discuss your project requirements.',
  },
  {
    question: 'Which companies offer office furniture installation services in Oman?',
    answer: 'Contact GST Concepts directly to confirm whether installation is bundled into a fit-out project or quoted separately for your scope of work.',
  },
  {
    question: 'What warranty options are available for office furniture in Oman?',
    answer: 'Warranty terms vary by product line. Contact GST Concepts on +968 9710 0007 / +968 9806 7601 / sales@gstconcepts.om to confirm the warranty on a specific Brunonic product you’re interested in.',
  },
  {
    question: 'Can I order office furniture online for delivery in Oman?',
    answer: 'GST Concepts can supply and install office furniture across Oman. Contact sales@gstconcepts.om to discuss lead times and delivery for your specific project.',
  },
  {
    question: 'Affordable office furniture options for small businesses in Oman?',
    answer: 'For smaller offices, the biggest cost lever is usually standardizing on a single workstation system — one Brunonic line across the whole office — rather than mixing bespoke pieces, since it reduces both per-unit cost and future compatibility issues if you need to add desks later. Ergonomic seating is the one category worth not cutting corners on.',
  },
  {
    question: 'What materials are commonly used in office furniture sold in Oman?',
    answer: 'Commercial office furniture in the Oman market typically uses steel or aluminium frames with powder coating for abrasion resistance, engineered wood or laminate desk surfaces, and a range of upholstery options for seating. Contact GST Concepts to confirm which materials apply to a specific Brunonic range.',
  },
]

export default function BlogOfficeFurnitureOman() {
  useEffect(() => {
    const previousTitle = document.title
    const metaDescription = document.querySelector('meta[name="description"]')
    const previousDescription = metaDescription?.getAttribute('content') || ''

    document.title = seoTitle
    if (metaDescription) metaDescription.setAttribute('content', seoDescription)

    const schemaScripts = [
      {
        id: 'blog-article-schema',
        content: {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Office & Workplace Furniture in Oman: A Practical Guide to Specifying Your Fit-Out',
          description: seoDescription,
          datePublished: publishDate,
          dateModified: publishDate,
          author: { '@type': 'Organization', name: 'GST Concepts' },
          publisher: { '@type': 'Organization', name: 'GST Concepts' },
          mainEntityOfPage: `${window.location.origin}/blog/office-furniture-oman`,
        },
      },
      {
        id: 'blog-faq-schema',
        content: {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        },
      },
      {
        id: 'blog-breadcrumb-schema',
        content: {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${window.location.origin}/` },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: `${window.location.origin}/blog` },
            { '@type': 'ListItem', position: 3, name: 'Office & Workplace Furniture in Oman', item: `${window.location.origin}/blog/office-furniture-oman` },
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
    <SiteLayout active="blog">
      <section
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80')" }}
      >
        <div className="container">
          <div className="about-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/blog">Blog</Link>
            <span>/</span>
            <span>Office &amp; Workplace Furniture in Oman</span>
          </div>
          <h1 className="reveal-text hero-title-compact">Office &amp; Workplace Furniture in Oman</h1>
          <p>A practical guide to specifying executive desks, workstations, ergonomic seating, storage, reception, and lounge furniture.</p>
        </div>
      </section>

      <section className="about-detail">
        <div className="container">
          <div className="about-text reveal" style={{ maxWidth: 780, margin: '0 auto' }}>
            <p className="blog-meta">
              <span className="blog-tag">Guide</span>
              <span className="blog-date">Published 24 July 2026 &middot; GST Concepts</span>
            </p>
            <p>
              While searching for "office furniture in Oman" will yield many showrooms offering an array of desks and seating,
              it is far trickier to find a single source of information on how to specify an office fit-out correctly. This
              guide covers the basics of specifying executive desks, open-plan workstations, ergonomic seating, storage,
              reception, and lounge furnishings to give the buyer a good grounding in what office furniture they need.
            </p>
            <p>
              GST Concepts covers the local region as an official distributor for Brunonic Italian office furniture in Muscat
              and Oman. This guide touches on the specific Brunonic products available in Oman — but a buyer should always be
              aware of the wider specification considerations when choosing office furniture.
            </p>
          </div>
        </div>
      </section>

      <section className="gst-pillars-section">
        <div className="container">
          <div className="gst-pillars-head reveal">
            <div className="projects-eyebrow">THE SIX CATEGORIES</div>
            <h2 className="section-title">What "Office Furniture In Oman" Typically Covers</h2>
            <p>Six specification problems get lumped under one search term. Each has different constraints.</p>
          </div>
          <div className="gst-pillars-list">
            {categories.map((c) => (
              <article className="gst-pillar reveal" key={c.title}>
                <div className="gst-pillar-index">{c.num}</div>
                <div className="gst-pillar-body">
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-detail">
        <div className="container">
          <div className="team-header reveal">
            <div className="projects-eyebrow">SPECIFICATION GUIDE</div>
            <h2 className="section-title">How To Actually Specify An Office Fit-Out In Oman</h2>
          </div>
          <div className="gst-pillars-list">
            {steps.map((step, i) => (
              <article className="gst-pillar reveal" key={step.question}>
                <div className="gst-pillar-index">{String(i + 1).padStart(2, '0')}</div>
                <div className="gst-pillar-body">
                  <h3>{step.question}</h3>
                  {step.answers.map((a) => (
                    <p key={a}>{a}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="values faq-section">
        <div className="container">
          <div className="team-header reveal">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p>Common questions on comparing suppliers, ergonomic seating, storage, and fit-out costs in Oman.</p>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <details className="faq-item reveal" key={faq.question} open={index === 0}>
                <summary>{faq.question}</summary>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="partner-final-cta">
        <div className="container partner-final-cta-inner reveal">
          <h2>Planning An Office Fit-Out In Oman?</h2>
          <p>Talk to GST Concepts about executive desks, workstations, ergonomic seating, storage, reception, and lounge furniture from Brunonic.</p>
          <Link to="/contact" className="cta-btn partner-final-cta-btn">Contact GST Concepts</Link>
        </div>
      </section>
    </SiteLayout>
  )
}
