import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout.jsx'

const seoTitle = 'Contact GST Concepts | Furniture Supplier in Muscat, Oman'
const seoDescription = 'Contact GST Concepts in Muscat, Oman for Audia, Scab, Leadcom, Brunonic and Nitrocare enquiries — auditorium, office, contract and hospital furniture supply.'

// Each item is rendered once as a visible FAQ and reused, verbatim, for the FAQPage schema below.
const faqs = [
  {
    question: 'Which brands does GST Concepts carry?',
    answer: 'GST Concepts carries Audia Italia, Scab Italy (S•CAB), Leadcom, Brunonic, and Nitrocare — covering auditorium and cinema seating, contract and office furniture, and hospital and medical furniture.',
  },
  {
    question: 'Where is GST Concepts based?',
    answer: 'GST Concepts is based in Muscat, Sultanate of Oman, at PC 112, PO Box 543, and manages enquiries across the Sultanate for all five brands.',
  },
  {
    question: 'How do I contact GST Concepts in Oman?',
    answer: 'Call +968 9710 0007 or +968 9806 7601, email sales@gstconcepts.om, or use the enquiry form on this page — routing by brand and project type gets your enquiry to the right person faster.',
  },
]

export default function Contact() {
  useEffect(() => {
    const previousTitle = document.title
    const metaDescription = document.querySelector('meta[name="description"]')
    const previousDescription = metaDescription?.getAttribute('content') || ''

    document.title = seoTitle
    if (metaDescription) metaDescription.setAttribute('content', seoDescription)

    const schemaScripts = [
      {
        id: 'contact-localbusiness-schema',
        content: {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'GST Concepts',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'PC 112, PO Box 543',
            addressLocality: 'Muscat',
            addressCountry: 'Oman',
          },
          telephone: ['+968 9710 0007', '+968 9806 7601'],
          email: 'sales@gstconcepts.om',
          areaServed: ['Oman'],
        },
      },
      {
        id: 'contact-faq-schema',
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
        id: 'contact-breadcrumb-schema',
        content: {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${window.location.origin}/` },
            { '@type': 'ListItem', position: 2, name: 'Contact', item: `${window.location.origin}/contact` },
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
    <SiteLayout active="contact">
      <section
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80')" }}
      >
        <div className="container">
          <div className="about-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
          <h1 className="reveal-text hero-title-compact">Contact GST Concepts — Oman</h1>
          <p>Ready to Elevate Your Workspace? Let's Connect.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info reveal">
              <h3>Get in Touch</h3>
              <p>Our experts are ready to help you find the perfect furniture solutions that combine elegance with productivity.</p>
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Visit Our Office</h4>
                  <p>Muscat<br />Sultanate of Oman<br />PC 112, PO Box 543</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Call Us Directly</h4>
                  <p>+968 9710 0007 / +968 9806 7601</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email Support</h4>
                  <p>sales@gstconcepts.om</p>
                </div>
              </div>
            </div>
            <div className="contact-form-container reveal">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Company" />
                </div>
                <div className="form-group">
                  <select defaultValue="" required>
                    <option value="" disabled>Brand of Interest</option>
                    <option value="audia">Audia Italia</option>
                    <option value="scab">Scab Italy (S•CAB)</option>
                    <option value="leadcom">Leadcom</option>
                    <option value="brunonic">Brunonic</option>
                    <option value="nitrocare">Nitrocare</option>
                    <option value="not-sure">Not Sure</option>
                  </select>
                </div>
                <div className="form-group">
                  <select defaultValue="" required>
                    <option value="" disabled>Project Type</option>
                    <option value="auditorium">Auditorium / Theatre</option>
                    <option value="cinema">Cinema Seating</option>
                    <option value="office">Office / Workplace Fit-Out</option>
                    <option value="healthcare">Hospital / Healthcare Furniture</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="6" required></textarea>
                </div>
                <button type="submit" className="cta-btn">Send Inquiry <i className="fas fa-paper-plane" style={{ marginLeft: '10px' }}></i></button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map">
        <div className="container">
          <div className="team-header reveal">
            <h2 className="section-title">Find Us in Muscat</h2>
            <p>PC 112, PO Box 543 — Muscat, Sultanate of Oman.</p>
          </div>
          <div className="map-container reveal">
            <iframe
              title="GST Concepts, Muscat, Sultanate of Oman map"
              src="https://maps.google.com/maps?q=Muscat%2C%20Sultanate%20of%20Oman&z=12&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="map-cta">
            <a
              href="https://maps.google.com/maps?q=Muscat%2C%20Sultanate%20of%20Oman%2C%20PC%20112%2C%20PO%20Box%20543"
              target="_blank"
              rel="noopener"
              className="cta-btn"
            >
              Get Directions <i className="fas fa-arrow-up-right-from-square" style={{ marginLeft: '10px' }}></i>
            </a>
          </div>
        </div>
      </section>

      <section className="values faq-section">
        <div className="container">
          <div className="team-header reveal">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p>Quick answers on brands, location, and how to reach GST Concepts in Oman.</p>
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
          <h2>Ready To Start Your Project?</h2>
          <p>Call, email, or send an inquiry above — GST Concepts responds from Muscat.</p>
          <a href="tel:+96897100007" className="cta-btn partner-final-cta-btn">Call GST Concepts</a>
        </div>
      </section>
    </SiteLayout>
  )
}
