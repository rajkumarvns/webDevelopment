import express from "express";
import { aboutPage, contactUs } from "../controllers/public.controller.js";
const router = express.Router();
router.post("/contact-us", contactUs);
router.get("/about", aboutPage);
export default router;
