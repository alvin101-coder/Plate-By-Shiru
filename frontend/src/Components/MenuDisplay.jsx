import React, { useContext, useState } from 'react'
import { MenuContext } from '../Context/MenuContext'
import { categoryItem } from '../assets/assets'

const MenuDisplay = () => {
  const {products} =  useContext(MenuContext)
  const [category, setCategory] = useState('All')

  return (
    <div className='px-4 py-12 max-w-6xl mx-auto'>
      {/* header */}
      <div  className='text-center mb-6'>
        <h1 className='text-4xl font-bold text-white'>Discover Our Menu</h1>

      </div>
      {/* category selection */}
      <div className='text-center mb-8 flex gap-8 border-y  border-gray-600 py-6'>
        {categoryItem.map((item, index) => (
          <li key={index}
          onClick={() => setCategory((prev) => prev === item.category_title ? "All" : item.category_title)}
          className={`cursor-pointer px-10 py-3 list-none rounded-full font-medium text-sm transition-all duration-200 ${category === item.category_title ? "bg-amber-500 border-2 border-gray-600" : "border-2 border-gray-600"}`}
          >{item.category_title}</li>
        ))}
      </div>

      {/* menu display */}
      <div className='grid grid-cols-2 gap-8'>
        {products.length > 0 ? (
          products.filter((product) => category === "All" || category === product.category).map((product, index) => (
            <div key={product._id} className={`flex items-start gap-4 border-b border-gray-700 ${index % 2 === 0 ? "md:pr-10" : "md:pl-10"}`}>
              <img src={product.image} alt='' className='w-30 h-30 object-cover rounded-full'/>
              <div className='flex-1'>
                <div className='flex justify-between items-center '>
                  <h3 className='text-lg font-semibold'>{product.name} </h3>
                  <span className='text-lg font-semibold text-amber-500 relative ml-4'>
                    <span className="before:content-[''] before:absolute before:w-10 before:broader-b before:dotted before:border-gray-400 before:-left-12 before:top-1/2  before:transform before:translate-y-1/2 ">
                    </span>
                    Ksh{product.price}
                  </span>
                </div>
                <p className='text-sm text-gray-500 mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, repellat.</p>
              </div>
            </div>
          ))
        ) : (
          <p className='text-sm col-span-2 text-gray-500'>Nothing in Menu </p>
        )}
      </div>

    </div>
  )
}

export default MenuDisplay