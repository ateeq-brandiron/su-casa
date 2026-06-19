function SectionLabel({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#374151', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{text}</span>
    </div>
  )
}

const REASONS = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l4 6-10 13L2 9z"/>
        <path d="M11 3 8 9l4 13 4-13-3-6"/>
        <line x1="2" y1="9" x2="22" y2="9"/>
      </svg>
    ),
    title: 'Experience and Reliability',
    desc: 'Our team brings years of hands-on experience in framing, roofing, and general contracting across Sierra Vista and Cochise County. We take pride in consistent, dependable work that meets professional standards.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
        <path d="M9 18h6"/>
        <path d="M10 22h4"/>
      </svg>
    ),
    title: 'Commitment to Quality',
    desc: 'We use durable materials and proven building practices to ensure lasting performance and dependable results. Every project reflects the same attention to detail and pride we\'d bring to our own homes.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    title: 'Local and Trusted',
    desc: "As a local company, we're proud to serve the communities where we live and work. Our clients know they can count on us for honest communication, dependable timelines, and results built on integrity.",
  },
]

export default function WhyUs() {
  return (
    <section style={{ background: '#fff', padding: '5rem 2rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionLabel text="Why Choose Us" />
        <h2 style={{
          fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
          fontWeight: 700,
          color: '#1D3F6B',
          marginBottom: '0.75rem',
        }}>
          Why Choose Su Casa Builders
        </h2>
        <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: 680, marginBottom: '3.5rem' }}>
          When you hire Su Casa Builders, you're choosing a team that values craftsmanship, communication, and trust.
          Every project we take on is handled with care, precision, and respect for your home or business.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.5rem' }}>
          {REASONS.map(r => (
            <div key={r.title}>
              <div style={{
                width: 60, height: 60, borderRadius: '50%',
                border: '1.5px solid #d1d5db',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.25rem',
                background: '#fff',
              }}>
                {r.icon}
              </div>
              <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#111827', marginBottom: '0.6rem' }}>{r.title}</h3>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: 1.75 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
