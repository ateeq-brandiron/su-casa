import { Helmet } from 'react-helmet-async'
import Navbar  from '../components/Navbar'
import CTA     from '../components/CTA'
import Footer  from '../components/Footer'

const AREAS = [
  { name: 'Sierra Vista', description: 'Our home base — full-service general contracting across Sierra Vista and the surrounding neighborhoods.' },
  { name: 'Bisbee', description: 'Historic home renovation, additions, and specialty construction in Bisbee.' },
  { name: 'Douglas', description: 'Residential and commercial construction services in Douglas.' },
  { name: 'Tombstone', description: 'Framing, remodeling, and custom builds in Tombstone.' },
  { name: 'Huachuca City', description: 'Home additions and remodeling projects in Huachuca City.' },
  { name: 'Cochise County', description: 'Serving all of Cochise County, AZ — contact us to confirm availability in your area.' },
]

export default function ServiceAreasPage() {
  return (
    <>
      <Helmet>
        <title>Service Areas | Su Casa Builders Inc – Cochise County, AZ</title>
        <meta name="description" content="Su Casa Builders Inc serves Sierra Vista, Bisbee, Douglas, Tombstone, Huachuca City, and all of Cochise County, AZ with licensed general contracting services since 2003." />
        <link rel="canonical" href="https://sucasabuildersinc.com/service-areas/" />
        <meta property="og:url" content="https://sucasabuildersinc.com/service-areas/" />
        <meta property="og:title" content="Service Areas | Su Casa Builders Inc – Cochise County, AZ" />
      </Helmet>
      <Navbar />
      <main style={{ paddingTop: 100 }}>
        <section id="service-areas" style={{ padding: '100px 75px', maxWidth: 1440, margin: '0 auto' }}>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.7rem', fontWeight: 600, color: '#374151', letterSpacing: '0.18em', textTransform: 'uppercase', margin: '0 0 16px' }}>
            WHERE WE BUILD
          </p>
          <h1 style={{ fontFamily: 'Manrope, sans-serif', fontSize: 48, fontWeight: 500, color: '#245079', lineHeight: '130%', margin: '0 0 48px' }}>
            Service Areas
          </h1>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 20, fontWeight: 400, color: '#3C3C3C', lineHeight: '140%', maxWidth: 720, margin: '0 0 64px' }}>
            Su Casa Builders Inc has been serving Sierra Vista and Cochise County since 2003.
            We take pride in being a trusted local contractor across southeastern Arizona.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {AREAS.map(area => (
              <div key={area.name} style={{ padding: '32px', border: '1px solid #E5E7EB', borderRadius: 8 }}>
                <h2 style={{ fontFamily: 'Manrope, sans-serif', fontSize: 24, fontWeight: 600, color: '#245079', margin: '0 0 12px' }}>
                  {area.name}
                </h2>
                <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 16, fontWeight: 400, color: '#3C3C3C', lineHeight: '150%', margin: 0 }}>
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
      <style>{`
        @media (max-width: 768px) {
          #service-areas { padding: 60px 24px !important; }
          #service-areas div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
          #service-areas h1 { font-size: 32px !important; }
        }
      `}</style>
    </>
  )
}
