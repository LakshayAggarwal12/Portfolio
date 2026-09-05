import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { PageFrame } from '../components/portfolio-shell.jsx'

export default function NotFoundPage() {
  return (
    <PageFrame>
      <div className="min-h-[calc(100svh-64px)] flex flex-col items-center justify-center gap-5 text-center py-[60px]">
        <h1
          className="font-extrabold tracking-[-0.06em] text-border leading-none"
          style={{ fontSize: 'clamp(80px, 15vw, 180px)' }}
        >
          404
        </h1>
        <p className="text-lg text-ink-2 mb-2">This page doesn&apos;t exist.</p>
        <Link
          className="inline-flex items-center gap-2 px-[22px] py-3.5 text-sm font-bold rounded-[10px] transition-all duration-200 bg-ink text-bg border-none tracking-tight hover:bg-accent hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(26,86,219,0.35)]"
          to="/"
        >
          Back home <ArrowUpRight size={17} />
        </Link>
      </div>
    </PageFrame>
  )
}
