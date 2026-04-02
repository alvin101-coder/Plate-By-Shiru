import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${backendUrl}/api/admin/reset-password/${token}`, { newPassword });
      res.data.success ? toast.success(res.data.message) : toast.error(res.data.message);
    } catch {
      toast.error("Error resetting password.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Reset Password</h1>
      <input
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="Enter new password"
        className="w-full border px-3 py-2 mb-4"
        required
      />
      <button type="submit" className="w-full bg-amber-500 text-white py-2 rounded">
        Reset Password
      </button>
    </form>
  );
};

export default ResetPassword;
