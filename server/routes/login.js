// routes/auth.js
const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/user');

const router = express.Router();

// Login route
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  User.findOne({ email }, (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Internal server error' });
    }
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed. User not found.' });
    }
  
    // Compare password
    user.comparePassword(password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ message: 'Internal server error' });
      }
      if (!isMatch) {
        return res.status(401).json({ message: 'Authentication failed. Invalid password.' });
      }
  
      // Create and sign a JWT token
      const token = jwt.sign({ userEmail: email }, config.secretKey, { expiresIn: '1h' });
      res.json({ message: 'Authentication successful', token });
    });
  });
});

module.exports = router;
