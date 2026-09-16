import { Link, Outlet, useLocation, useNavigationType } from 'react-router-dom'
import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { TextLink } from './ui.jsx'
import { social } from '../lib/portfolio-data.js'

/* ------------------------------------------------------------------ *
 * Scroll region context
 *
 * The document never scrolls; <main> does. Anything that needs to move
 * the viewport (the hero's scroll cue, route changes) talks to the
 * region through this context instead of touching `window`.
 * ------------------------------------------------------------------ */
const ScrollRegionContext = createContext(null)

export function useScrollRegion() {
  return useContext(ScrollRegionContext)
}

const nav = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' },
]

/* Exact match for "/", prefix match for everything else so project detail
   pages keep "Work" lit. Guards against "/contact" matching "/contacts". */
function matchRoute(pathname, href) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

/* ------------------------------------------------------------------ *
 * Theme
 * ------------------------------------------------------------------ */
function getInitialTheme() {
  if (typeof document === 'undefined') return false
  // The inline script in index.html has already applied the class, so read
  // from the DOM rather than recomputing it (and avoid a first-paint flash).
  return document.documentElement.classList.contains('dark')
}

export function ThemeToggle({ className = '' }) {
  const [dark, setDark] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try {
      window.localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch {
      /* storage can be unavailable in private mode — the theme still applies */
    }
  }, [dark])

  return (
    <button
      type="button"
      className={`grid h-9 w-9 cursor-pointer place-items-center rounded-lg border-none bg-transparent text-ink-2 transition-colors duration-150 hover:bg-bg-2 hover:text-ink ${className}`}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={dark}
      onClick={() => setDark((value) => !value)}
    >
      {dark ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
    </button>
  )
}

/* ------------------------------------------------------------------ *
 * Header
 * ------------------------------------------------------------------ */
