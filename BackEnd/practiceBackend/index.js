import dotenv from "dotenv";
dotenv.config();

import express from "express";
import AuthRouter from "./src/routers/auth.route.js";
import PublicRouter from "./src/routers/public.route.js";
import connectDB from "./src/config/dbConnection.config.js";
const app = express();
app.use(express.json());
app.use("/auth", AuthRouter);
app.use("/public", PublicRouter);

app.get("/", (req, res) => {
  console.log("default get API Hit first");

  res.json({
    message: "welcome once again first",
  });
});
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("server start on port", port);
  connectDB();
});
