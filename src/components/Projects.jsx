import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useIntersection } from '../hooks/useIntersection'

const CATEGORIES = ['All', 'Residential', 'Commercial', 'Artistic', 'Repair']

const PROJECTS = [
  {
    id: 1,
    title: 'The Hacienda Estate',
    location: 'San Antonio, TX',
    category: 'Artistic',
    tag: 'Spanish Clay Tile',
    color: 'from-amber-900 to-amber-700',
    year: '2024',
  },
  {
    id: 2,
    title: 'Riverside Office Park',
    location: 'Austin, TX',
    category: 'Commercial',
    tag: 'TPO Membrane',
    color: 'from-slate-700 to-slate-600',
    year: '2024',
  },
  {
    id: 3,
    title: 'The Morrison Residence',
    location: 'Dallas, TX',
    category: 'Residential',
    tag: 'Architectural Shingles',
    color: 'from-stone-700 to-stone-600',
    year: '2023',
  },
  {
    id: 4,
    title: 'Copper Crest Cottage',
    location: 'Houston, TX',
    category: 'Artistic',
    tag: 'Standing Seam Copper',
    color: 'from-orange-800 to-orange-700',
    year: '2023',
  },
  {
    id: 5,
    title: 'Sierra Vista Townhomes',
    location: 'El Paso, TX',
    category: 'Residential',
    tag: 'Metal Shingles',
    color: 'from-zinc-700 to-zinc-600',
    year: '2023',
  },
  {
    id: 6,
    title: 'La Paloma Boutique Hotel',
    location: 'San Antonio, TX',
    category: 'Commercial',
    tag: 'Slate & Copper',
    color: 'from-teal-800 to-teal-700',
    year: '2024',
  },
]

function ProjectCard({ project, index }) {
  const { ref, isVisible } = useIntersection()

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${index * 100}ms` }}
      className={`group relative overflow-hidden cursor-pointer ${
        isVisible ? 'animate-fade-up' : 'opacity-0'
      }`}
    >
      {/* Image placeholder */}
      <div className={`aspect-[4/3] bg-gradient-to-br ${project.color} relative`}>
        {/* Architectural line art */}
        <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full opacity-20">
          <polygon points="200,30 30,220 370,220" fill="none" stroke="white" strokeWidth="2"/>
          <polygon points="200,70 70,220 330,220" fill="none" stroke="white" strokeWidth="1.5"/>
          <line x1="30" y1="220" x2="370" y2="220" stroke="white" strokeWidth="3"/>
          {[...Array(7)].map((_, i) => (
            <rect key={i} x={35 + i * 50} y={225} width={42} height={20} fill="white" opacity={0.15} rx="1"/>
          ))}
        </svg>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/60 transition-all duration-500" />

        {/* Hover content */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <span className="flex items-center gap-2 text-white font-semibold text-sm border-b border-white pb-1">
            View Project <ArrowRight size={16} />
          </span>
        </div>

        {/* Tag */}
        <div className="absolute top-4 left-4 bg-primary-600/90 text-white text-xs font-semibold px-3 py-1 tracking-wide">
          {project.tag}
        </div>
        <div className="absolute top-4 right-4 bg-dark-900/70 text-gray-200 text-xs px-3 py-1">
          {project.year}
        </div>
      </div>

      {/* Info */}
      <div className="bg-white border border-gray-100 p-5 group-hover:border-primary-300 transition-colors duration-300">
        <p className="text-xs text-primary-500 font-semibold tracking-wide uppercase mb-1">
          {project.category}
        </p>
        <h3 className="font-heading text-lg font-semibold text-dark-800 leading-snug">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mt-1">{project.location}</p>
      </div>
    </div>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const { ref, isVisible } = useIntersection()

  const filtered = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 lg:py-32 bg-cream-50">
      <div className="container-max section-padding">
        {/* Header */}
        <div ref={ref} className={`text-center mb-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="section-label mb-3">Our Portfolio</p>
          <h2 className="section-title mb-5">
            Recent Work We're
            <br />
            <em className="not-italic text-primary-600">Proud To Show</em>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Each project reflects our commitment to precision, beauty, and durability.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 text-sm font-semibold tracking-wide uppercase transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-500 border border-gray-200 hover:border-primary-400 hover:text-primary-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
