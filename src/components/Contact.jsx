function SectionLabel({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#6b7280', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{text}</span>
    </div>
  )
}

export default function Contact() {
  return (
    <section id="contact" style={{ background: '#fff', padding: '5rem 2rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
        {/* Left info */}
        <div>
          <SectionLabel text="Contact Us" />
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#111827', marginBottom: '0.75rem', lineHeight: 1.2 }}>
            Contact Su Casa Builders<br />in Sierra Vista AZ
          </h2>
          <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            Every project starts with a conversation. Reach out today, and let's explore how we can make your home fit your lifestyle.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Phone */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', border: '1.5px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.24 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <p style={{ fontWeight: 600, fontSize: '0.9rem', color: '#111827', marginBottom: '0.2rem' }}>Phone</p>
                <a href="tel:5203358554" style={{ color: '#374151', textDecoration: 'none', fontSize: '0.9rem' }}>520-335-8554</a>
              </div>
            </div>

            {/* Hours */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', border: '1.5px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <p style={{ fontWeight: 600, fontSize: '0.9rem', color: '#111827', marginBottom: '0.2rem' }}>Office Hours</p>
                <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Monday - Friday: 7:30 AM – 4:00 PM</p>
              </div>
            </div>

            {/* Address */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', border: '1.5px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <p style={{ fontWeight: 600, fontSize: '0.9rem', color: '#111827', marginBottom: '0.2rem' }}>Address</p>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.25rem' }}>5362 S Santa Elena Ave, Sierra Vista, AZ 85650</p>
                <a href="https://maps.google.com/?q=5362+S+Santa+Elena+Ave+Sierra+Vista+AZ+85650" target="_blank" rel="noreferrer"
                  style={{ color: '#374151', fontSize: '0.8rem', fontWeight: 500 }}>Click for Directions</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right map placeholder */}
        <div style={{ height: 380, borderRadius: 8, overflow: 'hidden', background: '#e5e7eb', position: 'relative' }}>
          {/* Simple map illustration */}
          <svg width="100%" height="100%" viewBox="0 0 400 380" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="380" fill="#f3f4f6"/>
            {/* Roads */}
            <line x1="0" y1="190" x2="400" y2="190" stroke="#d1d5db" strokeWidth="8"/>
            <line x1="200" y1="0" x2="200" y2="380" stroke="#d1d5db" strokeWidth="8"/>
            <line x1="0" y1="95" x2="400" y2="95" stroke="#e5e7eb" strokeWidth="4"/>
            <line x1="0" y1="285" x2="400" y2="285" stroke="#e5e7eb" strokeWidth="4"/>
            <line x1="100" y1="0" x2="100" y2="380" stroke="#e5e7eb" strokeWidth="4"/>
            <line x1="300" y1="0" x2="300" y2="380" stroke="#e5e7eb" strokeWidth="4"/>
            {/* Blocks */}
            <rect x="110" y="100" width="80" height="80" fill="#e5e7eb" rx="2"/>
            <rect x="210" y="100" width="80" height="80" fill="#e5e7eb" rx="2"/>
            <rect x="110" y="200" width="80" height="80" fill="#e5e7eb" rx="2"/>
            <rect x="210" y="200" width="80" height="80" fill="#e5e7eb" rx="2"/>
            {/* Pin */}
            <circle cx="200" cy="190" r="18" fill="#374151" opacity="0.9"/>
            <circle cx="200" cy="185" r="6" fill="white"/>
            <polygon points="200,207 194,185 206,185" fill="#374151" opacity="0.9"/>
            {/* Label */}
            <rect x="120" y="218" width="160" height="24" rx="4" fill="white" opacity="0.9"/>
            <text x="200" y="234" textAnchor="middle" fontSize="10" fill="#374151" fontFamily="Inter, sans-serif">5362 S Santa Elena Ave</text>
          </svg>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
