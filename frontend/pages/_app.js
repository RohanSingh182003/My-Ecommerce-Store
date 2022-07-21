import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SemiNavbar from '../components/SemiNavbar'

function MyApp( { Component, pageProps } ) {
  return ( <>
    <NextNProgress
      color="#0f7a4c"
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
      showOnShallow={true}
    />
    <Navbar />
    <SemiNavbar />
    <Component {...pageProps} />
    <Footer />
  </>
  )
}

export default MyApp
