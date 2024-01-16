import { AnimatePresence } from 'framer-motion'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps, router }: AppProps) {
  <AnimatePresence mode="wait">
    return <Component key={router.asPath} {...pageProps} />
  </AnimatePresence>
}
