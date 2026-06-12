import { CheckCircle, Award, Users, Clock } from 'lucide-react'
import { useIntersection } from '../hooks/useIntersection'

const PILLARS = [
  { icon: Award,  title: 'Award-Winning Craft',  desc: 'Recognized by NRCA for exceptional artistry in residential roofing 5 years running.' },
  { icon: Users,  title: 'Family-Owned Legacy',  desc: 'Three generations of master roofers, passing down expertise with modern innovation.' },
  { icon: Clock,  title: 'On-Time, Every Time',  desc: 'We commit to project timelines and back it with our satisfaction guarantee.' },
]

const CHECKPOINTS = [
  'Licensed & fully insured in all 50 states',
  'Manufacturer-certified installation teams',
  'Up to 50-year transferable warranty',
  'Detailed digital project tracking',
  'Clean jobsite guarantee',
]

export default function About() {
  const { ref: leftRef,  isVisible: leftVisible  } = useIntersection()
  const { ref: rightRef, isVisible: rightVisible } = useIntersection()

  return (
    <section id="about" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Left — visual */}
          <div
            ref={leftRef}
            className={`relative transition-all duration-700 ${leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            {/* Main image placeholder */}
            <div className="relative aspect-[4/5] bg-dark-800 overflow-hidden">
              <div className="absolute inset-0 flex items-end p-8">
                <div className="w-full">
                  {/* Decorative roof cross-section graphic */}
                  <svg viewBox="0 0 400 300" className="w-full opacity-20">
                    <polygon points="200,20 20,200 380,200" fill="none" stroke="#d4851f" strokeWidth="3"/>
                    <polygon points="200,60 60,200 340,200" fill="none" stroke="#d4851f" strokeWidth="2"/>
                    <polygon points="200,100 100,200 300,200" fill="none" stroke="#d4851f" strokeWidth="2"/>
                    <line x1="20" y1="200" x2="380" y2="200" stroke="#d4851f" strokeWidth="4"/>
                    {[...Array(8)].map((_, i) => (
                      <rect key={i} x={30 + i * 45} y={205} width={38} height={15} fill="#d4851f" opacity={0.4} rx="1"/>
                    ))}
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-heading text-2xl font-semibold text-white mb-1">
                  "Every roof tells a story."
                </p>
                <p className="text-primary-400 font-accent italic">— Marco Alvarez, Founder</p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -right-6 top-12 bg-primary-600 text-white p-6 shadow-2xl">
              <p className="font-heading text-5xl font-bold leading-none">25</p>
              <p className="text-primary-200 text-xs uppercase tracking-widest mt-1">Years of<br/>Excellence</p>
            </div>

            {/* Bottom accent block */}
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-cream-200 -z-10" />
          </div>

          {/* Right — text */}
          <div
            ref={rightRef}
            className={`transition-all duration-700 delay-200 ${rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <p className="section-label mb-3">Our Story</p>
            <h2 className="section-title mb-6">
              Roofing Is an Art.
              <br />
              <em className="not-italic text-primary-600">We Treat It That Way.</em>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Founded in 1999 by master roofer Marco Alvarez, Su Casa began as a
              one-truck operation in San Antonio with a simple belief: every home
              deserves a roof as beautiful and durable as the family inside it.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Today, with a team of 45 certified craftspeople, we've built a
              reputation across the region for turning ordinary rooflines into
              architectural statements — without ever compromising structural
              integrity.
            </p>

            {/* Checklist */}
            <ul className="flex flex-col gap-3 mb-10">
              {CHECKPOINTS.map(item => (
                <li key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                  <CheckCircle size={18} className="text-primary-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Pillars */}
            <div className="flex flex-col gap-5 border-t border-gray-100 pt-8">
              {PILLARS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-10 h-10 bg-primary-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={18} className="text-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-dark-800 text-sm mb-0.5">{title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
