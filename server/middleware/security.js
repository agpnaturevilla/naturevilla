const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');

// General API rate limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Strict rate limiting for sensitive operations
const strictLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 requests per windowMs
  message: {
    error: 'Too many sensitive requests, please try again later.'
  },
});

// Helmet configuration for security headers
const helmetConfig = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
      fontSrc: ["'self'"],
      connectSrc: ["'self'"],
      frameSrc: ["'none'"],
      objectSrc: ["'none'"],
    },
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
});

// Input validation middleware
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: 'Validation failed',
      details: errors.array()
    });
  }
  next();
};

// Common validation rules
const validateEmail = body('email')
  .isEmail()
  .normalizeEmail()
  .withMessage('Please provide a valid email address');

const validatePassword = body('password')
  .isLength({ min: 8 })
  .withMessage('Password must be at least 8 characters long')
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
  .withMessage('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character');

const validateTitle = body('title')
  .trim()
  .isLength({ min: 1, max: 200 })
  .withMessage('Title must be between 1 and 200 characters');

const validateSlug = body('slug')
  .optional()
  .trim()
  .matches(/^[a-z0-9-]+$/)
  .withMessage('Slug can only contain lowercase letters, numbers, and hyphens');

const validateContent = body('content')
  .trim()
  .isLength({ min: 1 })
  .withMessage('Content is required');

// Sanitize HTML content
const sanitizeHtml = (req, res, next) => {
  if (req.body.content) {
    // Basic HTML sanitization - in production, use a library like DOMPurify
    req.body.content = req.body.content
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=\s*"[^"]*"/gi, '')
      .replace(/on\w+\s*=\s*'[^']*'/gi, '');
  }
  next();
};

module.exports = {
  apiLimiter,
  strictLimiter,
  helmetConfig,
  handleValidationErrors,
  validateEmail,
  validatePassword,
  validateTitle,
  validateSlug,
  validateContent,
  sanitizeHtml
};