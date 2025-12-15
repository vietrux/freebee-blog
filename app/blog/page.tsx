import { SearchAndFilter } from '@/components/blog/search-and-filter'
import { getAllPosts, getAllTags } from '@/lib/mdx'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts, tutorials, and insights on web development',
}

export default function BlogPage() {
  const allPosts = getAllPosts()
  const allTags = getAllTags()

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12">
        <span className="section-label block mb-4">[ ARTICLES ]</span>
        <h1 className="font-mono text-4xl font-bold tracking-tight text-foreground mb-4">
          BLOG
        </h1>
        <p className="text-xl text-muted-foreground">
          Thoughts, tutorials, and insights on web development
        </p>
      </div>

      {/* Search and Filter Component (Client Component) */}
      <SearchAndFilter posts={allPosts} tags={allTags} />
    </div>
  )
}
