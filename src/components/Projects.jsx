import { useState } from 'react'
import img1 from '../assets/images/Image1.png'
import img2 from '../assets/images/Image2.png'
import img3 from '../assets/images/Image3.png'
import img4 from '../assets/images/Image4.png'
import img5 from '../assets/images/Image5.png'
import hover1 from '../assets/images/HoverImage1.png'
import hover2 from '../assets/images/HoverImage2.png'
import hover3 from '../assets/images/HoverImage3.png'
import hover4 from '../assets/images/HoverImage4.png'
import hover5 from '../assets/images/HoverImage5.png'

function SectionLabel({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#374151" strokeWidth="2"><g clipPath="url(#cpr)"><path d="M2.5 7.5L10 1.667L17.5 7.5V16.667a1.667 1.667 0 01-1.667 1.666H4.167A1.667 1.667 0 012.5 16.667V7.5z" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.5 18.333V10H12.5V18.333" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="cpr"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>
      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#374151', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{text}</span>
    </div>
  )
}

function ProjectImage({ src, hoverSrc, alt, label, height }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ overflow: 'hidden', position: 'relative', height }}
    >
      {/* Default image */}
      <img src={src} alt={alt} style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
        opacity: hovered ? 0 : 1, transition: 'opacity 0.5s ease',
      }} />

      {/* Hover image */}
      <img src={hoverSrc} alt="" aria-hidden="true" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
        opacity: hovered ? 1 : 0, transition: 'opacity 0.5s ease',
      }} />

      {/* Gradient overlay + label — visible on hover */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.00) 34.62%, rgba(0,0,0,0.75) 100%)',
        opacity: hovered ? 1 : 0, transition: 'opacity 0.5s ease',
        display: 'flex', alignItems: 'flex-end', padding: '20px 24px',
      }}>
        <span style={{
          fontFamily: 'Manrope, sans-serif', fontWeight: 500, fontSize: 18,
          color: '#fff', lineHeight: '130%',
        }}>{label}</span>
      </div>
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
            <ProjectImage src={hover1} hoverSrc={img1} alt="Paseo Venado" label="Paseo Venado" height={300} />
            <ProjectImage src={hover2} hoverSrc={img2} alt="The Willow Creek Preserve" label="The Willow Creek Preserve" height={300} />
          </div>
          {/* Row 2: 3 smaller images */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
            <ProjectImage src={hover3} hoverSrc={img3} alt="The Willow Creek Preserve" label="The Willow Creek Preserve" height={300} />
            <ProjectImage src={hover4} hoverSrc={img4} alt="The Willow Creek Preserve" label="The Willow Creek Preserve" height={300} />
            <ProjectImage src={hover5} hoverSrc={img5} alt="The Willow Creek Preserve" label="The Willow Creek Preserve" height={300} />
          </div>
        </div>
      </div>
    </section>
  )
}
