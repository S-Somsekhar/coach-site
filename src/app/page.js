import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Testimonials from "./components/Testimonials"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}
