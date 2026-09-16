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

/**
 * The hero "identity card" — the one place the portfolio spends its
 * boldness. Everything around it stays quiet.
 */
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
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springTilt)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), springTilt)

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
    initial: reduce ? false : { opacity: 0, y: 24, rotate: -2 },
    animate: reduce ? undefined : { opacity: 1, y: 0, rotate: 0 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
  }

  const ticket = {
    initial: reduce ? false : { opacity: 0, y: 14, scale: 0.94 },
    animate: reduce ? undefined : { opacity: 1, y: 0, scale: 1 },
  }

  return (
    <div className="flex items-center justify-center">
      {/* Sized down from the original so the hero resolves to a single
          screen on laptops instead of spilling into the next section. */}
      <div className="relative aspect-[4/5] w-[min(76vw,260px)] sm:w-[min(60vw,300px)] lg:w-[min(100%,340px)] xl:w-[min(100%,372px)]">
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
                <div className="absolute inset-0 overflow-hidden rounded-[24px] border border-border bg-bg-card shadow-[0_28px_60px_-28px_rgba(20,18,16,0.25)]">
                  <div className="absolute inset-0 paper-grain opacity-[0.35]" aria-hidden="true" />

                  {/* Tape pieces */}
                  <span
                    aria-hidden="true"
                    className="absolute -top-2.5 left-[14%] h-[28px] w-[84px] rotate-[-4deg] rounded-[3px] border border-border/80 bg-bg-2/90 shadow-sm"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute -top-2.5 right-[16%] h-[28px] w-[66px] rotate-[5deg] rounded-[3px] border border-border/80 bg-bg-2/90 shadow-sm"
                  />

                  {/* Dashed inner frame */}
                  <div
                    className="pointer-events-none absolute inset-3 rounded-[18px] border border-dashed border-ink-3/40"
                    aria-hidden="true"
                  />

                  {/* Stamp */}
                  <span className="pointer-events-none absolute right-4 top-4 rotate-[6deg] rounded-[4px] border border-accent/50 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.22em] text-accent">
                    AI / ML
                  </span>

                  {/* Monogram */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                    <div className="relative mb-1 flex items-center justify-center">
                      <ScribbleRing className="absolute w-[210px] max-w-[78%] sm:w-[232px]" />
                      <span
                        className="relative select-none font-serif font-bold text-ink"
                        style={{ fontSize: 'clamp(54px, 9vw, 92px)', letterSpacing: '-0.05em' }}
                      >
                        LA
                      </span>
                    </div>
                    <span className="mt-1 text-[9.5px] font-bold uppercase tracking-[0.24em] text-ink-3">
                      Lakshay Aggarwal
                    </span>
                    <div className="my-3.5 h-px w-16 bg-border" aria-hidden="true" />
                    <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ink-2">
                      Software Engineer · AI / ML
                    </span>
                  </div>

                  {/* Bottom strip */}
                  <div className="absolute inset-x-0 bottom-0 flex h-[46px] items-center justify-between border-t border-dashed border-ink-3/40 px-5">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-ink-3">
                      Est. curiosity
                    </span>
                    <span className="font-serif text-[12px] italic text-ink-2">
                      handcrafted with code
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Floating paper tickets — desktop only, where there is room for
            them to sit outside the card without causing overflow. */}
        <motion.div
          className="absolute right-[-10%] top-[14%] z-20 hidden lg:block"
          {...ticket}
          transition={{ delay: 0.5, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="paper-float-slow flex items-center gap-2.5 whitespace-nowrap rounded-[12px] border border-border bg-bg-card px-3.5 py-2.5 shadow-[0_12px_28px_-16px_rgba(20,18,16,0.3)]">
            <span className="font-serif text-[13px] font-bold italic text-accent">01</span>
            <span className="text-xs font-semibold text-ink">AI / ML Projects</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-[26%] right-[-8%] z-20 hidden lg:block"
          {...ticket}
          transition={{ delay: 0.72, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="paper-float-slow flex items-center gap-2.5 whitespace-nowrap rounded-[12px] border border-border bg-bg-card px-3.5 py-2.5 shadow-[0_12px_28px_-16px_rgba(20,18,16,0.3)]"
            style={{ animationDelay: '-2.5s' }}
          >
            <span
              className="h-2 w-2 rounded-full bg-green shadow-[0_0_8px_var(--color-green)]"
              aria-hidden="true"
            />
            <span className="text-xs font-semibold text-ink">Open to opportunities</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-[8%] left-[-9%] z-20 hidden lg:block"
          {...ticket}
          transition={{ delay: 0.94, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="paper-float-slow flex items-center gap-2.5 whitespace-nowrap rounded-[12px] border border-border bg-bg-card px-3.5 py-2.5 shadow-[0_12px_28px_-16px_rgba(20,18,16,0.3)]"
            style={{ animationDelay: '-1.5s' }}
          >
            <span className="font-serif text-[13px] font-bold italic text-ink-2">02</span>
            <span className="text-xs font-semibold text-ink">Full Stack Dev</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

/**
 * Project thumbnail. Uses an aspect ratio rather than a min-height so it
 * scales cleanly inside both the ledger row and the case-study header.
 */
export function ProjectPreview({ image, name, compact = false }) {
  return (
    <div
      className={`relative flex w-full flex-col items-center justify-center gap-2 overflow-hidden border border-border bg-bg-card ${
        compact ? 'aspect-[16/10] rounded-[10px]' : 'aspect-[16/9] rounded-[16px]'
      }`}
    >
      {image ? (
        <img
          src={image}
          alt={`Screenshot of the ${name} project`}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <>
          <div className="absolute inset-0 paper-grain opacity-[0.4]" aria-hidden="true" />
          <div
            className="pointer-events-none absolute inset-2 rounded-[6px] border border-dashed border-ink-3/40"
            aria-hidden="true"
          />
          <span
            className={`px-3 text-center font-serif italic text-ink-2 ${compact ? 'text-sm' : 'text-2xl'}`}
          >
            {name}
          </span>
        </>
      )}
    </div>
  )
}
