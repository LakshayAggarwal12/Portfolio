import { PageFrame, PageHeading, SectionLabel } from '../components/portfolio-shell.jsx'
import { ProjectList } from '../components/project-components.jsx'
import { projects } from '../lib/portfolio-data.js'

export default function ProjectsPage() {
  return (
    <PageFrame>
      <PageHeading
        eyebrow="The archive · 2024—25"
        title="Selected work."
        intro="A collection of experiments, products and questions explored through code, data and machine learning."
      />
      <section className="section archive">
        <SectionLabel number="01">All projects</SectionLabel>
        <ProjectList projects={projects} />
      </section>
    </PageFrame>
  )
}
