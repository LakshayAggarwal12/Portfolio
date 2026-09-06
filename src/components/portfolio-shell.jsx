import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react'
import { LandingTransition } from './portfolio-motion.jsx'
import { motion, useReducedMotion } from 'motion/react'
import { TextLink } from './ui.jsx'

const nav = [
  { href: '/projects', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' },
]

function getInitialTheme() {
  if (typeof window === 'undefined') return false
  const stored = window.localStorage.getItem('theme')
  if (stored === 'dark' || stored === 'light') return stored === 'dark'
  return window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches : false
}

export function ThemeToggle() {
  const [dark, setDark] = useState(getInitialTheme)
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])
  return (
    <button
      className="border-none bg-transparent text-ink-2 w-9 h-9 grid place-items-center rounded-lg transition-colors duration-150 hover:bg-bg-2 hover:text-ink cursor-pointer"
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={() => setDark(!dark)}
    >
      {dark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  )
}

const navLink = (active) =>
  `relative inline-flex items-center px-3.5 py-1.5 text-sm font-medium rounded-lg transition-colors duration-150 after:content-[''] after:absolute after:left-[14%] after:right-[14%] after:-bottom-[2px] after:h-[2px] after:rounded-full after:bg-accent after:transition-all after:duration-300 ${
    active
      ? 'text-ink bg-bg-2 after:w-[72%]'
      : 'text-ink-2 hover:text-ink hover:bg-bg-2 hover:after:w-[72%]'
  }`

export function Header() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const isActive = (href) => pathname === href || pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95">
      <div className="max-w-[1280px] mx-auto px-10 h-16 flex items-center justify-between gap-8 max-[900px]:px-6 max-[640px]:px-5 max-[640px]:h-14">
        {/* Brand */}
        <Link
          to="/"
          className="inline-flex items-center gap-2.5 font-bold text-[15px] tracking-tight text-ink transition-opacity duration-200 hover:opacity-80"
          onClick={() => setOpen(false)}
        >
          <span className="w-[34px] h-[34px] grid place-items-center bg-ink text-bg font-serif text-[13px] font-bold rounded-md flex-shrink-0 shadow-[0_1px_2px_rgba(20,18,16,0.18)]">
            LA
          </span>
          <span>Lakshay Aggarwal</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="flex gap-1 max-[640px]:hidden">
          {nav.map((item) => (
            <Link key={item.href} to={item.href} className={navLink(isActive(item.href))}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <Link
            className="group max-[640px]:hidden inline-flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold tracking-tight text-accent bg-accent-bg rounded-lg transition-colors duration-150 hover:bg-accent hover:text-white"
            to="/contact"
          >
            Let&apos;s talk
            <ArrowUpRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
            />
          </Link>
          <button
            className="hidden max-[640px]:grid border-none bg-transparent text-ink p-1.5 rounded-md cursor-pointer"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <motion.nav
          id="mobile-nav"
          aria-label="Primary"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col px-5 pb-4 border-t border-border gap-0.5 lg:hidden"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className={`group flex justify-between items-center px-2.5 py-3 text-[15px] font-medium rounded-lg transition-colors duration-150 hover:bg-bg-2 ${
                isActive(item.href) ? 'text-ink bg-bg-2' : 'text-ink-2 hover:text-ink'
              }`}
            >
              {item.label}
              <ArrowUpRight
                size={15}
                className="text-accent transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
              />
            </Link>
          ))}
        </motion.nav>
      )}
    </header>
  )
}

export function Footer() {
  return (
    <footer className="max-w-[1280px] mx-auto px-10 py-8 flex items-center justify-between gap-4 border-t border-border text-[13px] text-ink-3 max-[900px]:px-6 max-[640px]:px-5 max-[640px]:py-6 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-3">
      <span>© {new Date().getFullYear()} Lakshay Aggarwal</span>
      <span className="max-[640px]:hidden">Set in ink by hand</span>
      <TextLink to="/contact">Get in touch</TextLink>
    </footer>
  )
}

export function PageFrame({ children }) {
  return (
    <LandingTransition>
      <Header />
      <main className="max-w-[1280px] mx-auto px-10 max-[900px]:px-6 max-[640px]:px-5">{children}</main>
      <Footer />
    </LandingTransition>
  )
}

export function Reveal({ children, className = '', delay = 0 }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25, margin: '0px 0px -24px 0px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionLabel({ number, children }) {
  return (
    <div className="flex items-center gap-3 mb-9">
      <span className="font-serif italic text-ink-3 text-sm">{number}</span>
      <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-accent">{children}</span>
      <span aria-hidden="true" className="ml-1 flex-1 border-t border-dashed border-ink-3/50" />
    </div>
  )
}

export function PageHeading({ eyebrow, title, intro }) {
  return (
    <Reveal>
      <div className="pt-20 pb-[60px] border-b border-border max-[640px]:pt-14 max-[640px]:pb-10">
        <p className="eyebrow inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase text-accent mb-5">
          {eyebrow}
        </p>
        <h1 className="text-[clamp(40px,6vw,78px)] font-extrabold leading-none tracking-[-0.04em] mb-5 text-ink text-balance">
          {title}
        </h1>
        {intro && (
          <p className="max-w-[520px] text-lg text-ink-2 leading-[1.7] text-pretty">{intro}</p>
        )}
      </div>
    </Reveal>
  )
}