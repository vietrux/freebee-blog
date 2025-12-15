'use client'

import { useState, useMemo } from 'react'
import { BlogCard } from '@/components/blog/blog-card'
import type { Post } from '@/lib/mdx'

interface SearchAndFilterProps {
  posts: Post[]
  tags: string[]
}

export function SearchAndFilter({ posts, tags }: SearchAndFilterProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesTag =
        selectedTag === null ||
        post.tags.some((tag) => tag.toLowerCase() === selectedTag.toLowerCase())

      return matchesSearch && matchesTag
    })
  }, [posts, searchQuery, selectedTag])

  return (
    <>
      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        {/* Search Input */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            className="block w-full border border-border bg-background pl-10 pr-3 py-3 font-mono text-sm text-foreground placeholder-muted-foreground focus:border-foreground focus:outline-none"
            placeholder="SEARCH POSTS..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Tags Filter */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-3 py-1.5 font-mono text-xs font-medium transition-all border ${
                selectedTag === null
                  ? 'bg-foreground text-background border-foreground'
                  : 'bg-background text-muted-foreground border-border hover:border-foreground'
              }`}
            >
              ALL
            </button>
            {tags.map((tag) => (
              <button
                key={tag}  
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 font-mono text-xs font-medium transition-all border ${
                  selectedTag === tag
                    ? 'bg-foreground text-background border-foreground'
                    : 'bg-background text-muted-foreground border-border hover:border-foreground'
                }`}
              >
                {tag.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-sm font-mono text-muted-foreground">
          [ {filteredPosts.length} {filteredPosts.length === 1 ? 'POST' : 'POSTS'} FOUND ]
        </p>
      </div>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 bg-white">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 border border-border bg-white">
          <p className="text-muted-foreground font-mono">
            [ NO POSTS FOUND. TRY ADJUSTING YOUR SEARCH. ]
          </p>
        </div>
      )}
    </>
  )
}
