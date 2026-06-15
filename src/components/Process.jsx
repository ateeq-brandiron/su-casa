import { useIntersection } from '../hooks/useIntersection'

const STEPS = [
  {
    num: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    title: 'Assess & Plan',
    desc: 'We visit your site, evaluate the scope, and develop a comprehensive project plan.',
  },
  {
    num: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    title: 'Draft Your Estimate',
    desc: 'You receive a detailed, itemized estimate with materials, labor, and timeline clearly laid out.',
  },
  {
    num: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: 'Build & Execute',
    desc: 'Our certified crews get to work — on time, on budget, with daily progress updates.',
  },
  {
    num: '04',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: 'Communication',
    desc: "We keep you informed at every stage — no surprises, just clear and proactive updates.",
  },
]

export default function Process() {
  const { ref, isVisible } = useIntersection()

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-max">
        <div ref={ref} className={`text-center mb-14 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="section-label">Our Process</span>
          <h2 className="section-title mb-4">Our Process</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Building or renovating your property should feel simple and stress-free.
            Here is how Su Casa Builders makes it happen.
          </p>
        </div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200 z-0" />

          {STEPS.map((step, i) => (
            <div key={step.num} className="relative z-10 bg-white rounded-xl p-6 shadow-sm text-center border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-20 h-20 rounded-full bg-primary-50 border-4 border-white shadow-md flex items-center justify-center mx-auto mb-4 text-primary-600">
                {step.icon}
              </div>
              <p className="text-xs font-bold text-accent tracking-widest mb-1">{step.num}</p>
              <h3 className="font-bold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
