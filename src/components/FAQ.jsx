import { useState } from 'react'
import faqImg from '../assets/images/source_20260507_094702.jpg'
import faqHoverImg from '../assets/images/Image box (3).png'
import arrowUp from '../assets/icons/faq-arrow-up.svg'
import arrowDown from '../assets/icons/faq-arrow-down.svg'
import homeIcon from '../assets/icons/faq-home.svg'

function SectionLabel({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <img src={homeIcon} alt="" width="16" height="16" />
      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#374151', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{text}</span>
    </div>
  )
}

const FAQS = [
  {
    q: 'Do you work with both homeowners and general contractors?',
    a: 'Yes. Su Casa Builders works directly with homeowners and also supports general contractors throughout Southeast Arizona.\nMany homeowners contact us when they need a trusted general contractor who can manage their entire project from start to finish.\nAt the same time, we frequently support other licensed contractors who need reliable framing crews, professional painting services, or Pella window sales and installation.\nBecause we understand both management and on-site construction, clients appreciate that we combine clear homeowner communication with the coordination experience general contractors expect to keep projects moving smoothly.',
  },
  {
    q: 'What areas of Southeast Arizona do you serve?',
    a: 'We serve Sierra Vista, Hereford, and surrounding Cochise County communities. Our crews live and work in this region, giving us firsthand knowledge of the local climate, building codes, and construction standards.\nFrom framing and roofing to exterior painting and custom builds, our team uses proven methods and durable materials suited to the Arizona sun and seasonal monsoons.\nChoosing a general contractor with local roots ensures your project is completed by people who understand the environment and take pride in building within their own community.',
  },
  {
    q: 'Can you handle both framing and window installation in the same project?',
    a: 'Yes. Su Casa Builders provides complete general contracting services, which means we can manage multiple parts of your project under one reliable team.\nIf you are building a new home, adding a room, or updating existing structures, we can frame the space, sell and install Pella windows, and complete exterior painting for a polished finish.\nBy keeping all key elements of construction within one coordinated crew, we help save time, reduce scheduling conflicts, and maintain consistent quality from start to finish.',
  },
  {
    q: 'How soon can you start my project?',
    a: 'Our team works to schedule projects as efficiently as possible.\nSmaller jobs, such as exterior painting or window replacement, can often begin quickly, while larger builds, like full home additions or new construction, require planning for permits, materials, and site preparation.\nBefore any work begins, we provide a clear estimate and timeline so you know exactly what to expect.\nOnce on the schedule, you can count on our crews to arrive on time, communicate consistently, and deliver professional results backed by long-term reliability.',
  },
]

function FAQItem({ q, a, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen || false)
  return (
    <div>
      <button onClick={() => setOpen(!open)}
        onMouseEnter={e => { if (!open) e.currentTarget.style.background = '#5B6470' }}
        onMouseLeave={e => { if (!open) e.currentTarget.style.background = '#6B7280' }}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
          background: open ? '#4B5563' : '#6B7280', border: 'none',
          padding: '20px 24px', cursor: 'pointer', textAlign: 'left',
          transition: 'background 0.2s',
        }}>
        <span style={{ fontFamily: 'Manrope, sans-serif', fontWeight: open ? 700 : 400, fontSize: 16, color: open ? '#fff' : 'rgba(255,255,255,0.75)', lineHeight: '150%' }}>{q}</span>
        <div style={{ width: 36, height: 36, borderRadius: '50%', border: '1.5px solid rgba(193,192,192,0.6)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={open ? arrowUp : arrowDown} alt={open ? 'collapse' : 'expand'} width="14" height="18" />
        </div>
      </button>
      {open && a && (
        <div style={{ background: '#4B5563', padding: '0 24px 20px' }}>
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
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
          <SectionLabel text="Frequently Asked Questions" />
          <h2 style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 56, fontWeight: 400, color: '#245079', lineHeight: '130%', margin: 0, width: '100%' }}>
            Frequently Asked Questions About Our Work as General Contractors in Sierra Vista AZ
          </h2>
        </div>

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 96, alignItems: 'start' }}>
          {/* Left: image + contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <FaqImage />
            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 14, color: '#374151', margin: 0 }}>
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
