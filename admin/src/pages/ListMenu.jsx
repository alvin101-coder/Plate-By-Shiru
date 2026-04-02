import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import { MdDeleteForever } from 'react-icons/md'

const ListMenu = ({ token }) => {
  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list', { headers: { token } })
      if (response.data.success) {
        setList(response.data.products)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${backendUrl}/api/product/delete/${id}`, {
        headers: { token }
      })
      if (response.data.success) {
        toast.success("Product deleted")
        setList(prev => prev.filter(item => item._id !== id))
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error("Error deleting product")
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className="flex justify-center items-start min-h-screen bg-gradient-to-br from-gray-100 via-amber-50 to-orange-100 p-4 sm:p-10">
      <div className="bg-white shadow-xl rounded-xl p-4 sm:p-6 w-full max-w-full sm:max-w-4xl">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-800 mb-6 border-b-2 border-amber-500 pb-2">
          Menu List
        </h2>

        {/* Table Header */}
        <div className="grid grid-cols-2 sm:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center p-3 bg-amber-50 text-sm sm:text-lg font-semibold rounded-t-md">
          <span>Image</span>
          <span>Name</span>
          <span className="hidden sm:block">Category</span>
          <span className="hidden sm:block">Price</span>
          <span className="hidden sm:block text-center">Action</span>
        </div>

        {/* Table Rows */}
        {list.map((item, index) => (
          <div
            key={item._id}
            className={`grid grid-cols-2 sm:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center p-3 text-sm sm:text-lg border-b ${
              index % 2 === 0 ? "bg-gray-50" : "bg-white"
            } hover:bg-amber-100 transition`}
          >
            <img
              src={item.image}
              alt=""
              className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] object-cover rounded-md"
            />
            <p>{item.name}</p>
            <p className="hidden sm:block">{item.category}</p>
            <p className="hidden sm:block">Ksh.{item.price}</p>
            <MdDeleteForever
              onClick={() => handleDelete(item._id)}
              className="hidden sm:block mx-auto text-[24px] sm:text-[28px] cursor-pointer text-red-600 hover:text-red-800 transition"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListMenu
