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
            <em>worth talking about.</em>
          </>
        }
        intro="Have a project idea, an opportunity, or just want to say hi? Drop me a message and I'll get back to you within a day."
      />

      <div className="contact-layout">
        {/* Form */}
        <div>
          {sent ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px', paddingTop: '8px' }}>
              <CheckCircle size={40} color="var(--green)" />
              <h2 style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-0.02em' }}>Message sent!</h2>
              <p style={{ color: 'var(--ink-2)', fontSize: '16px', lineHeight: '1.7' }}>
                Thanks for reaching out. I&apos;ll get back to you as soon as I can.
              </p>
              <button className="button button-outline" onClick={() => setSent(false)} style={{ marginTop: '8px' }}>
                Send another message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={submit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <label>
                  Your name
                  <input required name="name" placeholder="Lakshay Aggarwal" />
                </label>
                <label>
                  Email address
                  <input required type="email" name="email" placeholder="you@example.com" />
                </label>
              </div>
              <label>
                Subject
                <input name="subject" placeholder="What&apos;s this about?" />
              </label>
              <label>
                Message
                <textarea required name="message" rows={6} placeholder="Tell me a little about what you're working on or what's on your mind..." />
              </label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <button className="button button-dark" type="submit">
                  Send message <ArrowUpRight size={17} />
                </button>
                <span style={{ fontSize: '13px', color: 'var(--ink-3)' }}>
                  Usually replies within 24 hours
                </span>
              </div>
            </form>
          )}
        </div>

        {/* Aside */}
        <aside className="contact-aside">
          <p className="contact-aside-title">Find me elsewhere</p>

          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="contact-link-item"
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <span>
                <span className="contact-link-label">{link.label}</span>
                {link.value}
              </span>
              <ArrowUpRight size={16} style={{ color: 'var(--accent)', flexShrink: 0 }} />
            </a>
          ))}

          <div className="contact-availability">
            <p>
              <span className="availability-dot" />
              Available for work
            </p>
            <p>
              I&apos;m currently open to internships, part-time contracts, and interesting project collaborations.
            </p>
          </div>
        </aside>
      </div>
    </PageFrame>
  )
}
