import Admin from "../models/adminModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// ✅ Create super admin (only one allowed)
const createSuperAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if ANY admin already exists
    const existingAdmin = await Admin.findOne({});
    if (existingAdmin) {
      return res.json({ success: false, message: "Super admin already exists. Only one allowed." });
    }

    const hashed = await bcrypt.hash(password, 10);
    const admin = new Admin({ email, password: hashed });
    await admin.save();

    res.json({ success: true, message: "Super admin created successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ✅ Login super admin
const loginSuperAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) return res.json({ success: false, message: "Admin not found" });

    const match = await bcrypt.compare(password, admin.password);
    if (!match) return res.json({ success: false, message: "Invalid credentials" });

    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ success: true, token, message: "Login successful" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export { createSuperAdmin, loginSuperAdmin };
