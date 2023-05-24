import '../styles/globals.css'
import '../styles/misc.css'
import '../styles/header.css'
import '../styles/sorting.css'
import '../styles/footer.css'
import { Inter } from 'next/font/google'
import ProviderForTheme from '@/components/theme/themeProvider'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import SortProvider from '@/contexts/sortingContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sorting Visualizer | W R',
  description: 'A Data Structure and Algorithm Sorting visualizer website',
  keywords:[''] 
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderForTheme>
          
          <SortProvider>
            <Header/>
            {children}
          </SortProvider>
        </ProviderForTheme>
        <Footer/>
        
        </body>
    </html>
  )
}
