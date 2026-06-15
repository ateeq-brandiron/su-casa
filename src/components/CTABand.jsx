import { ArrowRight } from 'lucide-react'

export default function CTABand() {
  return (
    <section className="py-20 bg-dark-800">
      <div className="container-max text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
          Let's bring your vision to life with
          <br className="hidden sm:block" /> skill, quality, and integrity.
        </h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          Whether you're ready to start or just exploring options, we'd love to talk.
          Free consultations. No pressure.
        </p>
        <a href="#contact" className="btn-primary text-base px-8 py-4">
          Get Your Free Quote <ArrowRight size={18} />
        </a>
      </div>
    </section>
  )
}
