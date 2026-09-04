import { useState } from 'react'
import SectionLabel from './SectionLabel'
import { FAQS } from '../data/faqs'
import faqImg from '../assets/images/faq/faq-default.png'
import faqHoverImg from '../assets/images/faq/faq-hover.png'
import arrowUp from '../assets/icons/faq-arrow-up.svg'
import arrowDown from '../assets/icons/faq-arrow-down.svg'

function FAQItem({ q, a, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen || false)
  return (
    <div>
      <button onClick={() => setOpen(!open)}
        onMouseEnter={e => { if (!open) e.currentTarget.style.background = '#616161' }}
        onMouseLeave={e => { if (!open) e.currentTarget.style.background = '#737373' }}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
          background: open ? '#3C3C3C' : '#737373', border: 'none',
          padding: '20px 24px', cursor: 'pointer', textAlign: 'left',
          transition: 'background 0.2s',
        }}>
        <span style={{ fontFamily: 'Manrope, sans-serif', fontWeight: open ? 700 : 400, fontSize: 16, color: open ? '#fff' : 'rgba(255,255,255,0.75)', lineHeight: '150%' }}>{q}</span>
        <div style={{ width: 36, height: 36, borderRadius: '50%', border: '1.5px solid rgba(193,192,192,0.6)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={open ? arrowUp : arrowDown} alt={open ? 'collapse' : 'expand'} width="14" height="18" />
        </div>
      </button>
      {open && a && (
        <div style={{ background: '#3C3C3C', padding: '0 24px 20px' }}>
          <p style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(255,255,255,0.8)', fontSize: 14, fontWeight: 400, lineHeight: '160%', whiteSpace: 'pre-line', margin: 0 }}>{a}</p>
        </div>
      )}
    </div>
  )
}

function FaqImage() {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative', width: '100%', aspectRatio: '3/4', overflow: 'hidden' }}
    >
      <img src={faqImg} alt="Construction site" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center',
        opacity: hovered ? 0 : 1, transition: 'opacity 0.5s ease',
      }} />
      <img src={faqHoverImg} alt="" aria-hidden="true" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center',
        opacity: hovered ? 1 : 0, transition: 'opacity 0.5s ease',
      }} />
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" style={{ background: '#fff' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '100px 75px', display: 'flex', flexDirection: 'column', gap: 60 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
          <SectionLabel text="Frequently Asked Questions" />
          <h2 style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 56, fontWeight: 400, color: '#245079', lineHeight: '130%', margin: 0, width: '100%' }}>
            Frequently Asked Questions About Our Work as General Contractors in Sierra Vista AZ
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 96, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <FaqImage />
            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 14, color: '#374151', margin: 0 }}>
              Any question? <a href="mailto:support@sucasabuilders.com" style={{ color: '#245079', fontWeight: 600, textDecoration: 'underline' }}>support@sucasabuilders.com</a>
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {FAQS.map((f, i) => <FAQItem key={f.slug} q={f.q} a={f.a} defaultOpen={i === 1} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
