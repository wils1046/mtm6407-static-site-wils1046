import './globals.css'
import { Inter } from 'next/font/google'
import { PortfolioProvider } from './context/PortfolioContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Joseph Patrick Wilson - UI/UX Designer & QA Engineer',
  description: 'Joseph Patrick Wilson - UI/UX Designer and Quality Assurance Engineer crafting digital experiences in Ottawa, Ontario',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PortfolioProvider>
          {children}
        </PortfolioProvider>
      </body>
    </html>
  )
}
