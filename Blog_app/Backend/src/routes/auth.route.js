import express from "express";
import authController from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", authController.registerUser);
router.get("/test", (req, res) => {
  res.json({
    message: "Test reoute",
    cookies: req.cookies,
  });
});

export default router;
