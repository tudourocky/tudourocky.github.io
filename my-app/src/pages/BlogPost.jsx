import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPostBySlug } from '../utils/posts'

function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPostBySlug(slug).then((data) => {
      setPost(data)
      setLoading(false)
    })
  }, [slug])

  if (loading) {
    return (
      <div className="portfolio">
        <div className="prompt-line">&gt; $ loading...</div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="portfolio">
        <div className="prompt-line">&gt; $ cat {slug}.md</div>
        <p className="subtitle">Post not found.</p>
        <Link to="/" className="back-link">&gt; $ cd ~</Link>
      </div>
    )
  }

  return (
    <div className="portfolio">
      <Link to="/" className="back-link">&gt; $ cd ~</Link>

      <div className="post-header">
        <div className="prompt-line" style={{ marginBottom: '0.5rem' }}>
          &gt; $ cat {slug}.md
        </div>
        <span className="post-date">{post.date}</span>
      </div>

      <article className="post-content">
        <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
      </article>

      <hr className="divider" />

      <Link to="/" className="back-link">&gt; $ cd ~</Link>

      <div className="footer">
        &copy; {new Date().getFullYear()} :: Allan
      </div>
    </div>
  )
}

export default BlogPost
