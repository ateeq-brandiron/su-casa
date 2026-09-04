import { useState } from 'react'
import SectionLabel from './SectionLabel'
import { PROJECTS } from '../data/projects'
import img1 from '../assets/images/projects/paseo-venado.png'
import img2 from '../assets/images/projects/the-canyons.png'
import img3 from '../assets/images/projects/the-oaks.png'
import img4 from '../assets/images/projects/jens.png'
import img5 from '../assets/images/projects/project-5.png'
import hover1 from '../assets/images/projects/paseo-venado-hover.png'
import hover2 from '../assets/images/projects/the-canyons-hover.png'
import hover3 from '../assets/images/projects/the-oaks-hover.png'
import hover4 from '../assets/images/projects/jens-hover.png'
import hover5 from '../assets/images/projects/project-5-hover.png'

// Default images (plain photos) and hover images (with text overlay) in slug order
const PROJECT_IMAGES = {
  'paseo-venado': { img: img1, hoverImg: hover1 },
  'the-canyons':  { img: img2, hoverImg: hover2 },
  'the-oaks':     { img: img3, hoverImg: hover3 },
  'jens':         { img: img4, hoverImg: hover4 },
  'project-5':    { img: img5, hoverImg: hover5 },
}

function ProjectImage({ project, height }) {
  const [hovered, setHovered] = useState(false)
  const { img, hoverImg } = PROJECT_IMAGES[project.slug]
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ overflow: 'hidden', position: 'relative', height }}
    >
      <img src={img} alt={project.alt} style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
        opacity: hovered ? 0 : 1, transition: 'opacity 0.5s ease',
      }} />
      <img src={hoverImg} alt="" aria-hidden="true" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
        opacity: hovered ? 1 : 0, transition: 'opacity 0.5s ease',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.00) 34.62%, rgba(0,0,0,0.75) 100%)',
        opacity: hovered ? 1 : 0, transition: 'opacity 0.5s ease',
        display: 'flex', justifyContent: 'center', alignItems: 'flex-end', padding: '0 0 24px 0',
      }}>
        <span style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 500, fontSize: 18, color: '#fff', lineHeight: '130%', textAlign: 'center' }}>{project.label}</span>
      </div>
    </div>
  )
}

export default function Projects() {
  const [row1, row2] = [PROJECTS.slice(0, 2), PROJECTS.slice(2)]
  return (
    <section id="projects" style={{ background: '#fff' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '100px 75px', display: 'flex', flexDirection: 'column', gap: 60 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0 }}>
          <SectionLabel text="Projects" />
          <h2 style={{ fontFamily: 'Manrope, sans-serif', fontSize: 48, fontWeight: 400, color: '#245079', lineHeight: '130%', margin: '4px 0 16px' }}>
            Featured Projects
          </h2>
          <p style={{ fontFamily: 'Manrope, sans-serif', color: '#3C3C3C', fontSize: 20, fontWeight: 400, lineHeight: '140%', margin: 0 }}>
            See the craftsmanship and care that define every Su Casa Builders project. Our portfolio includes custom homes, additions, and specialty work completed across Southeast Arizona. Each project reflects our attention to detail, quality materials, and commitment to lasting construction.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.85fr', gap: 20 }}>
            {row1.map(p => <ProjectImage key={p.slug} project={p} height={320} />)}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
            {row2.map(p => <ProjectImage key={p.slug} project={p} height={300} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
