// middleware/adminAuth.js
import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) return res.json({ success: false, message: "Unauthorized User" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded; // attach admin info
    next();
  } catch (error) {
    return res.json({ success: false, message: "Unauthorized User" });
  }
};

export default adminAuth;
