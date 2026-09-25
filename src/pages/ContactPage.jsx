import { Helmet } from 'react-helmet-async'
import Navbar  from '../components/Navbar'
import Contact from '../components/Contact'
import Footer  from '../components/Footer'

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Su Casa Builders Inc | Free Estimates – Sierra Vista, AZ</title>
        <meta name="description" content="Contact Su Casa Builders Inc for a free estimate. Licensed general contractor in Sierra Vista &amp; Cochise County, AZ. Call (520) 335-8554 or use our contact form." />
        <link rel="canonical" href="https://sucasabuildersinc.com/contact/" />
        <meta property="og:url" content="https://sucasabuildersinc.com/contact/" />
        <meta property="og:title" content="Contact Su Casa Builders Inc | Free Estimates – Sierra Vista, AZ" />
      </Helmet>
      <Navbar />
      <main style={{ paddingTop: 100 }}>
        <Contact />
      </main>
      <Footer />
    </>
  )
}
