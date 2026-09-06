import { PageFrame } from '../components/portfolio-shell.jsx'
import { InkButton } from '../components/ui.jsx'

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
        <InkButton to="/">Back home</InkButton>
      </div>
    </PageFrame>
  )
}
