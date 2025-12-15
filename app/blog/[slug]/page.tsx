import { notFound } from 'next/navigation'
import Link from 'next/link'
import { format } from 'date-fns'
import { getAllPostSlugs, getPostBySlug } from '@/lib/mdx'
import { components } from '@/components/blog/mdx-components'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const formattedDate = format(new Date(post.date), 'MMMM dd, yyyy')

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Back to Blog Link */}
      <Link
        href="/blog"
        className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-accent transition-colors mb-8"
      >
        <svg
          className="mr-2 h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        BACK TO BLOG
      </Link>

      {/* Post Header */}
      <header className="mb-12 border-b border-border pb-8">
        <div className="mb-4 flex flex-wrap items-center gap-4 text-sm font-mono text-muted-foreground uppercase tracking-wider">
          <time dateTime={post.date}>{formattedDate}</time>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>
        
        <h1 className="font-mono text-4xl font-bold tracking-tight text-foreground mb-4 sm:text-5xl">
          {post.title.toUpperCase()}
        </h1>
        
        <p className="text-xl text-muted-foreground mb-6">
          {post.description}
        </p>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="inline-flex items-center px-3 py-1 text-xs font-mono border border-border text-muted-foreground hover:border-foreground transition-colors"
              >
                {tag.toUpperCase()}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* MDX Content */}
      <div className="prose prose-lg max-w-none">
        <MDXRemote
          source={post.content}
          components={components}
          options={{
            mdxOptions: {
              rehypePlugins: [
                rehypeHighlight,
                rehypeSlug,
                [rehypeAutolinkHeadings, { behavior: 'wrap' }],
              ],
            },
          }}
        />
      </div>

      {/* Post Footer */}
      <footer className="mt-16 border-t border-border pt-8">
        <div className="flex justify-between items-center">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-accent transition-colors"
          >
            ← ALL POSTS
          </Link>
          <div className="flex gap-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://yourdomain.com/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="Share on Twitter"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </article>
  )
}
