import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  res.send("This is user");
});

export default router;
