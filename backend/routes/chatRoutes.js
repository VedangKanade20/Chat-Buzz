import express from "express";

import { protect } from "../middlewares/authMiddleware.js";
import { chatOneOnOne, createChat } from "../controllers/chatControllers.js";

const router = express.Router();

// router.route("/chat").post(protect, createChat);
router.route("/chat/:id").get(protect, chatOneOnOne);

export default router;
