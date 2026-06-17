import heroImg from '../assets/images/Hero.png'

export default function Hero() {
  return (
    <section id="home">
      {/* Full-width hero image with text overlay */}
      <div style={{ position: 'relative', width: '100%', height: 520, overflow: 'hidden', marginTop: 72 }}>
        <img src={heroImg} alt="Su Casa Builders project" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        {/* Dark overlay for text legibility */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.40)' }} />

        {/* Text overlay */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', padding: '4rem 2rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.2, maxWidth: 520, marginBottom: '1rem' }}>
            Su Casa Builders –<br />General Contractor in<br />Sierra Vista AZ
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.9)', fontWeight: 400 }}>
            We have quality nailed.
          </p>
        </div>

        {/* Scroll arrow */}
        <a href="#about-intro" style={{ position: 'absolute', right: '2rem', bottom: '2rem', zIndex: 2, width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2">
            <line x1="8" y1="2" x2="8" y2="14"/><polyline points="4,10 8,14 12,10"/>
          </svg>
        </a>
      </div>

      {/* Below-hero split content */}
      <div id="about-intro" style={{ background: '#f9fafb', padding: '3.5rem 2rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: '3rem', alignItems: 'center' }}>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: '#374151', maxWidth: 560 }}>
            Su Casa Builders LLC is a trusted general contractor in Sierra Vista, AZ, specializing in <strong>framing</strong>, <strong>roofing</strong>, <strong>painting</strong>, and custom home projects. Since 2003, our team has delivered <strong>quality craftsmanship</strong> and <strong>honest service</strong> across Cochise County. Whether you need a reliable partner for new construction, a home addition, or light commercial work, we bring integrity, experience, and precision to every job.
          </p>
          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem', whiteSpace: 'nowrap',
            border: '1.5px solid #374151', color: '#374151', background: 'transparent',
            padding: '0.75rem 1.5rem', borderRadius: 4, textDecoration: 'none',
            fontWeight: 600, fontSize: '0.9rem', transition: 'all 0.2s'
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#374151'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#374151' }}>
            Start Your Project Today
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><line x1="2" y1="7" x2="12" y2="7"/><polyline points="8,3 12,7 8,11"/></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
