import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react'
import { LandingTransition } from './portfolio-motion.jsx'
import { motion, useReducedMotion } from 'motion/react'

const nav = [
  { href: '/projects', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' },
]

export function ThemeToggle() {
  const [dark, setDark] = useState(false)
  return (
    <button
      className="icon-button"
      aria-label="Toggle theme"
      onClick={() => {
        setDark(!dark)
        document.documentElement.classList.toggle('dark', !dark)
      }}
    >
      {dark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  )
}

export function Header() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="monogram">LA</span>
          <span>Lakshay Aggarwal</span>
        </Link>
        <nav className="desktop-nav">
          {nav.map((item) => (
            <Link
              key={item.href}
              className={pathname.startsWith(item.href) ? 'active' : ''}
              to={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <Link className="talk-link" to="/contact">
            Let&apos;s talk <ArrowUpRight size={15} />
          </Link>
          <button
            className="menu-button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mobile-nav"
        >
          {nav.map((item) => (
            <Link key={item.href} to={item.href} onClick={() => setOpen(false)}>
              {item.label}
              <ArrowUpRight size={15} />
            </Link>
          ))}
        </motion.nav>
      )}
    </header>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Lakshay Aggarwal</span>
      <span>Built by hand with React</span>
      <Link to="/contact">
        Get in touch <ArrowUpRight size={14} />
      </Link>
    </footer>
  )
}

export function PageFrame({ children }) {
  return (
    <LandingTransition>
      <Header />
      <main className="page-shell">{children}</main>
      <Footer />
    </LandingTransition>
  )
}

export function Reveal({ children, className = '' }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
    >
      {children}
    </motion.div>
  )
}

export function SectionLabel({ number, children }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span>{children}</span>
    </div>
  )
}

export function PageHeading({ eyebrow, title, intro }) {
  return (
    <Reveal>
      <div className="page-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {intro && <p className="lede">{intro}</p>}
      </div>
    </Reveal>
  )
}
