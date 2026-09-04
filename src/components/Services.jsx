import { useState } from 'react'
import SectionLabel from './SectionLabel'
import { SERVICES } from '../data/services'
import frame1 from '../assets/images/service-card-1.png'
import frame1b from '../assets/images/service-card-2.png'
import frame1c from '../assets/images/service-card-3.png'
import service1 from '../assets/images/service1.jpg'
import service2 from '../assets/images/service2.jpg'
import service3 from '../assets/images/service3.jpg'
import patternImg from '../assets/images/pattern-services.png'

const SERVICE_IMAGES = {
  'general-contracting': { img: frame1,  hoverImg: service1 },
  'subcontracting':      { img: frame1b, hoverImg: service2 },
  'special-projects':    { img: frame1c, hoverImg: service3 },
}

function CircleArrow() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <circle cx="10" cy="10" r="8.5"/>
      <line x1="6.5" y1="10" x2="13.5" y2="10"/>
      <polyline points="10.5,7 13.5,10 10.5,13"/>
    </svg>
  )
}

function AccordionItem({ label, detail }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', padding: '0.7rem 0',
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'rgba(255,255,255,0.85)', fontFamily: 'Manrope, sans-serif',
          fontSize: 16, textAlign: 'left', gap: '0.75rem',
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
      {open && detail && (
        <p style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: '160%', paddingBottom: '0.75rem', margin: 0 }}>
          {detail}
        </p>
      )}
    </div>
  )
}

function ServiceCard({ svc }) {
  const [hovered, setHovered] = useState(false)
  const imgs = SERVICE_IMAGES[svc.slug]
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.05)',
        border: `1px solid ${hovered ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.10)'}`,
        borderRadius: 8, overflow: 'hidden',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.25s ease',
        display: 'flex', flexDirection: 'column',
        height: '100%', boxSizing: 'border-box',
        padding: '16px',
      }}
    >
      <div style={{ height: 200, overflow: 'hidden', position: 'relative', borderRadius: 6, marginBottom: '1.25rem', flexShrink: 0 }}>
        <img src={imgs.img} alt={svc.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: hovered ? 0 : 1, transition: 'opacity 0.5s ease' }} />
        <img src={imgs.hoverImg} alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: hovered ? 1 : 0, transition: 'opacity 0.5s ease' }} />
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 20, color: '#fff', marginBottom: '0.75rem', lineHeight: '130%' }}>{svc.title}</h3>
        <p style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(255,255,255,0.65)', fontSize: 16, lineHeight: '140%', marginBottom: '1rem' }}>{svc.desc}</p>
        <p style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: '140%', marginBottom: '0.5rem' }}>{svc.intro}</p>
        <div>
          {svc.items.map(item => <AccordionItem key={item.label} label={item.label} detail={item.detail} />)}
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" style={{ position: 'relative', background: '#2a2d3e', overflow: 'hidden' }}>
      <img
        src={patternImg} alt="" aria-hidden="true"
        style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', height: '120%', width: 'auto', opacity: 0.18, pointerEvents: 'none', userSelect: 'none' }}
      />
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '100px 75px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20, marginBottom: '3rem' }}>
          <SectionLabel text="Our Services" color="rgba(255,255,255,0.7)" />
          <h2 style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 48, fontWeight: 400, color: '#fff', lineHeight: '130%', margin: 0 }}>
            Our Services
          </h2>
          <p style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(255,255,255,0.75)', fontSize: 20, fontWeight: 400, lineHeight: '140%', maxWidth: 800, margin: 0 }}>
            At Su Casa Builders LLC, we provide dependable construction services across Sierra Vista and Cochise County. Whether we serve as your general contractor or subcontractor, every project reflects our commitment to craftsmanship, honesty, and lasting value.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: '4rem' }}>
          {SERVICES.map(svc => <ServiceCard key={svc.slug} svc={svc} />)}
        </div>

        <div style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(255,255,255,0.55)', fontSize: 16, fontStyle: 'italic', marginBottom: '1.5rem' }}>
            Every project, no matter the size, is managed with the same attention to detail and commitment to long-term quality that defines our work.
          </p>
          <a href="#contact"
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 16,
              background: 'transparent', color: '#245079',
              height: 66, padding: '20px 30px',
              textDecoration: 'none',
              fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: 16,
              border: '1.5px solid #245079',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#245079'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#245079' }}>
            Request Your Construction Estimate
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="2" y1="8" x2="14" y2="8"/><polyline points="10,4 14,8 10,12"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
