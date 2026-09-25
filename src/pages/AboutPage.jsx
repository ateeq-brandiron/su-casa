import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import About  from '../components/About'
import WhyUs  from '../components/WhyUs'
import CTA    from '../components/CTA'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Su Casa Builders Inc | Licensed General Contractor Since 2003 – Sierra Vista, AZ</title>
        <meta name="description" content="Family-owned general contractor serving Sierra Vista &amp; Cochise County, AZ since 2003. Learn about our commitment to quality craftsmanship and honest communication." />
        <link rel="canonical" href="https://sucasabuildersinc.com/about/" />
        <meta property="og:url" content="https://sucasabuildersinc.com/about/" />
        <meta property="og:title" content="About Su Casa Builders Inc | Licensed General Contractor Since 2003 – Sierra Vista, AZ" />
      </Helmet>
      <Navbar />
      <main style={{ paddingTop: 100 }}>
        <About />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
