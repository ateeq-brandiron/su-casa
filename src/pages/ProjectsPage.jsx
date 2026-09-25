import { Helmet } from 'react-helmet-async'
import Navbar   from '../components/Navbar'
import Projects from '../components/Projects'
import CTA      from '../components/CTA'
import Footer   from '../components/Footer'

export default function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Featured Projects | Su Casa Builders Inc – Sierra Vista, AZ</title>
        <meta name="description" content="Browse completed construction projects by Su Casa Builders Inc in Sierra Vista &amp; Cochise County, AZ. Framing, home additions, remodeling, and custom home builds." />
        <link rel="canonical" href="https://sucasabuildersinc.com/projects/" />
        <meta property="og:url" content="https://sucasabuildersinc.com/projects/" />
        <meta property="og:title" content="Featured Projects | Su Casa Builders Inc – Sierra Vista, AZ" />
      </Helmet>
      <Navbar />
      <main style={{ paddingTop: 100 }}>
        <Projects />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
