import { ArrowRight, ChevronDown, Play } from 'lucide-react'
import { useIntersection } from '../hooks/useIntersection'

export default function Hero() {
  const { ref, isVisible } = useIntersection()

  return (
    <section id="home" className="pt-16">
      {/* Top hero */}
      <div className="bg-gray-50 py-16 lg:py-24">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div ref={ref} className={isVisible ? 'animate-fade-up' : 'opacity-0'}>
              <span className="section-label">Sierra Vista, AZ</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                Su Casa Builders —{' '}
                <span className="text-primary-600">General Contractor</span>{' '}
                in Sierra Vista AZ
              </h1>
              <p className="text-lg font-medium text-gray-500 mb-4 italic">We Build Carefully</p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Su Casa Builders LLC is a top-rated general contractor in Sierra Vista, AZ,
                specializing in framing, planning, construction, and remodels. Since 2015,
                our team has delivered quality craftsmanship, on-time performance, and
                complete transparency on every project — from custom homes to commercial
                construction and high-end remodels. We bring integrity, experience, and
                honest pricing to everything we do.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#contact" className="btn-primary">
                  Get Your Free Quote <ArrowRight size={16} />
                </a>
                <a href="#services" className="inline-flex items-center gap-2 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold px-6 py-3 rounded-md transition-all duration-200 text-sm">
                  Our Services
                </a>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="relative">
              <div className="img-placeholder aspect-[4/3] rounded-lg shadow-xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-slate-300 via-gray-400 to-slate-500 flex flex-col items-center justify-center gap-3">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                  <p className="text-white/60 text-sm font-medium">Construction Photo</p>
                </div>
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 -left-4 bg-primary-600 text-white rounded-lg px-5 py-3 shadow-lg">
                <p className="text-2xl font-extrabold leading-none">10+</p>
                <p className="text-xs text-primary-100 mt-0.5">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width construction photo banner */}
      <div className="img-placeholder h-64 sm:h-80 lg:h-96 w-full bg-gradient-to-r from-slate-600 via-slate-500 to-slate-700 relative overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/60 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
            <Play size={24} className="text-white ml-1" fill="white" />
          </div>
          <p className="text-white/70 text-sm font-medium tracking-wide">Watch Our Work — Su Casa Builders</p>
        </div>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
