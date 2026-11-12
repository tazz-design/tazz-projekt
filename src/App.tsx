import { Routes, Route } from 'react-router-dom'
import { ResponsiveProvider } from './context/ResponsiveContext'
import FlameIntro from './components/FlameIntro'
import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import TrustBand from './components/TrustBand'
import ServicesSection from './components/ServicesSection'
import AboutSection from './components/AboutSection'
import GallerySection from './components/GallerySection'
import VideoSection from './components/VideoSection'
import FAQSection from './components/FAQSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBand />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <VideoSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </>
  )
}

function App() {
  return (
    <ResponsiveProvider>
      <FlameIntro />
      <Nav />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </ResponsiveProvider>
  )
}

export default App
