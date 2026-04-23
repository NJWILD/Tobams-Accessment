import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: 'Tobams Group – Training and Development',
  description:
    'Comprehensive training and development programs designed to enhance skills, broaden knowledge, and propel careers forward.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} font-nunito antialiased`}>{children}</body>
    </html>
  )
}
