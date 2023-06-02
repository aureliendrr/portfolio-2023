'use client'

import NavBar from '@/widgets/Navbar'
import './globals.css'
import { Montserrat } from 'next/font/google'
import { useEffect, useRef } from 'react'

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
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.className} bg-light-gray`}>
        <header>
          <NavBar />
        </header>
        <main className="mx-48">
          {children}
        </main>
      </body>
    </html>
  )
}
