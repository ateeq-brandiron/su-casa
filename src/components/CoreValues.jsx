import { useState } from 'react'
import SectionLabel from './SectionLabel'
import { VALUES } from '../data/core-values'
import frame2 from '../assets/images/core-values/core-values-default.webp'
import frame2Hover from '../assets/images/core-values/core-values-hover.webp'

function ValueCard({ v }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, paddingLeft: 12 }}>
      <h4 style={{
        fontFamily: 'Manrope, sans-serif',
        fontWeight: 700, fontSize: 22, lineHeight: '140%',
        color: '#000', margin: 0,
      }}>{v.title}</h4>
      <p style={{
        fontFamily: 'Manrope, sans-serif',
        color: '#3C3C3C', fontSize: 16, fontWeight: 400, lineHeight: '140%', margin: 0,
      }}>{v.desc}</p>
    </div>
  )
}

function CoreImage() {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ flex: '0 0 480px', alignSelf: 'stretch', overflow: 'hidden', position: 'relative', border: '2px solid #245079' }}
    >
      <img src={frame2} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50%', opacity: hovered ? 0 : 1, transition: 'opacity 0.5s ease' }} />
      <img src={frame2Hover} alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50%', opacity: hovered ? 1 : 0, transition: 'opacity 0.5s ease' }} />
    </div>
  )
}

export default function CoreValues() {
  return (
    <section id="core-values" style={{ background: '#fff' }}>
      <div style={{
        maxWidth: 1440, margin: '0 auto',
        padding: '100px 75px',
        display: 'flex', alignItems: 'flex-start', gap: 96,
      }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 50 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20 }}>
            <SectionLabel text="Our Core Values" />
            <h2 style={{ fontFamily: 'Manrope, sans-serif', fontSize: 48, fontWeight: 500, color: '#245079', lineHeight: '130%' }}>
              Our Core Values
            </h2>
            <p style={{ fontFamily: 'Manrope, sans-serif', color: '#3C3C3C', fontSize: 20, fontWeight: 400, lineHeight: '140%' }}>
              At Su Casa Builders, our values guide every project and every relationship. They reflect who we are as a company and how we serve our clients and community.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 30, width: '100%' }}>
            {VALUES.map(v => <ValueCard key={v.slug} v={v} />)}
          </div>
        </div>

        <CoreImage />
      </div>

      <style>{`
        @media (max-width: 768px) {
          #core-values > div { flex-direction: column !important; padding: 60px 24px !important; }
        }
      `}</style>
    </section>
  )
}
