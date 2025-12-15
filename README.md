# Personal Blog

A modern, developer-centric personal blog built with Next.js 15, TypeScript, TailwindCSS, and MDX. The design follows the **E2B.dev design system** featuring dark mode native aesthetics with high contrast and clean typography.

## ✨ Features

- 🎨 **E2B.dev Design System** - Dark mode native with high contrast
- 📝 **MDX Support** - Write blog posts in Markdown with React components
- 🎯 **TypeScript** - Fully typed for better DX
- 🚀 **Next.js 15** - App Router with Server Components
- 💅 **TailwindCSS** - Utility-first CSS with custom design tokens
- 🔍 **Search & Filter** - Find posts by keywords and tags
- 📱 **Responsive** - Mobile-first design
- ⚡ **Fast** - Optimized for performance
- 🎭 **Syntax Highlighting** - Beautiful code blocks with rehype-highlight

## 📁 Project Structure

```
blog/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   │   ├── page.tsx       # Blog list
│   │   └── [slug]/        # Blog post detail
│   └── globals.css        # Global styles with E2B.dev colors
├── components/            # React components
│   ├── ui/               # UI components (Button, Card)
│   ├── layout/           # Layout components (Navbar, Footer)
│   └── blog/             # Blog components
├── content/              # MDX blog posts
│   └── posts/           # Blog post files
├── lib/                 # Utilities
│   ├── mdx.ts          # MDX parsing and utilities
│   └── utils.ts        # Helper functions
└── public/             # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Writing Blog Posts

Create new blog posts in the `content/posts/` directory as `.mdx` files:

```mdx
---
title: 'Your Post Title'
date: '2025-12-12'
description: 'A brief description of your post'
tags: ['Next.js', 'React', 'Tutorial']
featured: true
---

# Your Content Here

Write your post content using Markdown and React components!
```

### Frontmatter Fields

- `title` (required) - Post title
- `date` (required) - Publication date (YYYY-MM-DD)
- `description` (required) - Brief description for SEO and previews
- `tags` (optional) - Array of tags for categorization
- `featured` (optional) - Set to `true` to feature on homepage

## 🎨 Customization

### Update Site Information

1. **Site Name**: Update in `components/layout/navbar.tsx` and `components/layout/footer.tsx`
2. **Metadata**: Edit `app/layout.tsx` for SEO information
3. **About Page**: Customize `app/about/page.tsx` with your bio and skills
4. **Social Links**: Update in `components/layout/footer.tsx`

### Colors

The E2B.dev color palette is defined in `app/globals.css` using HSL variables. Customize colors by editing the CSS variables:

```css
:root {
  --background: 240 6% 10%;
  --foreground: 0 0% 98%;
  /* ... more colors */
}
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Content**: [MDX](https://mdxjs.com/)
- **Syntax Highlighting**: [rehype-highlight](https://github.com/rehypejs/rehype-highlight)
- **Date Formatting**: [date-fns](https://date-fns.org/)

## 📜 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

MIT License - feel free to use this template for your own blog!

## 🙏 Acknowledgments

- Design inspired by [E2B.dev](https://e2b.dev/)
- Built with [Next.js](https://nextjs.org/)
- Styled with [TailwindCSS](https://tailwindcss.com/)

---

**Happy blogging!** 🚀
