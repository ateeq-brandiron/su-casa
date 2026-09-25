import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import Navbar          from './components/Navbar'
import Footer          from './components/Footer'
import HomePage        from './pages/HomePage'
import AboutPage       from './pages/AboutPage'
import ServicesPage    from './pages/ServicesPage'
import ProjectsPage    from './pages/ProjectsPage'
import ContactPage     from './pages/ContactPage'
import ServiceAreasPage from './pages/ServiceAreasPage'
import NotFoundPage    from './pages/NotFoundPage'

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div style={{ fontFamily: 'Manrope, sans-serif' }}>
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <HomePage />
                <Footer />
              </>
            } />
            <Route path="/about/"         element={<AboutPage />} />
            <Route path="/services/"      element={<ServicesPage />} />
            <Route path="/projects/"      element={<ProjectsPage />} />
            <Route path="/contact/"       element={<ContactPage />} />
            <Route path="/service-areas/" element={<ServiceAreasPage />} />
            <Route path="*"               element={<NotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}
