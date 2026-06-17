import img1 from '../assets/images/Image1.png'
import img2 from '../assets/images/Image2.png'
import img3 from '../assets/images/Image3.png'
import img4 from '../assets/images/Image4.png'
import img5 from '../assets/images/Image5.png'
import imgBox2 from '../assets/images/ImageBox2.png'

function SectionLabel({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#6b7280" strokeWidth="2"><g clipPath="url(#cpr)"><path d="M2.5 7.5L10 1.667L17.5 7.5V16.667a1.667 1.667 0 01-1.667 1.666H4.167A1.667 1.667 0 012.5 16.667V7.5z" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.5 18.333V10H12.5V18.333" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="cpr"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>
      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#6b7280', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{text}</span>
    </div>
  )
}

const PHOTOS = [
  { label: 'Custom Home — Sierra Vista',       img: img1 },
  { label: 'Spec Home — Cochise County',        img: img2 },
  { label: 'Metal Roof — Hereford AZ',          img: img3 },
  { label: 'Custom Build — Fort Huachuca',      img: img4 },
  { label: 'Home Renovation — Bisbee',          img: img5 },
  { label: 'Commercial Project — Sierra Vista', img: imgBox2 },
]

export default function Projects() {
  return (
    <section id="projects" style={{ background: '#fff', padding: '5rem 2rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionLabel text="Projects" />
        <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>
          Featured Projects
        </h2>
        <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: 620, marginBottom: '3rem' }}>
          See the craftsmanship and care that define every Su Casa Builders project. Our portfolio includes custom homes, additions, and specialty work completed across Southeast Arizona. Each project reflects our attention to detail, quality materials, and commitment to lasting construction.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
          {PHOTOS.map(p => (
            <div key={p.label} style={{ position: 'relative', height: 220, borderRadius: 6, overflow: 'hidden', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.querySelector('.overlay').style.opacity = '1'}
              onMouseLeave={e => e.currentTarget.querySelector('.overlay').style.opacity = '0'}>
              <img src={p.img} alt={p.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s' }}>
                <span style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem', borderBottom: '1px solid white', paddingBottom: 2 }}>{p.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
