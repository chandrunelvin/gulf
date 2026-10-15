import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout.jsx'
import Seo from '../components/Seo.jsx'

const seoTitle = 'Seating Solutions for Venues & Institutions in Oman | Auditorium & Cinema Seating | GST Concepts'
const seoDescription = 'Auditorium, cinema, retractable, and conference seating for venues and institutions in Oman — supplied direct from manufacturers Leadcom and Audia Italia by GST Concepts.'
const publishDate = '2026-10-15'
const heroImage = '/images/audiaitalia/Audia_Italia_realizzazione_True_Digital_poltrone_auditorium.webp'

const partners = [
  {
    num: '01',
    title: 'Leadcom',
    body: 'An international seating manufacturer with more than 28 years of experience. Their seating has been installed in more than 170 countries.',
    link: '/leadcom',
  },
  {
    num: '02',
    title: 'Audia Italia',
    body: 'A manufacturer based in Noceto, Italy. They design and build seating for architects under the name "Community Seating".',
    link: '/audia',
  },
]

const venueTypes = [
  {
    num: '01',
    title: 'Auditoriums & Conference Halls',
    body: 'Fixed seating for performing arts centres, lecture theatres, and school auditoriums.',
  },
  {
    num: '02',
    title: 'Cinemas & Private Screening Rooms',
    body: 'From standard multiplex chairs to VIP recliners and boutique cinema seating.',
  },
  {
    num: '03',
    title: 'Multi-Use Halls',
    body: 'Spaces that need the floor cleared for other events. These need retractable seating, not fixed rows.',
  },
  {
    num: '04',
    title: 'Universities, Churches & Conference Venues',
    body: 'Seating chosen to best suit the audience — sometimes a cluster arrangement, sometimes rows of chairs.',
  },
]

const seatingTypes = [
  {
    question: 'Retractable Seating',
    answers: [
      'Leadcom’s retractable systems fold up to 50 rows flat against the wall on motorized tracks. They include pinch sensors for safety and a manual backup in case of a power loss.',
      'This is the right choice for venues that need to free up the floor for sports, events, or general assembly between uses.',
    ],
  },
  {
    question: 'Fixed Seating',
    answers: [
      'Fixed seating is simpler and usually costs less. It suits a room that is permanently dedicated to one use, like a fixed auditorium or theatre.',
    ],
  },
]

const upcomingGuides = [
  'Retractable vs. Fixed Auditorium Seating: Which Is Right for Your Oman Venue?',
  'Cinema Seating Buyer’s Guide: What Oman Venues Should Know Before Ordering',
  'Audia Italia vs. Leadcom: Choosing the Right Seating Manufacturer for Your Project',
]

