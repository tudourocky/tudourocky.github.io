import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllPosts } from '../utils/posts'

function BlogList() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getAllPosts().then(setPosts)
  }, [])

  return (
    <div className="portfolio">
      <Link to="/" className="back-link">&gt; $ cd ~</Link>

      <div className="prompt-line">
        &gt; $ ls blog/*<span className="cursor-blink" />
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
    </div>
  )
}

export default BlogList
