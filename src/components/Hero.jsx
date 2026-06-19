import heroImg from '../assets/images/Hero.png'
import patternImg from '../assets/images/abstract-architectural-backgroundtechnological-designgeometric-vector-illustration_531521-651 1.png'
import videoThumb from '../assets/images/image19.png'
import icoPlay from '../assets/icons/ico-play.svg'
import icoNext from '../assets/icons/ico-next.svg'
import icoSound from '../assets/icons/ico-sound.svg'
import icoHd from '../assets/icons/ico-hd.svg'
import icoFullscreen from '../assets/icons/ico-fullscreen.svg'
import icoInfo from '../assets/icons/ico-info.svg'

export default function Hero() {
  return (
    <section id="home">
      {/* ── Hero image ── */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: 819,
        overflow: 'hidden',
      }}>
        <img src={heroImg} alt="" aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center 30%',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.20)' }} />

        {/* Text — left-aligned, lower-middle portion */}
        <div style={{
          position: 'absolute', bottom: '32%', left: '50%',
          transform: 'translateX(-50%)',
          width: '100%', maxWidth: 1280,
          padding: '0 2rem',
        }}>
          <div style={{ maxWidth: 900 }}>
            <h1 style={{
              color: '#FFF',
              fontFamily: '"DM Sans", sans-serif',
              fontSize: 64,
              fontWeight: 400,
              lineHeight: '130%',
              marginBottom: '1rem',
            }}>
              Su Casa Builders – General Contractor in Sierra Vista AZ
            </h1>
            <p style={{
              color: 'rgba(255,255,255,0.92)',
              fontFamily: 'Manrope, sans-serif',
              fontSize: 32,
              fontWeight: 500,
              lineHeight: '66.766px',
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
      <div id="info" style={{ position: 'relative', background: '#EDE5D0', overflow: 'hidden' }}>
        {/* Geometric background pattern — right side */}
        <img
          src={patternImg}
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute', right: 0, top: '50%',
            transform: 'translateY(-50%)',
            height: '140%', width: 'auto',
            opacity: 0.35, pointerEvents: 'none', userSelect: 'none',
          }}
        />

        <div style={{
          position: 'relative', zIndex: 1,
          maxWidth: 900, margin: '0 auto',
          padding: '80px 2rem', textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 500,
            fontSize: 24,
            lineHeight: '150%',
            color: '#000',
            textAlign: 'center',
            marginBottom: '2.5rem',
          }}>
            Su Casa Builders LLC is a trusted general contractor in Sierra Vista, AZ, specializing in framing, painting,
            custom home construction, and outdoor living projects. Since 2003, our team has delivered quality
            craftsmanship and honest service across Cochise County. Whether you need a reliable partner for new
            construction, a home addition, or light commercial work, we bring integrity, experience, and precision to
            every job. We also build custom features such as pergolas, metal awnings, and install Pella windows, helping
            homeowners enhance both function and curb appeal.
          </p>

          {/* CTA button */}
          <a href="#contact" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16,
            background: '#245079', color: '#fff',
            height: 66, padding: '20px 30px',
            textDecoration: 'none',
            fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.95rem',
            marginBottom: '3.5rem',
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#1b3d5e' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#245079' }}>
            Start Your Project Today
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="2" y1="8" x2="14" y2="8"/><polyline points="10,4 14,8 10,12"/>
            </svg>
          </a>

          {/* ── Fake video player ── */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: 1038,
            margin: '0 auto',
            borderRadius: 10,
            overflow: 'hidden',
            border: '3px solid #8B1A1A',
            boxShadow: '0 4px 32px rgba(0,0,0,0.18)',
            cursor: 'default',
            userSelect: 'none',
          }}>
            {/* Thumbnail */}
            <img
              src={videoThumb}
              alt="Company Overview Video"
              style={{ display: 'block', width: '100%', height: 'auto' }}
            />

            {/* Top bar overlay */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '10px 14px',
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)',
            }}>
              <span style={{
                color: '#fff', fontSize: '0.85rem', fontFamily: 'Inter, sans-serif',
                fontWeight: 500, letterSpacing: '0.01em',
              }}>
                Company Overview Video
              </span>
              <img src={icoInfo} alt="" style={{ width: 20, height: 20, opacity: 0.9 }} />
            </div>

            {/* Centre play button */}
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{
                width: 68, height: 48, borderRadius: 10,
                background: '#FF0000',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 2px 12px rgba(0,0,0,0.5)',
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <polygon points="9,6 20,12 9,18"/>
                </svg>
              </div>
            </div>

            {/* Bottom controls overlay */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)',
            }}>
              {/* Progress bar */}
              <div style={{ position: 'relative', height: 4, background: 'rgba(255,255,255,0.3)', margin: '0 0 8px' }}>
                <div style={{ height: '100%', width: '33%', background: '#FF0000' }} />
                <div style={{
                  position: 'absolute', top: '50%', left: '33%',
                  transform: 'translate(-50%, -50%)',
                  width: 12, height: 12, borderRadius: '50%',
                  background: '#FF0000',
                }} />
              </div>

              {/* Controls row */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '0 12px 10px',
              }}>
                {/* Left controls */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <img src={icoPlay}       alt="Play"       style={{ width: 18, height: 18, opacity: 0.9 }} />
                  <img src={icoNext}       alt="Next"       style={{ width: 18, height: 18, opacity: 0.9 }} />
                  <img src={icoSound}      alt="Sound"      style={{ width: 18, height: 18, opacity: 0.9 }} />
                  <span style={{
                    color: '#fff', fontSize: '0.75rem', fontFamily: 'Inter, sans-serif',
                    fontWeight: 500, letterSpacing: '0.02em',
                  }}>
                    5:07 / 15:28
                  </span>
                </div>
                {/* Right controls */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <img src={icoHd}         alt="HD"         style={{ width: 22, height: 22, opacity: 0.9 }} />
                  <img src={icoFullscreen} alt="Fullscreen" style={{ width: 18, height: 18, opacity: 0.9 }} />
                </div>
              </div>
            </div>
          </div>
          {/* end fake video player */}

        </div>
      </div>
    </section>
  )
}