const faqs = [
  {
    question: 'What’s the difference between Leadcom and Audia Italia seating?',
    answer: 'Leadcom is a large global manufacturer installed in more than 170 countries, with over 14 million seats delivered, and certified to BIFMA and BSI standards. They offer standardized systems, including motorized retractable seating. Audia Italia manufactures only in Italy and works project by project with architects, under the idea of "Community Seating" rather than a fixed product line. Both are available in Oman through GST Concepts.',
  },
  {
    question: 'Should I choose retractable or fixed seating for my venue in Oman?',
    answer: 'It depends on whether the room needs to serve more than one purpose. If the space is dedicated permanently to one use — a fixed auditorium or theatre — fixed seating is the simpler and typically lower-cost choice. If the floor needs to be freed up for sports, events, or general assembly, Leadcom’s motorized retractable systems (up to 50 rows, pinch-sensor safety, manual backup) are built for exactly that.',
  },
  {
    question: 'What types of venues need auditorium or cinema seating in Oman?',
    answer: 'Performing arts centres, lecture theatres, school and university auditoriums, churches, conference venues, and cinemas or private screening rooms — covered between Leadcom’s auditorium and cinema ranges and Audia Italia’s eight documented sectors, including stadium and cruise ship seating.',
  },
  {
    question: 'Is there a real completed venue seating project in Oman?',
    answer: 'Yes. Leadcom’s own project records confirm a completed installation at Cheltenham Muscat, Phase 2 (Model LS-20603). See the Leadcom page for more on that project.',
  },
  {
    question: 'How much does auditorium or cinema seating cost in Oman?',
    answer: 'Cost varies substantially by seat count, fixed vs. retractable mechanism, and upholstery/finish grade, so a general figure would be misleading. Request a quote against your seat count and venue type for an accurate number.',
  },
  {
    question: 'Does GST Concepts handle installation for seating projects, not just supply?',
    answer: 'Yes — for cinema seating specifically, GST Concepts coordinates seat selection, delivery, and installation as a single project rather than separate vendor relationships. Confirm scope for auditorium and retractable installations directly: +968 9710 0007 / +968 9806 7601 / sales@gstconcepts.om.',
  },
  {
    question: 'Can auditorium or cinema seating be customized for a specific venue?',
    answer: 'Yes for Audia Italia — customization of finish, armrest style, upholstery, and seat/row configuration is standard practice, specified per site rather than sold as an add-on. For Leadcom projects, contact GST Concepts to confirm the customization options available for your chosen model.',
  },
  {
    question: 'What certifications do these seating manufacturers hold?',
    answer: 'Leadcom’s seating is certified to BIFMA and BSI international seating standards, produced across 120,000 sqm of in-house facilities. For certification details on a specific Audia Italia range, contact GST Concepts.',
  },
  {
    question: 'What materials are used in durable public seating in Oman?',
    answer: 'Leadcom’s auditorium and public seating uses curved lower-back support, pressure-relieving seat edges, and foam engineered to hold its shape after 100,000+ compressions — built for heavy daily use rather than occasional sitting, with materials meeting fire-safety requirements for public assembly spaces.',
  },
  {
    question: 'What is the typical lead time for custom seating orders in Oman?',
    answer: 'Lead time depends on seat count, whether the order is a standard configuration or fully customized, and current manufacturing schedules — it isn’t a fixed number across projects. Contact GST Concepts with your seat count and venue type for an accurate timeline.',
  },
  {
    question: 'Does GST Concepts deliver seating across Oman?',
    answer: 'Yes — GST Concepts delivers and coordinates seating installation for venues across Muscat and the wider Sultanate, not just the capital area.',
  },
  {
    question: 'How do I contact GST Concepts for a bulk seating order?',
    answer: 'Contact GST Concepts directly with your seat count, venue type, and timeline: +968 9710 0007 / +968 9806 7601 / sales@gstconcepts.om, or use the contact form.',
  },
]

