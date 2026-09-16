import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react'
import { Page, PageHeading, Reveal, SectionLabel } from '../components/portfolio-shell.jsx'
import { ProjectPreview } from '../components/portfolio-motion.jsx'
import { Badge, InkButton } from '../components/ui.jsx'
import { getProject, getProjectNeighbours } from '../lib/portfolio-data.js'
import NotFoundPage from './NotFoundPage.jsx'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = getProject(slug)

  if (!project) return <NotFoundPage />

  const { previous, next } = getProjectNeighbours(slug)
  const badges = project.stack?.length ? project.stack : project.tags

  return (
    <Page className="pb-14 sm:pb-16">
      <nav aria-label="Breadcrumb" className="pt-7">
        <Link
          className="group inline-flex min-h-[36px] items-center gap-1.5 text-[13px] font-medium text-ink-2 transition-colors duration-150 hover:text-ink"
          to="/projects"
        >
          <ArrowLeft
            size={16}
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:-translate-x-[3px]"
          />
          All work
        </Link>
      </nav>

      <PageHeading
        eyebrow={`${project.number} · ${project.category}${project.year ? ` · ${project.year}` : ''}`}
        title={project.name}
        intro={project.summary}
        className="pt-6 sm:pt-8"
        aside={
          (project.github || project.demo) && (
            <div className="flex flex-wrap gap-3">
              {project.demo && (
                <InkButton href={project.demo} target="_blank" rel="noopener noreferrer" icon={ExternalLink}>
                  Live demo
                </InkButton>
              )}
              {project.github && (
                <InkButton
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
                  icon={Github}
                >
                  Source code
                </InkButton>
              )}
            </div>
          )
        }
      />

      {/* Preview */}
      <Reveal className="my-8 sm:my-10">
        <ProjectPreview image={project.previewImage} name={project.name} />
      </Reveal>

      {/* Stack */}
      <section className="flex flex-col gap-3 border-t border-border py-7 sm:flex-row sm:items-center sm:gap-6">
        <h2 className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-3 sm:w-[90px] sm:shrink-0">
          Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {badges.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </section>

      {/* Problem / approach */}
      <section className="grid grid-cols-1 gap-8 border-t border-border py-10 lg:grid-cols-2 lg:gap-16 lg:py-12">
        <Reveal>
          <SectionLabel as="h2" number="01">The problem</SectionLabel>
          <p className="measure text-pretty text-[16px] leading-[1.75] text-ink-2 sm:text-[17px]">
            {project.problem}
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <SectionLabel as="h2" number="02">The approach</SectionLabel>
          <p className="measure text-pretty text-[16px] leading-[1.75] text-ink-2 sm:text-[17px]">
            {project.solution}
          </p>
        </Reveal>
      </section>

      {/* Features */}
      <section className="border-t border-border py-10 lg:py-12">
        <SectionLabel as="h2" number="03">Key features</SectionLabel>
        <ul className="grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2.5 rounded-lg border border-border bg-bg-2 px-4 py-3 text-[15px] font-medium text-ink-2"
            >
              <span
                aria-hidden="true"
                className="h-[7px] w-[7px] shrink-0 rounded-full border border-accent bg-accent-bg"
              />
              {feature}
            </li>
          ))}
        </ul>
      </section>

      {/* Prev / next — keeps the archive browsable without a round trip */}
      <nav
        aria-label="More projects"
        className="grid grid-cols-1 gap-3 border-t border-border pt-8 sm:grid-cols-2"
      >
        {previous ? (
          <Link
            to={`/projects/${previous.slug}`}
            className="group flex items-center gap-3 rounded-[14px] border border-border bg-bg-card p-4 transition-colors duration-150 hover:border-ink"
          >
            <ArrowLeft
              size={16}
              aria-hidden="true"
              className="shrink-0 text-ink-3 transition-transform duration-200 group-hover:-translate-x-[3px] group-hover:text-accent"
            />
            <span className="min-w-0">
              <span className="block text-[11px] font-bold uppercase tracking-[0.1em] text-ink-3">
                Previous
              </span>
              <span className="block truncate font-semibold text-ink">{previous.name}</span>
            </span>
          </Link>
        ) : (
          <span aria-hidden="true" className="hidden sm:block" />
        )}
        {next && (
          <Link
            to={`/projects/${next.slug}`}
            className="group flex items-center justify-end gap-3 rounded-[14px] border border-border bg-bg-card p-4 text-right transition-colors duration-150 hover:border-ink"
          >
            <span className="min-w-0">
              <span className="block text-[11px] font-bold uppercase tracking-[0.1em] text-ink-3">
                Next
              </span>
              <span className="block truncate font-semibold text-ink">{next.name}</span>
            </span>
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="shrink-0 text-ink-3 transition-transform duration-200 group-hover:translate-x-[3px] group-hover:text-accent"
            />
          </Link>
        )}
      </nav>
    </Page>
  )
}
