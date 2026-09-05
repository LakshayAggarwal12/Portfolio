import { PageFrame, PageHeading, SectionLabel } from '../components/portfolio-shell.jsx'
import { skills } from '../lib/portfolio-data.js'

export default function AboutPage() {
  return (
    <PageFrame>
      <PageHeading
        eyebrow="A short introduction"
        title="Curious about how things work."
        intro="I'm Lakshay, a developer interested in the intersection of software engineering, data and artificial intelligence."
      />
      <section className="about-layout">
        <div>
          <SectionLabel number="01">The long version</SectionLabel>
          <div className="prose">
            <p>
              I enjoy building software that makes complicated things feel a little more approachable. My projects move between full-stack product work, machine learning experiments and interfaces for understanding data.
            </p>
            <p>
              I&apos;m especially drawn to problems where the technical work is only half the answer — the other half is giving people a clear, considered way to use it.
            </p>
          </div>
        </div>
        <div className="note-card">
          <p className="eyebrow">CURRENTLY EXPLORING</p>
          <p>
            AI-assisted products<br />
            Data-informed interfaces<br />
            Reliable software systems
          </p>
        </div>
      </section>
      <section className="section">
        <SectionLabel number="02">Working toolkit</SectionLabel>
        <div className="skill-grid skill-grid-wide">
          {skills.map((group) => (
            <div className="skill-group" key={group.label}>
              <p>{group.label}</p>
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          ))}
        </div>
      </section>
    </PageFrame>
  )
}
