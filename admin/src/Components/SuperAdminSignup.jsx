import axios from "axios";
import React, { useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SuperAdminSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const OnSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(backendUrl + "/api/admin/create-super-admin", {
        email,
        password,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        setEmail("");
        setPassword("");
        navigate("/"); // redirect to login
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Signup failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-amber-400 via-orange-500 to-red-600">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-xl px-10 py-8 w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Create Super Admin
        </h1>
        <form onSubmit={OnSubmitHandler}>
          <div className="mb-5">
            <p className="text-sm font-semibold text-gray-700 mb-2">Email Address</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <div className="mb-5">
            <p className="text-sm font-semibold text-gray-700 mb-2">Password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-lg font-bold bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-md hover:from-orange-600 hover:to-red-600 transition"
          >
            Create Admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default SuperAdminSignup;
