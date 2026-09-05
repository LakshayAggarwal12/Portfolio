import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { PageFrame, Reveal, SectionLabel } from '../components/portfolio-shell.jsx'
import { ProjectList } from '../components/project-components.jsx'
import { LiveCharacterPlaceholder } from '../components/portfolio-motion.jsx'
import { projects, skills } from '../lib/portfolio-data.js'

export default function HomePage() {
  return (
    <PageFrame>
      <section className="hero">
        <Reveal>
          <p className="eyebrow">CS · Data Science · AI/ML</p>
          <h1>
            Building things<br />
            with <em>code,</em><br />
            data &amp; AI.
          </h1>
          <p className="hero-copy">
            Hi, I&apos;m Lakshay - a full stack developer who enjoys turning ideas into clean, scalable software. I build across the frontend and backend, and use data and AI to create products that solve real-world problems.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" to="/projects">
              See my projects <ArrowUpRight size={17} />
            </Link>
            <Link className="text-link" to="/contact">
              Get in touch <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
        <LiveCharacterPlaceholder />
      </section>

      <section className="section">
        <SectionLabel number="01">Selected Work</SectionLabel>
        <div className="section-intro">
          <h2>
            A few projects I&apos;ve<br />
            <em>shipped recently.</em>
          </h2>
          <Link className="text-link" to="/projects">
            All projects <ArrowUpRight size={16} />
          </Link>
        </div>
        <ProjectList projects={projects.slice(0, 4)} />
      </section>

      <section className="split-section">
        <div>
          <SectionLabel number="02">Tech Stack</SectionLabel>
          <h2>
            Tools I&apos;m<br />
            <em>comfortable with.</em>
          </h2>
        </div>
        <div className="skill-grid">
          {skills.map((group) => (
            <div className="skill-group" key={group.label}>
              <p>{group.label}</p>
              <div>
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-strip">
        <div>
          <SectionLabel number="03">About me</SectionLabel>
          <h2>
            Engineer by training,<br />
            <em>curious by nature.</em>
          </h2>
        </div>
        <div>
          <p className="lede">
            I like taking complicated things and giving them structure — whether that&apos;s
            a clean interface, a solid backend, or a model that finds a useful signal in noisy data.
          </p>
          <Link className="text-link" to="/about">
            More about me <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <section className="contact-cta">
        <p className="eyebrow">Have something interesting?</p>
        <h2>
          Let&apos;s build something<br />
          <em>worth using.</em>
        </h2>
        <Link className="button button-dark" to="/contact">
          Start a conversation <ArrowUpRight size={17} />
        </Link>
      </section>
    </PageFrame>
  )
}
