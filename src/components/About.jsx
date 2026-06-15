const stats = [
  { value: '7+', label: 'Years Experience' },
  { value: '150+', label: 'Projects Completed' },
  { value: '100%', label: 'Satisfied Clients' },
]

export default function About() {
  return (
    <section id="about-us" style={{backgroundColor: '#ffffff', padding: '5rem 2rem'}}>
      <div style={{maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
          {[0,1].map(i => (
            <div key={i} style={{
              height: '200px', borderRadius: '10px',
              background: i === 0
                ? 'linear-gradient(135deg, #2d6a9f33, #4a9aba44)'
                : 'linear-gradient(135deg, #1e243322, #2d6a9f33)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '1px solid #e5e7eb'
            }}>
              <span style={{color: '#2d6a9f', fontSize: '0.9rem', opacity: 0.7}}>Project Photo {i+1}</span>
            </div>
          ))}
        </div>
        <div>
          <p style={{color: '#4a9aba', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.75rem'}}>ABOUT US</p>
          <h2 style={{fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: '#1f2937', marginBottom: '1.5rem'}}>
            About Su Casa Builders
          </h2>
          <p style={{color: '#374151', lineHeight: 1.75, marginBottom: '1rem'}}>
            Founded in 2018 and headquartered in Sierra Vista, AZ, Su Casa Builders is a veteran-owned general contracting company committed to delivering quality construction with honesty and integrity. We serve the greater Cochise County area and surrounding communities.
          </p>
          <p style={{color: '#374151', lineHeight: 1.75, marginBottom: '2rem'}}>
            Our team brings years of hands-on experience in residential and commercial construction. From ground-up builds to complex renovations, we approach every project with the same dedication to craftsmanship and client communication.
          </p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', borderTop: '2px solid #e5e7eb', paddingTop: '1.5rem'}}>
            {stats.map(s => (
              <div key={s.label} style={{textAlign: 'center'}}>
                <div style={{fontSize: '1.8rem', fontWeight: 800, color: '#2d6a9f'}}>{s.value}</div>
                <div style={{fontSize: '0.8rem', color: '#6b7280', marginTop: '0.25rem'}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
