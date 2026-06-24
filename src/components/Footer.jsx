import { useState } from 'react'
import logo from '../assets/icons/Logo.svg'

const year = new Date().getFullYear()

function FooterLink({ href, children }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ fontFamily: 'Manrope, sans-serif', color: hovered ? '#245079' : '#3C3C3C', textDecoration: 'none', fontSize: 18, fontWeight: 400, lineHeight: '140%', transition: 'color 0.2s' }}
    >
      {children}
    </a>
  )
}

const SERVICE_LINKS = [
  { label: 'Custom Home Design', href: '#services' },
  { label: 'Home Construction', href: '#services' },
  { label: 'Renovations and Additions', href: '#services' },
  { label: 'Kitchen Remodeling', href: '#services' },
]

const PROJECT_LINKS = [
  { label: 'Custom Homes', href: '#projects' },
  { label: 'Renovations', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const AREAS = ['Sierra Vista', 'Hereford', 'Tombstone', 'Huachuca City', 'Cochise County']

export default function Footer() {
  return (
    <footer style={{ background: '#EDE5D0', fontFamily: 'Manrope, sans-serif' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '75px 75px 25px 75px', gap: 10 }}>
        {/* Top grid */}
        <div style={{ display: 'flex', gap: 0, alignItems: 'flex-start', width: '100%', marginBottom: '3rem' }}>
          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: 340, flexShrink: 0 }}>
            <img src={logo} alt="Su Casa Builders" style={{ height: 60, width: 'auto', objectFit: 'contain', objectPosition: 'left' }} />
            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 18, fontWeight: 400, lineHeight: '140%', color: '#3C3C3C', alignSelf: 'stretch' }}>
              Quality construction services rooted in integrity and craftsmanship. Serving our community one project at a time.
            </p>
          </div>

          {/* Gap between brand and first services block */}
          <div style={{ width: 131, flexShrink: 0 }} />

          {/* Services */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h4 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 25, color: '#000', lineHeight: '130%', margin: 0 }}>Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, margin: 0, padding: 0 }}>
              {SERVICE_LINKS.map(s => (
                <li key={s.label}><FooterLink href={s.href}>{s.label}</FooterLink></li>
              ))}
            </ul>
          </div>

          <div style={{ width: 41, flexShrink: 0 }} />

          {/* Projects */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h4 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 25, color: '#000', lineHeight: '130%', margin: 0 }}>Projects</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, margin: 0, padding: 0 }}>
              {PROJECT_LINKS.map(p => (
                <li key={p.label}><FooterLink href={p.href}>{p.label}</FooterLink></li>
              ))}
            </ul>
          </div>

          <div style={{ width: 41, flexShrink: 0 }} />

          {/* Service Areas */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h4 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 25, color: '#000', lineHeight: '130%', margin: 0 }}>Service Areas</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, margin: 0, padding: 0 }}>
              {AREAS.map(a => (
                <li key={a}><span style={{ fontFamily: 'Manrope, sans-serif', color: '#3C3C3C', fontSize: 18, fontWeight: 400, lineHeight: '140%' }}>{a}</span></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.15)', paddingTop: 24, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
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
