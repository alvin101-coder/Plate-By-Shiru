import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Service from './Components/Service'
import MenuDisplay from './Components/MenuDisplay'
import ReservationForm from './Components/ReservationForm'
import Footer from './Components/Footer'
import {ToastContainer} from 'react-toastify'


export const backendUrl = 'https://plate-by-shiru-backend.onrender.com'


const App = () => {
  return (
    <div>
      <ToastContainer />
      {/* <Navbar /> */}
      <Hero />
      <Service />
      <MenuDisplay />
      <ReservationForm />
      <Footer />
    </div>
  )
}

export default App
