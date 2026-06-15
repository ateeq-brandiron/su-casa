import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      backgroundColor: '#ffffff',
      boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.08)' : 'none',
      borderBottom: '1px solid #e5e7eb',
      transition: 'box-shadow 0.3s'
    }}>
      <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px'}}>
        <a href="#" style={{display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none'}}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14 4L2 14h4v10h6v-6h4v6h6V14h4L14 4z" fill="#2d6a9f"/>
          </svg>
          <span style={{fontWeight: 700, fontSize: '1.1rem', color: '#1f2937'}}>Su Casa Builders</span>
        </a>
        <div style={{display: 'flex', alignItems: 'center', gap: '2rem'}}>
          <div style={{display: 'flex', gap: '1.5rem', listStyle: 'none'}}>
            {['Services','About Us','Projects','Contact'].map(link => (
              <a key={link} href={`#${link.toLowerCase().replace(' ','-')}`} style={{color: '#374151', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem', transition: 'color 0.2s'}}
                onMouseEnter={e => e.target.style.color='#2d6a9f'}
                onMouseLeave={e => e.target.style.color='#374151'}>
                {link}
              </a>
            ))}
          </div>
          <a href="#contact" style={{
            backgroundColor: '#2d6a9f', color: '#ffffff', padding: '0.6rem 1.4rem',
            borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem',
            transition: 'background-color 0.2s'
          }}
            onMouseEnter={e => e.target.style.backgroundColor='#245a8a'}
            onMouseLeave={e => e.target.style.backgroundColor='#2d6a9f'}>
            Get a Free Quote
          </a>
        </div>
      </div>
    </nav>
  )
}
