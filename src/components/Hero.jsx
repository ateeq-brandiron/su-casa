import heroImg from '../assets/images/Hero.png'

export default function Hero() {
  return (
    <section id="home">
      {/* ── Hero ── */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: 720,
        marginTop: 72,
        overflow: 'hidden',
      }}>
        <img src={heroImg} alt="" aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center 30%',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.42)' }} />

        {/* Text — left-aligned, lower portion */}
        <div style={{
          position: 'absolute', bottom: '14%', left: '50%',
          transform: 'translateX(-50%)',
          width: '100%', maxWidth: 1280,
          padding: '0 2rem',
        }}>
          <div style={{ maxWidth: 560 }}>
            <h1 style={{
              color: '#FFF',
              fontFamily: '"DM Sans", sans-serif',
              fontSize: 'clamp(2rem, 4.5vw, 64px)',
              fontWeight: 400,
              lineHeight: '130%',
              marginBottom: '0.75rem',
            }}>
              Su Casa Builders –<br />General Contractor in<br />Sierra Vista AZ
            </h1>
            <p style={{
              color: 'rgba(255,255,255,0.92)',
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'clamp(1rem, 1.5vw, 20px)',
              fontWeight: 500,
              lineHeight: 1.5,
            }}>
              We have quality nailed.
            </p>
          </div>
        </div>

        {/* Scroll arrow — bottom right */}
        <a href="#info" style={{
          position: 'absolute', right: '2rem', bottom: '2rem', zIndex: 2,
          width: 44, height: 44, borderRadius: '50%',
          background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none',
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2">
            <line x1="8" y1="2" x2="8" y2="14"/><polyline points="4,10 8,14 12,10"/>
          </svg>
        </a>
      </div>

      {/* ── Info section ── */}
      <div id="info" style={{ background: '#f9fafb', padding: '3.5rem 2rem' }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr auto',
          gap: '3rem', alignItems: 'center',
        }}>
          <p style={{
            color: '#111827',
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'clamp(0.9rem, 1.1vw, 1rem)',
            fontWeight: 400,
            lineHeight: 1.85,
          }}>
            Su Casa Builders LLC is a trusted general contractor in Sierra Vista, AZ, specializing in framing, <strong>roofing</strong>, <strong>painting</strong>, and custom home projects. Since 2003, our team has delivered <strong>quality craftsmanship</strong> and <strong>honest service</strong> across Cochise County. Whether you need a reliable partner for new construction, a home addition, or light commercial work, we bring integrity, experience, and precision to every job.
          </p>
          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem', whiteSpace: 'nowrap',
            border: '1.5px solid #374151', color: '#374151', background: 'transparent',
            padding: '0.75rem 1.5rem', borderRadius: 4, textDecoration: 'none',
            fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: '0.9rem',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#374151'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#374151' }}>
            Start Your Project Today
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><line x1="2" y1="7" x2="12" y2="7"/><polyline points="8,3 12,7 8,11"/></svg>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #info > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
