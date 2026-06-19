import { useState } from 'react'

function SectionLabel({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#374151" strokeWidth="2"><g clipPath="url(#ct)"><path d="M2.5 7.5L10 1.667L17.5 7.5V16.667a1.667 1.667 0 01-1.667 1.666H4.167A1.667 1.667 0 012.5 16.667V7.5z" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.5 18.333V10H12.5V18.333" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="ct"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>
      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#374151', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{text}</span>
    </div>
  )
}

const REVIEWS = [
  {
    title: 'Highly Recommended',
    name: 'Bernard Barrowclough',
    text: 'Harley Aldridge and his team have been the guiding force behind 2 custom homes I built in the Sierra Vista area and both times I was more than happy with the total experience\nI would highly recommended that if you are interested in the new construction, remodeling of your home or business that you contact subscribe casa builders',
  },
  {
    title: 'Quality Work',
    name: 'Bill Buhs',
    text: 'Need a framer? Quality work, great prices, efficient and clean!',
  },
  {
    title: 'Exceptional Craftsmanship',
    name: 'Sarah Johnson',
    text: 'Su Casa Builders delivered outstanding results on our home addition. Their attention to detail and commitment to quality exceeded our expectations from start to finish.',
  },
]

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

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const visible = [
    REVIEWS[idx % REVIEWS.length],
    REVIEWS[(idx + 1) % REVIEWS.length],
    REVIEWS[(idx + 2) % REVIEWS.length],
  ]

  return (
    <section id="testimonials" style={{ background: '#fff' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '100px 75px', display: 'flex', flexDirection: 'column', gap: 60 }}>
        {/* Header block */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20 }}>
          <SectionLabel text="Testimonials" />
          <h2 style={{ fontFamily: 'Manrope, sans-serif', fontSize: 48, fontWeight: 400, color: '#245079', lineHeight: '130%' }}>
            What Our Clients Say
          </h2>
          <p style={{ fontFamily: 'Manrope, sans-serif', color: '#3C3C3C', fontSize: 20, fontWeight: 400, lineHeight: '140%' }}>
            Our greatest measure of success is the trust we've earned from homeowners and partners across Cochise County. These testimonials highlight the professionalism, skill, and integrity that guide every Su Casa Builders project.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {visible.map((r, i) => (
            <div key={r.name + i} style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: '32px 24px', background: '#fff' }}>
              <Stars />
              <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 18, color: '#111827', lineHeight: '130%' }}>{r.title}</p>
              <p style={{ fontFamily: 'Manrope, sans-serif', color: '#3C3C3C', fontSize: 14, fontWeight: 400, lineHeight: '160%', whiteSpace: 'pre-line' }}>{r.text}</p>
              <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 500, fontSize: 16, color: '#374151', marginTop: 'auto' }}>{r.name}</p>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', gap: 16 }}>
          <button onClick={() => setIdx(i => (i - 1 + REVIEWS.length) % REVIEWS.length)}
            style={{ width: 56, height: 56, borderRadius: '50%', border: '1.5px solid #d1d5db', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="11,3 5,9 11,15"/></svg>
          </button>
          <button onClick={() => setIdx(i => (i + 1) % REVIEWS.length)}
            style={{ width: 56, height: 56, borderRadius: '50%', border: '1.5px solid #245079', background: 'rgba(36,80,121,0.08)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#245079" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="7,3 13,9 7,15"/></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
