import { useIntersection } from '../hooks/useIntersection'

const REASONS = [
  {
    num: '1',
    title: 'Experience and Honesty',
    desc: 'With over a decade in the construction industry, we combine hands-on expertise with straight talk. No hidden fees, no surprises — just honest assessments and fair pricing from day one.',
  },
  {
    num: '2',
    title: 'Commitment to Quality',
    desc: "Every nail, every beam, every finish is held to the highest standard. We don't cut corners. Our work is designed to last generations, and we stand behind it with a workmanship guarantee.",
  },
  {
    num: '3',
    title: 'Local and Trusted',
    desc: "We're your neighbors. Su Casa Builders is rooted in Sierra Vista and Cochise County. We know the local codes, the climate, and the community — and we're invested in its future.",
  },
]

export default function WhyChoose() {
  const { ref, isVisible } = useIntersection()

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-max">
        <div ref={ref} className={`text-center mb-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title mb-4">Why Choose Su Casa Builders</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            There are plenty of contractors out there. Here's why families and
            businesses in Sierra Vista choose us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REASONS.map(r => (
            <div key={r.num} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 rounded-full bg-primary-600 text-white text-2xl font-extrabold flex items-center justify-center mx-auto mb-5">
                {r.num}
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-3">{r.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
