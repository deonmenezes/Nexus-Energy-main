import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Features from './components/Features'
import Customers from './components/Customers'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'
import Chatbot from './components/Chatbot'
import WhatsAppButton from './components/WhatsAppButton'

import VisionMission from './pages/VisionMission'
import Technology from './pages/Technology'
import Applications from './pages/Applications'
import ShoeNike from './components/Shoe.jsx'
import BackgroundCanvas from './components/Shoe.jsx'

const App = () => {
  return (
    <>
      <ScrollToTop />
      <div className="overflow-x-hidden w-full text-gray-800 bg-white">
        <Navbar />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={
              <>
            
                <Hero />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '100px' }}>
                  <BackgroundCanvas />
                </div>
                <About />
                <VisionMission />
                <Applications />
                <Services />
                <Technology />
                <Features />
                <Customers />
                <Contact />
                <Footer />
              </>
            } />
            <Route path="/technology" element={
              <>
                <Technology />
                <Footer />
              </>
            } />
            <Route path='/about' element={
              <>
                <VisionMission />
                <Footer />
              </>
            } />
            <Route path="/services" element={
              <>
                <Services />
                <Footer />
              </>
            } />
            <Route path="/customers" element={
              <>
                <Customers />
                <Footer />
              </>
            } />
            <Route path="/contact" element={
              <>
                <Contact />
                <Footer />
              </>
            } />
          </Routes>
        </div>
        <Chatbot />
        <WhatsAppButton />
      </div>
    </>
  )
}

export default App;
