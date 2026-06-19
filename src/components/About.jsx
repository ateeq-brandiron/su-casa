import imageBox from '../assets/images/Image Box 1.png'
import imageBox1 from '../assets/images/Image Box 2.png'

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
    <section id="about" style={{ background: '#fff' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', padding: '100px 75px', gap: 96, alignItems: 'flex-start' }}>
        {/* Two stacked images */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ width: 485, height: 275, backgroundImage: `url(${imageBox})`, backgroundSize: 'cover', backgroundPosition: '50%', backgroundColor: 'lightgray' }} />
          <div style={{ width: 484, height: 275, backgroundImage: `url(${imageBox1})`, backgroundSize: 'cover', backgroundPosition: '50%', backgroundColor: 'lightgray' }} />
        </div>

        {/* Text */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 44 }}>
          <SectionLabel text="About Su Casa Builders" />
          <h2 style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 48,
            fontWeight: 500,
            color: '#245079',
            lineHeight: '130%',
          }}>
            About Su Casa Builders
          </h2>
          <p style={{ fontFamily: 'Manrope, sans-serif', color: '#3C3C3C', fontSize: 20, fontWeight: 400, lineHeight: '140%' }}>
            Founded in 2003, Su Casa Builders LLC is a locally owned and operated general contractor serving Sierra Vista and surrounding Cochise County communities. Our team focuses on high-quality residential and light commercial construction, including framing, roofing, painting, and custom home projects built with care and precision.
          </p>
          <p style={{
            fontFamily: 'Manrope, sans-serif', color: '#3C3C3C', fontSize: 20, fontWeight: 400, lineHeight: '140%',
            borderLeft: '2px solid #d1d5db', paddingLeft: '1.25rem',
          }}>
            At Su Casa Builders, we believe every structure deserves attention to detail and a solid foundation. Whether we are building a new home, expanding an existing property, or supporting a commercial project, our focus is on craftsmanship and honest communication from start to finish.
          </p>
          <p style={{
            fontFamily: 'Manrope, sans-serif', color: '#3C3C3C', fontSize: 20, fontWeight: 400, lineHeight: '140%',
            borderLeft: '2px solid #d1d5db', paddingLeft: '1.25rem',
          }}>
            From our roots in Southeast Arizona, Su Casa has grown alongside the communities we serve. Many of our long-term team members live right here in Sierra Vista, bringing local experience and pride to every project. We don't just build structures — we build trust, lasting relationships, and spaces that stand the test of time.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div { flex-direction: column !important; padding: 60px 24px !important; }
        }
      `}</style>
    </section>
  )
}
