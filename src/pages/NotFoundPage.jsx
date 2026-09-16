import { Page } from '../components/portfolio-shell.jsx'
import { InkButton } from '../components/ui.jsx'

export default function NotFoundPage() {
  return (
    <Page center className="py-16 text-center">
      <p
        aria-hidden="true"
        className="font-extrabold leading-none tracking-[-0.06em] text-border"
        style={{ fontSize: 'clamp(76px, 15vw, 172px)' }}
      >
        404
      </p>
      <h1 className="mt-4 text-[26px] font-bold tracking-[-0.03em] text-ink sm:text-[32px]">
        This page doesn&apos;t exist.
      </h1>
      <p className="measure mx-auto mt-3 text-[15px] leading-[1.7] text-ink-2">
        The link may be out of date. Head back to the homepage, or jump straight to the work.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <InkButton to="/">Back home</InkButton>
        <InkButton to="/projects" variant="ghost">
          See the projects
        </InkButton>
      </div>
    </Page>
  )
}
