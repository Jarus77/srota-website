import type { Metadata } from 'next'
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Srota — Voice Dictation for Mac',
  description: 'On-device voice transcription that works in any app. 100% local, Hinglish support, fn-key trigger. Free for macOS.',
  icons: {
    icon: '/srota.png',
    apple: '/srota.png',
  },
  openGraph: {
    title: 'Srota — Speak. It types.',
    description: 'On-device voice transcription for every app. No audio leaves your Mac.',
    images: ['/screenshot-dashboard.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}>
        {children}
      </body>
    </html>
  )
}
