import imageBox from '../assets/images/ImageBox.png'
import imageBox1 from '../assets/images/ImageBox1.png'

function SectionLabel({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#374151" strokeWidth="2">
        <g clipPath="url(#ch)">
          <path d="M2.5 7.5L10 1.667L17.5 7.5V16.667a1.667 1.667 0 01-1.667 1.666H4.167A1.667 1.667 0 012.5 16.667V7.5z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.5 18.333V10H12.5V18.333" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs><clipPath id="ch"><rect width="20" height="20" fill="white"/></clipPath></defs>
      </svg>
      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#374151', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{text}</span>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" style={{ padding: '5rem 2rem', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
        {/* Two stacked images */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ height: 260, borderRadius: 8, overflow: 'hidden' }}>
            <img src={imageBox} alt="Su Casa Builders construction project" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ height: 260, borderRadius: 8, overflow: 'hidden' }}>
            <img src={imageBox1} alt="Su Casa Builders completed home" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Text */}
        <div>
          <SectionLabel text="About Su Casa Builders" />
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 700,
            color: '#1D3F6B',
            marginBottom: '1.5rem',
            lineHeight: 1.2,
          }}>
            About Su Casa Builders
          </h2>
          <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            Founded in 2003, Su Casa Builders LLC is a locally owned and operated general contractor serving Sierra Vista and surrounding Cochise County communities. Our team focuses on high-quality residential and light commercial construction, including framing, roofing, painting, and custom home projects built with care and precision.
          </p>
          <p style={{
            color: '#4b5563', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.9rem',
            borderLeft: '3px solid #d1d5db', paddingLeft: '1.25rem',
          }}>
            At Su Casa Builders, we believe every structure deserves attention to detail and a solid foundation. Whether we are building a new home, expanding an existing property, or supporting a commercial project, our focus is on craftsmanship and honest communication from start to finish.
          </p>
          <p style={{
            color: '#4b5563', lineHeight: 1.8, fontSize: '0.9rem',
            borderLeft: '3px solid #d1d5db', paddingLeft: '1.25rem',
          }}>
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