export default function BlogVenueSeatingOman() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Seating Solutions for Venues & Institutions in Oman',
      description: seoDescription,
      image: `https://www.gstconcepts.om${encodeURI(heroImage)}`,
      datePublished: publishDate,
      dateModified: publishDate,
      author: { '@type': 'Organization', name: 'GST Concepts' },
      publisher: { '@type': 'Organization', name: 'GST Concepts' },
      mainEntityOfPage: 'https://www.gstconcepts.om/blog/venue-seating-oman',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.gstconcepts.om/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.gstconcepts.om/blog' },
        { '@type': 'ListItem', position: 3, name: 'Seating Solutions for Venues & Institutions in Oman', item: 'https://www.gstconcepts.om/blog/venue-seating-oman' },
      ],
    },
  ]

  return (
    <SiteLayout active="blog">
      <Seo
        title={seoTitle}
        description={seoDescription}
        path="/blog/venue-seating-oman"
        image={`https://www.gstconcepts.om${encodeURI(heroImage)}`}
        type="article"
        jsonLd={jsonLd}
      />
      <section
        className="page-hero"
        style={{ backgroundImage: `url('${heroImage}')` }}
      >
        <div className="container">
          <div className="about-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/blog">Blog</Link>
            <span>/</span>
            <span>Seating Solutions for Venues &amp; Institutions in Oman</span>
          </div>
          <h1 className="reveal-text hero-title-compact">Seating Solutions for Venues &amp; Institutions in Oman</h1>
          <p>Auditorium, cinema, retractable, and conference seating — supplied direct from the manufacturers.</p>
        </div>
      </section>

      <section className="about-detail">
        <div className="container">
          <div className="about-text reveal" style={{ maxWidth: 780, margin: '0 auto' }}>
            <p className="blog-meta">
              <span className="blog-tag">Guide</span>
              <span className="blog-date">Published 15 October 2026 &middot; GST Concepts</span>
            </p>
            <p>
              Most companies that quote for auditorium or cinema seating projects in Oman are contractors. They buy the
              seats from a manufacturer somewhere else and bring them in for one job at a time. GST Concepts is different.
              We work directly with the manufacturers themselves, so we are much closer to the product than a typical
              contractor.
            </p>
          </div>
        </div>
      </section>

      <section className="gst-pillars-section">
        <div className="container">
          <div className="gst-pillars-head reveal">
            <div className="projects-eyebrow">OUR MANUFACTURERS</div>
            <h2 className="section-title">We Partner With Two Seating Manufacturers</h2>
          </div>
          <div className="gst-pillars-list">
            {partners.map((p) => (
              <article className="gst-pillar reveal" key={p.title}>
                <div className="gst-pillar-index">{p.num}</div>
                <div className="gst-pillar-body">
                  <h3><Link to={p.link}>{p.title}</Link></h3>
                  <p>{p.body}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="about-text reveal" style={{ maxWidth: 780, margin: '48px auto 0' }}>
            <p>
              Local contractors often struggle when a client needs a change, a warranty repair, or a fast answer to a
              site-specific question. These things move faster when the manufacturer is close to the jobsite instead of
              several steps removed from it.
            </p>
            <p>
              Leadcom also has a real, completed project in Oman, not just a product listed on a website. Their
              Cheltenham Muscat, Phase 2 auditorium (Model LS-20603) is a finished cinema fit-out, and it is documented
              on Leadcom’s own website.
            </p>
          </div>
        </div>
      </section>

      <section className="about-detail">
        <div className="container">
          <div className="team-header reveal">
            <div className="projects-eyebrow">VENUE TYPES</div>
            <h2 className="section-title">What Counts As "Venue Seating" In Oman</h2>
            <p>Venue seating is different for each setting.</p>
          </div>
          <div className="gst-pillars-list">
            {venueTypes.map((v) => (
              <article className="gst-pillar reveal" key={v.title}>
                <div className="gst-pillar-index">{v.num}</div>
                <div className="gst-pillar-body">
                  <h3>{v.title}</h3>
                  <p>{v.body}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="about-text reveal" style={{ maxWidth: 780, margin: '48px auto 0' }}>
            <p>
              Audia Italia’s brochure documents eight sectors: auditorium, theatre, cinema, conference,
              university/education, VIP stadium, cruise ship, and office.
            </p>
            <p>
              If your project is standard office desks or workstations rather than venue seating, that is a different
              product category with a different buying process. See our{' '}
              <Link to="/blog/office-furniture-oman">office &amp; workplace furniture guide</Link> instead.
            </p>
          </div>
        </div>
      </section>

      <section className="gst-pillars-section">
        <div className="container">
          <div className="gst-pillars-head reveal">
            <div className="projects-eyebrow">THE FIRST DECISION</div>
            <h2 className="section-title">Fixed Or Retractable: The Decision That Drives Everything Else</h2>
            <p>
              Before you choose a manufacturer, there is a bigger decision to make first: fixed seating or retractable
              seating. This choice affects your cost, your installation time, and what else the room can be used for.
            </p>
          </div>
          <div className="gst-pillars-list">
            {seatingTypes.map((s, i) => (
              <article className="gst-pillar reveal" key={s.question}>
                <div className="gst-pillar-index">{String(i + 1).padStart(2, '0')}</div>
                <div className="gst-pillar-body">
                  <h3>{s.question}</h3>
                  {s.answers.map((a) => (
                    <p key={a}>{a}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-detail">
        <div className="container">
          <div className="about-text reveal" style={{ maxWidth: 780, margin: '0 auto' }}>
            <div className="projects-eyebrow">GO DEEPER</div>
            <h2 className="section-title">Specific Guides — Coming Soon</h2>
            <ul>
              {upcomingGuides.map((g) => (
                <li key={g}>&rarr; {g}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="values faq-section">
        <div className="container">
          <div className="team-header reveal">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p>Common questions on manufacturers, fixed vs. retractable seating, cost, installation, and delivery in Oman.</p>
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
          <h2>Planning A Venue Seating Project In Oman?</h2>
          <p>Talk to GST Concepts about auditorium, cinema, retractable, and conference seating from Leadcom and Audia Italia.</p>
          <Link to="/contact" className="cta-btn partner-final-cta-btn">Contact GST Concepts</Link>
        </div>
      </section>
    </SiteLayout>
  )
}
