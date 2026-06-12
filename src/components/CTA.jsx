import { ArrowRight, Phone } from 'lucide-react'
import { useIntersection } from '../hooks/useIntersection'

export default function CTA() {
  const { ref, isVisible } = useIntersection()

  return (
    <section className="py-20 bg-primary-600 relative overflow-hidden">
      {/* Diagonal pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="diag" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 40 L40 0" stroke="white" strokeWidth="1" fill="none"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag)" />
      </svg>

      <div
        ref={ref}
        className={`container-max section-padding relative flex flex-col lg:flex-row items-center justify-between gap-8 ${
          isVisible ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-3">
            Ready for a Roof That
            <br />
            Turns Heads?
          </h2>
          <p className="text-primary-100 text-lg max-w-lg">
            Get your free, no-obligation estimate today. Most projects are quoted
            within 24 hours.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-primary-700 hover:bg-cream-100 font-semibold px-8 py-4 tracking-wide uppercase text-sm transition-colors duration-200"
          >
            Get Free Estimate
            <ArrowRight size={18} />
          </a>
          <a
            href="tel:+15551234567"
            className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 tracking-wide uppercase text-sm transition-all duration-200"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}
