import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const AdminTable = () => {
  const [reservations, setReservations] = useState([])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${backendUrl}/api/reservations/delete/${id}`)
      toast.success('Reservation removed')
      setReservations(prev => prev.filter(r => r._id !== id))
    } catch (error) {
      console.log("Error deleting reservation")
      toast.error("Error deleting reservation")
    }
  }

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(backendUrl + '/api/reservations/get')
        setReservations(response.data.reservations || [])
      } catch (error) {
        console.log("Error fetching reservations")
        toast.error("Error fetching reservations")
      }
    }
    fetchReservations()
  }, [])

  return (
    <div className="flex justify-center items-start min-h-screen bg-gradient-to-br from-gray-100 via-amber-50 to-orange-100 p-4 sm:p-10">
      <div className="bg-white shadow-xl rounded-xl p-4 sm:p-6 w-full max-w-full sm:max-w-5xl">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-800 mb-6 border-b-2 border-amber-500 pb-2 text-center">
          Restaurant Reservations
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm sm:text-base">
            <thead>
              <tr className="bg-amber-500 text-white">
                <th className="p-2 sm:p-3 text-left">Name</th>
                <th className="p-2 sm:p-3 text-left hidden sm:table-cell">Email</th>
                <th className="p-2 sm:p-3 text-left hidden sm:table-cell">Phone</th>
                <th className="p-2 sm:p-3 text-left">Date</th>
                <th className="p-2 sm:p-3 text-left hidden sm:table-cell">Time</th>
                <th className="p-2 sm:p-3 text-left hidden sm:table-cell">Guests</th>
                <th className="p-2 sm:p-3 text-center">Delete</th>
              </tr>
            </thead>

            <tbody>
              {reservations.length === 0 ? (
                <tr>
                  <td colSpan="7" className="p-4 sm:p-6 text-center text-gray-600">
                    No reservations found
                  </td>
                </tr>
              ) : (
                reservations.map((res, index) => (
                  <tr
                    key={res._id}
                    className={`border-b ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-amber-100 transition`}
                  >
                    <td className="p-2 sm:p-3">{res.name}</td>
                    <td className="p-2 sm:p-3 hidden sm:table-cell">{res.email}</td>
                    <td className="p-2 sm:p-3 hidden sm:table-cell">{res.phone}</td>
                    <td className="p-2 sm:p-3">{res.date}</td>
                    <td className="p-2 sm:p-3 hidden sm:table-cell">{res.time}</td>
                    <td className="p-2 sm:p-3 hidden sm:table-cell">{res.guests}</td>
                    <td className="p-2 sm:p-3 text-center">
                      <button
                        onClick={() => handleDelete(res._id)}
                        className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded-md hover:bg-red-600 transition text-xs sm:text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminTable
