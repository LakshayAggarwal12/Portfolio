import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react'

/* Hand-drawn double stroke ring around the monogram */
function ScribbleRing({ className = '' }) {
  return (
    <svg viewBox="0 0 240 150" className={className} aria-hidden="true" fill="none">
      <path
        d="M120 12 C 176 10, 218 40, 222 74 C 226 108, 186 132, 122 136 C 66 140, 22 114, 18 76 C 14 40, 66 16, 118 14"
        stroke="var(--color-accent)"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M122 26 C 162 22, 200 48, 203 76 C 206 104, 172 124, 124 126 C 82 128, 42 106, 40 76 C 38 48, 84 30, 120 28"
        stroke="var(--color-ink)"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  )
}

const springTilt = { stiffness: 120, damping: 18, mass: 0.6 }

export function LiveCharacterPlaceholder() {
  const reduce = useReducedMotion()
  const [canTilt] = useState(
    () =>
      !reduce &&
      typeof window !== 'undefined' &&
      !!window.matchMedia?.('(hover: hover) and (pointer: fine)').matches,
  )

  /* Mouse parallax — springs keep it smooth without re-renders */
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springTilt)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-9, 9]), springTilt)

  const handleMove = (event) => {
    if (!canTilt) return
    const rect = event.currentTarget.getBoundingClientRect()
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5)
  }
  const handleLeave = () => {
    if (!canTilt) return
    mouseX.set(0)
    mouseY.set(0)
  }

  const entrance = {
    initial: reduce ? false : { opacity: 0, y: 30, rotate: -2.5 },
    animate: reduce ? undefined : { opacity: 1, y: 0, rotate: 0 },
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
  }

  const ticket = {
    initial: reduce ? false : { opacity: 0, y: 18, scale: 0.92 },
    animate: reduce ? undefined : { opacity: 1, y: 0, scale: 1 },
  }

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-[min(100%,420px)] aspect-[4/5] max-[640px]:aspect-[3/4] max-[900px]:w-[min(100%,360px)] max-[900px]:mx-auto">
        {/* Entrance + idle float */}
        <motion.div className="absolute inset-0" {...entrance}>
          <div className="absolute inset-0 paper-float">
            {/* Tilt surface */}
            <div className="absolute inset-0" onMouseMove={handleMove} onMouseLeave={handleLeave}>
              <motion.div
                className="absolute inset-0"
                style={{ rotateX, rotateY, transformPerspective: 900 }}
              >
                {/* Paper card */}
                <div className="absolute inset-0 overflow-hidden rounded-[26px] border border-border bg-bg-card shadow-[0_28px_60px_-24px_rgba(20,18,16,0.22)]">
                  <div className="absolute inset-0 paper-grain opacity-[0.35]" aria-hidden="true" />

                  {/* Tape pieces */}
                  <span aria-hidden="true" className="absolute -top-2.5 left-[14%] h-[30px] w-[92px] rotate-[-4deg] rounded-[3px] border border-border/80 bg-bg-2/90 shadow-sm" />
                  <span aria-hidden="true" className="absolute -top-2.5 right-[16%] h-[30px] w-[74px] rotate-[5deg] rounded-[3px] border border-border/80 bg-bg-2/90 shadow-sm" />

                  {/* Dashed inner frame */}
                  <div className="absolute inset-3 rounded-[20px] border border-dashed border-ink-3/40 pointer-events-none" aria-hidden="true" />

                  {/* Stamp */}
                  <span className="absolute right-5 top-5 rotate-[6deg] rounded-[4px] border border-accent/50 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.22em] text-accent pointer-events-none">
                    AI / ML
                  </span>

                  {/* Monogram */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-7 text-center">
                    <div className="relative mb-1 flex items-center justify-center">
                      <ScribbleRing className="absolute w-[248px] max-w-[82vw]" />
                      <span
                        className="relative font-serif font-bold text-ink select-none"
                        style={{ fontSize: 'clamp(64px, 11vw, 104px)', letterSpacing: '-0.05em' }}
                      >
                        LA
                      </span>
                    </div>
                    <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.26em] text-ink-3">
                      Lakshay Aggarwal
                    </span>
                    <div className="my-4 h-px w-20 bg-border" aria-hidden="true" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-2">
                      Software Engineer · AI / ML
                    </span>
                  </div>

                  {/* Bottom strip */}
                  <div className="absolute inset-x-0 bottom-0 flex h-[52px] items-center justify-between border-t border-dashed border-ink-3/40 px-6">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-ink-3">
                      Est. curiosity
                    </span>
                    <span className="font-serif italic text-[13px] text-ink-2">
                      handcrafted with code
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
{/* Floating paper tickets */}
        <motion.div
          className="absolute top-[15%] right-[-9%] z-20 max-[900px]:hidden"
          {...ticket}
          transition={{ delay: 0.55, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="paper-float-slow flex items-center gap-2.5 whitespace-nowrap rounded-[12px] border border-border bg-bg-card px-3.5 py-2.5 shadow-[0_12px_28px_-14px_rgba(20,18,16,0.28)]">
            <span className="font-serif italic text-[13px] font-bold text-accent">01</span>
            <span className="text-xs font-semibold text-ink">AI / ML Projects</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-[27%] right-[-7%] z-20 max-[900px]:hidden"
          {...ticket}
          transition={{ delay: 0.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="paper-float-slow flex items-center gap-2.5 whitespace-nowrap rounded-[12px] border border-border bg-bg-card px-3.5 py-2.5 shadow-[0_12px_28px_-14px_rgba(20,18,16,0.28)]"
            style={{ animationDelay: '-2.5s' }}
          >
            <span className="h-2 w-2 rounded-full bg-green shadow-[0_0_8px_var(--color-green)]" aria-hidden="true" />
            <span className="text-xs font-semibold text-ink">Open to opportunities</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-[9%] left-[-8%] z-20 max-[900px]:hidden"
          {...ticket}
          transition={{ delay: 1.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="paper-float-slow flex items-center gap-2.5 whitespace-nowrap rounded-[12px] border border-border bg-bg-card px-3.5 py-2.5 shadow-[0_12px_28px_-14px_rgba(20,18,16,0.28)]"
            style={{ animationDelay: '-1.5s' }}
          >
            <span className="font-serif italic text-[13px] font-bold text-ink-2">02</span>
            <span className="text-xs font-semibold text-ink">Full Stack Dev</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
export function ProjectPreview({ image, name, compact = false }) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2.5 overflow-hidden border border-border bg-bg-card ${
        compact ? 'min-h-[110px] rounded-[8px]' : 'min-h-[200px] rounded-[14px]'
      }`}
    >
      {image ? (
        <img
          src={image}
          alt={`${name} project preview`}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />
      ) : (
        <>
          <div className="absolute inset-0 paper-grain opacity-[0.4]" aria-hidden="true" />
          <div className="absolute inset-2.5 rounded-[4px] border border-dashed border-ink-3/40 pointer-events-none" aria-hidden="true" />
          <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-ink-3">Project</span>
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
    setTimeout(() => navigate('/'), 2100)
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