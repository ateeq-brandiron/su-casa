import { useIntersection } from '../hooks/useIntersection'

const STATS = [
  { value: '10+',  label: 'Years in Business' },
  { value: '200+', label: 'Projects Completed' },
  { value: '100%', label: 'Licensed & Insured' },
]

export default function About() {
  const { ref, isVisible } = useIntersection()

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="img-placeholder aspect-[3/4] rounded-lg bg-gradient-to-br from-gray-300 to-gray-400 col-span-1 flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <div className="flex flex-col gap-4">
              <div className="img-placeholder aspect-square rounded-lg bg-gradient-to-br from-slate-400 to-slate-500 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5">
                  <rect x="2" y="7" width="20" height="14" rx="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
              <div className="img-placeholder aspect-square rounded-lg bg-gradient-to-br from-stone-400 to-stone-500 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Text */}
          <div ref={ref} className={isVisible ? 'animate-fade-up' : 'opacity-0'}>
            <span className="section-label">About Us</span>
            <h2 className="section-title mb-5">About Su Casa Builders</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded in 2018 by a veteran with a passion for building, Su Casa Builders LLC
              has grown into one of Sierra Vista's most trusted general contractors. We
              specialize in residential and light commercial construction, bringing military
              discipline and precision to every project we undertake.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our team holds all required Arizona licenses and carries full liability
              insurance. Whether it's a custom home from the ground up, a kitchen
              renovation, or a commercial tenant improvement, we approach every job with
              the same commitment: deliver quality work, on time and on budget, with total
              transparency.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
              {STATS.map(s => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-extrabold text-primary-600">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-1 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
