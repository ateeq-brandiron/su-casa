import { useIntersection } from '../hooks/useIntersection'

const PROJECTS = [
  { title: 'Custom Home — Fort Huachuca Area', tag: 'New Construction', color: 'from-slate-600 to-slate-800' },
  { title: 'Commercial Warehouse Build', tag: 'Commercial', color: 'from-stone-500 to-stone-700' },
  { title: 'Residential Addition & Remodel', tag: 'Renovation', color: 'from-blue-700 to-blue-900' },
  { title: 'Garage & Workshop Build', tag: 'Special Project', color: 'from-gray-500 to-gray-700' },
  { title: 'Kitchen & Bath Full Renovation', tag: 'Interior', color: 'from-zinc-600 to-zinc-800' },
  { title: 'Duplex New Construction', tag: 'Multi-Family', color: 'from-slate-700 to-slate-900' },
]

function ProjectCard({ p }) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300">
      <div className={`h-52 bg-gradient-to-br ${p.color} flex items-center justify-center`}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2" opacity="0.4">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      </div>
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
        <span className="text-white font-semibold text-sm border-b border-white pb-0.5">View Project</span>
      </div>
      {/* Label */}
      <div className="absolute bottom-0 inset-x-0 bg-white p-4">
        <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-0.5">{p.tag}</p>
        <p className="font-semibold text-gray-800 text-sm leading-snug">{p.title}</p>
      </div>
    </div>
  )
}

export default function Projects() {
  const { ref, isVisible } = useIntersection()

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container-max">
        <div ref={ref} className={`text-center mb-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="section-label">Featured Projects</span>
          <h2 className="section-title mb-4">Featured Projects</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            See what Su Casa Builders has delivered for families and businesses across
            Sierra Vista and Cochise County.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map(p => <ProjectCard key={p.title} p={p} />)}
        </div>
      </div>
    </section>
  )
}
