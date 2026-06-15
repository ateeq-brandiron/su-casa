import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section style={{backgroundColor: '#1e2433', padding: '5rem 2rem'}}>
      <div style={{maxWidth: '1280px', margin: '0 auto', textAlign: 'center'}}>
        <h2 style={{fontSize: 'clamp(1.6rem, 3vw, 2.6rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.3, marginBottom: '1rem'}}>
          Let's bring your vision to life with skill, quality, and integrity.
        </h2>
        <p style={{color: '#9ca3af', fontSize: '1rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem'}}>
          Whether you're ready to start or just exploring options, we'd love to talk.
          Free consultations. No pressure.
        </p>
        <a href="#contact" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          backgroundColor: '#2d6a9f', color: '#ffffff',
          padding: '1rem 2.5rem', borderRadius: '6px', textDecoration: 'none',
          fontWeight: 700, fontSize: '1rem', transition: 'background-color 0.2s'
        }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor='#245a8a'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor='#2d6a9f'}>
          Get Your Free Quote
        </a>
      </div>
    </section>
  )
}
