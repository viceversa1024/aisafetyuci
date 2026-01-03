import type { Metadata } from 'next'
import { Lusitana } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'

const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'AI Safety UCI',
  description: 'AI Safety at UC Irvine',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lusitana.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
