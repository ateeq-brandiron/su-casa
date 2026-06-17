function SectionLabel({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#6b7280', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{text}</span>
    </div>
  )
}

const VALUES = [
  {
    title: 'Loyalty & Gratitude',
    desc: 'We value lasting relationships and appreciate every opportunity to earn a client\'s trust. Many of our projects come from referrals, which we see as the highest compliment.',
  },
  {
    title: 'Integrity & Faith',
    desc: 'We believe that doing right pays off. Honesty and accountability shape every decision — from planning to completion.',
  },
  {
    title: 'Community & Humility',
    desc: 'Southeast Arizona is home. We hire local talent, support our neighbors, and stay humble enough to keep learning and improving with every project.',
  },
]

export default function CoreValues() {
  return (
    <section style={{ background: '#fff', padding: '5rem 2rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
        {/* Left text */}
        <div>
          <SectionLabel text="Our Core Values" />
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>
            Our Core Values
          </h2>
          <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            At Su Casa Builders, our values guide every project and every relationship. They reflect who we are as a company and how we serve our clients and community.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {VALUES.map(v => (
              <div key={v.title} style={{ borderLeft: '3px solid #e5e7eb', paddingLeft: '1.25rem' }}>
                <h4 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#111827', marginBottom: '0.4rem' }}>{v.title}</h4>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: 1.75 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div style={{ height: 420, borderRadius: 8, overflow: 'hidden', background: 'linear-gradient(160deg, #2a3a2a 0%, #1a2a1a 50%, #3a4a3a 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem' }}>Project Photo</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #core-values-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
