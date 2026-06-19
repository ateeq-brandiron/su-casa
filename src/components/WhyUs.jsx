function SectionLabel({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#374151" strokeWidth="2">
        <g clipPath="url(#cwu)">
          <path d="M2.5 7.5L10 1.667L17.5 7.5V16.667a1.667 1.667 0 01-1.667 1.666H4.167A1.667 1.667 0 012.5 16.667V7.5z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.5 18.333V10H12.5V18.333" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs><clipPath id="cwu"><rect width="20" height="20" fill="white"/></clipPath></defs>
      </svg>
      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#374151', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{text}</span>
    </div>
  )
}

const REASONS = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#245079" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l4 6-10 13L2 9z"/>
        <path d="M11 3 8 9l4 13 4-13-3-6"/>
        <line x1="2" y1="9" x2="22" y2="9"/>
      </svg>
    ),
    title: 'Experience and Reliability',
    desc: 'Our team brings years of hands-on experience in framing and general contracting across Sierra Vista and Cochise County. We take pride in consistent, dependable work that meets professional standards.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#245079" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
        <path d="M9 18h6"/>
        <path d="M10 22h4"/>
      </svg>
    ),
    title: 'Commitment to Quality',
    desc: "We use durable materials and proven building practices to ensure lasting performance and dependable results. Every project reflects the same attention to detail and pride we'd bring to our own homes.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#245079" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    <section id="why-us" style={{ background: '#fff' }}>
      <div style={{
        maxWidth: 1440, margin: '0 auto',
        padding: '100px 75px',
        display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 60,
      }}>
        {/* Header block */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20 }}>
          <SectionLabel text="Why Choose Us" />
          <h2 style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 48, fontWeight: 400, color: '#245079', lineHeight: '130%',
          }}>
            Why Choose Su Casa Builders
          </h2>
          <p style={{
            fontFamily: 'Manrope, sans-serif',
            color: '#3C3C3C', fontSize: 20, fontWeight: 400, lineHeight: '140%', maxWidth: 780,
          }}>
            When you hire Su Casa Builders, you're choosing a team that values craftsmanship, communication, and trust.
            Every project we take on is handled with care, precision, and respect for your home or business.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem', width: '100%' }}>
          {REASONS.map(r => (
            <div key={r.title} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{
                width: 60, height: 60, borderRadius: '50%',
                border: '1.5px solid #245079',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: '#fff', flexShrink: 0,
              }}>
                {r.icon}
              </div>
              <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 20, color: '#111827', lineHeight: '130%' }}>{r.title}</h3>
              <p style={{ fontFamily: 'Manrope, sans-serif', color: '#3C3C3C', fontSize: 16, fontWeight: 400, lineHeight: '149%' }}>{r.desc}</p>
            </div>
          ))}
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
