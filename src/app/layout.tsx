
import Footer from '@/components/footer/Footer'
import '../styles/global.css'

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div id='root'>
          <main>
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  )
}

export default RootLayout