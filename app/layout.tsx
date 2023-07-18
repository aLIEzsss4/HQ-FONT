import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })

const nextBookFont = localFont({
  src: './NEXT-Book-Regular.otf',
  display: 'swap',
  variable: '--font-next-book',
})

export const metadata: Metadata = {
  title: 'HQ-TEST',
  description: 'Fimga UI TEST',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${nextBookFont.variable}`}>{children}</body>
    </html>
  )
}
