import frame2 from '../assets/images/ImageBox.png'

function SectionLabel({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#374151" strokeWidth="2"><g clipPath="url(#ccv)"><path d="M2.5 7.5L10 1.667L17.5 7.5V16.667a1.667 1.667 0 01-1.667 1.666H4.167A1.667 1.667 0 012.5 16.667V7.5z" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.5 18.333V10H12.5V18.333" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="ccv"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>
      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#374151', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{text}</span>
    </div>
  )
}

const VALUES = [
  {
    title: 'Loyalty & Gratitude',
    desc: "We value lasting relationships and appreciate every opportunity to earn a client's trust. Many of our projects come from referrals, which we see as the highest compliment.",
  },
  {
    title: 'Integrity & Faith',
    desc: 'We believe that doing right pays off. Honesty and accountability shape every decision—from planning to completion.',
  },
  {
    title: 'Community & Humility',
    desc: 'Southeast Arizona is home. We hire local talent, support our neighbors, and stay humble enough to keep learning and improving with every project.',
  },
]

export default function CoreValues() {
  return (
    <section id="core-values" style={{ background: '#fff' }}>
      <div style={{
        maxWidth: 1440, margin: '0 auto',
        padding: '100px 75px',
        display: 'flex', alignItems: 'flex-start', gap: 96,
      }}>
        {/* Left: text content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 50 }}>
          {/* Header block */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20 }}>
            <SectionLabel text="Our Core Values" />
            <h2 style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 48, fontWeight: 400, color: '#245079', lineHeight: '130%',
            }}>
              Our Core Values
            </h2>
            <p style={{
              fontFamily: 'Manrope, sans-serif',
              color: '#3C3C3C', fontSize: 20, fontWeight: 400, lineHeight: '140%',
            }}>
              At Su Casa Builders, our values guide every project and every relationship. They reflect who we are as a company and how we serve our clients and community.
            </p>
          </div>

          {/* Values list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 30, width: '100%' }}>
            {VALUES.map(v => (
              <div key={v.title} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <h4 style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 700, fontSize: 20, color: '#000', lineHeight: '130%',
                }}>{v.title}</h4>
                <p style={{
                  fontFamily: 'Manrope, sans-serif',
                  color: '#3C3C3C', fontSize: 16, fontWeight: 400, lineHeight: '140%',
                }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: image */}
        <div style={{
          width: 478, height: 588, flexShrink: 0,
          border: '2px solid #245079',
          backgroundImage: `url(${frame2})`,
          backgroundColor: 'lightgray',
          backgroundSize: 'cover',
          backgroundPosition: '50%',
          backgroundRepeat: 'no-repeat',
        }} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          #core-values > div { flex-direction: column !important; padding: 60px 24px !important; }
        }
      `}</style>
    </section>
  )
}
