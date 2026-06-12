import { Shield, Zap, Palette, HeartHandshake, BadgeCheck, Wrench } from 'lucide-react'
import { useIntersection } from '../hooks/useIntersection'

const REASONS = [
  {
    icon: Palette,
    title: 'Design-First Approach',
    desc: 'We see your roof as architecture. Our designers collaborate with you to create a roof that enhances your home\'s character.',
  },
  {
    icon: Shield,
    title: '50-Year Warranty',
    desc: 'Our materials and workmanship are backed by industry-leading warranties — protection that outlasts the mortgage.',
  },
  {
    icon: Zap,
    title: 'Rapid Response',
    desc: '24/7 emergency service with crews that deploy within 4 hours for storm damage containment.',
  },
  {
    icon: BadgeCheck,
    title: 'Certified Crews',
    desc: 'Every installer is factory-certified and undergoes 200+ hours of in-house training before touching your roof.',
  },
  {
    icon: Wrench,
    title: 'Precision Installation',
    desc: 'We use laser-level alignment tools and proprietary checklists — 47 quality checkpoints on every project.',
  },
  {
    icon: HeartHandshake,
    title: 'Transparent Pricing',
    desc: 'No hidden fees. No pressure. Itemized quotes with photos — you know exactly what you\'re paying for and why.',
  },
]

export default function WhyUs() {
  const { ref, isVisible } = useIntersection()

  return (
    <section className="py-24 lg:py-32 bg-dark-800 relative overflow-hidden">
      {/* Decorative SVG bg */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hex" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
            <path d="M28 0 L56 16 L56 50 L28 66 L0 50 L0 16 Z" fill="none" stroke="#d4851f" strokeWidth="0.5"/>
            <path d="M28 66 L56 82 L56 116 L28 132 L0 116 L0 82 Z" fill="none" stroke="#d4851f" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex)" />
      </svg>

      <div className="container-max section-padding relative">
        {/* Header */}
        <div ref={ref} className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="section-label mb-3">Why Su Casa</p>
          <h2 className="section-title-light mb-5">
            The Difference Is In
            <br />
            <em className="not-italic text-primary-400">The Details</em>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Hundreds of contractors can nail shingles. We obsess over the craft,
            the experience, and the decades your family will spend under the roof we build.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-dark-600">
          {REASONS.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="bg-dark-800 p-8 hover:bg-dark-700 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 bg-primary-600/20 border border-primary-600/30 flex items-center justify-center mb-6 group-hover:bg-primary-600/30 transition-colors">
                <Icon size={22} className="text-primary-400" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-cream-100 mb-3">
                {title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
