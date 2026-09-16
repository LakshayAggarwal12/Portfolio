import { useState } from 'react'
import { ArrowUpRight, CheckCircle } from 'lucide-react'
import { Page, PageHeading } from '../components/portfolio-shell.jsx'
import { InkButton } from '../components/ui.jsx'
import { social } from '../lib/portfolio-data.js'

/* Only links with a value are rendered, so filling one in portfolio-data
   is all it takes to make it appear here. */
const socialLinks = [
  social.github && { label: 'GitHub', value: social.github.replace(/^https?:\/\//, ''), href: social.github },
  social.linkedin && { label: 'LinkedIn', value: 'Connect on LinkedIn', href: social.linkedin },
  social.resume && { label: 'Résumé', value: 'Download a PDF', href: social.resume },
  social.email && { label: 'Email', value: social.email, href: `mailto:${social.email}` },
].filter(Boolean)

const inputClass =
  'w-full min-h-[46px] rounded-lg border-[1.5px] border-border bg-bg-card px-4 py-3 text-[15px] font-normal text-ink transition-[border-color,box-shadow] duration-150 placeholder:text-ink-3 focus:border-accent focus:shadow-[0_0_0_3px_rgba(26,86,219,0.12)]'

const labelClass = 'flex flex-col gap-2 text-[13px] font-semibold tracking-tight text-ink'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  /* There's no backend, so the form hands off to the visitor's mail client
     with everything pre-filled rather than silently going nowhere. */
  function submit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = data.get('name')?.toString().trim() ?? ''
    const email = data.get('email')?.toString().trim() ?? ''
    const subject = data.get('subject')?.toString().trim() || `Portfolio enquiry from ${name}`
    const message = data.get('message')?.toString().trim() ?? ''

    if (social.email) {
      const body = `${message}\n\n—\n${name}\n${email}`
      window.location.href = `mailto:${social.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }
    setSent(true)
  }

  return (
    <Page className="pb-14 sm:pb-16">
      <PageHeading
        eyebrow="Open to good conversations"
        title={
          <>
            Let&apos;s build something{' '}
            <em className="font-serif font-bold not-italic text-accent">worth talking about.</em>
          </>
        }
        intro="Have a project idea, an opportunity, or just want to say hi? Send a message and I'll get back to you within a day."
      />

      <div className="grid grid-cols-1 gap-10 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-12">
        {/* Form */}
        <div className="min-w-0">
          {sent ? (
            <div className="flex flex-col items-start gap-3 rounded-[18px] border border-border bg-bg-2 p-7" role="status">
              <CheckCircle size={34} className="text-green" aria-hidden="true" />
              <h2 className="text-[21px] font-bold tracking-[-0.025em] text-ink">
                Your email is ready to send.
              </h2>
              <p className="measure text-[15px] leading-[1.7] text-ink-2">
                Your mail app should have opened with the message filled in. If it didn&apos;t,
                write to{' '}
                <a
                  className="font-semibold text-accent underline underline-offset-2"
                  href={`mailto:${social.email}`}
                >
                  {social.email}
                </a>{' '}
                directly.
              </p>
              <InkButton variant="ghost" showArrow={false} onClick={() => setSent(false)} className="mt-2">
                Write another message
              </InkButton>
            </div>
          ) : (
            <form className="flex flex-col gap-5" onSubmit={submit} noValidate={false}>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className={labelClass}>
                  Your name
                  <input required name="name" autoComplete="name" placeholder="Jane Doe" className={inputClass} />
                </label>
                <label className={labelClass}>
                  Email address
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </label>
              </div>
              <label className={labelClass}>
                Subject
                <input
                  name="subject"
                  autoComplete="off"
                  placeholder="What's this about?"
                  className={inputClass}
                />
              </label>
              <label className={labelClass}>
                Message
                <textarea
                  required
                  name="message"
                  rows={6}
                  placeholder="Tell me a little about what you're working on…"
                  className={`${inputClass} min-h-[140px] resize-y`}
                />
              </label>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
                <InkButton type="submit" showArrow={false}>
                  Send message
                </InkButton>
                <span className="text-[13px] text-ink-3">Usually replies within 24 hours</span>
              </div>
            </form>
          )}
        </div>

        {/* Aside */}
        <aside className="min-w-0">
          <h2 className="mb-5 text-[11px] font-bold uppercase tracking-[0.12em] text-ink-3">
            Find me elsewhere
          </h2>

          <ul className="list-none p-0">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="group flex min-h-[64px] items-center justify-between gap-4 border-t border-border py-4 text-[15px] font-medium text-ink-2 transition-colors duration-150 first:border-t-0 hover:text-ink"
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <span className="min-w-0">
                    <span className="mb-0.5 block text-[11px] font-bold uppercase tracking-[0.1em] text-accent">
                      {link.label}
                    </span>
                    <span className="block truncate">{link.value}</span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="shrink-0 text-accent transition-transform duration-200 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]"
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-[16px] border border-border bg-bg-2 p-5">
            <p className="mb-1.5 flex items-center gap-2 text-[13px] font-bold text-ink">
              <span
                aria-hidden="true"
                className="inline-block h-2 w-2 rounded-full bg-green"
                style={{ boxShadow: '0 0 8px var(--color-green)' }}
              />
              Available for work
            </p>
            <p className="text-[13px] leading-[1.6] text-ink-2">
              Currently open to internships, part-time contracts and interesting project
              collaborations.
            </p>
          </div>
        </aside>
      </div>
    </Page>
  )
}
