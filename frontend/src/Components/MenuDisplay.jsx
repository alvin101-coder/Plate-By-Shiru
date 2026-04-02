import React, { useContext, useState } from 'react'
import { MenuContext } from '../Context/MenuContext'
import { categoryItem } from '../assets/assets'

const MenuDisplay = () => {
  const { products } = useContext(MenuContext)
  const [category, setCategory] = useState('All')

  return (
    <section id="menu" className="px-4 py-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-white">Discover Our Menu</h1>
        <p className="mt-2 text-gray-300">
          From hearty breakfasts to refreshing drinks and savory appetizers — explore our signature dishes.
        </p>
      </div>

      {/* Category Selection */}
      <div className="text-center mb-8 flex flex-wrap justify-center gap-4 border-y border-gray-600 py-6">
        {categoryItem.map((item, index) => (
          <li
            key={index}
            onClick={() => setCategory(item.category_title)}
            className={`cursor-pointer px-6 py-2 list-none rounded-full font-medium text-sm transition-all duration-200 ${
              category === item.category_title
                ? 'bg-amber-500 border-2 border-gray-600 text-black'
                : 'border-2 border-gray-600 text-white'
            }`}
          >
            {item.category_title}
          </li>
        ))}
      </div>

      {/* Menu Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.length > 0 ? (
          products
            .filter(product => category === 'All' || category === product.category)
            .map(product => (
              <div
                key={product._id}
                className="flex items-start gap-4 p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition bg-white/5"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center border-b border-dotted border-gray-500 pb-1">
                    <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                    <span className="text-lg font-bold text-amber-500">Ksh{product.price}</span>
                  </div>
                  <p className="text-sm text-gray-300 mt-2">
                    {product.description || 'A delicious house special prepared with fresh ingredients.'}
                  </p>
                </div>
              </div>
            ))
        ) : (
          <p className="text-center text-gray-400 italic col-span-full">
            No items found in this category.
          </p>
        )}
      </div>
    </section>
  )
}

export default MenuDisplay
