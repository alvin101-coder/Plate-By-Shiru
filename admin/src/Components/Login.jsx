import axios from "axios";
import React, { useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const OnSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(backendUrl + "/api/admin/login", { email, password });
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("adminToken", response.data.token);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-amber-400 via-orange-500 to-red-600">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-xl px-10 py-8 w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Admin Login
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
            Login
          </button>
        </form>

        {/* Forgot Password link */}
        <p className="text-sm text-gray-700 mt-4 text-center">
          Forgot your password?{" "}
          <Link to="/forgot-password" className="text-amber-600 hover:underline font-semibold">
            Reset here
          </Link>
        </p>

        {/* Create Admin link */}
        <p className="text-sm text-gray-700 mt-2 text-center">
          Need a super admin?{" "}
          <Link to="/create-admin" className="text-amber-600 hover:underline font-semibold">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
