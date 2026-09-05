import { useState } from 'react'
import { ArrowUpRight, CheckCircle } from 'lucide-react'
import { PageFrame, PageHeading } from '../components/portfolio-shell.jsx'

const socialLinks = [
  { label: 'GitHub', value: 'github.com/LakshayAggarwal12', href: 'https://github.com/LakshayAggarwal12' },
  { label: 'LinkedIn', value: 'Connect on LinkedIn', href: '#' },
  { label: 'Email', value: 'hello@lakshay.dev', href: 'mailto:hello@lakshay.dev' },
]

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  function submit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <PageFrame>
      <PageHeading
        eyebrow="Open to good conversations"
        title={
          <>
            Let&apos;s build something<br />
            <em className="font-serif font-bold italic text-accent not-italic">worth talking about.</em>
          </>
        }
        intro="Have a project idea, an opportunity, or just want to say hi? Drop me a message and I'll get back to you within a day."
      />

      <div className="grid grid-cols-[1.2fr_0.8fr] gap-20 py-[60px] pb-[100px] max-[900px]:grid-cols-1 max-[900px]:gap-12 max-[640px]:py-12 max-[640px]:pb-[72px]">
        {/* Form */}
        <div>
          {sent ? (
            <div className="flex flex-col items-start gap-4 pt-2">
              <CheckCircle size={40} className="text-green" />
              <h2 className="text-[22px] font-bold tracking-[-0.02em]">Message sent!</h2>
              <p className="text-ink-2 text-base leading-[1.7]">
                Thanks for reaching out. I&apos;ll get back to you as soon as I can.
              </p>
              <button
                className="mt-2 inline-flex items-center gap-2 px-[22px] py-3.5 text-sm font-bold rounded-[10px] transition-all duration-200 bg-transparent text-ink border border-[1.5px] border-border tracking-tight hover:border-ink hover:-translate-y-px cursor-pointer"
                onClick={() => setSent(false)}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="flex flex-col gap-6" onSubmit={submit}>
              <div className="grid grid-cols-2 gap-5 max-[640px]:grid-cols-1">
                <label className="flex flex-col gap-2 text-[13px] font-semibold text-ink tracking-tight">
                  Your name
                  <input
                    required
                    name="name"
                    placeholder="Lakshay Aggarwal"
                    className="px-4 py-3.5 bg-bg-card border border-[1.5px] border-border rounded-lg text-ink text-[15px] font-normal outline-none resize-y transition-[border-color,box-shadow] duration-150 placeholder:text-ink-3 focus:border-accent focus:shadow-[0_0_0_3px_rgba(26,86,219,0.12)]"
                  />
                </label>
                <label className="flex flex-col gap-2 text-[13px] font-semibold text-ink tracking-tight">
                  Email address
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="px-4 py-3.5 bg-bg-card border border-[1.5px] border-border rounded-lg text-ink text-[15px] font-normal outline-none resize-y transition-[border-color,box-shadow] duration-150 placeholder:text-ink-3 focus:border-accent focus:shadow-[0_0_0_3px_rgba(26,86,219,0.12)]"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-[13px] font-semibold text-ink tracking-tight">
                Subject
                <input
                  name="subject"
                  placeholder="What's this about?"
                  className="px-4 py-3.5 bg-bg-card border border-[1.5px] border-border rounded-lg text-ink text-[15px] font-normal outline-none resize-y transition-[border-color,box-shadow] duration-150 placeholder:text-ink-3 focus:border-accent focus:shadow-[0_0_0_3px_rgba(26,86,219,0.12)]"
                />
              </label>
              <label className="flex flex-col gap-2 text-[13px] font-semibold text-ink tracking-tight">
                Message
                <textarea
                  required
                  name="message"
                  rows={6}
                  placeholder="Tell me a little about what you're working on or what's on your mind..."
                  className="px-4 py-3.5 bg-bg-card border border-[1.5px] border-border rounded-lg text-ink text-[15px] font-normal outline-none min-h-[140px] resize-y transition-[border-color,box-shadow] duration-150 placeholder:text-ink-3 focus:border-accent focus:shadow-[0_0_0_3px_rgba(26,86,219,0.12)]"
                />
              </label>
              <div className="flex items-center gap-4 flex-wrap">
                <button
                  className="inline-flex items-center gap-2 px-[22px] py-3.5 text-sm font-bold rounded-[10px] transition-all duration-200 bg-ink text-bg border-none tracking-tight hover:bg-accent hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(26,86,219,0.35)] cursor-pointer"
                  type="submit"
                >
                  Send message <ArrowUpRight size={17} />
                </button>
                <span className="text-[13px] text-ink-3">Usually replies within 24 hours</span>
              </div>
            </form>
          )}
        </div>

        {/* Aside */}
        <aside className="pt-2">
          <p className="text-[13px] font-bold tracking-[0.1em] uppercase text-ink-3 mb-6">
            Find me elsewhere
          </p>

          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center justify-between py-[18px] border-t border-border first:border-t-0 text-ink-2 text-[15px] font-medium transition-colors duration-150 hover:text-ink"
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <span>
                <span className="block text-xs font-semibold tracking-[0.08em] uppercase text-accent mb-1">
                  {link.label}
                </span>
                {link.value}
              </span>
              <ArrowUpRight size={16} className="text-accent flex-shrink-0" />
            </a>
          ))}

          <div className="mt-10 p-6 bg-bg-2 border border-border rounded-[20px]">
            <p className="text-[13px] font-bold text-ink mb-1.5">
              <span
                className="inline-block w-2 h-2 rounded-full bg-green mr-2"
                style={{ boxShadow: '0 0 8px var(--color-green)' }}
              />
              Available for work
            </p>
            <p className="text-[13px] text-ink-2 leading-[1.6]">
              I&apos;m currently open to internships, part-time contracts, and interesting project collaborations.
            </p>
          </div>
        </aside>
      </div>
    </PageFrame>
  )
}
