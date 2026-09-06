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

        {/* Vertical ink spine */}
        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute left-[28px] top-2 bottom-2 w-px border-l-2 border-dashed border-ink-3/40 max-[640px]:left-[20px]"
          />
          {experience.map((item, index) => (
            <article
              className="group relative grid grid-cols-[56px_1fr] gap-6 py-10 border-t border-border last:border-b last:border-border max-[640px]:grid-cols-[40px_1fr] max-[640px]:gap-4"
              key={item.label}
            >
              <span className="relative z-10 mt-0.5 h-[34px] w-[34px] justify-self-center rounded-full border border-border bg-bg font-serif italic text-[13px] text-ink-3 grid place-items-center transition-colors duration-200 group-hover:border-accent group-hover:text-accent max-[640px]:h-[30px] max-[640px]:w-[30px]">
                0{index + 1}
              </span>
              <div className="transition-transform duration-200 group-hover:translate-x-1">
                <p className="eyebrow inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase text-accent mb-2.5">
                  {item.label}
                </p>
                <h2 className="text-[26px] font-bold tracking-[-0.03em] mb-3 text-ink max-[640px]:text-[22px]">
                  {item.title}
                </h2>
                <p className="text-base leading-[1.7] text-ink-2 text-pretty">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageFrame>
  )
}
