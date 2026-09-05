import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
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
      <Link
        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-2 transition-colors duration-150 hover:text-ink"
        to="/projects"
      >
        <ArrowLeft size={16} /> Back to work
      </Link>

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
        <div className="py-12 border-t border-border flex gap-8">
          <span className="text-[13px] text-ink-2">{project.category}</span>
          <span className="text-[13px] text-ink-2">{project.tags.join(' · ')}</span>
        </div>

        {/* Problem / Approach */}
        <div className="grid grid-cols-2 gap-20 py-[60px] border-t border-border max-[900px]:grid-cols-1 max-[900px]:gap-10 max-[640px]:py-10">
          <div>
            <SectionLabel number="01">The problem</SectionLabel>
            <p className="text-lg leading-[1.7] text-ink-2">{project.problem}</p>
          </div>
          <div>
            <SectionLabel number="02">The approach</SectionLabel>
            <p className="text-lg leading-[1.7] text-ink-2">{project.solution}</p>
          </div>
        </div>

        {/* Features */}
        <div className="py-[60px] border-t border-border max-[640px]:py-10">
          <SectionLabel number="03">Key features</SectionLabel>
          <ul className="flex flex-wrap gap-2 list-none p-0">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-1.5 px-3.5 py-[7px] bg-bg-2 border border-border rounded-md text-sm text-ink-2 font-medium"
              >
                {feature} <ArrowUpRight size={15} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageFrame>
  )
}
