import { useState } from 'react'
import SectionLabel from './SectionLabel'
import { REASONS } from '../data/why-us'
import whyDiamond from '../assets/icons/why-diamond.svg'
import whyBulb from '../assets/icons/why-bulb.svg'
import whyShield from '../assets/icons/why-shield.svg'

const ICON_MAP = {
  'why-diamond.svg': whyDiamond,
  'why-bulb.svg': whyBulb,
  'why-shield.svg': whyShield,
}

function ReasonCard({ r }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', flexDirection: 'column', gap: 20,
        paddingBottom: 24,
        borderBottom: `2px solid ${hovered ? '#245079' : 'transparent'}`,
        transition: 'border-color 0.25s, transform 0.2s',
        transform: hovered ? 'translateY(-4px)' : 'none',
      }}
    >
      <div style={{
        width: 76, height: 76, borderRadius: '50%',
        border: '1.5px solid #245079',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: hovered ? '#245079' : '#fff', flexShrink: 0,
        transition: 'background 0.25s',
      }}>
        <img src={ICON_MAP[r.icon]} alt="" style={{ width: 28, height: 28, objectFit: 'contain', filter: hovered ? 'brightness(0) invert(1)' : 'none', transition: 'filter 0.25s' }} />
      </div>
      <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 25, color: hovered ? '#245079' : '#000', lineHeight: '130%', transition: 'color 0.25s' }}>{r.title}</h3>
      <p style={{ fontFamily: 'Manrope, sans-serif', color: '#3C3C3C', fontSize: 16, fontWeight: 400, lineHeight: '140%' }}>{r.desc}</p>
    </div>
  )
}

export default function WhyUs() {
  return (
    <section id="why-us" style={{ background: '#fff' }}>
      <div style={{
        maxWidth: 1440, margin: '0 auto',
        padding: '100px 75px',
        display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 80,
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20 }}>
          <SectionLabel text="Why Choose Us" />
          <h2 style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 64, fontWeight: 400, color: '#245079', lineHeight: '130%' }}>
            Why Choose Su Casa Builders
          </h2>
          <p style={{ fontFamily: 'Manrope, sans-serif', color: '#3C3C3C', fontSize: 20, fontWeight: 400, lineHeight: '140%' }}>
            When you hire Su Casa Builders, you're choosing a team that values craftsmanship, communication, and trust.<br />
            Every project we take on is handled with care, precision, and respect for your home or business.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', columnGap: 87, rowGap: 40, width: '100%' }}>
          {REASONS.map(r => <ReasonCard key={r.slug} r={r} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #why-us > div { padding: 60px 24px !important; }
          #why-us .cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
