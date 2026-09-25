import { Helmet } from 'react-helmet-async'
import Hero         from '../components/Hero'
import About        from '../components/About'
import Services     from '../components/Services'
import WhyUs        from '../components/WhyUs'
import CoreValues   from '../components/CoreValues'
import Process      from '../components/Process'
import Projects     from '../components/Projects'
import Testimonials from '../components/Testimonials'
import FAQ          from '../components/FAQ'
import CTA          from '../components/CTA'
import Contact      from '../components/Contact'

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Su Casa Builders Inc | General Contractor – Framing, Additions &amp; Remodeling | Sierra Vista, AZ</title>
        <meta name="description" content="Licensed general contractor serving Sierra Vista &amp; Cochise County, AZ since 2003. Framing, home additions, remodeling, custom homes, and specialty construction. Call (520) 335-8554 for a free estimate." />
        <link rel="canonical" href="https://sucasabuildersinc.com/" />
        <meta property="og:url" content="https://sucasabuildersinc.com/" />
        <meta property="og:title" content="Su Casa Builders Inc | General Contractor – Framing, Additions &amp; Remodeling | Sierra Vista, AZ" />
      </Helmet>
      <main style={{ paddingTop: 100 }}>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <CoreValues />
        <Process />
        <Projects />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>
    </>
  )
}
