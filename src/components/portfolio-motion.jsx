import { Link, useNavigate } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'

export function LiveCharacterPlaceholder() {
  const reduce = useReducedMotion()
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-[min(100%,420px)] aspect-[4/5] max-[900px]:w-[min(100%,320px)] max-[900px]:mx-auto">
        {/* Main card */}
        <motion.div
          className="absolute inset-0 rounded-3xl flex flex-col items-center justify-center gap-3 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, var(--color-accent) 0%, #3b4fd8 60%, #7c3af7 100%)',
            boxShadow: 'var(--shadow-lg), 0 0 0 1px rgba(255,255,255,0.1) inset',
          }}
          animate={reduce ? undefined : { y: [0, -8, 0] }}
          transition={reduce ? undefined : { duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Glow overlay */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '-40%', left: '-20%', width: '200%', height: '160%',
              background: 'radial-gradient(ellipse at 30% 40%, rgba(255,255,255,0.15) 0%, transparent 60%)',
            }}
          />
          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.2), transparent)' }}
          />

          <span className="z-10 text-[11px] font-bold tracking-[0.14em] uppercase text-white/70">
            Lakshay Aggarwal
          </span>
          <span
            className="z-10 leading-none select-none font-serif font-bold italic text-white/95"
            style={{ fontSize: 'clamp(80px, 14vw, 160px)', textShadow: '0 4px 30px rgba(0,0,0,0.2)' }}
          >
            LA
          </span>
          <span className="z-10 text-[11px] font-bold tracking-[0.14em] uppercase text-white/70">
            Software Engineer
          </span>
        </motion.div>

        {/* Floating badge 1 */}
        <motion.div
          className="absolute top-[14%] right-[-18%] max-[900px]:hidden bg-white/12 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2.5 text-xs font-semibold text-white flex items-center gap-2 z-20 whitespace-nowrap"
          style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
          initial={reduce ? false : { opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <span>🤖</span>
          AI / ML Projects
        </motion.div>

        {/* Floating badge 2 */}
        <motion.div
          className="absolute bottom-[26%] right-[-16%] max-[900px]:hidden bg-white/12 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2.5 text-xs font-semibold text-white flex items-center gap-2 z-20 whitespace-nowrap"
          style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
          initial={reduce ? false : { opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <span className="w-2 h-2 rounded-full bg-green flex-shrink-0" style={{ boxShadow: '0 0 8px var(--color-green)' }} />
          Open to opportunities
        </motion.div>

        {/* Floating badge 3 */}
        <motion.div
          className="absolute bottom-[10%] left-[-10%] max-[900px]:hidden bg-white/12 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2.5 text-xs font-semibold text-white flex items-center gap-2 z-20 whitespace-nowrap"
          style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
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
    <div
      className={`relative flex flex-col items-center justify-center gap-2.5 bg-bg-2 border border-border overflow-hidden ${
        compact
          ? 'min-h-[110px] rounded-[8px]'
          : 'min-h-[200px] rounded-[14px]'
      }`}
    >
      {image ? (
        <img
          src={image}
          alt={`${name} project preview`}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <>
          <span className="text-[9px] font-bold tracking-[0.14em] uppercase text-ink-3">Project</span>
          <span className="font-serif text-xl italic text-ink-2">{name}</span>
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
          className="name-transition fixed inset-0 z-[100] grid place-items-center bg-bg"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 1.5, duration: 0.55 }}
          onAnimationComplete={() => setPending(false)}
          aria-live="polite"
        >
          <div
            className="flex gap-[clamp(3px,1.2vw,18px)] font-extrabold tracking-[-0.06em] text-ink"
            style={{ fontSize: 'clamp(48px, 12vw, 160px)' }}
            aria-label="Lakshay"
          >
            {'LAKSHAY'.split('').map((letter, index) => (
              <motion.span
                key={`${letter}-${index}`}
                className={`inline-block ${index % 2 ? 'font-serif italic font-bold' : ''} ${index === 3 ? 'text-accent' : ''}`}
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
