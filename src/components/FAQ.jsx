import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useIntersection } from '../hooks/useIntersection'

const FAQS = [
  {
    q: 'Are you licensed and insured in Arizona?',
    a: "Yes. Su Casa Builders LLC holds an active Arizona contractor's license and carries full general liability and workers' compensation insurance. We're happy to provide certificates of insurance upon request.",
  },
  {
    q: 'What areas do you serve?',
    a: 'We primarily serve Sierra Vista, Bisbee, Huachuca City, Tombstone, Sonoita, and surrounding Cochise County communities. Contact us for projects outside this area.',
  },
  {
    q: 'How do I get a quote for my project?',
    a: "Simply fill out our contact form or give us a call. We'll schedule a free on-site consultation, evaluate your project, and provide a detailed written estimate within a few business days.",
  },
  {
    q: 'How long does a typical project take?',
    a: 'Timelines vary by project scope. A bathroom remodel may take 2–3 weeks, while a custom home build typically runs 6–12 months. We provide a detailed schedule in every proposal and keep you updated throughout.',
  },
  {
    q: 'Do you handle permits?',
    a: 'Yes. We manage all required permits and inspections through the City of Sierra Vista and Cochise County. You never have to navigate the permitting process alone.',
  },
  {
    q: 'Is Su Casa Builders veteran-owned?',
    a: "Absolutely. Our founder served in the U.S. Army and built this company on the values learned in service — discipline, integrity, and dedication to getting the job done right.",
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 hover:text-primary-600 transition-colors"
      >
        <span className="font-semibold text-gray-800 text-sm">{q}</span>
        <ChevronDown size={18} className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-48 pb-5' : 'max-h-0'}`}>
        <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const { ref, isVisible } = useIntersection()

  return (
    <section className="py-20 bg-white">
      <div className="container-max">
        <div ref={ref} className={`text-center mb-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="section-label">FAQ</span>
          <h2 className="section-title mb-4">
            Frequently Asked Questions About Our Work as General Contractors in Sierra Vista AZ
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3 bg-gray-50 rounded-xl p-6">
            {FAQS.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>

          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="img-placeholder aspect-[4/3] rounded-xl bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <div className="img-placeholder aspect-[4/3] rounded-xl bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5">
                <rect x="2" y="7" width="20" height="14" rx="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
