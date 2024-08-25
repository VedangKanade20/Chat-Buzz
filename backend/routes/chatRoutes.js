import express from "express";

import { protect } from "../middlewares/authMiddleware.js";
import { chatOneOnOne, getMessage } from "../controllers/chatControllers.js";

const router = express.Router();

// router.route("/chat").get(protect, getUsersToChatWith);
router.route("/chats/:id").post(protect, chatOneOnOne).get(protect, getMessage);

export default router;
