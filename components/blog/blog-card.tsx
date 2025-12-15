import Link from 'next/link'
import { format } from 'date-fns'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { PostMetadata } from '@/lib/mdx'

interface BlogCardProps {
  post: PostMetadata
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = format(new Date(post.date), 'MMM dd, yyyy')

  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <div className="card-feature h-full bg-white border border-border p-4 sm:p-6">
        <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono text-muted-foreground mb-3 sm:mb-4">
          <time dateTime={post.date} className="uppercase tracking-wider">{formattedDate}</time>
          <span>{post.readingTime}</span>
        </div>
        
        <h3 className="font-mono font-bold text-base sm:text-lg mb-2 group-hover:text-accent transition-colors line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 mb-3 sm:mb-4">
          {post.description}
        </p>
        
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs font-mono border border-border text-muted-foreground"
              >
                {tag.toUpperCase()}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="text-[10px] sm:text-xs font-mono text-muted-foreground">
                +{post.tags.length - 3}
              </span>
            )}
          </div>
        )}
        
        <span className="text-xs sm:text-sm font-mono text-foreground group-hover:text-accent transition-colors">
          READ MORE →
        </span>
      </div>
    </Link>
  )
}
