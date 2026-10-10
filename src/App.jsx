import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import HighLight from './components/HighLight'
import Footer from './components/Footer'
import Testimonials from "./components/Testimonials" 
import About from "./components/About" 

import './App.css'
 

function App() { 

  return (
    <Router>
      <Nav />
        <Switch>
          <Route path='/about'>
            
          </Route>
        </Switch>
      <Route path='/Nav' element={<Nav />} />
      <HeroSection />
      <HighLight />
      <Testimonials/>
      <About />
      {/* <XNAV /> */}
      <Footer />
    </Router>
  )
}

export default App
