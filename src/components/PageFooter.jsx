import { Link } from 'react-router-dom'

/** Shared footer for the Gulf Supply & Services sub-pages. */
export default function PageFooter() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">GULF <span>SUPPLY AND SERVICES</span></div>
            <p>Elevating workspaces with sophisticated European design in the IMEA region. We provide functional and elegant furniture solutions for modern offices.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/collection">Collection</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Our Partners</h4>
            <ul>
              <li><Link to="/audia">Audia</Link></li>
              <li><Link to="/scab">Scab</Link></li>
              <li><Link to="/leadcom">Leadcom</Link></li>
              <li><Link to="/brunonic">Brunonic</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Info</h4>
            <p><i className="fas fa-map-marker-alt" style={{ color: 'var(--accent-color)', marginRight: '10px' }}></i> Muscat<br />Sultanate of Oman<br />PC 112, PO Box 543</p>
            <p><i className="fas fa-phone" style={{ color: 'var(--accent-color)', marginRight: '10px' }}></i> +968 9710 0007 / +968 9806 7601</p>
            <p><i className="fas fa-envelope" style={{ color: 'var(--accent-color)', marginRight: '10px' }}></i> sales@gstconcepts.om</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Gulf Supply and Services Trading. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
