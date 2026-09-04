import { useState } from 'react'
import ctaBg from '../assets/images/CTA.png'
import ctaHover from '../assets/images/CTA (1).png'

export default function CTA() {
  const [hovered, setHovered] = useState(false)

  return (
    <section
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative', overflow: 'hidden', minHeight: 400 }}
    >
      {/* Base image */}
      <img src={ctaBg} alt="" aria-hidden="true" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
        opacity: hovered ? 0 : 1, transition: 'opacity 0.5s ease',
      }} />
      {/* Hover image */}
      <img src={ctaHover} alt="" aria-hidden="true" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
        opacity: hovered ? 1 : 0, transition: 'opacity 0.5s ease',
      }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.52)' }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1440, margin: '0 auto', padding: '100px 75px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32, textAlign: 'center' }}>
        <h2 style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 56, fontWeight: 400, color: '#fff', lineHeight: '130%', maxWidth: 860, margin: 0 }}>
          Let's bring your vision to life with skill, quality, and integrity.
        </h2>
        <p style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(255,255,255,0.85)', fontSize: 20, fontWeight: 400, lineHeight: '140%', maxWidth: 640, margin: 0 }}>
          Your home deserves a builder who values craftsmanship and clear communication.
        </p>
        <a href="#contact"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 16,
            background: '#fff', color: '#245079', border: 'none',
            height: 66, padding: '20px 30px', textDecoration: 'none',
            fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: 16,
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#245079'; e.currentTarget.style.color = '#fff' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#245079' }}
        >
          Contact Su Casa Builders Today
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="2" y1="8" x2="14" y2="8"/><polyline points="9,3 14,8 9,13"/></svg>
        </a>
      </div>
    </section>
  )
}
