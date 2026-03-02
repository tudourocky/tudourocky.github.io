import { Link } from 'react-router-dom'
import { projects } from './Home'

function ProjectList() {
  return (
    <div className="portfolio">
      <Link to="/" className="back-link">&gt; $ cd ~</Link>

      <div className="prompt-line">
        &gt; $ ls projects/*<span className="cursor-blink" />
      </div>

      <div className="project-terminal-output">
        {projects.map((project) => (
          <div key={project.title} className="terminal-project-entry">
            {project.image && (
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="terminal-project-image"
                />
              </a>
            )}
            <div className="terminal-project-header">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-project-title"
              >
                {project.title}/
              </a>
            </div>
            <div className="terminal-project-details">
              <div className="terminal-line comment">
                <span className="comment-char">#</span> {project.desc}
              </div>
              <div className="terminal-line tags">
                [{project.tags.join(', ')}]
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectList
