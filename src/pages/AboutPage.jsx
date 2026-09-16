import { Page, PageHeading, Reveal, SectionLabel } from '../components/portfolio-shell.jsx'
import { DisplayHeading, InkButton, SkillGroup, TextLink } from '../components/ui.jsx'
import { skills } from '../lib/portfolio-data.js'

export default function AboutPage() {
  return (
    <Page className="pb-14 sm:pb-16">
      <PageHeading
        eyebrow="A short introduction"
        title="Curious about how things work."
        intro="I'm Lakshay, a developer working at the intersection of software engineering, data and artificial intelligence."
      />

      {/* Narrative + note card. Sits directly under the masthead so the
          opening screen carries real content, not just a headline. */}
      <section className="grid grid-cols-1 gap-8 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-12">
        <div className="min-w-0">
          <SectionLabel>The long version</SectionLabel>
          <div className="measure space-y-5">
            <p className="text-pretty text-[16px] leading-[1.75] text-ink-2 sm:text-[17px]">
              I enjoy building software that makes complicated things feel a little more
              approachable. My projects move between full-stack product work, machine learning
              experiments and interfaces for understanding data.
            </p>
            <p className="text-pretty text-[16px] leading-[1.75] text-ink-2 sm:text-[17px]">
              I&apos;m especially drawn to problems where the technical work is only half the answer
              — the other half is giving people a clear, considered way to use it.
            </p>
          </div>
          <div className="mt-7">
            <TextLink to="/experience">See what I&apos;ve been working on</TextLink>
          </div>
        </div>

        {/* Paper note card */}
        <aside className="relative h-fit -rotate-1 rounded-[18px] border border-border bg-bg-card p-7 shadow-[0_16px_40px_-26px_rgba(20,18,16,0.28)] sm:p-8">
          <span
            aria-hidden="true"
            className="absolute -top-2.5 right-10 h-[26px] w-[70px] rotate-[4deg] rounded-[3px] border border-border/80 bg-bg-2/90 shadow-sm"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-2.5 left-10 h-[26px] w-[58px] rotate-[-3deg] rounded-[3px] border border-border/80 bg-bg-2/90 shadow-sm"
          />
          <div className="pointer-events-none absolute inset-0 paper-grain opacity-[0.35]" aria-hidden="true" />
          <div
            className="pointer-events-none absolute inset-3 rounded-[12px] border border-dashed border-ink-3/40"
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="mb-4 text-[11px] font-bold uppercase tracking-[0.12em] text-accent">
              Currently exploring
            </h2>
            <ul className="space-y-2.5 text-[15px] leading-[1.5] text-ink-2">
              <li className="flex items-start gap-2.5">
                <span
                  aria-hidden="true"
                  className="mt-[8px] h-[6px] w-[6px] shrink-0 rounded-full border border-accent bg-accent-bg"
                />
                AI-assisted products
              </li>
              <li className="flex items-start gap-2.5">
                <span
                  aria-hidden="true"
                  className="mt-[8px] h-[6px] w-[6px] shrink-0 rounded-full border border-accent bg-accent-bg"
                />
                Data-informed interfaces
              </li>
              <li className="flex items-start gap-2.5">
                <span
                  aria-hidden="true"
                  className="mt-[8px] h-[6px] w-[6px] shrink-0 rounded-full border border-accent bg-accent-bg"
                />
                Reliable software systems
              </li>
            </ul>
          </div>
        </aside>
      </section>

      {/* Skills */}
      <section className="border-t border-border py-12 lg:py-16">
        <SectionLabel>Working toolkit</SectionLabel>
        <Reveal>
          <DisplayHeading className="mb-9">Languages &amp; tools I use.</DisplayHeading>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => (
              <SkillGroup group={group} key={group.label} />
            ))}
          </div>
        </Reveal>
      </section>

      <Reveal className="flex flex-wrap items-center gap-x-5 gap-y-4 border-t border-border pt-12">
        <InkButton to="/projects">See the work</InkButton>
        <InkButton to="/contact" variant="ghost">
          Get in touch
        </InkButton>
      </Reveal>
    </Page>
  )
}
