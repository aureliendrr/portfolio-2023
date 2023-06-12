'use client'

import { ThemeProvider } from 'next-themes'
import NavBar from '@/widgets/Navbar'
import './globals.css'
import { Montserrat } from 'next/font/google'
import Footer from '@/widgets/Footer'

const montserrat = Montserrat({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export const metadata = {
  title: 'Aurélien Durier | Portfolio',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${montserrat.className} text-black dark:text-white bg-light-gray dark:bg-black`}>
        <ThemeProvider attribute="class">
          <header>
            <NavBar />
          </header>
          <main className="mx-2 lg:mx-16 xl:mx-48">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
