'use client'

import { useEffect, useState } from 'react'

interface Heading {
  id: string
  text: string
  level: number
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // Extract all headings from the page
    const elements = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
      .filter((element) => element.id) // Only include headings with IDs
      .map((element) => ({
        id: element.id,
        text: element.textContent || '',
        level: Number(element.tagName.charAt(1)),
      }))

    setHeadings(elements)

    // Set up intersection observer to track active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-80px 0px -80% 0px',
      }
    )

    elements.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      elements.forEach(({ id }) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.offsetTop - 80 // Account for navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    }
  }

  if (headings.length === 0) {
    return null
  }

  // Find the minimum heading level to use as base (no indent)
  const minLevel = headings.length > 0 ? Math.min(...headings.map(h => h.level)) : 1

  return (
    <nav className="sticky top-24 hidden xl:block">
      <div className="border border-border bg-white p-6 max-h-[calc(100vh-8rem)] overflow-y-auto">
        <h4 className="font-mono text-xs font-bold tracking-widest text-muted-foreground uppercase mb-4">
          [ TABLE OF CONTENTS ]
        </h4>
        <ul className="space-y-2">
          {headings.map((heading) => {
            const indentLevel = heading.level - minLevel
            const indentSpaces = '\u00A0\u00A0\u00A0\u00A0'.repeat(indentLevel) // 4 non-breaking spaces per level
            
            return (
              <li key={heading.id}>
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => handleClick(e, heading.id)}
                  className={`block text-sm font-mono transition-colors hover:text-accent whitespace-pre ${
                    activeId === heading.id
                      ? 'text-accent font-bold'
                      : 'text-muted-foreground'
                  }`}
                >
                  {indentSpaces}{heading.text}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
