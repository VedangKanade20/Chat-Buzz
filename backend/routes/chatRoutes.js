import express from "express";

import { protect } from "../middlewares/authMiddleware.js";
import { chatOneOnOne } from "../controllers/chatControllers.js";

const router = express.Router();

router.route("/chats").get(protect, chatOneOnOne);

export default router;
