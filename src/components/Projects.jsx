function SectionLabel({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#6b7280', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{text}</span>
    </div>
  )
}

const PHOTOS = [
  { label: 'Custom Home — Sierra Vista', color: 'linear-gradient(135deg, #8a7060, #6a5040)' },
  { label: 'Spec Home — Cochise County', color: 'linear-gradient(135deg, #7a8a9a, #5a6a7a)' },
  { label: 'Metal Roof — Hereford AZ', color: 'linear-gradient(135deg, #6a7a5a, #4a5a3a)' },
  { label: 'Custom Build — Fort Huachuca', color: 'linear-gradient(135deg, #9a8a7a, #7a6a5a)' },
  { label: 'Home Renovation — Bisbee', color: 'linear-gradient(135deg, #7a6a8a, #5a4a6a)' },
  { label: 'Commercial Project — Sierra Vista', color: 'linear-gradient(135deg, #6a8a7a, #4a6a5a)' },
]

export default function Projects() {
  return (
    <section id="projects" style={{ background: '#fff', padding: '5rem 2rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionLabel text="Projects" />
        <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>
          Featured Projects
        </h2>
        <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: 620, marginBottom: '3rem' }}>
          See the craftsmanship and care that define every Su Casa Builders project. Our portfolio includes custom homes, additions, and specialty work completed across Southeast Arizona. Each project reflects our attention to detail, quality materials, and commitment to lasting construction.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
          {PHOTOS.map(p => (
            <div key={p.label} style={{ position: 'relative', height: 220, borderRadius: 6, overflow: 'hidden', cursor: 'pointer', background: p.color }}
              onMouseEnter={e => e.currentTarget.querySelector('.overlay').style.opacity = '1'}
              onMouseLeave={e => e.currentTarget.querySelector('.overlay').style.opacity = '0'}>
              <div className="overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s' }}>
                <span style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem', borderBottom: '1px solid white', paddingBottom: 2 }}>{p.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
