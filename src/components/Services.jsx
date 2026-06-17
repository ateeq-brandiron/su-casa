import { useState } from 'react'

function SectionLabel({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{text}</span>
    </div>
  )
}

const SERVICES = [
  {
    title: 'General Contracting',
    desc: 'We offer full-service general contracting for spec homes, custom homes, and light commercial construction. Our experienced team manages every phase of the building process to ensure structural integrity, quality materials, and clear communication from start to finish.',
    color: 'linear-gradient(135deg, #5a7a6a, #3a5a4a)',
    items: ['Spec Homes', 'Custom Homes', 'Light Commercial Projects'],
  },
  {
    title: 'Subcontracting',
    desc: 'In addition to general contracting, Su Casa Builders serves as a trusted subcontractor for framing, roofing, and painting projects across Southeast Arizona. Our crews are known for their professionalism, precision, and commitment to high-quality results on every job.',
    color: 'linear-gradient(135deg, #6a7a8a, #4a5a6a)',
    items: ['Framing', 'Roofing', 'Painting'],
  },
  {
    title: 'Special Projects and Products',
    desc: 'At Su Casa Builders, we also take on unique projects that enhance homes and outdoor spaces while maintaining the same level of craftsmanship and care found in our larger builds. These custom features add both functionality and curb appeal, giving homeowners creative ways to improve.',
    color: 'linear-gradient(135deg, #8a7a6a, #6a5a4a)',
    items: ['Screened Porches and Additions', 'Pergolas and Covered Patios', 'Pella Windows'],
  },
]

function AccordionItem({ label }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
      <button onClick={() => setOpen(!open)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.65rem 0', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', textAlign: 'left', gap: '0.5rem' }}>
        <span>{label}</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
          <polyline points="2,4 7,10 12,4"/>
        </svg>
      </button>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" style={{ background: '#2a2d3e', padding: '5rem 2rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionLabel text="Our Services" />
        <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', lineHeight: 1.2 }}>
          Our Services
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: 600, marginBottom: '3rem' }}>
          At Su Casa Builders LLC, we provide dependable construction services across Sierra Vista and Cochise County. Whether we serve as your general contractor or subcontractor, every project reflects our commitment to craftsmanship, honesty, and lasting value.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {SERVICES.map(svc => (
            <div key={svc.title} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, overflow: 'hidden' }}>
              {/* Photo placeholder */}
              <div style={{ height: 180, background: svc.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem' }}>Project Photo</span>
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
            border: '1.5px solid rgba(255,255,255,0.7)', color: '#fff', background: 'transparent',
            padding: '0.8rem 1.75rem', borderRadius: 4, textDecoration: 'none',
            fontWeight: 600, fontSize: '0.9rem', transition: 'all 0.2s'
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}>
            Request Your Construction Estimate
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><line x1="2" y1="7" x2="12" y2="7"/><polyline points="8,3 12,7 8,11"/></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
