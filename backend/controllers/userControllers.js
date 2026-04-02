// controllers/adminControllers.js
import jwt from "jsonwebtoken";

const loginSuperAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) return res.json({ success: false, message: "Admin not found" });

    const match = await bcrypt.compare(password, admin.password);
    if (!match) return res.json({ success: false, message: "Invalid credentials" });

    const token = jwt.sign({ id: admin._id, email: admin.email }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.json({ success: true, token, message: "Login successful" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export { loginSuperAdmin };
