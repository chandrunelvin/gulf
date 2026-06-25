import SiteLayout from '../components/SiteLayout.jsx'
import CollectionGallery from '../components/CollectionGallery.jsx'

const items = [
  { src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=500&q=80', alt: 'Executive Desks', caption: 'Executive Desks' },
  { src: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&w=500&q=80', alt: 'Ergonomic Chairs', caption: 'Ergonomic Seating' },
  { src: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=500&q=80', alt: 'Meeting Tables', caption: 'Meeting Tables' },
  { src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=500&q=80', alt: 'Collaborative Spaces', caption: 'Collaborative Hubs' },
  { src: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=500&q=80', alt: 'Reception Areas', caption: 'Reception Areas' },
  { src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=500&q=80', alt: 'Storage Solutions', caption: 'Storage Systems' },
  { src: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=500&q=80', alt: 'Workstations', caption: 'Workstations' },
  { src: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=500&q=80', alt: 'Lounge Furniture', caption: 'Lounge Areas' },
]

export default function Collection() {
  return (
    <SiteLayout active="collection">
      <section
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80')" }}
      >
        <div className="container">
          <h1 className="reveal-text">Our Collection</h1>
          <p>Sophisticated Solutions for Modern Workspaces</p>
        </div>
      </section>

      <section className="collection-page">
        <div className="container">
          <div className="section-head reveal">
            <h2 className="section-title">Furniture for every space.</h2>
            <p className="intro-text">Explore the GST Concepts collection across workspaces, hospitality seating, reception areas, collaborative hubs, and refined lounge environments curated for Oman and the wider Gulf.</p>
          </div>
          <CollectionGallery items={items} />
        </div>
      </section>
    </SiteLayout>
  )
}
