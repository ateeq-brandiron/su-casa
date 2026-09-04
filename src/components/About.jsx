import { useState } from 'react'
import SectionLabel from './SectionLabel'
import imageBox from '../assets/images/about/about-top.png'
import imageBoxHover from '../assets/images/about/about-top-hover.png'
import imageBox2 from '../assets/images/about/about-bottom.png'
import imageBox2Hover from '../assets/images/about/about-bottom-hover.png'

function SwapImage({ src, hoverSrc }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative', width: '100%', height: 275, overflow: 'hidden' }}
    >
      <img src={src} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50%', opacity: hovered ? 0 : 1, transition: 'opacity 0.5s ease' }} />
      <img src={hoverSrc} alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50%', opacity: hovered ? 1 : 0, transition: 'opacity 0.5s ease' }} />
    </div>
  )
}

export default function About() {
  return (
    <section id="about" style={{ background: '#fff' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', padding: '100px 75px', gap: 96, alignItems: 'flex-start' }}>
        {/* Two stacked images — fills left column */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <SwapImage src={imageBox} hoverSrc={imageBoxHover} />
          <SwapImage src={imageBox2} hoverSrc={imageBox2Hover} />
        </div>

        {/* Text */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 48 }}>
          {/* Top block: label + heading + paragraph */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0 }}>
            <SectionLabel text="About Su Casa Builders" />
            <h2 style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 48,
              fontWeight: 500,
              color: '#245079',
              lineHeight: '130%',
              margin: '4px 0 16px',
            }}>
              About Su Casa Builders
            </h2>
            <p style={{ fontFamily: 'Manrope, sans-serif', color: '#3C3C3C', fontSize: 20, fontWeight: 400, lineHeight: '140%', margin: 0 }}>
              Founded in 2003, Su Casa Builders LLC is a locally owned and operated general contractor serving Sierra Vista and surrounding Cochise County communities. Our team focuses on high-quality residential and light commercial construction, including framing, roofing, painting, and custom home projects built with care and precision.
            </p>
          </div>
          {/* Bottom block: two blockquotes */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 24 }}>
            <p style={{
              fontFamily: 'Manrope, sans-serif', color: '#3C3C3C', fontSize: 16, fontWeight: 400, lineHeight: '140%',
              borderLeft: '4px solid #D1D5DB', paddingLeft: '1.25rem', margin: 0,
            }}>
              At Su Casa Builders, we believe every structure deserves attention to detail and a solid foundation. Whether we are building a new home, expanding an existing property, or supporting a commercial project, our focus is on craftsmanship and honest communication from start to finish.
            </p>
            <p style={{
              fontFamily: 'Manrope, sans-serif', color: '#3C3C3C', fontSize: 16, fontWeight: 400, lineHeight: '140%',
              borderLeft: '4px solid #D1D5DB', paddingLeft: '1.25rem', margin: 0,
            }}>
              From our roots in Southeast Arizona, Su Casa has grown alongside the communities we serve. Many of our long-term team members live right here in Sierra Vista, bringing local experience and pride to every project. We don't just build structures — we build trust, lasting relationships, and spaces that stand the test of time.
            </p>
          </div>
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
