import { CheckCircle } from 'lucide-react'
import { useIntersection } from '../hooks/useIntersection'

const SERVICES = [
  {
    title: 'General Contracting',
    color: 'from-blue-800 to-blue-600',
    items: [
      'New construction & ground-up builds',
      'Commercial & industrial projects',
      'Concrete, framing & structural work',
      'Roofing, siding & exterior finishes',
      'Permit management & inspections',
    ],
  },
  {
    title: 'Custom Home Construction',
    color: 'from-slate-700 to-slate-500',
    items: [
      'Custom floor plan design assistance',
      'Site preparation & foundation',
      'Full interior & exterior buildout',
      'Energy-efficient construction',
      'Move-in ready delivery',
    ],
  },
  {
    title: 'Special Projects & Renovations',
    color: 'from-stone-700 to-stone-500',
    items: [
      'Kitchen & bathroom remodels',
      'Room additions & ADUs',
      'Garage builds & conversions',
      'Decks, patios & outdoor structures',
      'Storm damage repair & restoration',
    ],
  },
]

export default function Services() {
  const { ref, isVisible } = useIntersection()

  return (
    <section id="services" className="py-20 bg-dark-700">
      <div className="container-max">
        <div ref={ref} className={`text-center mb-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="section-label !text-accent">Our Services</span>
          <h2 className="section-title !text-white mb-4">
            We Are a Full-Service General Contractor
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From ground-up new construction to targeted renovations, Su Casa Builders
            delivers expert craftsmanship on every project in Sierra Vista and
            surrounding communities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {SERVICES.map((svc, i) => (
            <div key={svc.title} className="bg-dark-800 rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              {/* Image placeholder */}
              <div className={`h-44 bg-gradient-to-br ${svc.color} flex items-center justify-center`}>
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2" opacity="0.5">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <path d="M8 21h8M12 17v4"/>
                  <path d="M7 8l5-3 5 3v6H7z"/>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-white text-lg mb-4">{svc.title}</h3>
                <ul className="flex flex-col gap-2.5">
                  {svc.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-gray-400 text-sm">
                      <CheckCircle size={14} className="text-accent mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#contact" className="btn-primary">
            Request a Bid Online
          </a>
        </div>
      </div>
    </section>
  )
}
