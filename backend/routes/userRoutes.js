import express from "express";

import {
  authUser,
  getOtherUsers,
  getUserProfile,
  registerUser,
} from "../controllers/userControllers.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/usersList").get(protect, getOtherUsers);
router.route("/login").post(authUser);
router.route("/register").post(registerUser);
router.route("/profile").get(protect, getUserProfile);

export default router;
