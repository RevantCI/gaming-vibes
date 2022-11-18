import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import { AuthContextProvider } from '../stores/authContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Navbar />
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}

export default MyApp
