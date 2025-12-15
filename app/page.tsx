import Link from 'next/link'
import { BlogCard } from '@/components/blog/blog-card'
import { getFeaturedPosts } from '@/lib/mdx'

export default function HomePage() {
  const featuredPosts = getFeaturedPosts(3)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <span className="section-label mb-6 block">[ PERSONAL BLOG ]</span>
            <h1 className="font-mono text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
              WELCOME TO MY{' '}
              <span className="bg-accent px-2">BLOG#</span>
            </h1>
            <p className="text-lg leading-8 text-muted-foreground mb-10 max-w-2xl mx-auto">
              Exploring the intersection of web development, technology, and innovation. 
              Join me as I share insights, tutorials, and thoughts on building modern web applications.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/blog">
                <button className="btn-primary">
                  READ THE BLOG
                </button>
              </Link>
              <Link href="/about">
                <button className="btn-secondary">
                  ABOUT ME
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - E2B.dev style */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border text-center">
            <div className="py-8 px-4">
              <div className="stat-number">1+</div>
              <div className="stat-label mt-2">BLOG POSTS</div>
            </div>
            <div className="py-8 px-4">
              <div className="stat-number">3+</div>
              <div className="stat-label mt-2">YEARS EXPERIENCE</div>
            </div>
            <div className="py-8 px-4">
              <div className="stat-number">∞</div>
              <div className="stat-label mt-2">LEARNING PASSION</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="section-label block mb-4">[ LATEST POSTS ]</span>
          <h2 className="font-mono text-3xl font-bold tracking-tight text-foreground mb-2">
            FEATURED ARTICLES
          </h2>
          <p className="text-muted-foreground">
            Check out my latest articles and tutorials
          </p>
        </div>

        {featuredPosts.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 bg-white">
            {featuredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border border-border bg-white">
            <p className="text-muted-foreground font-mono">
              [ NO POSTS YET. STAY TUNED! ]
            </p>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link href="/blog">
            <button className="btn-secondary">
              VIEW ALL POSTS →
            </button>
          </Link>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="border-t border-border bg-featured text-featured-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-accent block mb-4">
              [ ABOUT ]
            </span>
            <h2 className="font-mono text-3xl font-bold tracking-tight mb-4">
              ABOUT THIS BLOG
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              This is a space where I document my journey in web development, 
              share what I've learned, and connect with fellow developers. 
              Whether you're just starting out or you're a seasoned pro, 
              I hope you find something valuable here.
            </p>
            <Link href="/about">
              <button className="px-6 py-2 font-mono text-sm border border-white text-white hover:bg-white hover:text-black transition-all">
                LEARN MORE ABOUT ME
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
