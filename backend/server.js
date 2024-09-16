import colors from "colors";
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";
// import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import cors from "cors";

dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5173", // Replace with your Netlify URL
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Allow cookies if needed
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions)); // Enable CORS for all routes and origins

app.get("/", (req, res) => {
  res.send("API is running, authentication soon.....");
});

app.use("/api/users", userRoutes);
app.use("/api/chats", chatRoutes);

// app.use(notFound);
// app.use(errorHandler);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `Server is running on port ${process.env.NODE_ENV} mode on ${PORT}...`
      .yellow.bold
  );
});
