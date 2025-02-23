import express from "express";

import { protect } from "../middlewares/authMiddleware.js";
import { chatOneOnOne, getMessage } from "../controllers/chatControllers.js";

const router = express.Router();

// router.route("/chat").get(protect, getUsersToChatWith);
router
  .route("/:id")
  .get(protect, getMessage) // ✅ Fetch messages
  .post(protect, chatOneOnOne); // ✅ Send message (more RESTful)

export default router;
