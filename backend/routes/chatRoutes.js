import express from "express";

import { protect } from "../middlewares/authMiddleware.js";
import { chatOneOnOne } from "../controllers/chatControllers.js";

const router = express.Router();

router.route("/chat/:id").get(protect, chatOneOnOne);

export default router;
