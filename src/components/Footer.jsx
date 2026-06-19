import logo from '../assets/icons/Logo.svg'

const year = new Date().getFullYear()

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const SERVICE_LINKS = [
  'Custom Home Design',
  'Home Construction',
  'Renovations and Additions',
  'Roofing & Framing',
  'Window Installation',
]

const AREAS = ['Sierra Vista', 'Hereford', 'Tombstone', 'Huachuca City', 'Cochise County']

export default function Footer() {
  return (
    <footer style={{ background: '#EDE5D0', fontFamily: 'Manrope, sans-serif' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '80px 75px 40px' }}>
        {/* Top grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <img src={logo} alt="Su Casa Builders" style={{ height: 60, width: 'auto', objectFit: 'contain', objectPosition: 'left' }} />
            <p style={{ fontSize: 14, lineHeight: '160%', color: '#374151', maxWidth: 240 }}>
              Quality construction services rooted in integrity and craftsmanship. Serving our community one project at a time.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: 16, color: '#111827', marginBottom: 20 }}>Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {NAV_LINKS.map(l => (
                <li key={l.label}><a href={l.href} style={{ color: '#374151', textDecoration: 'none', fontSize: 14 }}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: 16, color: '#111827', marginBottom: 20 }}>Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {SERVICE_LINKS.map(s => (
                <li key={s}><a href="#services" style={{ color: '#374151', textDecoration: 'none', fontSize: 14 }}>{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: 16, color: '#111827', marginBottom: 20 }}>Service Areas</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {AREAS.map(a => (
                <li key={a}><span style={{ color: '#374151', fontSize: 14 }}>{a}</span></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.15)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 13, color: '#6b7280' }}>© {year} Su Casa Builders. All rights reserved.</p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Service'].map(l => (
              <a key={l} href="#" style={{ color: '#6b7280', textDecoration: 'none', fontSize: 13 }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
