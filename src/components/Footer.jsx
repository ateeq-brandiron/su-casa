import { Phone, Mail, MapPin } from 'lucide-react'

const SocialFB = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const SocialIG = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)
const SocialYT = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
  </svg>
)

const LINKS = {
  Services: [
    'Residential Roofing',
    'Commercial Roofing',
    'Roof Repair',
    'Artistic Finishes',
    'Eco Roofing',
    'Inspections',
  ],
  Company: [
    'About Us',
    'Our Portfolio',
    'Testimonials',
    'Careers',
    'Blog',
    'Contact',
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      {/* Main footer */}
      <div className="container-max section-padding py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <p className="font-heading text-2xl font-bold text-white leading-none">Su Casa</p>
              <p className="font-accent italic text-primary-400 text-sm tracking-widest">Artistic Roofing</p>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Protecting Texas families since 1999 with premium craftsmanship,
              honest pricing, and artistic flair.
            </p>
            <div className="flex gap-3">
              {[SocialFB, SocialIG, SocialYT].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-dark-700 hover:bg-primary-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services & Company */}
          {Object.entries(LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-cream-100 font-semibold text-sm uppercase tracking-widest mb-5">
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-primary-400 text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-cream-100 font-semibold text-sm uppercase tracking-widest mb-5">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              {[
                { icon: Phone, text: '(555) 123-4567' },
                { icon: Mail,  text: 'hello@sucasaroofing.com' },
                { icon: MapPin, text: '1234 Rooftop Blvd\nSan Antonio, TX 78201' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex gap-3 items-start">
                  <Icon size={14} className="text-primary-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-500 text-sm whitespace-pre-line">{text}</span>
                </div>
              ))}
            </div>

            {/* License badge */}
            <div className="mt-6 border border-dark-600 p-3 text-xs text-gray-500">
              <p className="font-semibold text-gray-400 mb-1">Licensed &amp; Insured</p>
              <p>TX Contractor License #RC-1234567</p>
              <p>NRCA Member · GAF Master Elite®</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-700">
        <div className="container-max section-padding py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {year} Su Casa Artistic Roofing. All rights reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map(link => (
              <a key={link} href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
