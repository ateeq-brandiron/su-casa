const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer style={{ background: '#1c1f2e', color: '#9ca3af', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '4rem 2rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: '"Dancing Script", cursive', fontSize: '1.8rem', fontWeight: 700, color: '#fff', lineHeight: 1, marginBottom: '0.25rem' }}>
              Su Casa Builders
            </div>
            <p style={{ fontSize: '0.75rem', letterSpacing: '0.12em', color: '#6b7280', textTransform: 'uppercase', marginBottom: '1rem' }}>Inc.</p>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.75, color: '#6b7280', maxWidth: 220 }}>
              Quality construction services rooted in integrity and craftsmanship. Serving our community one project at a time.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 600, fontSize: '0.85rem', marginBottom: '1.25rem' }}>Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {['Custom Home Design', 'Home Construction', 'Renovations and Additions'].map(s => (
                <li key={s}><a href="#services" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#d1d5db'}
                  onMouseLeave={e => e.target.style.color = '#6b7280'}>{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 600, fontSize: '0.85rem', marginBottom: '1.25rem' }}>Projects</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {['Custom Homes', 'Renovations', 'Testimonials', 'Contact'].map(s => (
                <li key={s}><a href="#projects" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#d1d5db'}
                  onMouseLeave={e => e.target.style.color = '#6b7280'}>{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 600, fontSize: '0.85rem', marginBottom: '1.25rem' }}>Service Areas</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {['Sierra Vista', 'Hereford', 'Tombstone', 'Huachuca City', 'Cochise County'].map(s => (
                <li key={s}><span style={{ color: '#6b7280', fontSize: '0.85rem' }}>{s}</span></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid #2d3148', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '0.75rem' }}>
          <p style={{ fontSize: '0.8rem', color: '#4b5563' }}>© {year} Su Casa Builders. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Service'].map(l => (
              <a key={l} href="#" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '0.8rem' }}
                onMouseEnter={e => e.target.style.color = '#9ca3af'}
                onMouseLeave={e => e.target.style.color = '#4b5563'}>{l}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-of-type { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          footer > div > div:first-of-type { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
