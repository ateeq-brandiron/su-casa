import { useIntersection } from '../hooks/useIntersection'

const SERVICES = [
  {
    icon: '🏠',
    title: 'Residential Roofing',
    desc: 'Tailored roofing solutions for homes of all sizes. From classic asphalt shingles to premium metal and tile systems built to last decades.',
    features: ['Asphalt Shingles', 'Metal Roofing', 'Clay & Concrete Tile'],
  },
  {
    icon: '🏗️',
    title: 'Commercial Roofing',
    desc: 'Durable flat and low-slope roofing systems for commercial buildings, with minimal disruption to your operations.',
    features: ['TPO & EPDM', 'Built-Up Roofing', 'Modified Bitumen'],
  },
  {
    icon: '🔧',
    title: 'Roof Repair',
    desc: 'Fast, precise repairs for leaks, storm damage, and aging roofs. We diagnose the root cause, not just the symptom.',
    features: ['Leak Detection', 'Storm Damage', 'Emergency Repairs'],
  },
  {
    icon: '✨',
    title: 'Artistic Finishes',
    desc: 'Our signature specialty — custom decorative roofing that transforms your home\'s silhouette into a landmark of your neighborhood.',
    features: ['Copper Accents', 'Slate Artistry', 'Custom Patterns'],
  },
  {
    icon: '🌿',
    title: 'Eco Roofing',
    desc: 'Cool roofs, solar-ready installations, and sustainable materials that reduce energy bills and environmental impact.',
    features: ['Solar Integration', 'Cool Roofs', 'Recycled Materials'],
  },
  {
    icon: '🔍',
    title: 'Inspections',
    desc: 'Thorough drone-assisted roof inspections with detailed photographic reports — before buying, selling, or after a storm.',
    features: ['Drone Survey', 'Insurance Reports', 'Pre-Purchase Checks'],
  },
]

function ServiceCard({ service, index }) {
  const { ref, isVisible } = useIntersection()

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${index * 100}ms` }}
      className={`group bg-white border border-gray-100 hover:border-primary-300 p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
        isVisible ? 'animate-fade-up' : 'opacity-0'
      }`}
    >
      <div className="text-4xl mb-5">{service.icon}</div>
      <h3 className="font-heading text-xl font-semibold text-dark-800 mb-3 group-hover:text-primary-600 transition-colors">
        {service.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.desc}</p>
      <ul className="flex flex-col gap-1.5">
        {service.features.map(f => (
          <li key={f} className="flex items-center gap-2 text-xs text-gray-400 font-medium tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Services() {
  const { ref, isVisible } = useIntersection()

  return (
    <section id="services" className="py-24 lg:py-32 bg-cream-50">
      <div className="container-max section-padding">
        {/* Header */}
        <div ref={ref} className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="section-label mb-3">What We Offer</p>
          <h2 className="section-title mb-5">
            Roofing Services
            <br />
            <em className="not-italic text-primary-600">Built Around You</em>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            From a simple repair to a complete artistic transformation, Su Casa
            delivers excellence at every step of the roofing process.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
