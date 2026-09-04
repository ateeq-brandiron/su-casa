import { useState } from 'react'
import SectionLabel from './SectionLabel'
import { REVIEWS } from '../data/testimonials'

function Stars() {
  return (
    <div style={{ display: 'flex', gap: 4 }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#245079" stroke="#245079" strokeWidth="1">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ r }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', flexDirection: 'column', gap: 16,
        padding: '32px 24px', height: '100%', boxSizing: 'border-box',
        background: hovered ? '#245079' : '#fff',
        border: `1px solid ${hovered ? '#245079' : '#e5e7eb'}`,
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.25s ease',
      }}
    >
      <Stars />
      <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 18, color: hovered ? '#fff' : '#111827', lineHeight: '130%', transition: 'color 0.25s' }}>{r.title}</p>
      <p style={{ fontFamily: 'Manrope, sans-serif', color: hovered ? 'rgba(255,255,255,0.8)' : '#3C3C3C', fontSize: 14, fontWeight: 400, lineHeight: '160%', whiteSpace: 'pre-line', transition: 'color 0.25s' }}>{r.text}</p>
      <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 500, fontSize: 16, color: hovered ? 'rgba(255,255,255,0.7)' : '#374151', marginTop: 'auto', transition: 'color 0.25s' }}>{r.name}</p>
    </div>
  )
}

function NavButton({ onClick, disabled, children }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 52, height: 52, borderRadius: '50%',
        border: '1.5px solid #245079',
        background: hovered && !disabled ? '#245079' : '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: disabled ? 'default' : 'pointer',
        opacity: disabled ? 0.35 : 1,
        transition: 'background 0.2s',
        flexShrink: 0,
      }}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
        stroke={hovered && !disabled ? '#fff' : '#245079'}
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        style={{ transition: 'stroke 0.2s' }}>
        {children}
      </svg>
    </button>
  )
}

const PAGE_SIZE = 3

export default function Testimonials() {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(REVIEWS.length / PAGE_SIZE)
  const visible = REVIEWS.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)

  return (
    <section id="testimonials" style={{ background: '#fff' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '100px 75px', display: 'flex', flexDirection: 'column', gap: 60 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20 }}>
          <SectionLabel text="Testimonials" />
          <h2 style={{ fontFamily: 'Manrope, sans-serif', fontSize: 48, fontWeight: 500, color: '#245079', lineHeight: '130%' }}>
            What Our Clients Say
          </h2>
          <p style={{ fontFamily: 'Manrope, sans-serif', color: '#3C3C3C', fontSize: 20, fontWeight: 400, lineHeight: '140%' }}>
            Our greatest measure of success is the trust we've earned from homeowners and partners across Cochise County.<br />
            These testimonials highlight the professionalism, skill, and integrity that guide every Su Casa Builders project.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {visible.map(r => <ReviewCard key={r.slug} r={r} />)}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <NavButton onClick={() => setPage(p => p - 1)} disabled={page === 0}>
            <polyline points="11,4 5,9 11,14"/>
          </NavButton>
          <NavButton onClick={() => setPage(p => p + 1)} disabled={page >= totalPages - 1}>
            <polyline points="7,4 13,9 7,14"/>
          </NavButton>
        </div>
      </div>
    </section>
  )
}
