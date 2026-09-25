import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Su Casa Builders Inc</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Navbar />
      <main style={{ paddingTop: 100, minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: '100px 24px' }}>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.7rem', fontWeight: 600, color: '#374151', letterSpacing: '0.18em', textTransform: 'uppercase', margin: '0 0 16px' }}>
            404
          </p>
          <h1 style={{ fontFamily: 'Manrope, sans-serif', fontSize: 48, fontWeight: 500, color: '#245079', lineHeight: '130%', margin: '0 0 24px' }}>
            Page Not Found
          </h1>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 20, fontWeight: 400, color: '#3C3C3C', lineHeight: '140%', maxWidth: 480, margin: '0 auto 40px' }}>
            The page you're looking for doesn't exist. Let's get you back on track.
          </p>
          <Link to="/" style={{ display: 'inline-block', backgroundColor: '#245079', color: '#fff', fontFamily: 'Manrope, sans-serif', fontSize: 16, fontWeight: 600, padding: '16px 32px', borderRadius: 6, textDecoration: 'none' }}>
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
