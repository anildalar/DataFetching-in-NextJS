import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import './globals.css'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LeftAside from '@/components/LeftAside'
import RightAside from '@/components/RightAside'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        <Header />
        <main class="row">
          <LeftAside />
          {children}
          <RightAside />
        </main>
        <Footer />
        
      </body>
    </html>
  )
}
