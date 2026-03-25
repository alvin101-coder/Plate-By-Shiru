import React from 'react'
import img1 from '../assets/serv1.jpg'
import img2 from '../assets/serv2.jpg'
import img3 from '../assets/serv3.jpg'
import line from '../assets/line.png'

const Service = () => {
  return (
    <div>
      <div className='flex bg3'>
        {/* first service */}
        <div className='w-1/3'>
          <div className='p-16'>
            <img src={line} alt="" className='-mb-2 w-45 place-self-center'/>
            <h2 className='text-amber-300 text-center text-4xl'>Breakfast</h2>
            <p className='text-center mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugiat repellendus eos qui ab saepe error modi eius perferendis deserunt.</p>
          </div>
          <div>
            <img src={img1} alt="" className='h-160'/>
          </div>
        </div>
        {/* second service */}
        <div className='w-1/3'>
          <div>
            <img src={img3} alt="" className='h-160'/>
          </div>
          <div className='p-16'>
            <img src={line} alt="" className='-mb-2 w-45 place-self-center'/>
            <h2 className='text-amber-300 text-center text-4xl'>Drinks</h2>
            <p className='text-center mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus explicabo earum nam impedit error. Distinctio molestiae laudantium eveniet tenetur veritatis!</p>
          </div>
        </div>
        {/* third service */}
        <div className='w-1/3'>
          <div className='p-16'>
            <img src={line} alt="" className='-mb-2 w-45 place-self-center'/>
            <h2 className='text-amber-300 text-center text-4xl'>Appertizers</h2>
            <p className='text-center mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem error ratione dolorum maxime atque? Voluptatum, doloremque. Deserunt commodi molestias odio.</p>
          </div>
          <div>
            <img src={img2} alt="" className='h-160'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service