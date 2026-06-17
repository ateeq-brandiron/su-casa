function SectionLabel({ text, light }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={light ? 'rgba(255,255,255,0.4)' : '#6b7280'} strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: light ? 'rgba(255,255,255,0.5)' : '#6b7280', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{text}</span>
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
    <section style={{ background: '#f0ece4', padding: '5rem 2rem', position: 'relative', overflow: 'hidden' }}>
      {/* Blueprint overlay */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.06, backgroundImage: 'repeating-linear-gradient(0deg, #374151 0px, #374151 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #374151 0px, #374151 1px, transparent 1px, transparent 40px)' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <SectionLabel text="Our Process" />
        <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>
          Our Process
        </h2>
        <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: 620, marginBottom: '3.5rem' }}>
          Building or improving your home should feel straightforward, not stressful. At Su Casa Builders, we keep the process simple, transparent, and focused on your goals from start to finish.
        </p>

        {/* Steps grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', position: 'relative' }}>
          {STEPS.map((step, i) => (
            <div key={step.num} style={{ background: 'rgba(255,255,255,0.75)', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 8, padding: '1.5rem', backdropFilter: 'blur(4px)' }}>
              <p style={{ fontSize: '0.65rem', fontWeight: 700, color: '#6b7280', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{step.num}</p>
              <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#111827', marginBottom: '0.75rem' }}>{step.title}</h3>
              <p style={{ color: '#6b7280', fontSize: '0.82rem', lineHeight: 1.75 }}>{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Arrow connectors */}
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1.5rem', paddingInline: '12.5%' }}>
          {[0,1,2,3].map(i => (
            <div key={i} style={{ width: 36, height: 36, borderRadius: '50%', border: '1.5px solid #9ca3af', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#6b7280" strokeWidth="2"><line x1="2" y1="7" x2="12" y2="7"/><polyline points="8,3 12,7 8,11"/></svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
