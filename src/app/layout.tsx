import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Superteam Brazil | The Hub for Solana Builders',
  description: 'Join Latin America\'s largest Web3 community. Connect with builders, access grants, find opportunities, and shape the future of crypto in Brazil.',
  keywords: ['Solana', 'Web3', 'Blockchain', 'Brazil', 'Developers', 'Crypto', 'Grants', 'Bounties'],
  openGraph: {
    title: 'Superteam Brazil | The Hub for Solana Builders',
    description: 'Join the premier hub for Solana builders in Brazil.',
    url: 'https://brazil.superteam.fun',
    siteName: 'Superteam Brazil',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}