
import RutinaContextProvider from '@/contexts/RutinaContext'
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
  <RutinaContextProvider>
  <Component {...pageProps} />
  </RutinaContextProvider>
  )
}
