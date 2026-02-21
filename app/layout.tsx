import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Shivam Pandey - Full Stack Developer & AI Enthusiast',
  description: 'Full Stack Developer (MERN) & AI Enthusiast. Building scalable, high-performance, and user-centric applications with cutting-edge technologies.',
  generator: 'v0.app',
  keywords: ['Full Stack Developer', 'MERN', 'React', 'Node.js', 'AI', 'Web Developer', 'Shivam Pandey'],
  authors: [{ name: 'Shivam Pandey' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shivampandey.dev',
    title: 'Shivam Pandey - Full Stack Developer & AI Enthusiast',
    description: 'Building scalable, high-performance, and user-centric applications with cutting-edge technologies.',
    siteName: 'Shivam Pandey Portfolio',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark' || 
                    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
