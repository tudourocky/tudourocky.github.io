import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="portfolio">
      <p className="prompt-line">
        <span className="dollar">$ </span>cd /unknown-path
      </p>
      <h1 className="name">404</h1>
      <p className="subtitle">Page not found.</p>
      <hr className="divider" />
      <p className="section-prompt">
        <span className="dollar">$ </span>The path you followed doesn't exist.
      </p>
      <Link to="/" className="back-link">← Back to home</Link>
    </div>
  )
}
