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

        {/* Note card */}
        <div className="p-8 bg-bg-2 border border-border rounded-[20px] h-fit">
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-accent mb-4">
            CURRENTLY EXPLORING
          </p>
          <p className="text-base leading-[1.8] text-ink-2">
            AI-assisted products<br />
            Data-informed interfaces<br />
            Reliable software systems
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="py-[100px] border-t border-border max-[640px]:py-[72px]">
        <SectionLabel number="02">Working toolkit</SectionLabel>
        <div className="grid grid-cols-3 gap-7 mt-12 max-[900px]:grid-cols-2 max-[640px]:grid-cols-2">
          {skills.map((group) => (
            <div className="border-t-2 border-border pt-[18px]" key={group.label}>
              <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-accent mb-3.5">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-block px-3 py-[5px] bg-bg-2 border border-border rounded-md text-[13px] font-medium text-ink-2 transition-colors duration-150 hover:border-accent hover:text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageFrame>
  )
}
