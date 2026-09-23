import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hamza Haimeur | Front-end Developer',
  description: 'Front-end developer who builds clean, professional projects for the web.',
  generator: 'v0.app',
  openGraph: {
    title: 'Hamza Haimeur | Front-end Developer',
    description: 'Front-end developer who builds clean, professional projects for the web.',
    images: [
      {
        url: '/preview.png',
        width: 1366,
        height: 641,
        alt: 'HAMZA HAIMEUR Portfolio',
      },
    ],
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf8f3' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0d0a' },
  ],
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
