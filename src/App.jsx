import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import WhyUs from './components/WhyUs'
import CoreValues from './components/CoreValues'
import Process from './components/Process'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <CoreValues />
        <Process />
        <Projects />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
