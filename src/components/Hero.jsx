import { ArrowRight, ChevronDown, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800/90 to-dark-900/80" />
        {/* Roof tile SVG pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="roof-tile" x="0" y="0" width="80" height="60" patternUnits="userSpaceOnUse">
              <path d="M0 60 L40 0 L80 60 Z" fill="none" stroke="#d4851f" strokeWidth="0.5"/>
              <path d="M-40 60 L0 0 L40 60 Z" fill="none" stroke="#d4851f" strokeWidth="0.5"/>
              <path d="M40 60 L80 0 L120 60 Z" fill="none" stroke="#d4851f" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#roof-tile)" />
        </svg>

        {/* Warm accent glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-primary-900/30 blur-[120px] rounded-full" />
      </div>

      {/* Content */}
      <div className="relative flex-1 flex items-center section-padding">
        <div className="container-max w-full pt-24 pb-16">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-primary-500" />
              <span className="font-accent italic text-primary-400 text-lg tracking-wider">
                Artistic Roofing Excellence
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white leading-[1.05] mb-6">
              Your Home
              <br />
              <em className="text-primary-400 not-italic">Deserves</em>
              <br />
              The Best Roof
            </h1>

            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
              Su Casa specializes in premium artistic roofing — where craftsmanship
              meets design. We protect and beautify your home with roofs built to
              last generations.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Get Free Estimate
                <ArrowRight size={18} />
              </a>
              <a href="#projects" className="btn-outline">
                View Our Work
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 flex flex-wrap gap-10">
              {[
                { value: '500+', label: 'Roofs Installed' },
                { value: '25+',  label: 'Years Experience' },
                { value: '100%', label: 'Satisfaction Rate' },
              ].map(stat => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-heading text-4xl font-bold text-primary-400">
                    {stat.value}
                  </span>
                  <span className="text-gray-400 text-sm tracking-wide uppercase mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Review badge */}
          <div className="mt-12 inline-flex items-center gap-3 bg-dark-700/60 backdrop-blur-sm border border-dark-600 px-5 py-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-primary-400 text-primary-400" />
              ))}
            </div>
            <span className="text-gray-300 text-sm font-medium">
              5.0 · Rated #1 Roofing Company in the Region
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative flex justify-center pb-8 animate-bounce">
        <a href="#services" className="text-gray-500 hover:text-primary-400 transition-colors">
          <ChevronDown size={28} />
        </a>
      </div>
    </section>
  )
}
