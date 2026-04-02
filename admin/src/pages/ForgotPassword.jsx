import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${backendUrl}/api/admin/request-password-reset`, { email });
      res.data.success ? toast.success(res.data.message) : toast.error(res.data.message);
    } catch {
      toast.error("Error sending reset email.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Forgot Password</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full border px-3 py-2 mb-4"
        required
      />
      <button type="submit" className="w-full bg-amber-500 text-white py-2 rounded">
        Send Reset Link
      </button>
    </form>
  );
};

export default ForgotPassword;
