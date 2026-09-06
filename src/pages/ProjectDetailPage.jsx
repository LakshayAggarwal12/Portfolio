import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PageFrame, PageHeading, Reveal, SectionLabel } from '../components/portfolio-shell.jsx'
import { ProjectPreview } from '../components/portfolio-motion.jsx'
import { getProject } from '../lib/portfolio-data.js'
import NotFoundPage from './NotFoundPage.jsx'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = getProject(slug)

  if (!project) return <NotFoundPage />

  return (
    <PageFrame>
      <div className="pt-8">
        <Link
          className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-2 transition-colors duration-150 hover:text-ink"
          to="/projects"
        >
          <ArrowLeft size={16} className="transition-transform duration-200 group-hover:-translate-x-[2px]" />
          Back to work
        </Link>
      </div>

      <PageHeading
        eyebrow={`${project.number} · ${project.category}`}
        title={project.name}
        intro={project.summary}
      />

      {/* Preview */}
      <Reveal className="min-h-[280px] bg-bg-2 border border-border rounded-[20px] flex items-center justify-center my-10">
        <ProjectPreview image={project.previewImage} name={project.name} />
      </Reveal>

      <section>
        {/* Meta */}
        <div className="py-12 border-t border-border grid grid-cols-2 gap-8 max-[640px]:grid-cols-1">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-3 mb-2">Category</p>
            <p className="text-sm font-semibold text-ink">{project.category}</p>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-3 mb-2">Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-[5px] bg-bg-2 border border-border rounded-md text-[13px] font-medium text-ink-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Problem / Approach */}
        <div className="grid grid-cols-2 gap-20 py-[60px] border-t border-border max-[900px]:grid-cols-1 max-[900px]:gap-10 max-[640px]:py-10">
          <div>
            <SectionLabel number="01">The problem</SectionLabel>
            <p className="text-lg leading-[1.7] text-ink-2 text-pretty">{project.problem}</p>
          </div>
          <div>
            <SectionLabel number="02">The approach</SectionLabel>
            <p className="text-lg leading-[1.7] text-ink-2 text-pretty">{project.solution}</p>
          </div>
        </div>

        {/* Features */}
        <div className="py-[60px] border-t border-border max-[640px]:py-10">
          <SectionLabel number="03">Key features</SectionLabel>
          <ul className="flex flex-wrap gap-2 list-none p-0">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2.5 px-3.5 py-[7px] bg-bg-2 border border-border rounded-md text-sm text-ink-2 font-medium"
              >
                <span
                  aria-hidden="true"
                  className="h-[7px] w-[7px] rounded-full border border-accent bg-accent-bg flex-shrink-0"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageFrame>
  )
}
