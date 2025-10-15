import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Jesse ON FIRE | Uncensored Truth & Commentary',
  description: 'Political analyst. MMA lifer. Truth speaker. Black Belt on the mat & the mic. Join 516K+ subscribers for uncensored commentary on politics, conspiracies, and culture.',
  keywords: ['Jesse ON FIRE', 'political commentary', 'MMA analysis', 'conspiracy theories', 'independent media', 'uncensored content'],
  authors: [{ name: 'Jesse ON FIRE' }],
  creator: 'Jesse ON FIRE',
  publisher: 'Jesse ON FIRE',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jesseonfire.com',
    title: 'Jesse ON FIRE | Uncensored Truth & Commentary',
    description: 'Political analyst. MMA lifer. Black Belt on the mat & the mic.',
    siteName: 'Jesse ON FIRE',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jesse ON FIRE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jesse ON FIRE | Uncensored Truth & Commentary',
    description: 'Political analyst. MMA lifer. Black Belt on the mat & the mic.',
    creator: '@realjesseonfire',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  metadataBase: new URL('https://jesseonfire.com'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen font-sans">
        {children}
      </body>
    </html>
  )
}
