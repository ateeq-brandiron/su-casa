export default function Hero() {
  return (
    <section style={{backgroundColor: '#ffffff'}}>
      <div style={{maxWidth: '1280px', margin: '0 auto', padding: '5rem 2rem 3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center'}}>
        <div>
          <h1 style={{fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800, color: '#1f2937', lineHeight: 1.2, marginBottom: '1rem'}}>
            Su Casa Builders &mdash; General Contractor in Sierra Vista AZ
          </h1>
          <p style={{fontSize: '1.4rem', fontWeight: 600, color: '#2d6a9f', marginBottom: '1.5rem'}}>We Build Carefully</p>
          <p style={{color: '#374151', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem'}}>
            Su Casa Builders is a trusted general contractor based in Sierra Vista, AZ, specializing in framing, planning, custom construction, and remodels since 2015. We bring craftsmanship, integrity, and local expertise to every project.
          </p>
          <a href="#contact" style={{
            display: 'inline-block', backgroundColor: '#2d6a9f', color: '#ffffff',
            padding: '0.85rem 2rem', borderRadius: '6px', textDecoration: 'none',
            fontWeight: 700, fontSize: '1rem', transition: 'background-color 0.2s'
          }}
            onMouseEnter={e => e.target.style.backgroundColor='#245a8a'}
            onMouseLeave={e => e.target.style.backgroundColor='#2d6a9f'}>
            Get Your Free Quote
          </a>
        </div>
        <div style={{
          height: '380px', borderRadius: '12px',
          background: 'linear-gradient(135deg, #2d6a9f33 0%, #4a9aba55 50%, #1e243344 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: '1px solid #e5e7eb'
        }}>
          <span style={{color: '#2d6a9f', fontWeight: 600, fontSize: '1rem', opacity: 0.7}}>Construction Photo</span>
        </div>
      </div>
      <div style={{
        maxWidth: '1280px', margin: '0 auto', padding: '0 2rem 4rem'
      }}>
        <div style={{
          height: '320px', borderRadius: '12px',
          background: 'linear-gradient(135deg, #1e243344 0%, #2d6a9f22 50%, #4a9aba33 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: '1px solid #e5e7eb'
        }}>
          <span style={{color: '#2d6a9f', fontWeight: 600, fontSize: '1rem', opacity: 0.7}}>Full-Width Construction Photo</span>
        </div>
      </div>
    </section>
  )
}