export function Header() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  // Close the mobile menu on route change and on Escape.
  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="relative z-50 shrink-0 border-b border-border bg-bg">
      <div className="page-x mx-auto flex h-14 max-w-[1180px] items-center justify-between gap-6 sm:h-16">
        {/* Brand — also the Home link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2.5 text-[15px] font-bold tracking-tight text-ink transition-opacity duration-200 hover:opacity-80"
        >
          <span
            aria-hidden="true"
            className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-md bg-ink font-serif text-[13px] font-bold text-bg shadow-[0_1px_2px_rgba(20,18,16,0.18)]"
          >
            LA
          </span>
          <span className="max-[380px]:hidden">Lakshay Aggarwal</span>
        </Link>

        {/* Desktop nav — one shared indicator slides between items */}
        <nav aria-label="Primary" className="hidden items-center gap-0.5 md:flex">
          {nav.map((item) => {
            const active = matchRoute(pathname, item.href)
            return (
              <Link
                key={item.href}
                to={item.href}
                aria-current={active ? 'page' : undefined}
                className={`relative inline-flex items-center rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-150 ${
                  active ? 'text-ink' : 'text-ink-2 hover:bg-bg-2 hover:text-ink'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    aria-hidden="true"
                    className="absolute inset-0 rounded-lg bg-bg-2"
                    transition={
                      reduce ? { duration: 0 } : { type: 'spring', stiffness: 420, damping: 36 }
                    }
                  />
                )}
                <span className="relative">{item.label}</span>
                {active && (
                  <motion.span
                    layoutId="nav-active-rule"
                    aria-hidden="true"
                    className="absolute inset-x-3 -bottom-px h-[2px] rounded-full bg-accent"
                    transition={
                      reduce ? { duration: 0 } : { type: 'spring', stiffness: 420, damping: 36 }
                    }
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <ThemeToggle />
          <Link
            className="group hidden items-center gap-1.5 rounded-lg bg-accent-bg px-4 py-2 text-[13px] font-semibold tracking-tight text-accent transition-colors duration-150 hover:bg-accent hover:text-white md:inline-flex"
            to="/contact"
          >
            Let&apos;s talk
            <ArrowUpRight
              size={15}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]"
            />
          </Link>
          <button
            type="button"
            className="grid h-9 w-9 cursor-pointer place-items-center rounded-lg border-none bg-transparent text-ink transition-colors duration-150 hover:bg-bg-2 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              aria-hidden="true"
              className="fixed inset-x-0 bottom-0 top-14 z-40 bg-ink/20 sm:top-16 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              id="mobile-nav"
              aria-label="Primary"
              className="page-x absolute inset-x-0 top-full z-50 flex flex-col gap-0.5 border-b border-border bg-bg pb-4 pt-2 shadow-md md:hidden"
              initial={reduce ? false : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              {nav.map((item) => {
                const active = matchRoute(pathname, item.href)
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                    className={`group flex min-h-[48px] items-center justify-between rounded-lg px-3 text-[15px] font-medium transition-colors duration-150 ${
                      active ? 'bg-bg-2 text-ink' : 'text-ink-2 hover:bg-bg-2 hover:text-ink'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      {active && (
                        <span aria-hidden="true" className="h-4 w-[2px] rounded-full bg-accent" />
                      )}
                      {item.label}
                    </span>
                    <ArrowUpRight
                      size={16}
                      aria-hidden="true"
                      className="text-accent transition-transform duration-200 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]"
                    />
                  </Link>
                )
              })}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

/* ------------------------------------------------------------------ *
 * Footer
 * ------------------------------------------------------------------ */
export function Footer() {
  return (
    <footer className="page-x mx-auto flex w-full max-w-[1180px] shrink-0 flex-col items-start gap-3 border-t border-border py-6 text-[13px] text-ink-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-7">
      <span>© {new Date().getFullYear()} Lakshay Aggarwal</span>
      <span className="hidden sm:inline">Set in ink by hand</span>
      <div className="flex items-center gap-6">
        {social.github && (
          <TextLink href={social.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </TextLink>
        )}
        <TextLink to="/contact">Get in touch</TextLink>
      </div>
    </footer>
  )
}

/* ------------------------------------------------------------------ *
 * App shell
 *
 * Fixed-height column: header (chrome) + one scroll region + footer in
 * flow. Because the region's height is known, a page can ask for exactly
 * one clean screen via `min-h-region` — no fragile percentage chains and
 * no half-visible neighbouring sections.
 * ------------------------------------------------------------------ */
export function AppShell() {
  const location = useLocation()
  const navigationType = useNavigationType()
  const reduce = useReducedMotion()
  const regionRef = useRef(null)
  const positions = useRef(new Map())

  // Remember where each history entry was left, so Back/Forward restores
  // the position the browser would normally restore for a document scroll.
  //
  // This is a layout effect, and the position is captured in the cleanup
  // rather than only on scroll events. React runs every layout cleanup
  // before any layout effect, so the outgoing position is banked while
  // scrollTop still holds it — before the restore effect below resets it.
  useLayoutEffect(() => {
    const element = regionRef.current
    if (!element) return undefined
    const key = location.key
    const onScroll = () => positions.current.set(key, element.scrollTop)
    element.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      positions.current.set(key, element.scrollTop)
      element.removeEventListener('scroll', onScroll)
    }
  }, [location.key])

  useLayoutEffect(() => {
    const element = regionRef.current
    if (!element) return
    const saved = positions.current.get(location.key)
    element.scrollTop = navigationType === 'POP' && typeof saved === 'number' ? saved : 0
  }, [location.key, navigationType])

  const scrollTo = useCallback(
    (top = 0) => {
      regionRef.current?.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' })
    },
    [reduce],
  )

  return (
    <ScrollRegionContext.Provider value={{ regionRef, scrollTo }}>
      <div className="flex h-[100svh] flex-col overflow-hidden bg-bg">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-bg"
        >
          Skip to content
        </a>

        <Header />

        <main id="main" ref={regionRef} tabIndex={-1} className="scroll-region min-h-0 flex-1">
          <div className="min-h-region flex flex-col">
            <motion.div
              key={location.pathname}
              className="flex flex-1 flex-col"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
            >
              <Outlet />
            </motion.div>
            <Footer />
          </div>
        </main>
      </div>
    </ScrollRegionContext.Provider>
  )
}

/* ------------------------------------------------------------------ *
 * Page primitives
 * ------------------------------------------------------------------ */

/**
 * Page — the content column for a route.
 * `center` vertically centres short pages so they read as a deliberate
 * screen rather than content stranded at the top of an empty viewport.
 */
export function Page({ children, center = false, className = '' }) {
  return (
    <div className={`flex w-full flex-1 flex-col ${center ? 'justify-center' : ''}`}>
      <div className={`page-x mx-auto w-full max-w-[1180px] ${className}`}>{children}</div>
    </div>
  )
}

/**
 * Screen — a block that fills exactly one viewport of the scroll region.
 * Sized with `100svh` minus the header, so it never overflows the way a
 * flat `100vh` does once mobile browser chrome is showing.
 */
export function Screen({ children, className = '' }) {
  return (
    <section className={`min-h-region flex flex-col justify-center py-12 sm:py-16 ${className}`}>
      {children}
    </section>
  )
}

export function Reveal({ children, className = '', delay = 0 }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 14 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -40px 0px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Section divider + label.
 * `number` is optional — only pass it where the content genuinely reads as
 * a sequence. Pass `as="h2"` where the label is the section's real heading
 * rather than decoration above one, so the outline stays unbroken.
 */
export function SectionLabel({ as: Tag = 'div', number, children, className = '' }) {
  return (
    <Tag className={`mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.12em] ${className}`}>
      {number && (
        <span className="font-serif text-sm normal-case italic tracking-normal text-ink-3">
          {number}
        </span>
      )}
      <span className="text-accent">{children}</span>
      <span aria-hidden="true" className="ml-1 flex-1 border-t border-dashed border-ink-3/40" />
    </Tag>
  )
}

/**
 * PageHeading — the masthead every sub-page opens with.
 * Padding is deliberately tighter than before: the heading and the first
 * real content now share the opening screen instead of the heading eating
 * the whole viewport on its own.
 */
export function PageHeading({ eyebrow, title, intro, aside, className = '' }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-6 border-b border-border pb-8 pt-10 sm:flex-row sm:items-end sm:justify-between sm:gap-12 sm:pb-10 sm:pt-14 ${className}`}
    >
      <div className="min-w-0">
        {eyebrow && (
          <p className="eyebrow mb-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="mb-4 text-balance text-[clamp(34px,5.4vw,64px)] font-extrabold leading-[1.04] tracking-[-0.04em] text-ink">
          {title}
        </h1>
        {intro && (
          <p className="measure text-pretty text-[15px] leading-[1.7] text-ink-2 sm:text-base">
            {intro}
          </p>
        )}
      </div>
      {aside && <div className="shrink-0">{aside}</div>}
    </motion.div>
  )
}
