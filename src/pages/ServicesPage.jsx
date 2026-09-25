import { Helmet } from 'react-helmet-async'
import Navbar   from '../components/Navbar'
import Services from '../components/Services'
import CTA      from '../components/CTA'
import Footer   from '../components/Footer'

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Construction Services | Su Casa Builders Inc – Sierra Vista, AZ</title>
        <meta name="description" content="General contracting, subcontracting, and specialty construction services in Sierra Vista &amp; Cochise County, AZ. Framing, home additions, remodeling, and custom homes since 2003." />
        <link rel="canonical" href="https://sucasabuildersinc.com/services/" />
        <meta property="og:url" content="https://sucasabuildersinc.com/services/" />
        <meta property="og:title" content="Construction Services | Su Casa Builders Inc – Sierra Vista, AZ" />
      </Helmet>
      <Navbar />
      <main style={{ paddingTop: 100 }}>
        <Services />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
