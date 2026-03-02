import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllPosts } from '../utils/posts'

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

      <h1 className="name">Allan</h1>
      <p className="subtitle">Computer Engineering @ University, currently @ Company.</p>

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
          Software development at{' '}
          <a className="company" href="https://www.mhi.com/group/mhica/" target="_blank" rel="noopener noreferrer">MHI Canada Aerospace</a>
        </li>
        <li>
          Blockchain infrastructure at{' '}
          <a className="company" href="https://www.linkedin.com/search/results/all/?keywords=dandelion" target="_blank" rel="noopener noreferrer">Dandelion Networks Inc.</a>
        </li>
      </ul>

      <div className="section-prompt" style={{ marginTop: '1.2rem' }}>
        &gt; <span className="dollar">$</span> blog (inspired by @Xierumeng’s Blog )
      </div>
      <ul className="blog-list">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`} className="blog-link">
              <span className="blog-title">{post.title}</span>
              <span className="blog-date">{post.date}</span>
            </Link>
            <p className="blog-summary">{post.summary}</p>
          </li>
        ))}
      </ul>

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
