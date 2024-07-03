const express = require("express");
const users = require("./data/users");
const app = express();

const port = 8080;

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
