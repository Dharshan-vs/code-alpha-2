const express = require("express");
const router = express.Router();
const users = [];
router.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  users.push({ username, email, password });
  res.status(201).json({ message: "User registered successfully!" });
});
module.exports = router;