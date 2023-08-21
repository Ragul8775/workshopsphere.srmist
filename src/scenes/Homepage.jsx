import React from 'react'
import Contributors from '../components/Contributors'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
const Homepage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <div id="members">
        <Contributors />
      </div>
        <Footer />
    </div>
  )
}

export default Homepage