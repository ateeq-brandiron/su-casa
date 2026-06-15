import { useIntersection } from '../hooks/useIntersection'

const VALUES = [
  {
    icon: '✝',
    title: 'Leadership in Faith',
    desc: 'We operate with faith-based principles, treating every client, subcontractor, and employee with dignity and respect.',
  },
  {
    icon: '🤝',
    title: 'Integrity',
    desc: "We say what we mean and do what we say. Our word is our bond — on estimates, timelines, and quality.",
  },
  {
    icon: '🇺🇸',
    title: 'Community & Country',
    desc: "As veterans and local business owners, we're committed to serving our community and supporting those who protect our nation.",
  },
  {
    icon: '🏗️',
    title: 'Respect',
    desc: "We respect your property, your time, and your investment. Clean jobsites, punctual crews, and clear communication are non-negotiable.",
  },
]

export default function CoreValues() {
  const { ref, isVisible } = useIntersection()

  return (
    <section className="py-20 bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div ref={ref} className={isVisible ? 'animate-fade-up' : 'opacity-0'}>
            <span className="section-label">Our Core Values</span>
            <h2 className="section-title mb-8">Our Core Values</h2>
            <div className="flex flex-col gap-6">
              {VALUES.map(v => (
                <div key={v.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 border border-primary-100 flex items-center justify-center text-lg flex-shrink-0">
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{v.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="img-placeholder aspect-[4/3] rounded-xl bg-gradient-to-br from-blue-900 via-slate-700 to-slate-800 flex items-center justify-center shadow-xl">
            <div className="text-center">
              <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2" opacity="0.4" className="mx-auto mb-3">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <p className="text-white/40 text-sm">Su Casa Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
