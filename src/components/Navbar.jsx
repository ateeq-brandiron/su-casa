import { useState, useEffect } from 'react'
import logoSrc from '../assets/icons/Logo.svg'

const LINKS = [
  { label: 'Home',     href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, insetInline: 0, zIndex: 100,
      background: scrolled ? '#fff' : 'transparent',
      boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.10)' : 'none',
      transition: 'background 0.3s, box-shadow 0.3s',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img src={logoSrc} alt="Su Casa Builders" style={{ height: 38, width: 'auto', filter: scrolled ? 'none' : 'brightness(0) invert(1)' }} />
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '2.25rem', alignItems: 'center' }} className="hidden-mobile">
          {LINKS.map(l => (
            <a key={l.href} href={l.href} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 500, color: scrolled ? '#374151' : 'rgba(255,255,255,0.9)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = scrolled ? '#111827' : '#fff'}
              onMouseLeave={e => e.target.style.color = scrolled ? '#374151' : 'rgba(255,255,255,0.9)'}>
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8 }} className="show-mobile">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke={scrolled ? '#374151' : 'white'} strokeWidth="2">
            {open ? <><line x1="3" y1="3" x2="19" y2="19"/><line x1="19" y1="3" x2="3" y2="19"/></> : <><line x1="2" y1="5" x2="20" y2="5"/><line x1="2" y1="11" x2="20" y2="11"/><line x1="2" y1="17" x2="20" y2="17"/></>}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: '#fff', borderTop: '1px solid #e5e7eb', padding: '1rem 2rem 1.5rem' }}>
          {LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: 'block', padding: '0.65rem 0', fontSize: '0.95rem', fontWeight: 500, color: '#374151', textDecoration: 'none', borderBottom: '1px solid #f3f4f6' }}>
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
