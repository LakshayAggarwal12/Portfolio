import { ChevronDown } from 'lucide-react'
import { Page, Reveal, Screen, SectionLabel, useScrollRegion } from '../components/portfolio-shell.jsx'
import { ProjectList } from '../components/project-components.jsx'
import { LiveCharacterPlaceholder } from '../components/portfolio-motion.jsx'
import { DisplayHeading, InkButton, SkillGroup, TextLink } from '../components/ui.jsx'
import { projects, skills } from '../lib/portfolio-data.js'

/* Shared section rhythm. One constant beats scattering py-[100px] around
   and hoping the values stay in step. */
const section = 'border-t border-border py-14 sm:py-16 lg:py-20'

function ScrollCue() {
  const { scrollTo, regionRef } = useScrollRegion() ?? {}
  return (
    <button
      type="button"
      onClick={() => scrollTo?.(regionRef?.current?.clientHeight ?? 0)}
      className="group mt-10 hidden items-center gap-2 self-start rounded-lg text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-3 transition-colors duration-150 hover:text-ink lg:inline-flex"
    >
      <ChevronDown size={15} aria-hidden="true" className="scroll-nudge" />
      Selected work
    </button>
  )
}

export default function HomePage() {
  return (
    <Page>
      {/* ── Hero — occupies exactly one screen of the scroll region ── */}
      <Screen>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="min-w-0">
            <Reveal>
              <p className="eyebrow mb-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-accent">
                CS · Data Science · AI/ML
              </p>
            </Reveal>

            <Reveal delay={0.06}>
              <h1
                className="mb-5 font-extrabold leading-[1.03] tracking-[-0.04em] text-ink"
                style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}
              >
                Building things
                <br />
                with <em className="font-serif font-bold not-italic text-accent">code,</em>
                <br />
                data &amp; AI.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="measure mb-8 text-pretty text-base leading-[1.7] text-ink-2 sm:text-[17px]">
                Hi, I&apos;m Lakshay — a full stack developer who turns ideas into clean, scalable
                software. I build across the frontend and backend, and use data and AI to make
                products that solve real problems.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-4">
                <InkButton to="/projects">See my projects</InkButton>
                <TextLink to="/contact">Get in touch</TextLink>
              </div>
              <ScrollCue />
            </Reveal>
          </div>

          {/* Hero art. Text leads on small screens so a first-time visitor
              reads the name and role before the decorative card. */}
          <div className="order-last">
            <LiveCharacterPlaceholder />
          </div>
        </div>
      </Screen>

      {/* ── Selected work ── */}
      <section className={section} aria-labelledby="home-work">
        <SectionLabel>Selected work</SectionLabel>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end sm:gap-8">
          <Reveal>
            <DisplayHeading id="home-work">
              A few projects I&apos;ve
              <br />
              <em className="font-serif font-bold not-italic text-accent">shipped recently.</em>
            </DisplayHeading>
          </Reveal>
          <Reveal delay={0.08}>
            <TextLink to="/projects">All projects</TextLink>
          </Reveal>
        </div>
        <ProjectList projects={projects.slice(0, 3)} className="mt-9" />
      </section>

      {/* ── Tech stack ── */}
      <section className={`${section} grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16`}>
        <Reveal>
          <SectionLabel>Tech stack</SectionLabel>
          <DisplayHeading>
            Tools I&apos;m
            <br />
            <em className="font-serif font-bold not-italic text-accent">comfortable with.</em>
          </DisplayHeading>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 xl:grid-cols-3">
            {skills.map((group) => (
              <SkillGroup group={group} key={group.label} />
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── About strip ── */}
      <section className={`${section} grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16`}>
        <Reveal>
          <SectionLabel>About me</SectionLabel>
          <DisplayHeading>
            Engineer by training,
            <br />
            <em className="font-serif font-bold not-italic text-accent">curious by nature.</em>
          </DisplayHeading>
        </Reveal>
        <Reveal delay={0.08} className="lg:self-end">
          <p className="measure mb-6 text-pretty text-[17px] leading-[1.75] text-ink-2">
            I like taking complicated things and giving them structure — a clean interface, a solid
            backend, or a model that finds a useful signal in noisy data.
          </p>
          <TextLink to="/about">More about me</TextLink>
        </Reveal>
      </section>

      {/* ── Contact CTA ── */}
      <section className={section}>
        <Reveal>
          <p className="eyebrow mb-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-accent">
            Have something interesting?
          </p>
          <DisplayHeading size="lg" className="mb-8">
            Let&apos;s build something
            <br />
            <em className="font-serif font-bold not-italic text-accent">worth using.</em>
          </DisplayHeading>
          <InkButton to="/contact">Start a conversation</InkButton>
        </Reveal>
      </section>
    </Page>
  )
}
