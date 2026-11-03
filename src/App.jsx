import { useState } from 'react' 
import { Route, Routes } from 'react-router'

import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import CustomersSay from "./components/CustomersSay" 
import Homepage from "./components/Homepage"  
import BookingForm from './components/BookingForm'
import Chicago from "./components/Chicago"
import BookingPage from './components/BookingPage'
 

function App() { 

  return ( 
    <div className='mainContainer'> 
      <Nav />  
        
      <HeroSection />
      

      <CustomersSay/>
        <Routes>

            <Route path='/' element={<Homepage/>}/>
            <Route path="/bookingpage" element={<BookingPage/>} />
          </Routes>
      <Chicago />
        
    </div>
  )
}

export default App


