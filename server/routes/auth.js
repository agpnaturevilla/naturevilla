const express = require('express');
const { body } = require('express-validator');
const { generateToken, authLimiter, sanitizeUser, verifyToken } = require('../middleware/auth');
const { 
  handleValidationErrors, 
  validateEmail, 
  validatePassword 
} = require('../middleware/security');
const User = require('../models/User');

const router = express.Router();

// Login endpoint
router.post('/login', 
  authLimiter,
  validateEmail,
  body('password').notEmpty().withMessage('Password is required'),
  handleValidationErrors,
  async (req, res) => {
    try {
      const { email, password } = req.body;
      
      const user = await User.findOne({ email, isActive: true });
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const isValidPassword = await user.comparePassword(password);
      if (!isValidPassword) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      // Update last login
      user.lastLogin = new Date();
      await user.save();

      const token = generateToken(user._id);
      
      res.json({
        token,
        user: sanitizeUser(user)
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }
);

// Register endpoint (for initial setup)
router.post('/register',
  authLimiter,
  validateEmail,
  validatePassword,
  body('name').trim().isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters'),
  handleValidationErrors,
  async (req, res) => {
    try {
      const { email, password, name } = req.body;
      
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
      }

      // Check if this is the first user (make them admin)
      const userCount = await User.countDocuments();
      const role = userCount === 0 ? 'admin' : 'editor';

      const user = new User({
        email,
        password,
        name,
        role
      });

      await user.save();

      const token = generateToken(user._id);
      
      res.status(201).json({
        token,
        user: sanitizeUser(user)
      });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }
);

// Verify token endpoint
router.get('/verify', verifyToken, (req, res) => {
  res.json({
    user: sanitizeUser(req.user)
  });
});

module.exports = router;