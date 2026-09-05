import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { PageFrame } from '../components/portfolio-shell.jsx'

export default function NotFoundPage() {
  return (
    <PageFrame>
      <div className="not-found">
        <h1>404</h1>
        <p>This page doesn&apos;t exist.</p>
        <Link className="button button-dark" to="/">
          Back home <ArrowUpRight size={17} />
        </Link>
      </div>
    </PageFrame>
  )
}
