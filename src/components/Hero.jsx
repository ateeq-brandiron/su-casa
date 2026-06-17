import heroImg from '../assets/images/Hero.png'
import frame2 from '../assets/images/Frame2.png'

/* ── Inline SVG icons from Figma export ── */
function IconPlay() {
  return (
    <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 28.5466V-4.57764e-05L27.3418 14.2246L0 28.5466Z" fill="white"/>
    </svg>
  )
}
function IconPlayCtrl() {
  return (
    <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.48828 26.4797V2.6637L20.8388 14.5717L1.48828 26.4797Z" fill="#EAEAEA"/>
      <path d="M1.87793 2.02991L21.2285 13.9381L22.2588 14.5719L21.2285 15.2057L1.87793 27.1139L0.744141 27.8112V1.33167L1.87793 2.02991Z" stroke="black" strokeOpacity="0.1" strokeWidth="1.48849"/>
    </svg>
  )
}
function IconNext() {
  return (
    <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="n1" maskUnits="userSpaceOnUse" x="-0.511719" y="-0.0230713" width="22" height="24" fill="black"><rect fill="white" x="-0.511719" y="-0.0230713" width="22" height="24"/><path fillRule="evenodd" clipRule="evenodd" d="M1.48828 2.97693L13.3963 11.9079L1.48828 20.8389V2.97693ZM19.3528 2.97693H16.3758V20.8389H19.3528V2.97693Z"/></mask>
      <path fillRule="evenodd" clipRule="evenodd" d="M1.48828 2.97693L13.3963 11.9079L1.48828 20.8389V2.97693ZM19.3528 2.97693H16.3758V20.8389H19.3528V2.97693Z" fill="#EAEAEA"/>
    </svg>
  )
}
function IconSound() {
  return (
    <svg width="23" height="31" viewBox="0 0 23 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="s1" maskUnits="userSpaceOnUse" x="-0.511719" y="-0.406494" width="24" height="32" fill="black"><rect fill="white" x="-0.511719" y="-0.406494" width="24" height="32"/><path fillRule="evenodd" clipRule="evenodd" d="M1.48828 11.036H7.44227L14.8848 3.59351V27.4095L7.44227 19.967H1.48828V11.036ZM17.8589 9.54633V21.4543L20.315 18.1796C21.5058 16.5919 21.5058 14.4088 20.315 12.821L17.8589 9.54633Z"/></mask>
      <path fillRule="evenodd" clipRule="evenodd" d="M1.48828 11.036H7.44227L14.8848 3.59351V27.4095L7.44227 19.967H1.48828V11.036ZM17.8589 9.54633V21.4543L20.315 18.1796C21.5058 16.5919 21.5058 14.4088 20.315 12.821L17.8589 9.54633Z" fill="#EAEAEA"/>
    </svg>
  )
}
function IconHD() {
  return (
    <svg width="32" height="27" viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="11.917" y="1.48718" width="19.3505" height="13.3965" rx="1.48849" fill="#EE1A26"/>
      <path d="M14.8994 4.46277H16.3879V7.43976H19.3649V4.46277H20.8534V11.9053H19.3649V8.92826H16.3879V11.9053H14.8994V4.46277Z" fill="#F1F2F1"/>
      <path d="M22.3419 4.46277H26.8074V5.95127H23.8304V10.4168H26.8074V11.9053H22.3419V4.46277Z" fill="#F1F2F1"/>
      <path d="M26.8074 10.4168V5.95127H28.2959V10.4168H26.8074Z" fill="#F1F2F1"/>
    </svg>
  )
}
function IconFullscreen() {
  return (
    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25.3042 1.48853H16.3733V4.46552H22.3272V10.4195H25.3042V1.48853Z" fill="#EAEAEA"/>
      <path d="M25.3042 16.3735H22.3272V22.3275H16.3733V25.3045H25.3042V16.3735Z" fill="#EAEAEA"/>
      <path d="M4.46528 10.4195V4.46552H10.4193V1.48853H1.48828V10.4195H4.46528Z" fill="#EAEAEA"/>
      <path d="M1.48828 16.3735V25.3045H10.4193V22.3275H4.46528V16.3735H1.48828Z" fill="#EAEAEA"/>
    </svg>
  )
}
function IconInfo() {
  return (
    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M31.2582 16.3735C31.2582 24.5942 24.594 31.2585 16.3733 31.2585C8.15254 31.2585 1.48828 24.5942 1.48828 16.3735C1.48828 8.15279 8.15254 1.48853 16.3733 1.48853C24.594 1.48853 31.2582 8.15279 31.2582 16.3735ZM17.8618 7.44252V10.4195H14.8848V7.44252H17.8618ZM17.8618 25.3045V13.3965H14.8848V25.3045H17.8618Z" fill="#EAEAEA"/>
    </svg>
  )
}

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

        {/* ── Video player card ── */}
        <div style={{
          position: 'relative',
          width: 'min(1290px, 100%)',
          height: 'clamp(300px, 55vw, 708.614px)',
          borderRadius: 20,
          overflow: 'hidden',
        }}>
          {/* Background photo */}
          <img src={frame2} alt="Su Casa Builders featured project" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />

          {/* Dark scrim */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.10) 45%, transparent 100%)' }} />

          {/* Center play button */}
          <button style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -60%)', background: 'rgba(255,255,255,0.18)', border: '2px solid rgba(255,255,255,0.55)', borderRadius: '50%', width: 88, height: 88, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(4px)', transition: 'background 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.30)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.18)' }}>
            <IconPlay />
          </button>

          {/* Bottom control bar */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Progress bar */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ height: 3, background: 'rgba(255,255,255,0.25)', borderRadius: 2, position: 'relative' }}>
                <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '35%', background: '#fff', borderRadius: 2 }} />
                <div style={{ position: 'absolute', left: '35%', top: '50%', transform: 'translate(-50%,-50%)', width: 10, height: 10, borderRadius: '50%', background: '#fff' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <IconPlayCtrl />
                  <IconNext />
                  <IconSound />
                </div>
                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem', fontFamily: 'Manrope, sans-serif', whiteSpace: 'nowrap' }}>0:35 / 1:42</span>
                <div style={{ flex: 1 }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <IconHD />
                  <IconInfo />
                  <IconFullscreen />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
