# FREEBEE PERSONAL BLOG - Content Management Guide

## How to Add New Blog Posts

### 1. Create a New Markdown File

Create a new `.md` file in the `src/content/blog/` directory with the following naming convention:
- Use kebab-case (lowercase with hyphens)
- Example: `ctf-writeup-web-exploit.md`

### 2. Add Frontmatter

Each post must include frontmatter at the top of the file:

```yaml
---
title: "YOUR POST TITLE IN CAPS"
excerpt: "A brief description of your post content."
category: "CATEGORY_NAME"
color: "red" # Options: red, blue, yellow, green, orange, purple
date: "2024-01-15" # Format: YYYY-MM-DD
author: "FREEBEE" # Default author
featured: false # Set to true to feature on homepage
tags: ["tag1", "tag2", "tag3"] # Optional tags
---
```

### 3. Write Your Content

After the frontmatter, write your content using Markdown:

```markdown
# Your Main Heading

Your content goes here. You can use:

- **Bold text**
- *Italic text*
- `Code snippets`
- [Links](https://example.com)

## Subheadings

More content...

> Blockquotes for emphasis

```code
Code blocks
```
```

### 4. Available Categories

- DESIGN
- TECH
- CULTURE
- HARDWARE
- TYPOGRAPHY
- ART
- NEWS
- OPINION

### 5. Color Schemes

Each post can use one of these brutalist color schemes:
- `red` - Red borders and accents
- `blue` - Blue borders and accents  
- `yellow` - Yellow borders and accents
- `green` - Green borders and accents
- `orange` - Orange borders and accents
- `purple` - Purple borders and accents

### 6. Example Post

```markdown
---
title: "MY NEW BRUTALIST POST"
excerpt: "This is an example of how to create a new post for FREEBEE NEWS."
category: "DESIGN"
color: "red"
date: "2024-01-16"
author: "FREEBEE"
featured: true
tags: ["brutalism", "design", "example"]
---

# WELCOME TO BRUTALIST CONTENT

This is how you create content for FREEBEE NEWS.

## Key Points

- Use CAPS for headings
- Keep it brutal and honest
- Embrace the raw aesthetic
- Function over form

## The Brutalist Way

> **BRUTAL HONESTY** - Content that tells the truth
> 
> **RAW POWER** - Writing that works without apology

Ready to join the revolution?
```

### 7. File Structure

```
src/
├── content/
│   ├── config.ts          # Content collection schema
│   └── blog/
│       ├── post-1.md
│       ├── post-2.md
│       └── your-new-post.md
├── layouts/
│   ├── brutalist.astro    # Main layout
│   └── blog-post.astro    # Individual post layout
└── pages/
    ├── news.astro         # News listing page
    └── blog/
        └── [...slug].astro # Dynamic post pages
```

### 8. Automatic Features

Once you add a new post:

- ✅ Automatically appears on the news page
- ✅ Gets included in the breaking news marquee
- ✅ Can be featured on the homepage (if `featured: true`)
- ✅ Gets its own URL at `/blog/your-post-slug`
- ✅ Uses brutalist styling based on color scheme
- ✅ Includes author branding and metadata

### 9. Development

Run the development server to see your changes:

```bash
npm run dev
```

Visit:
- `http://localhost:4321/news` - See all posts
- `http://localhost:4321/blog/your-post-slug` - View individual post

That's it! Your brutalist content management system is ready to go. 🚀
