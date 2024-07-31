import express from "express";

import { protect } from "../middlewares/authMiddleware.js";
import { createChat } from "../controllers/chatControllers.js";

const router = express.Router();

router.route("/chat").post(protect, createChat);

export default router;
