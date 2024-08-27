import express from "express";

import { protect } from "../middlewares/authMiddleware.js";
import { chatOneOnOne, getMessage } from "../controllers/chatControllers.js";

const router = express.Router();

// router.route("/chat").get(protect, getUsersToChatWith);
router.route("/chats/:id").get(protect, getMessage);
router.route("/chats/send/:id").post(protect, chatOneOnOne);

export default router;
