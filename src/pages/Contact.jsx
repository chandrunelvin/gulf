import SiteLayout from '../components/SiteLayout.jsx'

export default function Contact() {
  return (
    <SiteLayout active="contact">
      <section
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80')" }}
      >
        <div className="container">
          <h1 className="reveal-text">Contact Us</h1>
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
                  <input type="text" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="6" required></textarea>
                </div>
                <button type="submit" className="cta-btn">Send Message <i className="fas fa-paper-plane" style={{ marginLeft: '10px' }}></i></button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map reveal">
        <div className="container">
          <div className="map-container">
            <iframe
              title="Muscat, Sultanate of Oman, PC 112, PO Box 543 map"
              src="https://maps.google.com/maps?q=Muscat%2C%20Sultanate%20of%20Oman%2C%20PC%20112%2C%20PO%20Box%20543&z=15&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
