import './index.css'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import Services     from './components/Services'
import About        from './components/About'
import Process      from './components/Process'
import Projects     from './components/Projects'
import WhyUs        from './components/WhyUs'
import Testimonials from './components/Testimonials'
import CTA          from './components/CTA'
import Contact      from './components/Contact'
import Footer       from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen font-body">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Projects />
        <WhyUs />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
