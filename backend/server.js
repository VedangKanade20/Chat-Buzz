import dotenv from "dotenv";
import express from "express";

import users from "./data/users.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running, authentication soon.....");
});

app.get("/api/chats", (req, res) => {
  res.json(users);
});

app.get("/api/chats/:id", (req, res) => {
  const user = users.find((user) => user._id === req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `Server is running on port ${process.env.NODE_ENV} mode on ${PORT}...`
  );
});
