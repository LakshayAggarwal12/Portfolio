import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { ProjectPreview } from './portfolio-motion.jsx'

export function ProjectRow({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group grid grid-cols-[48px_120px_minmax(0,1fr)_28px] items-center gap-5 px-4 py-6 border-t border-border rounded-[16px] transition-all duration-200 hover:bg-bg-2 hover:px-6 hover:-translate-y-[1px] hover:shadow-[0_10px_26px_-18px_rgba(20,18,16,0.28)] max-[640px]:grid-cols-[36px_minmax(0,1fr)_24px] max-[640px]:gap-3"
    >
      {/* Number marker */}
      <span className="relative z-10 col-start-1 row-span-2 grid h-[34px] w-[34px] place-items-center rounded-full border border-border bg-bg-card font-serif italic text-[13px] text-ink-3 transition-colors duration-200 group-hover:border-accent group-hover:text-accent max-[640px]:row-span-1 max-[640px]:h-[30px] max-[640px]:w-[30px]">
        {project.number}
      </span>

      {/* Preview thumbnail (hidden on mobile) */}
      <div className="col-start-2 row-span-2 max-[640px]:hidden">
        <ProjectPreview image={project.previewImage} name={project.name} compact />
      </div>

      {/* Main content */}
      <div className="col-start-3 flex justify-between items-center gap-6 max-[640px]:col-start-2 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-2">
        <div>
          <h3 className="text-xl font-bold tracking-[-0.025em] mb-1.5 text-ink max-[640px]:text-base">
            {project.name}
          </h3>
          <p className="text-sm text-ink-2 text-pretty">{project.summary}</p>
        </div>
        <div className="flex flex-col items-end gap-1 text-ink-3 text-xs font-medium text-right whitespace-nowrap max-[640px]:items-start max-[640px]:text-left">
          <span className="text-ink-2 font-semibold">{project.category}</span>
          <span>{project.tags.join(' · ')}</span>
        </div>
      </div>

      {/* Arrow */}
      <ArrowUpRight
        className="col-start-4 row-span-2 text-accent transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px] max-[640px]:col-start-3 max-[640px]:row-span-1"
        size={20}
      />
    </Link>
  )
}

export function ProjectList({ projects }) {
  return (
    <div className="mt-[52px] [&>a:last-child]:border-b [&>a:last-child]:border-border">
      {projects.map((project) => (
        <ProjectRow key={project.slug} project={project} />
      ))}
    </div>
  )
}
