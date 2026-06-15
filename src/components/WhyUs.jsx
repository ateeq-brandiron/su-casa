const reasons = [
  { num: '1', title: 'Experience and Honesty', desc: 'With years of hands-on construction experience, we deliver honest assessments, fair pricing, and no surprises on your project.' },
  { num: '2', title: 'Commitment to Quality', desc: 'Every nail, beam, and finish reflects our dedication to building right the first time. We do not cut corners.' },
  { num: '3', title: 'Local and Trusted', desc: 'We are a Sierra Vista-based company with deep roots in the community. Our reputation is built one project at a time.' },
]

export default function WhyUs() {
  return (
    <section style={{backgroundColor: '#f7f8fa', padding: '5rem 2rem'}}>
      <div style={{maxWidth: '1280px', margin: '0 auto'}}>
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <p style={{color: '#4a9aba', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.75rem'}}>WHY CHOOSE US</p>
          <h2 style={{fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: '#1f2937'}}>
            Why Choose Su Casa Builders
          </h2>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem'}}>
          {reasons.map(r => (
            <div key={r.num} style={{backgroundColor: '#ffffff', borderRadius: '10px', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)'}}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '50%',
                backgroundColor: '#2d6a9f', color: '#ffffff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, fontSize: '1.2rem', marginBottom: '1.25rem'
              }}>{r.num}</div>
              <h3 style={{fontWeight: 700, fontSize: '1.1rem', color: '#1f2937', marginBottom: '0.75rem'}}>{r.title}</h3>
              <p style={{color: '#374151', lineHeight: 1.7, fontSize: '0.95rem'}}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
