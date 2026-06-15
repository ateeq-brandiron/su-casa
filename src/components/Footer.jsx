const year = new Date().getFullYear()

const COLS = [
  {
    heading: 'Services',
    links: ['General Contracting', 'Custom Home Construction', 'Renovations & Remodels', 'Commercial Projects', 'Special Projects'],
  },
  {
    heading: 'Service Areas',
    links: ['Sierra Vista, AZ', 'Bisbee, AZ', 'Huachuca City, AZ', 'Tombstone, AZ', 'Sonoita, AZ'],
  },
  {
    heading: 'Company',
    links: ['About Us', 'Our Projects', 'Testimonials', 'FAQ', 'Contact'],
  },
]

export default function Footer() {
  return (
    <footer style={{backgroundColor: '#1e2433', color: '#9ca3af', fontFamily: 'Inter, system-ui, sans-serif'}}>
      <div style={{maxWidth: '1280px', margin: '0 auto', padding: '4rem 2rem 2rem'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem'}}>
          {/* Brand */}
          <div>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem'}}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 4L2 14h4v10h6v-6h4v6h6V14h4L14 4z" fill="#2d6a9f"/>
              </svg>
              <span style={{fontWeight: 700, fontSize: '1.05rem', color: '#ffffff'}}>Su Casa Builders</span>
            </div>
            <p style={{fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1.25rem'}}>
              Veteran-owned general contractor serving Sierra Vista, AZ and Cochise County since 2015.
              Quality construction with honesty and integrity.
            </p>
            <p style={{fontSize: '0.85rem'}}>
              <span style={{color: '#4a9aba', fontWeight: 600}}>Phone: </span>
              (520) 555-0192
            </p>
            <p style={{fontSize: '0.85rem', marginTop: '0.35rem'}}>
              <span style={{color: '#4a9aba', fontWeight: 600}}>Email: </span>
              info@sucasabuilders.com
            </p>
          </div>

          {/* Link columns */}
          {COLS.map(col => (
            <div key={col.heading}>
              <h4 style={{color: '#ffffff', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.25rem'}}>
                {col.heading}
              </h4>
              <ul style={{listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem'}}>
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" style={{color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s'}}
                      onMouseEnter={e => e.target.style.color='#4a9aba'}
                      onMouseLeave={e => e.target.style.color='#9ca3af'}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{borderTop: '1px solid #374151', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '1rem'}}>
          <p style={{fontSize: '0.8rem'}}>© {year} Su Casa Builders LLC. All rights reserved.</p>
          <p style={{fontSize: '0.8rem'}}>AZ Contractor License · Fully Insured · Veteran-Owned</p>
        </div>
      </div>
    </footer>
  )
}
