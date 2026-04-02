import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoIosLogOut, IoMdAddCircleOutline } from 'react-icons/io'
import { MdFormatListBulletedAdd } from "react-icons/md";
import { PiListBulletsFill } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = ({ setToken }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("adminToken");
    navigate("/");
  };

  return (
    <>
      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between bg-amber-500 p-4 text-white">
        <h2 className="text-lg font-bold">Plate By Shiru</h2>
        <button onClick={() => setOpen(!open)}>
          <GiHamburgerMenu className="text-2xl" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          open ? "block" : "hidden"
        } md:flex flex-col w-full md:w-[22%] min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 shadow-lg`}
      >
        <div className="mt-6 px-6 hidden md:block">
          <h2 className="text-xl sm:text-2xl lg:text-[32px] font-extrabold bg-gradient-to-r from-amber-500 to-red-600 bg-clip-text text-transparent">
            Plate By Shiru
          </h2>
        </div>

        <div className="flex flex-col gap-2 pt-8">
          <NavLink
            to="/add"
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3 rounded-md transition-all duration-200 ${
                isActive
                  ? "bg-amber-600 text-white"
                  : "text-gray-700 hover:bg-amber-500 hover:text-white"
              }`
            }
          >
            <IoMdAddCircleOutline className="text-[28px]" />
            <p className="hidden sm:block text-base">Add Product</p>
          </NavLink>

          <NavLink
            to="/list"
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3 rounded-md transition-all duration-200 ${
                isActive
                  ? "bg-amber-600 text-white"
                  : "text-gray-700 hover:bg-amber-500 hover:text-white"
              }`
            }
          >
            <MdFormatListBulletedAdd className="text-[28px]" />
            <p className="hidden sm:block text-base">List Product</p>
          </NavLink>

          <NavLink
            to="/table"
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3 rounded-md transition-all duration-200 ${
                isActive
                  ? "bg-amber-600 text-white"
                  : "text-gray-700 hover:bg-amber-500 hover:text-white"
              }`
            }
          >
            <PiListBulletsFill className="text-[28px]" />
            <p className="hidden sm:block text-base">Reservations</p>
          </NavLink>

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-6 py-3 rounded-md text-gray-700 hover:bg-red-500 hover:text-white transition-all duration-200"
          >
            <IoIosLogOut className="text-[28px]" />
            <p className="hidden sm:block text-base">Logout</p>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
