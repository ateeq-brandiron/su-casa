import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { BLOG_POSTS } from '../data/blog-posts'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CTA from '../components/CTA'

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

function RelatedCard({ post }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      to={`/blog/${post.slug}/`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ textDecoration: 'none' }}
    >
      <div style={{
        background: '#fff',
        border: `1.5px solid ${hovered ? '#245079' : '#e5e7eb'}`,
        borderRadius: 8,
        padding: '1.25rem',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        boxShadow: hovered ? '0 4px 16px rgba(36,80,121,0.08)' : 'none',
      }}>
        <CategoryBadge text={post.category} />
        <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: hovered ? '#245079' : '#111827', margin: '10px 0 0', lineHeight: 1.4, transition: 'color 0.2s' }}>
          {post.title}
        </p>
      </div>
    </Link>
  )
}

function renderBody(body) {
  const lines = body.split('\n')
  const elements = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.3rem', fontWeight: 700, color: '#245079', margin: '2rem 0 0.75rem', lineHeight: 1.3 }}>
          {line.replace('## ', '')}
        </h2>
      )
    } else if (line.trim() !== '') {
      elements.push(
        <p key={i} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#3C3C3C', lineHeight: 1.8, margin: '0 0 1rem' }}>
          {line}
        </p>
      )
    }
    i++
  }
  return elements
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = BLOG_POSTS.find(p => p.slug === slug)
  const related = BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 2)

  if (!post) {
    return (
      <>
        <Navbar />
        <main style={{ paddingTop: 160, textAlign: 'center', minHeight: '60vh' }}>
          <h1 style={{ fontFamily: 'Manrope, sans-serif', color: '#245079' }}>Post Not Found</h1>
          <Link to="/blog/" style={{ color: '#245079', fontWeight: 600 }}>← Back to Blog</Link>
        </main>
        <Footer />
      </>
    )
  }

  const formatted = new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <>
      <Helmet>
        <title>{post.title} | Su Casa Builders Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://sucasabuildersinc.com/blog/${post.slug}/`} />
        <meta property="og:url" content={`https://sucasabuildersinc.com/blog/${post.slug}/`} />
        <meta property="og:title" content={`${post.title} | Su Casa Builders Blog`} />
        <meta property="og:description" content={post.excerpt} />
      </Helmet>

      <Navbar />

      <main style={{ paddingTop: 100 }}>
        {/* Hero band */}
        <section style={{ background: '#245079', padding: '56px 75px 48px' }}>
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            <Link to="/blog/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', marginBottom: 20 }}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="14" y1="8" x2="2" y2="8"/><polyline points="6,4 2,8 6,12"/>
              </svg>
              Back to Blog
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <CategoryBadge text={post.category} />
              <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.65)' }}>{formatted}</span>
              <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.65)' }}>·</span>
              <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.65)' }}>{post.readTime}</span>
            </div>
            <h1 style={{ fontFamily: 'Manrope, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 700, color: '#fff', lineHeight: '130%', margin: 0 }}>
              {post.title}
            </h1>
          </div>
        </section>

        {/* Article + sidebar */}
        <section style={{ background: '#f9fafb', padding: '60px 75px 80px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 320px', gap: 56, alignItems: 'start' }} className="post-layout">
            {/* Article body */}
            <article style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8, padding: '2.5rem' }}>
              <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.05rem', color: '#374151', lineHeight: 1.8, margin: '0 0 1.5rem', fontWeight: 500, borderLeft: '3px solid #245079', paddingLeft: '1.25rem' }}>
                {post.excerpt}
              </p>
              {renderBody(post.body)}
            </article>

            {/* Sidebar */}
            <aside style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {/* Contact CTA card */}
              <div style={{ background: '#245079', borderRadius: 8, padding: '1.75rem', color: '#fff' }}>
                <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '1.1rem', margin: '0 0 10px', color: '#fff' }}>
                  Ready to Start Your Project?
                </h3>
                <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, margin: '0 0 18px' }}>
                  Su Casa Builders has served Sierra Vista and Cochise County since 2003.
                </p>
                <a href="tel:5203358554" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: '#fff', color: '#245079',
                  padding: '10px 18px', borderRadius: 4,
                  fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '0.9rem',
                  textDecoration: 'none',
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#245079" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.24 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  520-335-8554
                </a>
              </div>

              {/* Related posts */}
              {related.length > 0 && (
                <div>
                  <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#374151', letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 14px' }}>
                    More Articles
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {related.map(p => <RelatedCard key={p.slug} post={p} />)}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .post-layout { grid-template-columns: 1fr !important; }
          section { padding: 60px 24px !important; }
        }
        @media (max-width: 768px) {
          section[style*="padding: 56px 75px"] { padding: 40px 24px !important; }
        }
      `}</style>
    </>
  )
}
