import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout.jsx'
import TabbedCollection from '../components/TabbedCollection.jsx'
import { allProducts, collectionCategories } from '../data/allProducts.js'

export default function Collection() {
  return (
    <SiteLayout active="collection">
      <section
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80')" }}
      >
        <div className="container">
          <h1 className="reveal-text">Our Collection</h1>
          <p>Every Product, Across All Five Brands, In One Place</p>
        </div>
      </section>

      <section className="collection-page">
        <div className="container">
          <div className="section-head reveal">
            <h2 className="section-title">The full GST Concepts catalogue.</h2>
            <p className="intro-text">
              Browse the complete photographed range from Leadcom, Audia Italia, Scab, and Nitrocare — filtered
              by category so seating, office, tables, lifestyle, and healthcare furniture are easy to compare
              side by side. Looking for Brunonic office systems? See the <Link to="/brunonic">Brunonic collection</Link>.
            </p>
          </div>
          <TabbedCollection categories={collectionCategories} items={allProducts} />
        </div>
      </section>
    </SiteLayout>
  )
}
