import colors from "colors";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";
// import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors()); // Enable CORS for all routes and origins

// OR to restrict it to a specific origin
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

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
