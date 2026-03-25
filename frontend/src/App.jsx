import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Service from './Components/Service'
import MenuDisplay from './Components/MenuDisplay'
import ReservationForm from './Components/ReservationForm'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
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