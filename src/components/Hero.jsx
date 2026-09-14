import { useState, useEffect, useRef } from 'react'
import heroImg from '../assets/images/hero/hero-bg.png'
import patternImg from '../assets/images/hero/pattern-hero.png'
import infoBg from '../assets/images/hero/hero-info-abstract.png'
import videoThumb from '../assets/images/hero/video-thumb.png'
import heroVideo from '../assets/images/hero/hero-video.mp4'
import icoPlay from '../assets/icons/ico-play.svg'
import icoNext from '../assets/icons/ico-next.svg'
import icoSound from '../assets/icons/ico-sound.svg'
import icoHd from '../assets/icons/ico-hd.svg'
import icoFullscreen from '../assets/icons/ico-fullscreen.svg'
import icoInfo from '../assets/icons/ico-info.svg'

function VideoPlayer() {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)

  const handlePlay = () => {
    setPlaying(true)
    if (videoRef.current) videoRef.current.play()
  }

  const handleEnded = () => {
    setPlaying(false)
    if (videoRef.current) videoRef.current.currentTime = 0
  }

  return (
    <div
      style={{ position: 'relative', width: '100%', background: '#000', cursor: playing ? 'default' : 'pointer' }}
      onClick={!playing ? handlePlay : undefined}
    >
      {/* Video always visible — paused at frame 0 acts as the thumbnail */}
      <video
        ref={videoRef}
        src={heroVideo}
        controls={playing}
        playsInline
        preload="metadata"
        onEnded={handleEnded}
        style={{ display: 'block', width: '100%', height: 'auto' }}
      />

      {/* Play button overlay — shown when not playing */}
      {!playing && (
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none',
        }}>
          <div style={{
            width: 80, height: 56, borderRadius: 14,
            background: '#FF0000',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <polygon points="9.5,7 19,12 9.5,17"/>
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Hero() {
  const [scrolledPast, setScrolledPast] = useState(false)
  const [btnHovered, setBtnHovered] = useState(false)

  useEffect(() => {
    const heroEl = document.getElementById('home')
    const fn = () => {
      const heroH = heroEl ? heroEl.offsetHeight : 600
      setScrolledPast(window.scrollY > heroH * 0.5)
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const handleArrow = (e) => {
    e.preventDefault()
    if (scrolledPast) {
      document.getElementById('home').scrollIntoView({ behavior: 'smooth' })
    } else {
      document.getElementById('info').scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home">
      {/* ── Hero image ── */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: 863,
        overflow: 'hidden',
      }}>
        <img src={heroImg} alt="" aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center 30%',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(18,18,18,0.47)' }} />

        {/* Text — bottom-left, aligned to page grid */}
        <div style={{
          position: 'absolute', bottom: 80, left: 0, right: 0,
        }}>
          <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 75px' }}>
            <div style={{ maxWidth: 900 }}>
              <h1 style={{
                color: '#FFFFFF',
                fontFamily: '"DM Sans", sans-serif',
                fontSize: 'clamp(32px, 4.44vw, 64px)',
                fontWeight: 400,
                lineHeight: '130%',
                margin: '0 0 42px',
              }}>
                Su Casa Builders – General Contractor in Sierra Vista, AZ
              </h1>
              <p style={{
                color: 'rgba(255,255,255,0.92)',
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'clamp(18px, 2.22vw, 32px)',
                fontWeight: 500,
                lineHeight: '130%',
                margin: 0,
              }}>
                We have quality nailed.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll arrow — bottom right */}
        <button
          onClick={handleArrow}
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
          aria-label={scrolledPast ? 'Scroll to top' : 'Scroll down'}
          style={{
            position: 'fixed', right: '1.5rem', bottom: '5rem', zIndex: 200,
            width: 44, height: 44, borderRadius: '50%',
            background: btnHovered ? '#f0f4f8' : '#fff',
            border: '2px solid #245079',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', outline: 'none',
            transform: btnHovered ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.2s, background 0.2s',
            boxShadow: btnHovered ? '0 4px 16px rgba(0,0,0,0.25)' : 'none',
          }}
        >
          <svg
            width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#245079" strokeWidth="2"
            style={{ transform: scrolledPast ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.4s ease' }}
          >
            <line x1="8" y1="2" x2="8" y2="14"/><polyline points="4,10 8,14 12,10"/>
          </svg>
        </button>
      </div>

      {/* ── Info section ── */}
      <div id="info" style={{ position: 'relative', background: '#E1DBD0', overflow: 'hidden' }}>
        {/* Architectural background image */}
        <img
          src={infoBg}
          alt="" aria-hidden="true"
          style={{
            position: 'absolute', left: 753, top: 1,
            width: 685, height: 342,
            opacity: 0.5,
            transform: 'scaleX(-1)',
            mixBlendMode: 'lighten',
            pointerEvents: 'none', userSelect: 'none',
            objectFit: 'cover',
          }}
        />
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
          maxWidth: 1440, margin: '0 auto',
          padding: '100px 76px', textAlign: 'center',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 50,
        }}>
          <p style={{
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 500,
            fontSize: 24,
            lineHeight: '150%',
            color: '#000000',
            textAlign: 'center',
            width: 1236,
            maxWidth: '100%',
            margin: 0,
          }}>
            Su Casa Builders, LLC is a trusted general contractor in Sierra Vista, AZ, specializing in framing, painting, custom home construction, and outdoor living projects. Since 2003, our team has delivered quality craftsmanship and honest service across Cochise County. Whether you need a reliable partner for new construction, a home addition, or light commercial work, we bring integrity, experience, and precision to every job. We also build custom features such as pergolas, metal awnings, and install Pella windows, helping homeowners enhance both function and curb appeal.
          </p>

          {/* CTA button */}
          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 16,
            background: '#245079', color: '#E1DBD0',
            height: 66, padding: '20px 30px',
            textDecoration: 'none',
            fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: 18,
            border: '1.5px solid #245079',
            transition: 'background 0.2s, color 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#245079' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#245079'; e.currentTarget.style.color = '#E1DBD0' }}>
            Start Your Project Today
            <svg width="28" height="12" viewBox="0 0 28 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="0" y1="6" x2="24" y2="6"/><polyline points="19,1 24,6 19,11"/>
            </svg>
          </a>

          {/* ── Video player ── */}
          <div className="video-player" style={{
            position: 'relative',
            width: '100%',
            maxWidth: 1290,
            margin: '0 auto',
            borderRadius: 20,
            overflow: 'hidden',
            border: '3px solid #8B1A1A',
            boxShadow: '0 4px 32px rgba(0,0,0,0.18)',
          }}>
            <VideoPlayer />
          </div>

        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #home > div:first-child { height: 480px !important; }
          #home > div:first-child > div:last-child { bottom: 24px !important; }
          #home > div:first-child > div:last-child > div { padding: 0 24px !important; }
          #home > div:first-child > div:last-child > div h1 { font-size: 26px !important; margin-bottom: 12px !important; }
          #home > div:first-child > div:last-child > div p { font-size: 16px !important; }
          #home #info > div { padding: 48px 24px !important; gap: 28px !important; }
          #home #info p { width: 100% !important; font-size: 15px !important; line-height: 160% !important; }
          #home #info a { font-size: 14px !important; height: auto !important; padding: 14px 20px !important; width: 100% !important; box-sizing: border-box !important; }
          #home #info img[style*="left: 753"] { display: none !important; }
          #home .video-player { display: none !important; }
        }
      `}</style>
    </section>
  )
}
