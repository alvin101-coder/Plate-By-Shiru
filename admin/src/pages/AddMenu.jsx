import React, { useState } from 'react'
import upload_img from '../assets/upload_img.jpg'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const AddMenu = ({ token }) => {
  const [image, setImage] = useState(null)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [Category, setCategory] = useState("All")

  const OnSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData()
      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("category", Category)
      if (image) formData.append("image", image)

      const response = await axios.post(`${backendUrl}/api/product/add`, formData, { headers: { token } })
      if (response.data.success) {
        toast.success(response.data.message)
        setName("")
        setDescription("")
        setPrice("")
        setImage(null)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <div className="flex justify-center items-start min-h-screen bg-gradient-to-br from-gray-100 via-amber-50 to-orange-100 p-4 sm:p-10">
      <form
        onSubmit={OnSubmitHandler}
        className="bg-white shadow-xl rounded-xl p-6 sm:p-8 w-full max-w-lg sm:max-w-2xl flex flex-col gap-6"
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-800 mb-4">
          Add New Product
        </h2>

        {/* Upload Image */}
        <div>
          <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">Upload Image</p>
          <label
            htmlFor="image"
            className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-amber-500 transition"
          >
            <img
              src={!image ? upload_img : URL.createObjectURL(image)}
              alt=""
              className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-md"
            />
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
            />
          </label>
        </div>

        {/* Product Name */}
        <div>
          <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">Product Name</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            type="text"
            placeholder="Enter product name"
            required
          />
        </div>

        {/* Product Description */}
        <div>
          <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">Product Description</p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Enter product description"
            rows="3"
            required
          />
        </div>

        {/* Category & Price */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1">
            <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">Product Category</p>
            <select
              value={Category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="All">All</option>
              <option value="Spaghetti">Spaghetti</option>
              <option value="Pizza">Pizza</option>
              <option value="Rice">Rice</option>
              <option value="Noodles">Noodles</option>
              <option value="Chicken">Chicken</option>
              <option value="Drinks">Drinks</option>
            </select>
          </div>

          <div>
            <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">Product Price</p>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full sm:w-32 p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              type="number"
              placeholder="40"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 w-full sm:w-auto px-6 py-2 sm:py-3 text-base sm:text-lg font-bold bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-md hover:from-orange-600 hover:to-red-600 transition"
        >
          Add Menu
        </button>
      </form>
    </div>
  )
}

export default AddMenu
