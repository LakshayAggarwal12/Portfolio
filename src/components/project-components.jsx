import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { ProjectPreview } from './portfolio-motion.jsx'

export function ProjectRow({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="project-row">
      <ProjectPreview image={project.previewImage} name={project.name} compact />
      <span className="project-number">{project.number}</span>
      <div className="project-main">
        <div>
          <h3>{project.name}</h3>
          <p>{project.summary}</p>
        </div>
        <div className="project-meta">
          <span>{project.category}</span>
          <span>{project.tags.join(' · ')}</span>
        </div>
      </div>
      <ArrowUpRight className="row-arrow" size={20} />
    </Link>
  )
}

export function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectRow key={project.slug} project={project} />
      ))}
    </div>
  )
}
