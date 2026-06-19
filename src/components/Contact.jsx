function SectionLabel({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#374151" strokeWidth="2"><g clipPath="url(#ccon)"><path d="M2.5 7.5L10 1.667L17.5 7.5V16.667a1.667 1.667 0 01-1.667 1.666H4.167A1.667 1.667 0 012.5 16.667V7.5z" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.5 18.333V10H12.5V18.333" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="ccon"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>
      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#374151', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{text}</span>
    </div>
  )
}

function IconCircle({ children }) {
  return (
    <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#245079', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {children}
    </div>
  )
}

export default function Contact() {
  return (
    <section id="contact" style={{ background: '#fff' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '100px 75px', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 96, alignItems: 'start' }}>
        {/* Left info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 50 }}>
          {/* Header block */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <SectionLabel text="Contact Us" />
            <h2 style={{ fontFamily: 'Manrope, sans-serif', fontSize: 48, fontWeight: 400, color: '#245079', lineHeight: '130%' }}>
              Contact Su Casa Builders in Sierra Vista AZ
            </h2>
            <p style={{ fontFamily: 'Manrope, sans-serif', color: '#3C3C3C', fontSize: 20, fontWeight: 400, lineHeight: '140%' }}>
              Every project starts with a conversation. Reach out today, and let's explore how we can make your home fit your lifestyle.
            </p>
          </div>

          {/* Contact details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* Phone */}
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <IconCircle>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.24 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </IconCircle>
              <div>
                <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: 16, color: '#111827', marginBottom: 4 }}>Phone</p>
                <a href="tel:5203358554" style={{ fontFamily: 'Manrope, sans-serif', color: '#3C3C3C', textDecoration: 'none', fontSize: 16 }}>520-335-8554</a>
              </div>
            </div>

            {/* Hours */}
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <IconCircle>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </IconCircle>
              <div>
                <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: 16, color: '#111827', marginBottom: 4 }}>Office Hours</p>
                <p style={{ fontFamily: 'Manrope, sans-serif', color: '#3C3C3C', fontSize: 16 }}>Monday - Friday: 7:30 AM – 4:00 PM</p>
              </div>
            </div>

            {/* Address */}
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <IconCircle>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </IconCircle>
              <div>
                <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: 16, color: '#111827', marginBottom: 4 }}>Address</p>
                <p style={{ fontFamily: 'Manrope, sans-serif', color: '#3C3C3C', fontSize: 16, marginBottom: 6 }}>5362 S Santa Elena Ave, Sierra Vista, AZ 85650</p>
                <a href="https://maps.google.com/?q=5362+S+Santa+Elena+Ave+Sierra+Vista+AZ+85650" target="_blank" rel="noreferrer"
                  style={{ fontFamily: 'Manrope, sans-serif', color: '#245079', fontSize: 14, fontWeight: 600, textDecoration: 'underline' }}>Click for Directions</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: map */}
        <div style={{ height: 480, overflow: 'hidden' }}>
          <iframe
            title="Su Casa Builders location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-110.3336%2C31.5289%2C-110.2836%2C31.5689&layer=mapnik&marker=31.5489%2C-110.3086"
            style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
