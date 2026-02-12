import Footer from '@/components/footer/Footer'
import '../styles/global.css'
import Menu from '@/components/menu/Menu'
import { ReactNode } from 'react'

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <main>
            <Menu />
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
