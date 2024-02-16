import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import { store } from '@/store/store.js';
import { Provider } from 'react-redux';

const monserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont'
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${monserrat.variable} font-mont dark:bg-dark w-full min-h-screen`}>
      <Provider store={store}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
      </main>
    </>
  )
}
