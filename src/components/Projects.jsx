import { useState, useRef } from 'react'
import SectionLabel from './SectionLabel'
import { PROJECTS } from '../data/projects'
import img1 from '../assets/images/projects/Paseo Venado default.jpg'
import img2 from '../assets/images/projects/The Canyons — garage doors front.jpg'
import img3 from '../assets/images/projects/the-oaks.png'
import img4 from '../assets/images/projects/jens.png'
import img5 from '../assets/images/projects/project-5.png'
import hover1 from '../assets/images/projects/Paseo - Image 1.png'
import hover2 from '../assets/images/projects/Canyons - Image 3.png'
import hover3 from '../assets/images/projects/The Oaks - Image 2.png'
import hover4 from '../assets/images/projects/Jens - Image 4.png'
import hover5 from '../assets/images/projects/The Willow.jpeg'

// Default images (plain photos) and hover images (with text overlay) in slug order
const PROJECT_IMAGES = {
  'paseo-venado': { img: img1, hoverImg: hover1 },
  'the-canyons':  { img: img2, hoverImg: hover2 },
  'the-oaks':     { img: img3, hoverImg: hover3 },
  'jens':         { img: img4, hoverImg: hover4 },
  'project-5':    { img: img5, hoverImg: hover5 },
}

function ProjectImage({ project, height }) {
  const [tapped, setTapped] = useState(false)
  const [hovered, setHovered] = useState(false)
  const active = hovered || tapped
  const { img, hoverImg } = PROJECT_IMAGES[project.slug]
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setTapped(t => !t)}
      style={{ overflow: 'hidden', position: 'relative', height, cursor: 'pointer', flexShrink: 0 }}
    >
      <img src={img} alt={project.alt} style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
        opacity: active ? 0 : 1, transition: 'opacity 0.5s ease',
      }} />
      <img src={hoverImg} alt="" aria-hidden="true" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
        opacity: active ? 1 : 0, transition: 'opacity 0.5s ease',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.00) 40%, rgba(0,0,0,0.70) 100%)',
        opacity: active ? 1 : 0, transition: 'opacity 0.5s ease',
        display: 'flex', justifyContent: 'center', alignItems: 'flex-end', padding: '0 0 20px',
      }}>
        <span style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 500, fontSize: 18, color: '#fff', lineHeight: '130%', textAlign: 'center' }}>{project.label}</span>
      </div>
    </div>
  )
}

function MobileCarousel() {
  const [active, setActive] = useState(0)
  const trackRef = useRef(null)

  const handleScroll = () => {
    const el = trackRef.current
    if (!el) return
    const idx = Math.round(el.scrollLeft / el.offsetWidth)
    setActive(idx)
  }

  const goTo = (i) => {
    const el = trackRef.current
    if (!el) return
    el.scrollTo({ left: i * el.offsetWidth, behavior: 'smooth' })
    setActive(i)
  }

  return (
    <div style={{ position: 'relative' }}>
      <div
        ref={trackRef}
        onScroll={handleScroll}
        style={{
          display: 'flex', overflowX: 'scroll', scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch',
          gap: 12, paddingBottom: 4,
          msOverflowStyle: 'none', scrollbarWidth: 'none',
        }}
      >
        {PROJECTS.map(p => (
          <div key={p.slug} style={{ scrollSnapAlign: 'center', width: '85vw', flexShrink: 0 }}>
            <ProjectImage project={p} height={240} />
          </div>
        ))}
      </div>
      {/* Dot indicators */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 16 }}>
        {PROJECTS.map((p, i) => (
          <button
            key={p.slug}
            onClick={() => goTo(i)}
            aria-label={`Go to ${p.label}`}
            style={{
              width: i === active ? 20 : 8, height: 8, borderRadius: 4,
              background: i === active ? '#245079' : '#CBD5E1',
              border: 'none', padding: 0, cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const [row1, row2] = [PROJECTS.slice(0, 2), PROJECTS.slice(2)]
  return (
    <section id="projects" style={{ background: '#fff' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '100px 75px', display: 'flex', flexDirection: 'column', gap: 80 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0 }}>
          <SectionLabel text="Projects" />
          <h2 style={{ fontFamily: 'Manrope, sans-serif', fontSize: 48, fontWeight: 400, color: '#245079', lineHeight: '130%', margin: '4px 0 16px' }}>
            Featured Projects
          </h2>
          <p style={{ fontFamily: 'Manrope, sans-serif', color: '#3C3C3C', fontSize: 20, fontWeight: 400, lineHeight: '140%', margin: 0, maxWidth: 860 }}>
            See the craftsmanship and care that define every Su Casa Builders project. Our portfolio includes custom homes, additions, and specialty work completed across Southeast Arizona. Each project reflects our attention to detail, quality materials, and commitment to lasting construction.
          </p>
        </div>

        {/* Desktop grid */}
        <div className="projects-desktop" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {row1.map(p => <ProjectImage key={p.slug} project={p} height={320} />)}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
            {row2.map(p => <ProjectImage key={p.slug} project={p} height={290} />)}
          </div>
        </div>

        {/* Mobile carousel */}
        <div className="projects-mobile" style={{ display: 'none' }}>
          <MobileCarousel />
        </div>
      </div>
      <style>{`
        .projects-desktop ::-webkit-scrollbar { display: none; }
        @media (max-width: 768px) {
          #projects > div { padding: 60px 24px !important; gap: 40px !important; }
          .projects-desktop { display: none !important; }
          .projects-mobile { display: block !important; }
          .projects-mobile div[style*="overflow"] { overflow-x: scroll !important; }
          .projects-mobile div[style*="overflow"]::-webkit-scrollbar { display: none; }
        }
      `}</style>
    </section>
  )
}
