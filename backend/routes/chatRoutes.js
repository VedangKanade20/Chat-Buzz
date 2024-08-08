import express from "express";

import { protect } from "../middlewares/authMiddleware.js";
import { chatOneOnOne, getMessage } from "../controllers/chatControllers.js";
import { getUsersToChatWith } from "../controllers/userControllers.js";

const router = express.Router();

router.route("/").get(protect, getUsersToChatWith);
router.route("/:id").post(protect, chatOneOnOne).get(protect, getMessage);

export default router;
