import { useState } from 'react'
import frame1 from '../assets/images/Frame1.png'
import frame1b from '../assets/images/Frame1-1.png'
import frame1c from '../assets/images/Frame1-2.png'
import patternImg from '../assets/images/abstract-architectural-backgroundtechnological-designgeometric-vector-illustration_531521-651 2.png'

function SectionLabel({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2">
        <g clipPath="url(#cs)">
          <path d="M2.5 7.5L10 1.667L17.5 7.5V16.667a1.667 1.667 0 01-1.667 1.666H4.167A1.667 1.667 0 012.5 16.667V7.5z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.5 18.333V10H12.5V18.333" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs><clipPath id="cs"><rect width="20" height="20" fill="white"/></clipPath></defs>
      </svg>
      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{text}</span>
    </div>
  )
}

/* Circle-arrow icon matching Figma */
function CircleArrow() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <circle cx="10" cy="10" r="8.5"/>
      <line x1="6.5" y1="10" x2="13.5" y2="10"/>
      <polyline points="10.5,7 13.5,10 10.5,13"/>
    </svg>
  )
}

const SERVICES = [
  {
    title: 'General Contracting',
    desc: 'We offer full-service general contracting for spec homes, custom homes, and light commercial construction. Our experienced team manages every phase of the building process to ensure structural integrity, quality materials, and clear communication from start to finish.',
    img: frame1,
    items: ['Spec Homes', 'Custom Homes', 'Light Commercial Projects'],
  },
  {
    title: 'Subcontracting',
    desc: 'In addition to general contracting, Su Casa Builders serves as a trusted subcontractor for framing, roofing, and painting projects across Southeast Arizona. Our crews are known for their professionalism, precision, and commitment to high-quality results on every job.',
    img: frame1b,
    items: ['Framing', 'Roofing', 'Painting'],
  },
  {
    title: 'Special Projects and Products',
    desc: 'At Su Casa Builders, we also take on unique projects that enhance homes and outdoor spaces while maintaining the same level of craftsmanship and care found in our larger builds. These custom features add both functionality and curb appeal, giving homeowners creative ways to improve.',
    img: frame1c,
    items: ['Screened Porches and Additions', 'Pergolas and Covered Patios', 'Pella Windows'],
  },
]

function AccordionItem({ label }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', padding: '0.7rem 0',
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'rgba(255,255,255,0.85)', fontSize: '0.875rem', textAlign: 'left', gap: '0.75rem',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <CircleArrow />
          {label}
        </span>
        <svg
          width="14" height="14" viewBox="0 0 14 14" fill="none"
          stroke="rgba(255,255,255,0.6)" strokeWidth="2"
          style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
        >
          <polyline points="2,4 7,10 12,4"/>
        </svg>
      </button>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" style={{ position: 'relative', background: '#2a2d3e', padding: '5rem 2rem', overflow: 'hidden' }}>
      {/* Geometric pattern — right side */}
      <img
        src={patternImg}
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute', right: 0, top: '50%',
          transform: 'translateY(-50%)',
          height: '120%', width: 'auto',
          opacity: 0.18, pointerEvents: 'none', userSelect: 'none',
        }}
      />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <SectionLabel text="Our Services" />
        <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', lineHeight: 1.2 }}>
          Our Services
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: 620, marginBottom: '3rem' }}>
          At Su Casa Builders LLC, we provide dependable construction services across Sierra Vista and Cochise County. Whether we serve as your general contractor or subcontractor, every project reflects our commitment to craftsmanship, honesty, and lasting value.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {SERVICES.map(svc => (
            <div key={svc.title} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 8, overflow: 'hidden' }}>
              <div style={{ height: 200, overflow: 'hidden' }}>
                <img src={svc.img} alt={svc.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#fff', marginBottom: '0.75rem' }}>{svc.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem', lineHeight: 1.7, marginBottom: '1rem' }}>{svc.desc}</p>
                <div>
                  {svc.items.map(item => <AccordionItem key={item} label={item} />)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>
            Every project, no matter the size, is managed with the same attention to detail and commitment to long-term quality that defines our work.
          </p>
          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            border: '1.5px solid rgba(255,255,255,0.6)', color: '#fff', background: 'transparent',
            padding: '0.8rem 2rem', borderRadius: 4, textDecoration: 'none',
            fontWeight: 600, fontSize: '0.9rem', transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.10)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}>
            Request Your Construction Estimate
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="2" y1="7" x2="12" y2="7"/><polyline points="8,3 12,7 8,11"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
