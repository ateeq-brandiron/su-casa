import { useState } from 'react'

function SectionLabel({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#6b7280', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{text}</span>
    </div>
  )
}

const FAQS = [
  { q: 'Do you work with both homeowners and general contractors?', a: null },
  {
    q: 'What areas of Southeast Arizona do you serve?',
    a: 'We serve Sierra Vista, Hereford, and surrounding Cochise County communities. Our crews live and work in this region, giving us firsthand knowledge of the local climate, building codes, and construction standards. From framing and roofing to exterior painting and custom builds, our team uses proven methods and durable materials suited to the Arizona sun and seasonal monsoons.',
  },
  { q: 'Why should I hire a contractor with local roots?', a: 'Choosing a general contractor with local roots ensures your project is completed by people who understand the environment and take pride in building within their own community.' },
  { q: 'Can you handle both framing and window installation in the same project?', a: null },
  { q: 'How soon can you start my project?', a: null },
]

function FAQItem({ q, a, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen || false)
  return (
    <div style={{ marginBottom: '0.5rem' }}>
      <button onClick={() => setOpen(!open)} style={{
        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
        background: open ? '#374151' : '#f3f4f6', border: 'none', borderRadius: 6,
        padding: '1rem 1.25rem', cursor: 'pointer', textAlign: 'left', transition: 'background 0.2s'
      }}>
        <span style={{ fontWeight: 500, fontSize: '0.9rem', color: open ? '#fff' : '#111827', lineHeight: 1.5 }}>{q}</span>
        <div style={{ width: 28, height: 28, borderRadius: '50%', border: `1.5px solid ${open ? 'rgba(255,255,255,0.4)' : '#d1d5db'}`, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke={open ? 'white' : '#6b7280'} strokeWidth="2">
            {open ? <><line x1="2" y1="6" x2="10" y2="6"/></> : <><line x1="6" y1="2" x2="6" y2="10"/><line x1="2" y1="6" x2="10" y2="6"/></>}
          </svg>
        </div>
      </button>
      {open && a && (
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderTop: 'none', borderRadius: '0 0 6px 6px', padding: '1rem 1.25rem' }}>
          <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: 1.75 }}>{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section style={{ background: '#fff', padding: '5rem 2rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionLabel text="Frequently Asked Questions" />
        <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 700, color: '#111827', marginBottom: '3rem', maxWidth: 640, lineHeight: 1.3 }}>
          Frequently Asked Questions About Our Work as General Contractors in Sierra Vista AZ
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'start' }}>
          {/* Left image */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ height: 280, borderRadius: 8, overflow: 'hidden', background: 'linear-gradient(160deg, #4a6a5a 0%, #2a4a3a 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem' }}>Project Photo</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#9ca3af' }}>
              Any question? <a href="mailto:support@sucasabuilders.com" style={{ color: '#374151', fontWeight: 500 }}>support@sucasabuilders.com</a>
            </p>
          </div>

          {/* Right accordion */}
          <div>
            {FAQS.map((f, i) => <FAQItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 1} />)}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #faq-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
