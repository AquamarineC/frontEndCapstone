import { useState } from 'react' 


import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import CustomersSay from "./components/CustomersSay" 
import Homepage from "./components/Homepage" 

import './App.css'
import Booking from './components/Booking'
import Chicago from "./components/Chicago"
 

function App() { 

  return ( 
    <>
      <Nav />  
      <Booking />
      <HeroSection />
      <Homepage />  

      <CustomersSay/>
      <Chicago />
      </>
  )
}

export default App


