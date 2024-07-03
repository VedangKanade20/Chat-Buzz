import express from "express";

const app = express();

const port = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(5000, () => {
  console.log(`Server is running on port ${port}...`);
});
