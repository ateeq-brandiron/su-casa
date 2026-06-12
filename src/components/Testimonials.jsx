import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useIntersection } from '../hooks/useIntersection'

const TESTIMONIALS = [
  {
    name: 'Maria & Carlos Reyes',
    role: 'Homeowner · San Antonio, TX',
    stars: 5,
    text: 'Su Casa transformed our 1960s ranch into a showpiece. The Spanish tile work is absolutely stunning — neighbors stop to compliment us every week. The crew was clean, on time, and finished two days ahead of schedule.',
    project: 'Spanish Tile Installation',
  },
  {
    name: 'James Whitfield',
    role: 'Property Developer · Austin, TX',
    stars: 5,
    text: "We've used Su Casa on six commercial properties now. Their TPO work is flawless, their project management is excellent, and the crews are professional. They're the only roofing company we call.",
    project: 'Commercial TPO Roofing',
  },
  {
    name: 'Priya Nandakumar',
    role: 'Homeowner · Dallas, TX',
    stars: 5,
    text: 'After hail damage, I called three contractors. Su Casa was the only one who sent a licensed adjuster liaison, got our insurance claim maximized, and completed the work in four days. Outstanding.',
    project: 'Hail Damage Restoration',
  },
  {
    name: 'Tom & Sandra Buchanan',
    role: 'Homeowner · Houston, TX',
    stars: 5,
    text: "The copper standing seam roof Su Casa installed is beyond what we imagined. It's an investment that increased our home's value by more than the project cost. Worth every penny.",
    project: 'Copper Standing Seam',
  },
  {
    name: 'Elena Fuentes',
    role: 'Restaurant Owner · El Paso, TX',
    stars: 5,
    text: "My restaurant needed a roof that matched our aesthetic. Su Casa designed a custom terracotta system that looks like it's been there 100 years. Guests always ask about it.",
    project: 'Artistic Terracotta',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={14} className="fill-primary-400 text-primary-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const { ref, isVisible }     = useIntersection()

  const prev = () => setCurrent(c => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setCurrent(c => (c + 1) % TESTIMONIALS.length)

  const visible = [
    TESTIMONIALS[(current) % TESTIMONIALS.length],
    TESTIMONIALS[(current + 1) % TESTIMONIALS.length],
    TESTIMONIALS[(current + 2) % TESTIMONIALS.length],
  ]

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container-max section-padding">
        {/* Header */}
        <div
          ref={ref}
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6 ${
            isVisible ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          <div>
            <p className="section-label mb-3">Client Stories</p>
            <h2 className="section-title">
              Trusted by Families
              <br />
              <em className="not-italic text-primary-600">Across Texas</em>
            </h2>
          </div>
          {/* Nav buttons */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 border-2 border-gray-200 hover:border-primary-500 flex items-center justify-center text-gray-500 hover:text-primary-600 transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 border-2 border-gray-200 hover:border-primary-500 flex items-center justify-center text-gray-500 hover:text-primary-600 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Cards — 3 visible on desktop */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className={`bg-cream-50 border border-gray-100 p-8 flex flex-col relative ${
                i === 0 ? '' : 'hidden md:flex'
              } ${i === 2 ? 'hidden lg:flex' : ''}`}
            >
              <Quote size={32} className="text-primary-200 mb-4" />
              <p className="text-gray-600 leading-relaxed flex-1 mb-6 text-sm">
                "{t.text}"
              </p>
              <div className="border-t border-gray-200 pt-5 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-dark-800 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{t.role}</p>
                </div>
                <Stars count={t.stars} />
              </div>
              <div className="absolute top-6 right-6 bg-primary-600/10 text-primary-600 text-xs font-semibold px-2 py-0.5">
                {t.project}
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-primary-500 w-6' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-12">
          {[
            { value: '500+',   label: 'Happy Homeowners' },
            { value: '4.9★',   label: 'Google Rating' },
            { value: '12,000+', label: 'Squares Installed' },
            { value: '0',       label: 'Unresolved Complaints' },
          ].map(item => (
            <div key={item.label} className="text-center">
              <p className="font-heading text-3xl font-bold text-dark-800">{item.value}</p>
              <p className="text-gray-400 text-xs uppercase tracking-wider mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
