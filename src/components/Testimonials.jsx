import { Star, Quote } from 'lucide-react'
import { useIntersection } from '../hooks/useIntersection'

const REVIEWS = [
  {
    name: 'Robert & Maria T.',
    location: 'Sierra Vista, AZ',
    stars: 5,
    text: "Highly Recommended! Su Casa built our custom home from the ground up and we couldn't be happier. They were transparent about every cost, finished on schedule, and the quality is outstanding.",
  },
  {
    name: 'James Whitfield',
    location: 'Bisbee, AZ',
    stars: 5,
    text: "Highly Recommended! We hired Su Casa for a full kitchen remodel and garage addition. Professional crew, clean jobsite every day, and the final result exceeded our expectations.",
  },
  {
    name: 'Priya & Daniel S.',
    location: 'Huachuca City, AZ',
    stars: 5,
    text: "Highly Recommended! As a veteran-owned business they understood our needs immediately. Fair pricing, honest communication, and top-notch work. We'll use them again for our next project.",
  },
]

function Stars({ n }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(n)].map((_, i) => (
        <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const { ref, isVisible } = useIntersection()

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-max">
        <div ref={ref} className={`text-center mb-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="section-label">Testimonials</span>
          <h2 className="section-title mb-4">What Our Clients Say</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Our clients say it best. Here are a few words from families and business
            owners across Cochise County.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map(r => (
            <div key={r.name} className="bg-white rounded-xl p-7 shadow-sm border border-gray-100">
              <Stars n={r.stars} />
              <p className="text-xs font-bold text-primary-600 tracking-wider mt-2 mb-4">{r.text.split('!')[0]}!</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                "{r.text.substring(r.text.indexOf('!') + 2)}"
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-gray-800 text-sm">{r.name}</p>
                <p className="text-gray-400 text-xs">{r.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
