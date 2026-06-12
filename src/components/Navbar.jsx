import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home',      href: '#home' },
  { label: 'Services',  href: '#services' },
  { label: 'About',     href: '#about' },
  { label: 'Projects',  href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',   href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-800/95 backdrop-blur-md shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-max section-padding flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex flex-col leading-none group">
          <span className="font-heading text-2xl font-bold text-white tracking-tight">
            Su Casa
          </span>
          <span className="font-accent italic text-primary-400 text-sm tracking-widest">
            Artistic Roofing
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-primary-400 text-sm font-medium tracking-wide uppercase transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="tel:+15551234567"
          className="hidden lg:flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white text-sm font-semibold px-5 py-2.5 transition-colors duration-200"
        >
          <Phone size={15} />
          (555) 123-4567
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-dark-800 border-t border-dark-600`}
      >
        <nav className="container-max section-padding py-6 flex flex-col gap-4">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-primary-400 text-base font-medium tracking-wide transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+15551234567"
            className="flex items-center gap-2 bg-primary-600 text-white text-sm font-semibold px-5 py-3 w-fit mt-2"
          >
            <Phone size={15} />
            (555) 123-4567
          </a>
        </nav>
      </div>
    </header>
  )
}
