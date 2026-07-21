/** Fixed WhatsApp chat button shown on every page via SiteLayout / Home. */
export default function WhatsAppFloat() {
  return (
    <a href="https://wa.me/96897100007" className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
      <span className="whatsapp-label">WhatsApp</span>
      <span className="whatsapp-float-icon">
        <img src="/images/whatsapp-icon.jpeg" alt="WhatsApp" />
      </span>
    </a>
  )
}
