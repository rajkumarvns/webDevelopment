import dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("default get API Hit first");

  res.json({
    message: "welcome once again first",
  });
});

app.post("/", (req, res) => {
  console.log("default get API Hit");

  res.json({
    message: "welcome once again",
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("server start on port", port);
});
