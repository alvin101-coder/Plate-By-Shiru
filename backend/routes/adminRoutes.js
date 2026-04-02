import express from "express";
import { createSuperAdmin, loginSuperAdmin } from "../controllers/adminControllers.js";

const router = express.Router();

// one-time use to seed super admin
router.post("/create-super-admin", createSuperAdmin);

// login super admin
router.post("/login", loginSuperAdmin);

export default router;
