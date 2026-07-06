import phoneIcon from '../assets/icons/contact-phone.svg'
import clockIcon from '../assets/icons/contact-clock.svg'
import locationIcon from '../assets/icons/contact-location.svg'

function SectionLabel({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#374151" strokeWidth="2"><g clipPath="url(#ccon)"><path d="M2.5 7.5L10 1.667L17.5 7.5V16.667a1.667 1.667 0 01-1.667 1.666H4.167A1.667 1.667 0 012.5 16.667V7.5z" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.5 18.333V10H12.5V18.333" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="ccon"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>
      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#374151', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{text}</span>
    </div>
  )
}

function IconCircle({ src, alt }) {
  return (
    <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#245079', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src={src} alt={alt} style={{ width: 20, height: 20, objectFit: 'contain' }} />
    </div>
  )
}

export default function Contact() {
  return (
    <section id="contact" style={{ background: '#fff' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '100px 75px', display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 96, alignItems: 'stretch' }}>

        {/* Left: two frames */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 50 }}>

          {/* Frame 1: label + heading + text, 20px gap each */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <SectionLabel text="Contact Us" />
            <h2 style={{ fontFamily: 'Manrope, sans-serif', fontSize: 48, fontWeight: 500, color: '#245079', lineHeight: '130%', margin: 0 }}>
              Contact Su Casa Builders in Sierra Vista, AZ
            </h2>
            <p style={{ fontFamily: 'Manrope, sans-serif', color: '#3C3C3C', fontSize: 20, fontWeight: 400, lineHeight: '140%', margin: 0 }}>
              Every project starts with a conversation. Reach out today, and let's explore how we can make your home fit your lifestyle.
            </p>
          </div>

          {/* Frame 2: contact details, 40px gap between items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {/* Phone */}
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <IconCircle src={phoneIcon} alt="Phone" />
              <div>
                <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 18, color: '#111827', margin: '0 0 4px' }}>Phone</p>
                <a href="tel:5203358554" style={{ fontFamily: 'Manrope, sans-serif', color: '#3C3C3C', textDecoration: 'none', fontSize: 16, fontWeight: 400 }}>520-335-8554</a>
              </div>
            </div>

            {/* Hours */}
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <IconCircle src={clockIcon} alt="Office Hours" />
              <div>
                <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 18, color: '#111827', margin: '0 0 4px' }}>Office Hours</p>
                <p style={{ fontFamily: 'Manrope, sans-serif', color: '#3C3C3C', fontSize: 16, fontWeight: 400, margin: 0 }}>Monday – Friday: 7:30 AM – 4:00 PM</p>
              </div>
            </div>

            {/* Address */}
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <IconCircle src={locationIcon} alt="Address" />
              <div>
                <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 18, color: '#111827', margin: '0 0 4px' }}>Address</p>
                <p style={{ fontFamily: 'Manrope, sans-serif', color: '#3C3C3C', fontSize: 16, fontWeight: 400, margin: '0 0 6px' }}>5362 S Santa Elena Ave, Sierra Vista, AZ 85650</p>
                <a href="https://maps.google.com/?q=5362+S+Santa+Elena+Ave+Sierra+Vista+AZ+85650" target="_blank" rel="noreferrer"
                  style={{ fontFamily: 'Manrope, sans-serif', color: '#245079', fontSize: 14, fontWeight: 600, textDecoration: 'underline' }}>Click for Directions</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: map */}
        <div style={{ overflow: 'hidden', borderRadius: 4, alignSelf: 'stretch', minHeight: 480 }}>
          <iframe
            title="Su Casa Builders location"
            src="https://maps.google.com/maps?q=5362+S+Santa+Elena+Ave,+Sierra+Vista,+AZ+85650&output=embed&z=15"
            style={{ width: '100%', height: '100%', minHeight: 480, border: 'none', display: 'block' }}
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
