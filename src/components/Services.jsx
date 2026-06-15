const services = [
  {
    title: 'General Contracting',
    bullets: ['Framing & foundation work','Roofing & siding','Permits & project management','Subcontractor coordination'],
  },
  {
    title: 'Custom Home Construction',
    bullets: ['New home builds','Architectural planning','Material selection','Site preparation'],
  },
  {
    title: 'Special Projects & Renovations',
    bullets: ['Kitchen & bath remodels','Room additions','Structural repairs','Commercial renovations'],
  },
]

export default function Services() {
  return (
    <section id="services" style={{backgroundColor: '#2d3748', padding: '5rem 2rem'}}>
      <div style={{maxWidth: '1280px', margin: '0 auto'}}>
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <p style={{color: '#4a9aba', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.75rem'}}>OUR SERVICES</p>
          <h2 style={{fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.3}}>
            We Are a Full-Service General Contractor
          </h2>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem'}}>
          {services.map(s => (
            <div key={s.title} style={{backgroundColor: '#374151', borderRadius: '10px', overflow: 'hidden'}}>
              <div style={{
                height: '180px',
                background: 'linear-gradient(135deg, #2d6a9f44, #4a9aba33)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <span style={{color: '#4a9aba', fontSize: '0.85rem', opacity: 0.8}}>Service Image</span>
              </div>
              <div style={{padding: '1.5rem'}}>
                <h3 style={{color: '#ffffff', fontWeight: 700, fontSize: '1.15rem', marginBottom: '1rem'}}>{s.title}</h3>
                <ul style={{listStyle: 'none', padding: 0}}>
                  {s.bullets.map(b => (
                    <li key={b} style={{color: '#d1d5db', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem'}}>
                      <span style={{color: '#4a9aba', marginTop: '2px'}}>&#10003;</span>{b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div style={{textAlign: 'center'}}>
          <a href="#contact" style={{
            display: 'inline-block', backgroundColor: '#2d6a9f', color: '#ffffff',
            padding: '0.85rem 2rem', borderRadius: '6px', textDecoration: 'none',
            fontWeight: 700, fontSize: '1rem'
          }}>Request a Bid Online</a>
        </div>
      </div>
    </section>
  )
}
