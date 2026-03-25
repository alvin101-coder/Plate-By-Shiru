import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({ success: false, message: "Unauthorized User" });
    }

    // ✅ use jwt.verify, not JsonWebTokenError.verify
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // You probably want to check decoded payload against admin credentials
    if (
      decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD
    ) {
      return res.json({ success: false, message: "Unauthorized User" });
    }

    next();
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export default adminAuth;
