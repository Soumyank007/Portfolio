import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import { store } from '@/store/store.js';
import { Provider } from 'react-redux';
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router';

const monserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont'
})

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/x-icon" sizes="any" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className={`${monserrat.variable} font-mont dark:bg-dark w-full min-h-screen`}>
      <Provider store={store}>
        <NavBar />
        <AnimatePresence mode='wait' >
        <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </Provider>
      </main>
    </>
  )
}
