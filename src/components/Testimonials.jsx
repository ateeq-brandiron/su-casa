import { useState } from 'react'

function SectionLabel({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#6b7280', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{text}</span>
    </div>
  )
}

const REVIEWS = [
  {
    title: 'Highly Recommended',
    name: 'Bernard Barrowclough',
    text: 'Harley Aldridge and his team have been the guiding force behind 2 custom homes I built in the Sierra Vista area and both times I was more than happy with the total experience. I would highly recommend that if you are interested in the new construction/remodeling of your home or business that you contact Su Casa Builders.',
  },
  {
    title: 'Quality Work',
    name: 'Bill Buhs',
    text: 'Need a framer? Quality work, great prices, efficient and clean!',
  },
  {
    title: 'Exceptional Craftsmanship',
    name: 'Sarah Johnson',
    text: 'Aliquam in risus lacinia libero in nibh. Euismod amet augue cursus enim massa. Magna consectetur sed amet blandit suspendisse commodo. Nisl ut egestas felis purus risus. Viverra duis blandit ac magna pellentesque sit augtre. Facilisis nunc risus fringilla purus blandit diam turpis. Ipsum turpis.',
  },
]

function Stars() {
  return (
    <div style={{ display: 'flex', gap: 2, marginBottom: '0.75rem' }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const visible = [REVIEWS[idx % REVIEWS.length], REVIEWS[(idx + 1) % REVIEWS.length], REVIEWS[(idx + 2) % REVIEWS.length]]

  return (
    <section style={{ background: '#f9fafb', padding: '5rem 2rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionLabel text="Testimonials" />
        <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>
          What Our Clients Say
        </h2>
        <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: 600, marginBottom: '3rem' }}>
          Our greatest measure of success is the trust we've earned from homeowners and partners across Cochise County. These testimonials highlight the professionalism, skill, and integrity that guide every Su Casa Builders project.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          {visible.map((r, i) => (
            <div key={r.name + i} style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8, padding: '1.75rem' }}>
              <Stars />
              <p style={{ fontWeight: 700, fontSize: '0.9rem', color: '#111827', marginBottom: '0.75rem' }}>{r.title}</p>
              <p style={{ color: '#6b7280', fontSize: '0.85rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>{r.text}</p>
              <p style={{ fontWeight: 600, fontSize: '0.85rem', color: '#374151' }}>{r.name}</p>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button onClick={() => setIdx(i => (i - 1 + REVIEWS.length) % REVIEWS.length)}
            style={{ width: 36, height: 36, borderRadius: '50%', border: '1.5px solid #d1d5db', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#374151" strokeWidth="2"><polyline points="9,2 4,7 9,12"/></svg>
          </button>
          <button onClick={() => setIdx(i => (i + 1) % REVIEWS.length)}
            style={{ width: 36, height: 36, borderRadius: '50%', border: '1.5px solid #d1d5db', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#374151" strokeWidth="2"><polyline points="5,2 10,7 5,12"/></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
