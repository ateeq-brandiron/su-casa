import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'
import { useIntersection } from '../hooks/useIntersection'

export default function Contact() {
  const [form, setForm]           = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)
  const { ref, isVisible }        = useIntersection()

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1000)
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container-max">
        <div ref={ref} className={`text-center mb-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title mb-4">Contact Su Casa Builders in Sierra Vista AZ</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Ready to start your project? Have questions? Reach out — we respond within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info + Map */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-xl p-7 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-6">Our Information</h3>
              <div className="flex flex-col gap-5">
                {[
                  { icon: MapPin,  label: 'Address',  val: '1234 Construction Way\nSierra Vista, AZ 85635' },
                  { icon: Phone,   label: 'Phone',    val: '(520) 555-0192' },
                  { icon: Mail,    label: 'Email',    val: 'info@sucasabuilders.com' },
                  { icon: Clock,   label: 'Hours',    val: 'Mon–Fri 7am–5pm\nSat 8am–2pm' },
                ].map(({ icon: Icon, label, val }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-primary-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{label}</p>
                      <p className="text-gray-700 text-sm whitespace-pre-line mt-0.5">{val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl h-52 flex flex-col items-center justify-center gap-2 shadow-sm">
              <MapPin size={32} className="text-gray-500" />
              <p className="text-gray-500 font-medium text-sm">Sierra Vista, AZ 85635</p>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-primary-600 text-xs font-semibold hover:underline">
                Open in Google Maps →
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16 gap-4">
                <CheckCircle size={52} className="text-green-500" />
                <h3 className="font-bold text-gray-800 text-xl">Message Received!</h3>
                <p className="text-gray-500 text-sm max-w-xs">
                  Thanks for reaching out. A member of our team will contact you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-5">
                <h3 className="font-bold text-gray-800 text-lg mb-1">Send Us a Message</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Full Name *</label>
                    <input name="name" required value={form.name} onChange={handle} placeholder="Jane Smith"
                      className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Phone</label>
                    <input name="phone" value={form.phone} onChange={handle} placeholder="(520) 555-0000"
                      className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary-500 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Email *</label>
                  <input name="email" type="email" required value={form.email} onChange={handle} placeholder="jane@example.com"
                    className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Project Description</label>
                  <textarea name="message" rows={4} value={form.message} onChange={handle} placeholder="Tell us about your project…"
                    className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary-500 transition-colors resize-none" />
                </div>
                <button type="submit" disabled={loading}
                  className="btn-primary justify-center py-3 disabled:opacity-60">
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <><Send size={15} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
