import { useState } from 'react'

function IconCircle({ children }) {
  return (
    <div style={{ width: 48, height: 48, borderRadius: '50%', border: '1.5px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      {children}
    </div>
  )
}

function SectionLabel({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#374151" strokeWidth="2"><g clipPath="url(#ccon)"><path d="M2.5 7.5L10 1.667L17.5 7.5V16.667a1.667 1.667 0 01-1.667 1.666H4.167A1.667 1.667 0 012.5 16.667V7.5z" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.5 18.333V10H12.5V18.333" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="ccon"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>
      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#374151', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{text}</span>
    </div>
  )
}

const INPUT_STYLE = {
  width: '100%', boxSizing: 'border-box',
  fontFamily: 'Manrope, sans-serif', fontSize: 15, fontWeight: 400, color: '#111827',
  border: '1px solid #d1d5db', borderRadius: 4,
  padding: '12px 14px', outline: 'none',
  background: '#fff',
  transition: 'border-color 0.2s',
}

function Field({ label, ...props }) {
  const [focused, setFocused] = useState(false)
  const isTextarea = props.as === 'textarea'
  const El = isTextarea ? 'textarea' : 'input'
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: 14, color: '#374151' }}>{label}</label>
      <El
        {...props}
        as={undefined}
        rows={isTextarea ? 5 : undefined}
        style={{ ...INPUT_STYLE, borderColor: focused ? '#245079' : '#d1d5db' }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  )
}

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/SuCasaBuilder03@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" style={{ background: '#fff' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '100px 75px', display: 'flex', flexDirection: 'column', gap: 60 }}>

        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20 }}>
          <SectionLabel text="Contact Us" />
          <h2 style={{ fontFamily: 'Manrope, sans-serif', fontSize: 48, fontWeight: 500, color: '#245079', lineHeight: '130%', margin: 0 }}>
            Contact Su Casa Builders in Sierra Vista, AZ
          </h2>
          <p style={{ fontFamily: 'Manrope, sans-serif', color: '#3C3C3C', fontSize: 20, fontWeight: 400, lineHeight: '140%', margin: 0 }}>
            Every project starts with a conversation. Reach out today, and let's explore how we can make your home fit your lifestyle.
          </p>
        </div>

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 96, alignItems: 'flex-start' }}>

          {/* Left: contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <IconCircle>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#245079" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.24 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </IconCircle>
              <div>
                <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 18, color: '#111827', margin: '0 0 4px' }}>Phone</p>
                <a href="tel:5203358554" style={{ fontFamily: 'Manrope, sans-serif', color: '#3C3C3C', textDecoration: 'none', fontSize: 16, fontWeight: 400 }}>520-335-8554</a>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <IconCircle>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#245079" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </IconCircle>
              <div>
                <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 18, color: '#111827', margin: '0 0 4px' }}>Office Hours</p>
                <p style={{ fontFamily: 'Manrope, sans-serif', color: '#3C3C3C', fontSize: 16, fontWeight: 400, margin: 0 }}>Monday – Friday: 7:30 AM – 4:00 PM</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <IconCircle>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#245079" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </IconCircle>
              <div>
                <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 18, color: '#111827', margin: '0 0 4px' }}>Address</p>
                <p style={{ fontFamily: 'Manrope, sans-serif', color: '#3C3C3C', fontSize: 16, fontWeight: 400, margin: '0 0 6px' }}>5362 S Santa Elena Ave, Sierra Vista, AZ 85650</p>
                <a href="https://maps.google.com/?q=5362+S+Santa+Elena+Ave+Sierra+Vista+AZ+85650" target="_blank" rel="noreferrer"
                  style={{ fontFamily: 'Manrope, sans-serif', color: '#245079', fontSize: 14, fontWeight: 600, textDecoration: 'underline' }}>Click for Directions</a>
              </div>
            </div>
          </div>

          {/* Right: contact form */}
          <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 8, padding: '2.5rem' }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#245079" strokeWidth="2" style={{ marginBottom: 16 }}>
                  <circle cx="12" cy="12" r="10"/><polyline points="9,12 11,14 15,10"/>
                </svg>
                <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 22, color: '#111827', marginBottom: 8 }}>Message Sent!</h3>
                <p style={{ fontFamily: 'Manrope, sans-serif', color: '#3C3C3C', fontSize: 15 }}>Thank you for reaching out. We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <Field label="Full Name *" name="name" type="text" required placeholder="John Smith" value={form.name} onChange={handleChange} />
                  <Field label="Email *" name="email" type="email" required placeholder="john@example.com" value={form.email} onChange={handleChange} />
                </div>
                <Field label="Phone" name="phone" type="tel" placeholder="520-000-0000" value={form.phone} onChange={handleChange} />
                <Field label="Message *" name="message" as="textarea" required placeholder="Tell us about your project…" value={form.message} onChange={handleChange} />

                {status === 'error' && (
                  <p style={{ fontFamily: 'Manrope, sans-serif', color: '#b91c1c', fontSize: 14, margin: 0 }}>
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}

                <button type="submit" disabled={status === 'sending'}
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 12,
                    background: status === 'sending' ? '#6b96b5' : '#245079', color: '#fff',
                    height: 52, padding: '0 28px', border: 'none', cursor: status === 'sending' ? 'default' : 'pointer',
                    fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: 15,
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => { if (status !== 'sending') e.currentTarget.style.background = '#1a3d5c' }}
                  onMouseLeave={e => { if (status !== 'sending') e.currentTarget.style.background = '#245079' }}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                  {status !== 'sending' && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="2" y1="8" x2="14" y2="8"/><polyline points="10,4 14,8 10,12"/>
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > div > div:last-child { grid-template-columns: 1fr !important; gap: 40px !important; }
          #contact > div { padding: 60px 24px !important; }
        }
      `}</style>
    </section>
  )
}
