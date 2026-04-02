import React, { useEffect, useState } from 'react'
import Login from './Components/Login'
import Sidebar from './Components/Sidebar'
import AddMenu from './pages/AddMenu'
import ListMenu from './pages/ListMenu'
import AdminTable from './pages/AdminTable'
import Verify from './pages/Verify'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import SuperAdminSignup from "./Components/SuperAdminSignup";
import { Routes , Route, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

export const backendUrl = 'http://localhost:4000'

// ✅ PrivateRoute wrapper using Navigate for clean redirection
const PrivateRoute = ({ token, element }) => {
  return token ? element : <Navigate to="/" replace />;
};

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('adminToken') || "")

  useEffect(() => {
    if (token) {
      localStorage.setItem('adminToken', token)
    }
  }, [token])

  return (
    <div className='bg-white min-h-screen'>
      <ToastContainer />
      {
        !token ? (
          <Routes>
            {/* ✅ login and signup accessible without token */}
            <Route path="/" element={<Login setToken={setToken} />} />
            <Route path="/create-admin" element={<SuperAdminSignup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/verify/:token" element={<Verify />} />
          </Routes>
        ) : (
          <div className='flex w-full'>
            <Sidebar setToken={setToken} />
            <div className='w-[70%] ml-[max(5vw,25px)] my-8 text-black text-base'>
              <Routes>
                <Route path='/add' element={<PrivateRoute token={token} element={<AddMenu token={token} />} />} />
                <Route path='/list' element={<PrivateRoute token={token} element={<ListMenu token={token} />} />} />
                <Route path='/table' element={<PrivateRoute token={token} element={<AdminTable token={token} />} />} />
                {/* ✅ fallback route to redirect unknown paths */}
                <Route path="*" element={<Navigate to="/add" replace />} />
              </Routes>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default App
