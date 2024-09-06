import React from 'react'

import Header from './components/Header'
import Hero from './sections/Hero'
import WhyChoose from './sections/WhyChoose'
import Pricing from './sections/Pricing'
import Gallery from './sections/Gallery'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <WhyChoose />
      <Pricing />
      <Gallery />
      <Footer />
    </>
  )
}

export default App