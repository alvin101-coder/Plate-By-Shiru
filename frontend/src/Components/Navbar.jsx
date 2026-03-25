import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-8 te'>
      <div>
        <h2 className='font-bold text-2xl'>Plate By Shiru</h2>
      </div>
      <div>
        <ul className='flex justify-between gap-8'>
          <li className='font-bold text-lg cursor-pointer'>HOME</li>
          <li className='font-bold text-lg cursor-pointer'>RESEVATION</li>
          <li className='font-bold text-lg cursor-pointer'>MENU</li>
          <li className='font-bold text-lg cursor-pointer'>CONTACT</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar