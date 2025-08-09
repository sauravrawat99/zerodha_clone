const express = require('express');
const router = express.Router();
const User = require('../models/UserSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

// Register route
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if(!username || !password){
    return res.status(400).json({ message: "Username and password required" });
  }

  try {
    const existingUser = await User.findOne({ username });
    if(existingUser){
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword
    });

    await newUser.save();
    res.json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if(!username || !password){
    return res.status(400).json({ message: "Username and password required" });
  }

  try {
    const user = await User.findOne({ username });
    if(!user){
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
