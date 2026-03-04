const markdownFiles = import.meta.glob('../posts/*.md', {
  query: '?raw',
  import: 'default',
});

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { metadata: {}, content: raw };

  const frontmatter = match[1];
  const content = match[2];
  const metadata = {};

  for (const line of frontmatter.split(/\r?\n/)) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    metadata[key] = value;
  }

  return { metadata, content };
}

export async function getAllPosts() {
  const posts = [];

  for (const [path, loader] of Object.entries(markdownFiles)) {
    const raw = await loader();
    const { metadata } = parseFrontmatter(raw);
    const slug = path.split('/').pop().replace('.md', '');

    posts.push({
      slug,
      title: metadata.title || slug,
      date: metadata.date || '',
      summary: metadata.summary || '',
    });
  }

  posts.sort((a, b) => (b.date > a.date ? 1 : -1));
  return posts;
}

export async function getPostBySlug(slug) {
  const path = `../posts/${slug}.md`;
  const loader = markdownFiles[path];
  if (!loader) return null;

  const raw = await loader();
  const { metadata, content } = parseFrontmatter(raw);

  return {
    slug,
    title: metadata.title || slug,
    date: metadata.date || '',
    summary: metadata.summary || '',
    content,
  };
}
