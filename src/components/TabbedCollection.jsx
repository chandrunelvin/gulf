import { useMemo, useState } from 'react'
import CollectionGallery from './CollectionGallery.jsx'

/**
 * Category-filtered product gallery: a row of tab pills ("All" + one per
 * category) above a CollectionGallery limited to the active category.
 * `categories`: [{ id, label }] — `items`: [{ category, src, alt, caption }]
 */
export default function TabbedCollection({ categories, items, imgFit }) {
  const [active, setActive] = useState('all')

  const filtered = useMemo(
    () => (active === 'all' ? items : items.filter((it) => it.category === active)),
    [active, items]
  )

  return (
    <div className="tabbed-collection">
      <div className="collection-tabs" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={active === 'all'}
          className={`collection-tab${active === 'all' ? ' active' : ''}`}
          onClick={() => setActive('all')}
        >
          All Products <span className="collection-tab-count">{items.length}</span>
        </button>
        {categories.map((cat) => {
          const count = items.filter((it) => it.category === cat.id).length
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={active === cat.id}
              className={`collection-tab${active === cat.id ? ' active' : ''}`}
              onClick={() => setActive(cat.id)}
            >
              {cat.label} <span className="collection-tab-count">{count}</span>
            </button>
          )
        })}
      </div>

      <CollectionGallery key={active} items={filtered} reveal={false} imgFit={imgFit} />
    </div>
  )
}
