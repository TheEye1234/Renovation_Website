
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Portfoli from "./components/Portfoli"
import Reviews from "./components/Reviews"
import Services from "./components/Services"


const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-800 antialiased">
      <Navbar/>
      <Hero/>
      <Services/>
      <Portfoli/>
      <About/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App