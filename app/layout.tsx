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
    default: 'FRB(2E) - Personal Tech Blog',
    template: '%s | FRB(2E)',
  },
  description: 'A personal blog sharing insights, tutorials, and thoughts on web development and technology.',
  keywords: ['blog', 'web development', 'programming', 'technology', 'tutorials'],
  authors: [{ name: 'freebee' }],
  creator: 'freebee',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://freebee.v1.io.vn',
    title: 'FRB(2E) - Personal Tech Blog',
    description: 'A personal blog sharing insights, tutorials, and thoughts on web development and technology.',
    siteName: 'FRB(2E)',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FRB(2E) - Personal Tech Blog',
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
