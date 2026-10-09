import { useState } from 'react'

import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import HighLight from './components/HighLight'
import Footer from './components/Footer'
import Testimonials from "./components/Testimonials"

import './App.css'
 

function App() { 

  return (
    <>
    <Nav />
    <HeroSection />
    <HighLight />
    <Testimonials/>
    {/* <About /> */}
    <Footer />
    </>
  )
}

export default App
