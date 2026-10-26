import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { BLOG_POSTS } from '../data/blog-posts'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CTA from '../components/CTA'

function SectionLabel({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#374151" strokeWidth="2">
        <g clipPath="url(#bl)">
          <path d="M2.5 7.5L10 1.667L17.5 7.5V16.667a1.667 1.667 0 01-1.667 1.666H4.167A1.667 1.667 0 012.5 16.667V7.5z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.5 18.333V10H12.5V18.333" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs><clipPath id="bl"><rect width="20" height="20" fill="white"/></clipPath></defs>
      </svg>
      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#374151', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{text}</span>
    </div>
  )
}

function CategoryBadge({ text }) {
  return (
    <span style={{
      display: 'inline-block',
      background: '#EFF4F8',
      color: '#245079',
      fontSize: '0.72rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      padding: '4px 10px',
      borderRadius: 4,
    }}>{text}</span>
  )
}

function BlogCard({ post }) {
  const [hovered, setHovered] = useState(false)
  const formatted = new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  return (
    <Link
      to={`/blog/${post.slug}/`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{
        background: '#fff',
        border: `1.5px solid ${hovered ? '#245079' : '#e5e7eb'}`,
        borderRadius: 8,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        boxShadow: hovered ? '0 8px 32px rgba(36,80,121,0.10)' : '0 2px 8px rgba(0,0,0,0.04)',
      }}>
        {/* Color band header */}
        <div style={{ height: 6, background: '#245079', flexShrink: 0 }} />

        <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
            <CategoryBadge text={post.category} />
            <span style={{ fontSize: '0.78rem', color: '#6b7280', fontWeight: 500 }}>{post.readTime}</span>
          </div>

          <h2 style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: '1.15rem',
            fontWeight: 700,
            color: hovered ? '#245079' : '#111827',
            lineHeight: 1.35,
            margin: 0,
            transition: 'color 0.2s',
          }}>{post.title}</h2>

          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem', color: '#3C3C3C', lineHeight: 1.7, margin: 0, flex: 1 }}>
            {post.excerpt}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8, paddingTop: 16, borderTop: '1px solid #f3f4f6' }}>
            <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>{formatted}</span>
            <span style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#245079',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}>
              Read More
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#245079" strokeWidth="2">
                <line x1="2" y1="8" x2="14" y2="8"/><polyline points="10,4 14,8 10,12"/>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Blog | Su Casa Builders Inc – Construction Tips & Insights</title>
        <meta name="description" content="Construction tips, roofing advice, and home-building insights from Su Casa Builders — Sierra Vista's trusted general contractor since 2003." />
        <link rel="canonical" href="https://sucasabuildersinc.com/blog/" />
        <meta property="og:url" content="https://sucasabuildersinc.com/blog/" />
        <meta property="og:title" content="Blog | Su Casa Builders Inc – Construction Tips & Insights" />
      </Helmet>

      <Navbar />

      <main style={{ paddingTop: 100 }}>
        {/* Page header */}
        <section style={{ background: '#fff', padding: '60px 75px 48px' }}>
          <div style={{ maxWidth: 1440, margin: '0 auto' }}>
            <SectionLabel text="Blog" />
            <h1 style={{ fontFamily: 'Manrope, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: '#245079', lineHeight: '130%', margin: '0 0 1rem' }}>
              Construction Tips & Insights
            </h1>
            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 20, fontWeight: 400, color: '#3C3C3C', lineHeight: '140%', maxWidth: 640, margin: 0 }}>
              Practical advice from the Su Casa team — helping Cochise County homeowners make informed decisions about their properties.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #e5e7eb' }} />

        {/* Blog grid */}
        <section style={{ background: '#f9fafb', padding: '60px 75px 80px' }}>
          <div style={{ maxWidth: 1440, margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 32,
            }} className="blog-grid">
              {BLOG_POSTS.map(post => <BlogCard key={post.slug} post={post} />)}
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />

      <style>{`
        @media (max-width: 1024px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr) !important; }
          #blog-header, section[style*="padding: 60px 75px"] { padding: 60px 40px !important; }
        }
        @media (max-width: 768px) {
          .blog-grid { grid-template-columns: 1fr !important; }
          section { padding: 60px 24px !important; }
        }
      `}</style>
    </>
  )
}
