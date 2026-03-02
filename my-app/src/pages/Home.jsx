import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllPosts } from '../utils/posts'

export const projects = [
  {
    title: 'Insight Wallet',
    desc: 'Full-stack personal finance app featuring real-time budget insights, Cohere API-powered saving plans, and automated bank statement processing.',
    tags: ['Python', 'FastAPI', 'React', 'Cohere API'],
    href: 'https://github.com/tudourocky/insightwallet',
    image: '/images/insightwallet.png',
  },
  {
    title: 'HIIT Survey',
    desc: 'Real-time computer vision pipeline using MediaPipe to detect 11 distinct exercises at 10 FPS. Uses deterministic geometric algorithms instead of heavy ML models.',
    tags: ['Python', 'FastAPI', 'MediaPipe', 'OpenAI API'],
    href: 'https://github.com/tudourocky/hiitsurvey',
    image: '/images/demo.gif',
  },
  {
    title: 'Oliver (WAT.ai)',
    desc: 'High-performance RAG virtual assistant using LangChain and Supabase Vector Search. Orchestrates multi-agent systems for complex query validation.',
    tags: ['Python', 'FastAPI', 'LangChain', 'Supabase'],
    href: 'https://github.com/XiandaDu/WatAIOliver',
  },
  {
    title: 'Platformer Fighters',
    desc: '2-player fighting game built in Unity 2D with a full combat system, health bars, and map selection. All sprites, animations, and music created from scratch using Aseprite and Bosca Ceoil.',
    tags: ['C#', 'Unity', 'Aseprite', 'Bosca Ceoil'],
    href: 'https://github.com/tudourocky/platformer',
    image: '/images/platformer.gif',
  },
]

function Home({ theme, setTheme }) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getAllPosts().then(setPosts)
  }, [])

  return (
    <div className="portfolio">
      <div className="prompt-line">
        &gt; $ cd ~<span className="cursor-blink" />
      </div>

      <h1 className="name">Allan Su</h1>
      <p className="subtitle">Computer Engineering @ UWaterloo, currently @ Wind River.</p>

      <hr className="divider" />

      <div className="section-prompt">
        &gt; <span className="dollar">$</span> contact
      </div>
      <div className="contact-links">
        <span>
          <span className="bracket">[</span>
          <a href="https://github.com/tudourocky" target="_blank" rel="noopener noreferrer">github</a>
          <span className="bracket">]</span>
        </span>
        <span>
          <span className="bracket">[</span>
          <a href="https://www.linkedin.com/in/allan-jh-su/" target="_blank" rel="noopener noreferrer">linkedin</a>
          <span className="bracket">]</span>
        </span>
        <span>
          <span className="bracket">[</span>
          <a href="mailto:tudourocky@gmail.com">email</a>
          <span className="bracket">]</span>
        </span>
      </div>

      <div className="section-prompt" style={{ marginTop: '1.2rem' }}>
        &gt; <span className="dollar">$</span> recent
      </div>
      <ul className="recent-list">
        <li>
          VxWorks/Platforms at{' '}
          <a className="company" href="https://www.windriver.com/" target="_blank" rel="noopener noreferrer">Wind River</a>
        </li>
        <li>
          Internal Tools at{' '}
          <a className="company" href="https://www.mhi.com/group/mhica/" target="_blank" rel="noopener noreferrer">MHI Canada Aerospace</a>
        </li>
        <li>
          Blockchain infrastructure at{' '}
          <a className="company" href="https://www.linkedin.com/search/results/all/?keywords=dandelion" target="_blank" rel="noopener noreferrer">Dandelion Networks Inc.</a>
        </li>
      </ul>

      <div className="section-prompt" style={{ marginTop: '1.2rem' }}>
        &gt; <span className="dollar">$</span> projects
      </div>
      <div className="project-terminal-output">
        {projects.slice(0, 3).map((project) => (
          <div key={project.title} className="terminal-project-entry">
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
      {projects.length > 3 && (
        <div className="view-all">
          <Link to="/projects" className="view-all-link">view all projects →</Link>
        </div>
      )}

      <div className="section-prompt" style={{ marginTop: '1.2rem' }}>
        &gt; <span className="dollar">$</span> blog (inspired by @Xierumeng{"\u2019"}s blog)
      </div>
      <ul className="blog-list">
        {posts.slice(0, 3).map((post) => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`} className="blog-link">
              <span className="blog-title">{post.title}</span>
              <span className="blog-date">{post.date}</span>
            </Link>
            <p className="blog-summary">{post.summary}</p>
          </li>
        ))}
      </ul>
      {posts.length > 3 && (
        <div className="view-all">
          <Link to="/blog" className="view-all-link">view all posts →</Link>
        </div>
      )}

      <hr className="divider" />

      <div className="section-prompt">
        &gt; <span className="dollar">$</span> theme
      </div>
      <div className="theme-toggle">
        <span>
          <span className="bracket">[</span>
          <button className="theme-btn" onClick={() => setTheme('light')}>light</button>
          <span className="bracket">]</span>
        </span>
        <span>
          <span className="bracket">[</span>
          <button className="theme-btn" onClick={() => setTheme('dark')}>dark</button>
          <span className="bracket">]</span>
        </span>
      </div>

      <div className="footer">
        &copy; {new Date().getFullYear()} :: Allan
      </div>
    </div>
  )
}

export default Home
