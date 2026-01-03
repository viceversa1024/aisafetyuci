import type { Metadata } from 'next'

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
      <body>{children}</body>
    </html>
  )
}
