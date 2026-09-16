import { Page, PageHeading, Reveal } from '../components/portfolio-shell.jsx'
import { experience } from '../lib/portfolio-data.js'
import { InkButton } from '../components/ui.jsx'

export default function ExperiencePage() {
  return (
    <Page className="pb-14 sm:pb-16">
      <PageHeading
        eyebrow="What I've been up to"
        title="Experience & direction."
        intro="A work-in-progress record of the problems I've chosen to spend time with."
      />

      {/* Timeline. The numbering is kept here because these genuinely read
          as a sequence: what I focus on, how I practise it, where it leads. */}
      <section className="relative mt-10">
        <span
          aria-hidden="true"
          className="absolute bottom-6 left-[17px] top-6 w-px border-l-2 border-dashed border-ink-3/35 sm:left-[21px]"
        />
        <ol className="list-none p-0">
          {experience.map((item, index) => (
            <li key={item.label}>
              <Reveal delay={index * 0.06}>
                <article className="group grid grid-cols-[36px_minmax(0,1fr)] gap-x-4 border-t border-border py-8 last:border-b sm:grid-cols-[44px_minmax(0,1fr)] sm:gap-x-6 sm:py-9">
                  <span className="relative z-10 grid h-[34px] w-[34px] place-items-center self-start rounded-full border border-border bg-bg font-serif text-[13px] italic text-ink-3 transition-colors duration-200 group-hover:border-accent group-hover:text-accent sm:h-[38px] sm:w-[38px]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-accent">
                      {item.label}
                    </p>
                    <h2 className="mb-2.5 text-balance text-[21px] font-bold leading-[1.2] tracking-[-0.03em] text-ink sm:text-[25px]">
                      {item.title}
                    </h2>
                    <p className="measure text-pretty text-[15px] leading-[1.7] text-ink-2 sm:text-base">
                      {item.detail}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <Reveal className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-4">
        <InkButton to="/contact">Start a conversation</InkButton>
        <InkButton to="/projects" variant="ghost">
          Browse the work
        </InkButton>
      </Reveal>
    </Page>
  )
}
