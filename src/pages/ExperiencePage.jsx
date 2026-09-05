import { PageFrame, PageHeading, SectionLabel } from '../components/portfolio-shell.jsx'
import { experience } from '../lib/portfolio-data.js'

export default function ExperiencePage() {
  return (
    <PageFrame>
      <PageHeading
        eyebrow="What I've been up to"
        title="Experience & direction."
        intro="A work-in-progress record of the problems I've chosen to spend time with."
      />
      <section className="section">
        <SectionLabel number="01">Through-lines</SectionLabel>
        <div className="timeline">
          {experience.map((item, index) => (
            <article className="timeline-item" key={item.label}>
              <span className="timeline-index">0{index + 1}</span>
              <div>
                <p className="eyebrow">{item.label}</p>
                <h2>{item.title}</h2>
                <p className="lede">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageFrame>
  )
}
