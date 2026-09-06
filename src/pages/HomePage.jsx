import { PageFrame, Reveal, SectionLabel } from '../components/portfolio-shell.jsx'
import { ProjectList } from '../components/project-components.jsx'
import { LiveCharacterPlaceholder } from '../components/portfolio-motion.jsx'
import { DisplayHeading, InkButton, SkillGroup, TextLink } from '../components/ui.jsx'
import { projects, skills } from '../lib/portfolio-data.js'

export default function HomePage() {
  return (
    <PageFrame>
      {/* ── Hero ── */}
      <section className="min-h-[calc(100svh-64px)] grid grid-cols-[1.1fr_0.9fr] items-center gap-[60px] py-20 max-[900px]:grid-cols-1 max-[900px]:min-h-0 max-[900px]:py-[60px] max-[900px]:gap-12 max-[640px]:py-12">
        <div>
          <Reveal>
            <p className="eyebrow inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase text-accent mb-6">
              CS · Data Science · AI/ML
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1
              className="font-extrabold leading-none tracking-[-0.04em] text-ink mb-7 max-[900px]:text-[clamp(40px,12vw,72px)] max-[640px]:text-[clamp(38px,13vw,60px)]"
              style={{ fontSize: 'clamp(44px, 6.5vw, 88px)' }}
            >
              Building things<br />
              with <em className="font-serif font-bold text-accent not-italic">code,</em><br />
              data &amp; AI.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="text-lg font-normal text-ink-2 leading-[1.7] max-w-[480px] mb-10 text-pretty max-[640px]:text-base">
              Hi, I&apos;m Lakshay - a full stack developer who enjoys turning ideas into clean, scalable software. I build across the frontend and backend, and use data and AI to create products that solve real-world problems.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="flex items-center gap-5 flex-wrap">
              <InkButton to="/projects">See my projects</InkButton>
              <TextLink to="/contact">Get in touch</TextLink>
            </div>
          </Reveal>
        </div>

        {/* Hero art — on mobile goes first */}
        <div className="max-[900px]:order-first">
          <LiveCharacterPlaceholder />
        </div>
      </section>

      {/* ── Selected Work ── */}
      <section className="py-[100px] border-t border-border max-[640px]:py-[72px]">
        <SectionLabel number="01">Selected Work</SectionLabel>
        <div className="flex justify-between items-end gap-8 max-[640px]:flex-col max-[640px]:items-start">
          <Reveal>
            <DisplayHeading>
              A few projects I&apos;ve<br />
              <em className="font-serif font-bold text-accent not-italic">shipped recently.</em>
            </DisplayHeading>
          </Reveal>
          <Reveal delay={0.1}>
            <TextLink to="/projects" className="max-[640px]:mt-3">
              All projects
            </TextLink>
          </Reveal>
        </div>
        <ProjectList projects={projects.slice(0, 4)} />
      </section>

      {/* ── Tech Stack ── */}
      <section className="py-[100px] border-t border-border grid grid-cols-2 gap-20 max-[900px]:grid-cols-1 max-[900px]:gap-12 max-[640px]:py-[72px]">
        <Reveal>
          <SectionLabel number="02">Tech Stack</SectionLabel>
          <DisplayHeading>
            Tools I&apos;m<br />
            <em className="font-serif font-bold text-accent not-italic">comfortable with.</em>
          </DisplayHeading>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="grid grid-cols-2 gap-7 max-[640px]:grid-cols-1">
            {skills.map((group) => (
              <SkillGroup group={group} key={group.label} />
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── About strip ── */}
      <section className="py-[100px] border-t border-border grid grid-cols-2 gap-20 max-[900px]:grid-cols-1 max-[900px]:gap-12 max-[640px]:py-[72px]">
        <Reveal>
          <SectionLabel number="03">About me</SectionLabel>
          <DisplayHeading>
            Engineer by training,<br />
            <em className="font-serif font-bold text-accent not-italic">curious by nature.</em>
          </DisplayHeading>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg leading-[1.7] text-ink-2 mb-7 text-pretty">
            I like taking complicated things and giving them structure - whether that&apos;s
            a clean interface, a solid backend, or a model that finds a useful signal in noisy data.
          </p>
          <TextLink to="/about">More about me</TextLink>
        </Reveal>
      </section>

      {/* ── Contact CTA ── */}
      <section className="py-[100px] border-t border-border max-[640px]:py-[72px]">
        <Reveal>
          <p className="eyebrow inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase text-accent mb-5">
            Have something interesting?
          </p>
          <DisplayHeading size="lg" className="mb-9">
            Let&apos;s build something<br />
            <em className="font-serif font-bold text-accent not-italic">worth using.</em>
          </DisplayHeading>
          <InkButton to="/contact">Start a conversation</InkButton>
        </Reveal>
      </section>
    </PageFrame>
  )
}