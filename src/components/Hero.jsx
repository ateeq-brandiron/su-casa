import heroImg from '../assets/images/Hero.png'

export default function Hero() {
  return (
    <section id="home" style={{ margin: 0, padding: 0, background: '#fff' }}>
      {/* ── Hero ── */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: 719,
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
      <div id="info" style={{
        background: '#E8F8FF',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center',
        padding: '75px 76px', minHeight: 258,
      }}>
        <p style={{
          maxWidth: 1038,
          fontFamily: 'Manrope, sans-serif',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: 'clamp(1rem, 1.67vw, 24px)',
          lineHeight: '150%',
          textAlign: 'center',
          color: '#000000',
          margin: 0,
        }}>
          Su Casa Builders LLC is a trusted general contractor in Sierra Vista, AZ, specializing in framing, roofing, painting, and custom home projects. Since 2003, our team has delivered quality craftsmanship and honest service across Cochise County. Whether you need a reliable partner for new construction, a home addition, or light commercial work, we bring integrity, experience, and precision to every job.
        </p>
      </div>
    </section>
  )
}
