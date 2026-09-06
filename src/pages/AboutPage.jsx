import { PageFrame, PageHeading, SectionLabel } from '../components/portfolio-shell.jsx'
import { DisplayHeading, SkillGroup } from '../components/ui.jsx'
import { skills } from '../lib/portfolio-data.js'

export default function AboutPage() {
  return (
    <PageFrame>
      <PageHeading
        eyebrow="A short introduction"
        title="Curious about how things work."
        intro="I'm Lakshay, a developer interested in the intersection of software engineering, data and artificial intelligence."
      />

      {/* About layout */}
      <section className="grid grid-cols-[1.2fr_0.8fr] gap-20 py-[60px] border-t border-border max-[900px]:grid-cols-1 max-[900px]:gap-10 max-[640px]:py-12">
        <div>
          <SectionLabel number="01">The long version</SectionLabel>
          <div className="max-w-[540px]">
            <p className="text-[17px] leading-[1.75] text-ink-2 mb-5">
              I enjoy building software that makes complicated things feel a little more approachable. My projects move between full-stack product work, machine learning experiments and interfaces for understanding data.
            </p>
            <p className="text-[17px] leading-[1.75] text-ink-2 mb-5">
              I&apos;m especially drawn to problems where the technical work is only half the answer — the other half is giving people a clear, considered way to use it.
            </p>
          </div>
        </div>

        {/* Paper note card */}
        <aside className="relative -rotate-1 h-fit rounded-[18px] border border-border bg-bg-card p-8 shadow-[0_16px_40px_-24px_rgba(20,18,16,0.24)]">
          <span
            aria-hidden="true"
            className="absolute -top-2.5 right-10 h-[26px] w-[70px] rotate-[4deg] rounded-[3px] border border-border/80 bg-bg-2/90 shadow-sm"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-2.5 left-10 h-[26px] w-[58px] rotate-[-3deg] rounded-[3px] border border-border/80 bg-bg-2/90 shadow-sm"
          />
          <div className="absolute inset-0 paper-grain opacity-[0.35] pointer-events-none" aria-hidden="true" />
          <div className="absolute inset-3 rounded-[12px] border border-dashed border-ink-3/40 pointer-events-none" aria-hidden="true" />
          <div className="relative">
            <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-accent mb-4">
              Currently exploring
            </p>
            <p className="text-base leading-[1.8] text-ink-2">
              AI-assisted products<br />
              Data-informed interfaces<br />
              Reliable software systems
            </p>
          </div>
        </aside>
      </section>

      {/* Skills */}
      <section className="py-[100px] border-t border-border max-[640px]:py-[72px]">
        <SectionLabel number="02">Working toolkit</SectionLabel>
        <DisplayHeading className="mt-4 mb-12">Languages &amp; tools I use.</DisplayHeading>
        <div className="grid grid-cols-3 gap-7 max-[900px]:grid-cols-2 max-[640px]:grid-cols-2">
          {skills.map((group) => (
            <SkillGroup group={group} key={group.label} />
          ))}
        </div>
      </section>
    </PageFrame>
  )
}
