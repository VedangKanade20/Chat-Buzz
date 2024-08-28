import express from "express";

import { protect } from "../middlewares/authMiddleware.js";
import { chatOneOnOne, getMessage } from "../controllers/chatControllers.js";

const router = express.Router();

// router.route("/chat").get(protect, getUsersToChatWith);
router.route("/:id").get(protect, getMessage);
router.route("/send/:id").post(protect, chatOneOnOne);

export default router;
