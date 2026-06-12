import { useState } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import { useIntersection } from '../hooks/useIntersection'

const SERVICE_TYPES = [
  'Residential Roofing',
  'Commercial Roofing',
  'Roof Repair',
  'Artistic Finish',
  'Eco Roofing',
  'Inspection',
  'Other',
]

export default function Contact() {
  const [form,       setForm]       = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted,  setSubmitted]  = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const { ref, isVisible }          = useIntersection()

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-dark-800 relative overflow-hidden">
      {/* Warm glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-900/20 blur-[200px] pointer-events-none" />

      <div className="container-max section-padding relative">
        {/* Header */}
        <div ref={ref} className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="section-label mb-3">Get In Touch</p>
          <h2 className="section-title-light mb-5">
            Start Your Project Today
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Free estimates. No pressure. Just honest advice from the region's
            most trusted roofing team.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info panel */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              {[
                { icon: Phone, label: 'Call Us', value: '(555) 123-4567', sub: 'Mon–Sat, 7am–7pm' },
                { icon: Mail,  label: 'Email Us', value: 'hello@sucasaroofing.com', sub: 'Reply within 24 hours' },
                { icon: MapPin, label: 'Our Office', value: '1234 Rooftop Blvd, San Antonio, TX 78201', sub: 'Licensed across Texas' },
              ].map(({ icon: Icon, label, value, sub }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-10 h-10 bg-primary-600/20 border border-primary-600/30 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-primary-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">{label}</p>
                    <p className="text-cream-100 font-medium text-sm">{value}</p>
                    <p className="text-gray-500 text-xs">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Hours */}
            <div className="border border-dark-600 p-6">
              <h4 className="font-heading text-cream-100 font-semibold mb-4">Business Hours</h4>
              {[
                ['Monday – Friday', '7:00am – 7:00pm'],
                ['Saturday',        '8:00am – 5:00pm'],
                ['Sunday',          'Emergency only'],
              ].map(([day, time]) => (
                <div key={day} className="flex justify-between text-sm py-2 border-b border-dark-600 last:border-0">
                  <span className="text-gray-400">{day}</span>
                  <span className="text-cream-200">{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-dark-700 border border-dark-600 p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
                <CheckCircle size={56} className="text-primary-400" />
                <h3 className="font-heading text-2xl font-semibold text-cream-100">
                  We'll Be In Touch!
                </h3>
                <p className="text-gray-400 max-w-sm">
                  Thanks for reaching out. A Su Casa specialist will contact you
                  within one business day to schedule your free estimate.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full bg-dark-800 border border-dark-500 focus:border-primary-500 text-cream-100 placeholder-gray-600 px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className="w-full bg-dark-800 border border-dark-500 focus:border-primary-500 text-cream-100 placeholder-gray-600 px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full bg-dark-800 border border-dark-500 focus:border-primary-500 text-cream-100 placeholder-gray-600 px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-dark-800 border border-dark-500 focus:border-primary-500 text-cream-100 px-4 py-3 text-sm outline-none transition-colors appearance-none"
                  >
                    <option value="">Select a service…</option>
                    {SERVICE_TYPES.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your roof type, size, any concerns…"
                    className="w-full bg-dark-800 border border-dark-500 focus:border-primary-500 text-cream-100 placeholder-gray-600 px-4 py-3 text-sm outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 disabled:opacity-60 text-white font-semibold py-4 tracking-wide uppercase text-sm transition-colors duration-200"
                >
                  {submitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Get My Free Estimate
                      <Send size={16} />
                    </>
                  )}
                </button>
                <p className="text-gray-500 text-xs text-center">
                  No obligation. No spam. Just honest roofing advice.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
