import Footer from '@/components/footer/Footer'
import '../styles/global.css'
import { ReactNode } from 'react'
import Header from '@/components/header/Header'

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <main>
            <Header />
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
