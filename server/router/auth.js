const express = require("express");
const router = express.Router();
const User = require("../model/userSchema");
const mongoose = require("mongoose");

router.get("/", (req, res) => {
  res.json("Server Running");
});

router.post("/register", async (req, res) => {
  try {
    const user = new User({ ...req.body });
    await user.save();

    return res
      .status(201)
      .json({ message: "registered successfully", userRegister });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Error", err });
  }
});

router.get("/fetch", async (req, res) => {
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", () => {
    console.log("Connected to MongoDB Atlas");
  });
  try {
    const user = await User.find();

    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Error", err });
  }
});

module.exports = router;
