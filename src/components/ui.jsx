import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

/**
 * Shared Paper + Ink building blocks.
 * Keep color/typography decisions in one place so pages stay consistent
 * without duplicating long Tailwind strings.
 */

const primaryClasses =
  'group inline-flex items-center justify-center gap-2 px-[22px] py-3.5 text-sm font-bold rounded-[10px] tracking-tight select-none transition-all duration-200 bg-ink text-bg border-none hover:bg-accent hover:-translate-y-px hover:shadow-[0_6px_18px_rgba(26,86,219,0.3)] active:translate-y-0'

const ghostClasses =
  'group inline-flex items-center justify-center gap-2 px-[22px] py-3.5 text-sm font-bold rounded-[10px] tracking-tight select-none transition-all duration-200 bg-transparent text-ink border border-[1.5px] border-border hover:border-ink hover:-translate-y-px active:translate-y-0'

export function InkButton({ to, href, type, variant = 'primary', children, className = '', ...rest }) {
  const classes = `${variant === 'ghost' ? ghostClasses : primaryClasses} ${className}`
  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
        <ArrowUpRight size={17} className="transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
        <ArrowUpRight size={17} />
      </a>
    )
  }
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  )
}

export function TextLink({ to, href, children, className = '', ...rest }) {
  const classes = `group inline-flex items-center gap-1.5 text-sm font-semibold text-accent relative after:content-[''] after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:rounded-full after:bg-accent after:w-0 after:transition-all after:duration-300 hover:after:w-full ${className}`
  const arrow = (
    <ArrowUpRight size={16} className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
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

const headingSizes = {
  sm: 'clamp(30px, 4.5vw, 52px)',
  md: 'clamp(32px, 4.5vw, 58px)',
  lg: 'clamp(36px, 5vw, 68px)',
}

export function DisplayHeading({ as: Tag = 'h2', size = 'md', children, className = '', ...rest }) {
  return (
    <Tag
      className={`font-extrabold leading-[1.05] tracking-[-0.04em] text-ink text-balance ${className}`}
      style={{ fontSize: headingSizes[size] }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function SkillChip({ children }) {
  return (
    <span className="inline-block px-3 py-[5px] bg-bg-2 border border-border rounded-md text-[13px] font-medium text-ink-2 transition-colors duration-150 hover:border-accent hover:text-ink">
      {children}
    </span>
  )
}

export function SkillGroup({ group }) {
  return (
    <div className="border-t-2 border-border pt-[18px]" key={group.label}>
      <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-accent mb-3.5">{group.label}</p>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <SkillChip key={item}>{item}</SkillChip>
        ))}
      </div>
    </div>
  )
}