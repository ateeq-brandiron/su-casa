import { useState } from 'react'
import faqImg from '../assets/images/image20.png'

function SectionLabel({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#374151" strokeWidth="2"><g clipPath="url(#cfaq)"><path d="M2.5 7.5L10 1.667L17.5 7.5V16.667a1.667 1.667 0 01-1.667 1.666H4.167A1.667 1.667 0 012.5 16.667V7.5z" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.5 18.333V10H12.5V18.333" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="cfaq"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>
      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#374151', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{text}</span>
    </div>
  )
}

const FAQS = [
  { q: 'Do you work with both homeowners and general contractors?', a: null },
  {
    q: 'What areas of Southeast Arizona do you serve?',
    a: 'We serve Sierra Vista, Hereford, and surrounding Cochise County communities. Our crews live and work in this region, giving us firsthand knowledge of the local climate, building codes, and construction standards.\nFrom framing and roofing to exterior painting and custom builds, our team uses proven methods and durable materials suited to the Arizona sun and seasonal monsoons.\nChoosing a general contractor with local roots ensures your project is completed by people who understand the environment and take pride in building within their own community.',
  },
  { q: 'Can you handle both framing and window installation in the same project?', a: null },
  { q: 'How soon can you start my project?', a: null },
]

function FAQItem({ q, a, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen || false)
  return (
    <div>
      <button onClick={() => setOpen(!open)} style={{
        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
        background: open ? '#4B5563' : '#6B7280', border: 'none',
        padding: '20px 24px', cursor: 'pointer', textAlign: 'left',
      }}>
        <span style={{ fontFamily: 'Manrope, sans-serif', fontWeight: open ? 700 : 400, fontSize: 16, color: open ? '#fff' : 'rgba(255,255,255,0.75)', lineHeight: '150%' }}>{q}</span>
        <div style={{ width: 32, height: 32, borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.5)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {open
              ? <polyline points="2,9 7,4 12,9"/>
              : <polyline points="2,5 7,10 12,5"/>}
          </svg>
        </div>
      </button>
      {open && a && (
        <div style={{ background: '#4B5563', padding: '0 24px 20px' }}>
          <p style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(255,255,255,0.8)', fontSize: 14, fontWeight: 400, lineHeight: '160%', whiteSpace: 'pre-line' }}>{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" style={{ background: '#fff' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '100px 75px', display: 'flex', flexDirection: 'column', gap: 60 }}>
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
          <SectionLabel text="Frequently Asked Questions" />
          <h2 style={{ fontFamily: 'Manrope, sans-serif', fontSize: 48, fontWeight: 400, color: '#245079', lineHeight: '130%', maxWidth: 760 }}>
            Frequently Asked Questions About Our Work as General Contractors in Sierra Vista AZ
          </h2>
        </div>

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 96, alignItems: 'start' }}>
          {/* Left: image + contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <img src={faqImg} alt="Construction site" style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }} />
            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 14, color: '#374151' }}>
              Any question? <a href="mailto:support@sucasabuilders.com" style={{ color: '#245079', fontWeight: 600, textDecoration: 'underline' }}>support@sucasabuilders.com</a>
            </p>
          </div>

          {/* Right: accordion */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {FAQS.map((f, i) => <FAQItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 1} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
