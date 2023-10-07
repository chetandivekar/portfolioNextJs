import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400','500','600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],})

export const metadata: Metadata = {
  title: 'Chetan Divekar',
  description: 'Chetan Divekar Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
