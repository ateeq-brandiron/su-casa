import { useIntersection } from '../hooks/useIntersection'

const STEPS = [
  {
    number: '01',
    title: 'Free Consultation',
    desc: 'We start with a thorough on-site inspection and listen carefully to your goals, timeline, and budget.',
  },
  {
    number: '02',
    title: 'Custom Proposal',
    desc: 'You receive a detailed, itemized quote with material samples, design options, and a clear project schedule.',
  },
  {
    number: '03',
    title: 'Expert Installation',
    desc: 'Our certified crews arrive on time, protect your property, and install your roof to manufacturer specs.',
  },
  {
    number: '04',
    title: 'Final Walkthrough',
    desc: 'We do a thorough cleanup and walk the finished roof with you, answering every question before we leave.',
  },
]

export default function Process() {
  const { ref, isVisible } = useIntersection()

  return (
    <section className="py-24 lg:py-32 bg-cream-100">
      <div className="container-max section-padding">
        <div ref={ref} className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="section-label mb-3">How It Works</p>
          <h2 className="section-title">
            Simple Process,
            <br />
            <em className="not-italic text-primary-600">Exceptional Results</em>
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                {/* Number circle */}
                <div className="relative w-24 h-24 rounded-full bg-white border-2 border-primary-300 flex flex-col items-center justify-center mb-6 shadow-md z-10">
                  <span className="font-heading text-2xl font-bold text-primary-600">{step.number}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-dark-800 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
