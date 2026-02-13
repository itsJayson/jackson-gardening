import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Residential from './components/Residential'
import Commercial from './components/Commercial'
import ServiceAreas from './components/ServiceAreas'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import BeforeAfter from './components/BeforeAfter'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Residential />
        <Commercial />
        <ServiceAreas />
        <WhyChooseUs />
        <Gallery />
        <BeforeAfter />
        <Testimonials />
        <Contact />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
