import { Link, useNavigate } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'

export function LiveCharacterPlaceholder() {
  const reduce = useReducedMotion()
  return (
    <div className="hero-art">
      <div className="hero-visual">
        <motion.div
          className="hero-visual-card"
          animate={reduce ? undefined : { y: [0, -8, 0] }}
          transition={reduce ? undefined : { duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="hero-tag">Lakshay Aggarwal</span>
          <span className="hero-initials">LA</span>
          <span className="hero-tag">Software Engineer</span>
        </motion.div>

        <motion.div
          className="hero-floating-1"
          initial={reduce ? false : { opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <span>🤖</span>
          AI / ML Projects
        </motion.div>

        <motion.div
          className="hero-floating-2"
          initial={reduce ? false : { opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <span className="floating-dot" />
          Open to opportunities
        </motion.div>

        <motion.div
          className="hero-floating-3"
          initial={reduce ? false : { opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <span>⚡</span>
          Full Stack Dev
        </motion.div>
      </div>
    </div>
  )
}

export function ProjectPreview({ image, name, compact = false }) {
  return (
    <div className={`project-preview${compact ? ' project-preview-compact' : ''}`}>
      {image ? (
        <img
          src={image}
          alt={`${name} project preview`}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <>
          <span className="preview-kicker">Project</span>
          <span className="preview-name">{name}</span>
        </>
      )}
    </div>
  )
}

export function LandingTransition({ children }) {
  const [pending, setPending] = useState(false)
  const reduce = useReducedMotion()
  const navigate = useNavigate()

  const goHome = (event) => {
    if (reduce) return
    event.preventDefault()
    setPending(true)
    window.setTimeout(() => navigate('/'), 2100)
  }

  return (
    <>
      {pending && (
        <motion.div
          className="name-transition"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 1.5, duration: 0.55 }}
          onAnimationComplete={() => setPending(false)}
          aria-live="polite"
        >
          <div className="name-transition-letters" aria-label="Lakshay">
            {'LAKSHAY'.split('').map((letter, index) => (
              <motion.span
                key={`${letter}-${index}`}
                initial={{ opacity: 0, y: 36, rotate: index % 2 ? 8 : -8 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: index * 0.11, duration: 0.45, ease: 'easeOut' }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
      {children}
    </>
  )
}
