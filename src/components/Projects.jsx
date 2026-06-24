import { useState } from 'react'
import img1 from '../assets/images/Image1.png'
import img2 from '../assets/images/Image2.png'
import img3 from '../assets/images/Image3.png'
import img4 from '../assets/images/Image4.png'
import img5 from '../assets/images/Image5.png'

function SectionLabel({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#374151" strokeWidth="2"><g clipPath="url(#cpr)"><path d="M2.5 7.5L10 1.667L17.5 7.5V16.667a1.667 1.667 0 01-1.667 1.666H4.167A1.667 1.667 0 012.5 16.667V7.5z" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.5 18.333V10H12.5V18.333" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="cpr"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>
      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#374151', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{text}</span>
    </div>
  )
}

function ProjectImage({ src, alt, height }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ overflow: 'hidden', position: 'relative' }}
    >
      <img
        src={src} alt={alt}
        style={{
          width: '100%', height: height, objectFit: 'cover', display: 'block',
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.4s ease',
        }}
      />
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ background: '#fff' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '100px 75px', display: 'flex', flexDirection: 'column', gap: 60 }}>
        {/* Header block */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20 }}>
          <SectionLabel text="Projects" />
          <h2 style={{ fontFamily: 'Manrope, sans-serif', fontSize: 48, fontWeight: 400, color: '#245079', lineHeight: '130%' }}>
            Featured Projects
          </h2>
          <p style={{ fontFamily: 'Manrope, sans-serif', color: '#3C3C3C', fontSize: 20, fontWeight: 400, lineHeight: '140%' }}>
            See the craftsmanship and care that define every Su Casa Builders project. Our portfolio includes custom homes, additions, and specialty work completed across Southeast Arizona. Each project reflects our attention to detail, quality materials, and commitment to lasting construction.
          </p>
        </div>

        {/* Photo grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* Row 1: 2 large images */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <ProjectImage src={img1} alt="Custom Home — Sierra Vista" height={300} />
            <ProjectImage src={img2} alt="Spec Home — Cochise County" height={300} />
          </div>
          {/* Row 2: 3 smaller images */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
            <ProjectImage src={img3} alt="Metal Roof — Hereford AZ" height={300} />
            <ProjectImage src={img4} alt="Custom Build — Fort Huachuca" height={300} />
            <ProjectImage src={img5} alt="Home Renovation — Bisbee" height={300} />
          </div>
        </div>
      </div>
    </section>
  )
}
