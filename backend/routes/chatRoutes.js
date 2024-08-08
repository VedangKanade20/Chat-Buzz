import express from "express";

import { protect } from "../middlewares/authMiddleware.js";
import { chatOneOnOne } from "../controllers/chatControllers.js";
import { getUsersToChatWith } from "../controllers/userControllers.js";

const router = express.Router();

router.route("/").get(protect, getUsersToChatWith);
router.route("/:userId").get(protect, chatOneOnOne);

export default router;
