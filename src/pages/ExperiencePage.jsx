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
      <section className="py-[100px] border-t border-border max-[640px]:py-[72px]">
        <SectionLabel number="01">Through-lines</SectionLabel>
        <div className="flex flex-col">
          {experience.map((item, index) => (
            <article
              className="grid grid-cols-[56px_1fr] gap-6 py-10 border-t border-border last:border-b last:border-border max-[640px]:grid-cols-[40px_1fr] max-[640px]:gap-4"
              key={item.label}
            >
              <span className="font-serif italic text-lg text-ink-3 pt-1">
                0{index + 1}
              </span>
              <div>
                <p className="eyebrow inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase text-accent mb-2.5">
                  {item.label}
                </p>
                <h2 className="text-[26px] font-bold tracking-[-0.03em] mb-3 text-ink max-[640px]:text-[22px]">
                  {item.title}
                </h2>
                <p className="text-base leading-[1.7] text-ink-2">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageFrame>
  )
}
