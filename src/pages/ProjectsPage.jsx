import { Page, PageHeading } from '../components/portfolio-shell.jsx'
import { ProjectList } from '../components/project-components.jsx'
import { projects } from '../lib/portfolio-data.js'

export default function ProjectsPage() {
  return (
    <Page className="pb-14 sm:pb-16">
      <PageHeading
        eyebrow="The archive · 2024—25"
        title="Selected work."
        intro="Experiments, products and questions explored through code, data and machine learning. Each one opens into a short case study."
        aside={
          <p className="text-[13px] font-medium text-ink-3">
            <span className="font-serif text-xl italic text-ink">{projects.length}</span> projects
          </p>
        }
      />
      <section aria-labelledby="all-projects">
        <h2 id="all-projects" className="sr-only">
          All projects
        </h2>
        <ProjectList projects={projects} className="mt-8" />
      </section>
    </Page>
  )
}
