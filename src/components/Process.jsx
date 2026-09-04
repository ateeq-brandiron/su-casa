import { useState } from 'react'
import processBg from '../assets/images/Process.png'
import processTop from '../assets/images/image 19.png'
import processBottom from '../assets/images/image 20.png'

function SectionLabel({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#374151" strokeWidth="2"><g clipPath="url(#cp)"><path d="M2.5 7.5L10 1.667L17.5 7.5V16.667a1.667 1.667 0 01-1.667 1.666H4.167A1.667 1.667 0 012.5 16.667V7.5z" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.5 18.333V10H12.5V18.333" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="cp"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>
      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#374151', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{text}</span>
    </div>
  )
}

const STEPS = [
  {
    num: 'STEP 1',
    title: 'Schedule a Visit',
    desc: 'Every project begins with a conversation. We visit your property, listen to your ideas, and review the site together. This step is about understanding your vision and how we can bring it to life.',
  },
  {
    num: 'STEP 2',
    title: 'Get a Clear Estimate',
    desc: 'We provide an easy-to-understand estimate that outlines the scope of work and materials. Everything is discussed up front, so you know what to expect before we begin.',
  },
  {
    num: 'STEP 3',
    title: 'Confirm and Schedule',
    desc: 'Once the plan is approved, we set the schedule and assign your crew. You can trust that our team will be prepared, punctual, and ready to get to work.',
  },
  {
    num: 'STEP 4',
    title: 'Construction and Communication',
    desc: 'Our experienced crews arrive on time, work efficiently, and keep you informed throughout the build. We respect your property and maintain a clean, safe jobsite until the project is complete.',
  },
]

function StepCard({ step }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#245079' : 'transparent',
        border: '1px solid #245079',
        padding: '24px 20px',
        display: 'flex', flexDirection: 'column', gap: 16,
        transition: 'background 0.25s',
        cursor: 'default',
      }}
    >
      <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 11, fontWeight: 700, color: hovered ? 'rgba(255,255,255,0.6)' : '#6b7280', letterSpacing: '0.15em', textTransform: 'uppercase', transition: 'color 0.25s' }}>{step.num}</p>
      <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 20, color: hovered ? '#fff' : '#111827', lineHeight: '130%', transition: 'color 0.25s' }}>{step.title}</h3>
      <p style={{ fontFamily: 'Manrope, sans-serif', color: hovered ? 'rgba(255,255,255,0.8)' : '#3C3C3C', fontSize: 14, fontWeight: 400, lineHeight: '160%', transition: 'color 0.25s' }}>{step.desc}</p>
    </div>
  )
}

export default function Process() {
  return (
    <section id="process" style={{ position: 'relative', overflow: 'hidden' }}>
      <img src={processBg} alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      {/* Top-right architectural sketch */}
      <img src={processTop} alt="" aria-hidden="true" style={{ position: 'absolute', top: 0, right: 0, height: '45%', width: 'auto', pointerEvents: 'none', userSelect: 'none' }} />
      {/* Bottom cityscape */}
      <img src={processBottom} alt="" aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%', height: 'auto', pointerEvents: 'none', userSelect: 'none' }} />

      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '100px 75px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20, marginBottom: 60 }}>
          <SectionLabel text="Our Process" />
          <h2 style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 48, fontWeight: 400, color: '#111827', lineHeight: '130%' }}>
            Our Process
          </h2>
          <p style={{ fontFamily: 'Manrope, sans-serif', color: '#3C3C3C', fontSize: 20, fontWeight: 400, lineHeight: '140%' }}>
            Building or improving your home should feel straightforward, not stressful. At Su Casa Builders, we keep the process simple, transparent, and focused on your goals from start to finish.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 32 }}>
          {STEPS.map(step => <StepCard key={step.num} step={step} />)}
        </div>

        {/* Arrow connector row */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, borderTop: '2px dashed rgba(36,80,121,0.4)', transform: 'translateY(-50%)' }} />
          {STEPS.map((step, i) => (
            <div key={i} style={{
              position: 'relative', zIndex: 1,
              width: 52, height: 52, borderRadius: '50%',
              border: '2px solid #245079',
              background: 'rgba(255,255,255,0.85)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#245079" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="9" x2="15" y2="9"/><polyline points="10,4 15,9 10,14"/>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
