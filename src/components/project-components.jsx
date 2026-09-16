import { Link } from 'react-router-dom'
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react'
import { ProjectPreview } from './portfolio-motion.jsx'
import { Badge } from './ui.jsx'

/**
 * A project entry in the ledger.
 *
 * The whole row is clickable, but it is *not* an <a> — nesting the repo
 * and demo links inside one would be invalid HTML and unusable with a
 * keyboard. Instead the title link stretches over the row with an
 * `::after` overlay, and the action buttons sit above it on z-10.
 */
export function ProjectRow({ project }) {
  const badges = project.stack?.length ? project.stack : project.tags
  const hasActions = Boolean(project.github || project.demo)

  return (
    <article className="lift group relative grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-3 rounded-[16px] border-t border-border px-2 py-5 hover:bg-bg-2 hover:shadow-[0_12px_28px_-20px_rgba(20,18,16,0.35)] sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:gap-x-6 sm:px-4 sm:py-6 lg:hover:-translate-y-[2px]">
      {/* Preview thumbnail — carries the paper texture, hidden on phones
          where it would squeeze the text below a readable width. Columns
          are placed explicitly so removing it doesn't reflow the rest. */}
      <div className="hidden w-[132px] shrink-0 overflow-hidden rounded-[10px] sm:col-start-1 sm:block lg:w-[160px]">
        <ProjectPreview image={project.previewImage} name={project.name} compact />
      </div>

      {/* Title block */}
      <div className="col-start-1 min-w-0 sm:col-start-2">
        <div className="mb-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-3">
          <span className="font-serif text-[13px] normal-case italic tracking-normal text-accent">
            {project.number}
          </span>
          <span className="text-ink-2">{project.category}</span>
          {project.year && (
            <>
              <span aria-hidden="true" className="h-[3px] w-[3px] rounded-full bg-ink-3" />
              <span>{project.year}</span>
            </>
          )}
        </div>

        <h3 className="mb-2 text-[19px] font-bold leading-tight tracking-[-0.025em] text-ink sm:text-[21px]">
          <Link
            to={`/projects/${project.slug}`}
            className="rounded-sm transition-colors duration-150 after:absolute after:inset-0 after:content-[''] group-hover:text-accent"
          >
            {project.name}
          </Link>
        </h3>

        <p className="measure mb-3 text-pretty text-sm leading-[1.6] text-ink-2">
          {project.summary}
        </p>

        <div className="flex flex-wrap items-center gap-2">
          {badges.map((badge) => (
            <Badge key={badge}>{badge}</Badge>
          ))}
        </div>

        {hasActions && (
          <div className="relative z-10 mt-3.5 flex flex-wrap items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg border border-border bg-bg-card px-3 text-[12.5px] font-semibold text-ink-2 transition-colors duration-150 hover:border-ink hover:text-ink"
              >
                <Github size={14} aria-hidden="true" />
                Code
                <span className="sr-only"> for {project.name}</span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg border border-accent/35 bg-accent-bg px-3 text-[12.5px] font-semibold text-accent transition-colors duration-150 hover:bg-accent hover:text-white"
              >
                <ExternalLink size={14} aria-hidden="true" />
                Live demo
                <span className="sr-only"> of {project.name}</span>
              </a>
            )}
          </div>
        )}
      </div>

      {/* Affordance — signals the row opens a case study */}
      <ArrowUpRight
        aria-hidden="true"
        className="col-start-2 shrink-0 self-start text-ink-3 transition-[transform,color] duration-200 group-hover:-translate-y-[3px] group-hover:translate-x-[3px] group-hover:text-accent sm:col-start-3 sm:self-center"
        size={20}
      />
    </article>
  )
}

export function ProjectList({ projects, className = '' }) {
  return (
    <div className={`[&>article:last-child]:border-b [&>article:last-child]:border-border ${className}`}>
      {projects.map((project) => (
        <ProjectRow key={project.slug} project={project} />
      ))}
    </div>
  )
}
