import { MenuControl } from './components/MenuControl'
import './styles/global.css'
import './styles/menuHeader.css'
import { Poppins } from 'next/font/google'
import React from 'react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '300',
})

export const metadata = {
  title: 'Yougioh-Card',
  description: 'Create for to show the interesting world of Yougioh',
  author: 'Romeu soares de souto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-white`}>
        <MenuControl />
        {children}
      </body>
    </html>
  )
}
