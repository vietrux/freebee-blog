import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'DevBlog - Personal Tech Blog',
    template: '%s | DevBlog',
  },
  description: 'A personal blog sharing insights, tutorials, and thoughts on web development and technology.',
  keywords: ['blog', 'web development', 'programming', 'technology', 'tutorials'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    title: 'DevBlog - Personal Tech Blog',
    description: 'A personal blog sharing insights, tutorials, and thoughts on web development and technology.',
    siteName: 'DevBlog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevBlog - Personal Tech Blog',
    description: 'A personal blog sharing insights, tutorials, and thoughts on web development and technology.',
    creator: '@yourhandle',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
