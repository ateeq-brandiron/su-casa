import { useState } from 'react'
import SectionLabel from './SectionLabel'
import { STEPS } from '../data/process'
import processBg from '../assets/images/process/process-bg.png'
import processTop from '../assets/images/process/sketch-top-right.png'
import processBottom from '../assets/images/process/cityscape-bottom-left.png'

function StepCard({ step }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#245079' : 'transparent',
        border: '1px solid #245079',
        padding: '28px 24px',
        display: 'flex', flexDirection: 'column', gap: 12,
        transition: 'background 0.25s',
        cursor: 'default',
      }}
    >
      <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 11, fontWeight: 700, color: hovered ? 'rgba(255,255,255,0.6)' : '#6b7280', letterSpacing: '0.15em', textTransform: 'uppercase', margin: 0, transition: 'color 0.25s' }}>{step.num}</p>
      <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 22, color: hovered ? '#fff' : '#111827', lineHeight: '130%', margin: 0, transition: 'color 0.25s' }}>{step.title}</h3>
      <p style={{ fontFamily: 'Manrope, sans-serif', color: hovered ? 'rgba(255,255,255,0.8)' : '#3C3C3C', fontSize: 14, fontWeight: 400, lineHeight: '160%', margin: 0, transition: 'color 0.25s' }}>{step.desc}</p>
    </div>
  )
}

export default function Process() {
  return (
    <section id="process" style={{ position: 'relative', overflow: 'hidden' }}>
      <img src={processBg} alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <img src={processTop} alt="" aria-hidden="true" style={{ position: 'absolute', top: 0, right: 0, width: '38%', height: 'auto', opacity: 0.55, pointerEvents: 'none', userSelect: 'none' }} />
      <img src={processBottom} alt="" aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: 0, width: '42%', height: 'auto', opacity: 0.55, pointerEvents: 'none', userSelect: 'none' }} />

      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '100px 75px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0, marginBottom: 60 }}>
          <SectionLabel text="Our Process" />
          <h2 style={{ fontFamily: 'Manrope, sans-serif', fontSize: 48, fontWeight: 400, color: '#245079', lineHeight: '130%', margin: '4px 0 16px' }}>
            Our Process
          </h2>
          <p style={{ fontFamily: 'Manrope, sans-serif', color: '#3C3C3C', fontSize: 20, fontWeight: 400, lineHeight: '140%', margin: 0 }}>
            Building or improving your home should feel straightforward, not stressful. At Su Casa Builders, we keep the process simple, transparent, and focused on your goals from start to finish.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 48 }}>
          {STEPS.map(step => <StepCard key={step.slug} step={step} />)}
        </div>

        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', alignItems: 'center' }}>
          <div style={{ position: 'absolute', top: '50%', left: '12.5%', right: '12.5%', borderTop: '2px dashed rgba(36,80,121,0.4)', transform: 'translateY(-50%)' }} />
          {STEPS.map(step => (
            <div key={step.slug} style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                position: 'relative', zIndex: 1,
                width: 60, height: 60, borderRadius: '50%',
                border: '2px solid #245079',
                background: 'rgba(255,255,255,0.85)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="20" height="20" viewBox="0 0 18 18" fill="none" stroke="#245079" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="9" x2="15" y2="9"/><polyline points="10,4 15,9 10,14"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #process > div > div:nth-child(2) { grid-template-columns: 1fr !important; }
          #process > div > div:nth-child(3) { display: none !important; }
          #process > div { padding: 60px 24px !important; }
        }
      `}</style>
    </section>
  )
}
