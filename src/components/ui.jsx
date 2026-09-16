import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

/**
 * Shared Paper + Ink building blocks.
 * Colour and typography decisions live here so pages stay consistent
 * without duplicating long Tailwind strings.
 */

/* 44px minimum height on every control — the accessible touch target floor. */
const buttonBase =
  'group inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[10px] px-5 text-sm font-bold tracking-tight select-none transition-[transform,background-color,border-color,box-shadow,color] duration-200 active:translate-y-0'

const variants = {
  primary:
    'border-none bg-ink text-bg hover:-translate-y-px hover:bg-accent hover:shadow-[0_6px_18px_-4px_rgba(26,86,219,0.35)]',
  ghost:
    'border-[1.5px] border-border bg-transparent text-ink hover:-translate-y-px hover:border-ink hover:bg-bg-2',
  quiet:
    'border-[1.5px] border-border bg-bg-card text-ink-2 hover:border-accent hover:text-ink min-h-[38px] px-3.5 text-[13px] font-semibold',
}

export function InkButton({
  to,
  href,
  type = 'button',
  variant = 'primary',
  children,
  className = '',
  showArrow = true,
  icon: Icon,
  ...rest
}) {
  const classes = `${buttonBase} ${variants[variant] ?? variants.primary} ${className}`

  const content = (
    <>
      {Icon && <Icon size={16} aria-hidden="true" className="shrink-0" />}
      {children}
      {showArrow && !Icon && (
        <ArrowUpRight
          size={17}
          aria-hidden="true"
          className="shrink-0 transition-transform duration-200 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]"
        />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  )
}

export function TextLink({ to, href, children, className = '', ...rest }) {
  const classes = `group relative inline-flex items-center gap-1.5 text-sm font-semibold text-accent after:absolute after:-bottom-[3px] after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-accent after:transition-all after:duration-300 hover:after:w-full ${className}`
  const arrow = (
    <ArrowUpRight
      size={16}
      aria-hidden="true"
      className="shrink-0 transition-transform duration-200 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]"
    />
  )
  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
        {arrow}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
        {arrow}
      </a>
    )
  }
  return null
}

/* Display type scale. Leading is just above 1 so descenders never clip at
   the largest sizes, which `leading-none` was doing on "Building things". */
const headingSizes = {
  sm: 'clamp(26px, 3.4vw, 38px)',
  md: 'clamp(30px, 4vw, 48px)',
  lg: 'clamp(34px, 4.8vw, 58px)',
}

export function DisplayHeading({ as: Tag = 'h2', size = 'md', children, className = '', ...rest }) {
  return (
    <Tag
      className={`text-balance font-extrabold leading-[1.06] tracking-[-0.035em] text-ink ${className}`}
      style={{ fontSize: headingSizes[size] }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/** Small technology / metadata badge. */
export function Badge({ children, tone = 'default', className = '' }) {
  const tones = {
    default: 'border-border bg-bg-2 text-ink-2',
    accent: 'border-accent/35 bg-accent-bg text-accent',
  }
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-[3px] text-[12px] font-medium leading-5 ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  )
}

export function SkillChip({ children }) {
  return (
    <span className="inline-block rounded-md border border-border bg-bg-2 px-3 py-[5px] text-[13px] font-medium text-ink-2 transition-colors duration-150 hover:border-accent hover:text-ink">
      {children}
    </span>
  )
}

export function SkillGroup({ group }) {
  return (
    <div className="border-t-2 border-border pt-4">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-accent">
        {group.label}
      </p>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <SkillChip key={item}>{item}</SkillChip>
        ))}
      </div>
    </div>
  )
}
