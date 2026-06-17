import heroImg from '../assets/images/Hero.png'
import frame2 from '../assets/images/Frame2.png'

export default function Hero() {
  return (
    <section id="home">
      {/* ── Hero image with text overlay ── */}
      <div style={{ position: 'relative', width: '100%', height: 520, overflow: 'hidden', marginTop: 72 }}>
        <img src={heroImg} alt="Su Casa Builders project" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.40)' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', padding: '4rem 2rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 style={{
            width: 'min(751px, 100%)',
            color: '#FFF',
            fontFamily: '"DM Sans", sans-serif',
            fontSize: 'clamp(2.2rem, 5vw, 64px)',
            fontWeight: 400,
            lineHeight: '130%',
            marginBottom: '1rem',
          }}>
            Su Casa Builders – General Contractor in Sierra Vista AZ
          </h1>
          <p style={{
            color: 'rgba(255, 255, 255, 0.92)',
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'clamp(1.2rem, 2.5vw, 32px)',
            fontWeight: 500,
            lineHeight: '66.766px',
          }}>
            We have quality nailed.
          </p>
        </div>

        {/* Scroll arrow */}
        <a href="#info" style={{ position: 'absolute', right: '2rem', bottom: '2rem', zIndex: 2, width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2">
            <line x1="8" y1="2" x2="8" y2="14"/><polyline points="4,10 8,14 12,10"/>
          </svg>
        </a>
      </div>

      {/* ── Info section ── */}
      <div id="info" style={{ background: '#fff', padding: '5rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>
        <p style={{
          width: 'min(1236px, 100%)',
          color: '#000',
          textAlign: 'center',
          fontFamily: 'Manrope, sans-serif',
          fontSize: 'clamp(1rem, 1.8vw, 24px)',
          fontWeight: 500,
          lineHeight: '150%',
        }}>
          Su Casa Builders LLC is a trusted general contractor in Sierra Vista, AZ, specializing in framing, painting, custom home construction, and outdoor living projects. Since 2003, our team has delivered quality craftsmanship and honest service across Cochise County. Whether you need a reliable partner for new construction, a home addition, or light commercial work, we bring integrity, experience, and precision to every job. We also build custom features such as pergolas, metal awnings, and install Pella windows, helping homeowners enhance both function and curb appeal.
        </p>

        <a href="#contact" style={{
          display: 'flex',
          height: 66,
          padding: '20px 30px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 16,
          background: '#245079',
          color: '#fff',
          textDecoration: 'none',
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 600,
          fontSize: '1rem',
          transition: 'background 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = '#1d3f61' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#245079' }}>
          Start Your Project Today
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><line x1="2" y1="8" x2="14" y2="8"/><polyline points="9,3 14,8 9,13"/></svg>
        </a>

        {/* Large project image */}
        <div style={{
          width: 'min(1290px, 100%)',
          height: 'clamp(300px, 55vw, 708.614px)',
          borderRadius: 20,
          overflow: 'hidden',
        }}>
          <img src={frame2} alt="Su Casa Builders featured project" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        </div>
      </div>
    </section>
  )
}
