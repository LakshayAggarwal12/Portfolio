import { createElement } from 'react'
import { motion, useReducedMotion } from 'motion/react'
/** Each line slides up out of its own mask when it enters the viewport. */
export function RevealLines({ lines, as = 'h2', className = '', delay = 0, stagger = 0.09 }) {
  const reduce = useReducedMotion()
  return createElement(
    as,
    { className: `lines ${className}` },
    lines.map((text, i) => (
      <span className="line" key={i}>
        <motion.span
          className="line-inner"
          initial={reduce ? { opacity: 0 } : { y: '108%' }}
          whileInView={reduce ? { opacity: 1 } : { y: 0 }}
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          transition={{ duration: reduce ? 0.2 : 0.9, delay: delay + i * stagger, ease: [0.2, 0.7, 0.1, 1] }}
        >
          {text}
        </motion.span>
      </span>
    )),
  )
}
