export default function CTA() {
  return (
    <section style={{ position: 'relative', padding: '5rem 2rem', overflow: 'hidden' }}>
      {/* Background: house photo simulation */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, #2a3a2a 0%, #1a2510 40%, #3a4530 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)' }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: '#fff', lineHeight: 1.3, marginBottom: '1rem' }}>
          Let's bring your vision to life with skill, quality, and integrity.
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem', marginBottom: '2rem' }}>
          Your home deserves a builder who values craftsmanship and clear communication.
        </p>
        <a href="#contact" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
          border: '1.5px solid rgba(255,255,255,0.85)', color: '#fff', background: 'transparent',
          padding: '0.85rem 2rem', borderRadius: 4, textDecoration: 'none',
          fontWeight: 600, fontSize: '0.9rem', transition: 'all 0.2s'
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}>
          Contact Su Casa Builders Today
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><line x1="2" y1="7" x2="12" y2="7"/><polyline points="8,3 12,7 8,11"/></svg>
        </a>
      </div>
    </section>
  )
}
