import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Verify = () => {
  const { token } = useParams();
  const [status, setStatus] = useState("");

  useEffect(() => {
    const verifyAdmin = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/admin/verify/${token}`);
        if (res.data.success) {
          setStatus("Email verified successfully!");
          toast.success(res.data.message);
        } else {
          setStatus("Verification failed.");
          toast.error(res.data.message);
        }
      } catch {
        setStatus("Error verifying email.");
        toast.error("Error verifying email.");
      }
    };
    verifyAdmin();
  }, [token]);

  return <div className="p-8 text-center">{status}</div>;
};

export default Verify;
