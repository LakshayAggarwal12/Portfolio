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
      <Link className="back-link" to="/projects">
        <ArrowLeft size={16} /> Back to work
      </Link>
      <PageHeading
        eyebrow={`${project.number} · ${project.category}`}
        title={project.name}
        intro={project.summary}
      />
      <Reveal className="case-preview">
        <ProjectPreview image={project.previewImage} name={project.name} />
      </Reveal>
      <section className="case-study">
        <div className="case-hero">
          <span>{project.category}</span>
          <span>{project.tags.join(' · ')}</span>
        </div>
        <div className="case-grid">
          <div>
            <SectionLabel number="01">The problem</SectionLabel>
            <p className="lede">{project.problem}</p>
          </div>
          <div>
            <SectionLabel number="02">The approach</SectionLabel>
            <p className="lede">{project.solution}</p>
          </div>
        </div>
        <div className="case-features">
          <SectionLabel number="03">Key features</SectionLabel>
          <ul>
            {project.features.map((feature) => (
              <li key={feature}>
                {feature} <ArrowUpRight size={15} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageFrame>
  )
}
