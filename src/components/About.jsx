function SectionLabel({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#6b7280', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{text}</span>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" style={{ padding: '5rem 2rem', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
        {/* Two stacked images */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ height: 220, borderRadius: 8, overflow: 'hidden', background: 'linear-gradient(135deg, #5a7a6a 0%, #3a5a4a 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Construction Photo</span>
          </div>
          <div style={{ height: 220, borderRadius: 8, overflow: 'hidden', background: 'linear-gradient(135deg, #8a7a5a 0%, #6a5a3a 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Project Photo</span>
          </div>
        </div>

        {/* Text */}
        <div>
          <SectionLabel text="About Su Casa Builders" />
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, color: '#111827', marginBottom: '1.25rem', lineHeight: 1.2 }}>
            About Su Casa Builders
          </h2>
          <p style={{ color: '#4b5563', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.95rem' }}>
            Founded in 2003, Su Casa Builders LLC is a locally owned and operated general contractor serving Sierra Vista and surrounding Cochise County communities. Our team focuses on high-quality residential and light commercial construction, including framing, roofing, painting, and custom home projects built with care and precision.
          </p>
          <p style={{ color: '#6b7280', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.9rem' }}>
            At Su Casa Builders, we believe every structure deserves attention to detail and a solid foundation. Whether we are building a new home, expanding an existing property, or supporting a commercial project, our focus is on craftsmanship and honest communication from start to finish.
          </p>
          <p style={{ color: '#6b7280', lineHeight: 1.8, fontSize: '0.9rem' }}>
            From our roots in Southeast Arizona, Su Casa has grown alongside the communities we serve. Many of our long-term team members live right here in Sierra Vista, bringing local experience and pride to every project. We don't just build structures — we build trust, lasting relationships, and spaces that stand the test of time.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
