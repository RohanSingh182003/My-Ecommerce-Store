import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SemiNavbar from '../components/SemiNavbar'

function MyApp({ Component, pageProps }) {
  return (<>
    <Navbar/>
    <SemiNavbar/>
    <Component {...pageProps}/>
    <Footer/>
  </>
  )
}

export default MyApp
