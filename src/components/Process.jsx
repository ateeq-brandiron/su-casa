import processBg from '../assets/images/Process.png'

function SectionLabel({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#6b7280" strokeWidth="2"><g clipPath="url(#cp)"><path d="M2.5 7.5L10 1.667L17.5 7.5V16.667a1.667 1.667 0 01-1.667 1.666H4.167A1.667 1.667 0 012.5 16.667V7.5z" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.5 18.333V10H12.5V18.333" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="cp"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>
      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#6b7280', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{text}</span>
    </div>
  )
}

const STEPS = [
  {
    num: 'STEP 1',
    title: 'Schedule a Visit',
    desc: 'Every project begins with a conversation. We visit your property, listen to your ideas, and review the site together. This step is about understanding your vision and how we can bring it to life.',
  },
  {
    num: 'STEP 2',
    title: 'Get a Clear Estimate',
    desc: 'We provide an easy-to-understand estimate that outlines the scope of work and materials. Everything is discussed up front, so you know what to expect before we begin.',
  },
  {
    num: 'STEP 3',
    title: 'Confirm and Schedule',
    desc: 'Once the plan is approved, we set the schedule and assign your crew. You can trust that our team will be prepared, punctual, and ready to get to work.',
  },
  {
    num: 'STEP 4',
    title: 'Construction and Communication',
    desc: 'Our experienced crews arrive on time, work efficiently, and keep you informed throughout the build. We respect your property and maintain a clean, safe jobsite until the project is complete.',
  },
]

export default function Process() {
  return (
    <section style={{ position: 'relative', padding: '5rem 2rem', overflow: 'hidden' }}>
      {/* Background image */}
      <img src={processBg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} aria-hidden="true" />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <SectionLabel text="Our Process" />
        <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>
          Our Process
        </h2>
        <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: 620, marginBottom: '3.5rem' }}>
          Building or improving your home should feel straightforward, not stressful. At Su Casa Builders, we keep the process simple, transparent, and focused on your goals from start to finish.
        </p>

        {/* Steps grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', position: 'relative' }}>
          {STEPS.map(step => (
            <div key={step.num} style={{ background: 'rgba(255,255,255,0.85)', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 8, padding: '1.5rem', backdropFilter: 'blur(4px)' }}>
              <p style={{ fontSize: '0.65rem', fontWeight: 700, color: '#6b7280', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{step.num}</p>
              <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#111827', marginBottom: '0.75rem' }}>{step.title}</h3>
              <p style={{ color: '#6b7280', fontSize: '0.82rem', lineHeight: 1.75 }}>{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Arrow connectors */}
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1.5rem', paddingInline: '12.5%' }}>
          {[0,1,2,3].map(i => (
            <div key={i} style={{ width: 36, height: 36, borderRadius: '50%', border: '1.5px solid #9ca3af', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.7)' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#6b7280" strokeWidth="2"><line x1="2" y1="7" x2="12" y2="7"/><polyline points="8,3 12,7 8,11"/></svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
