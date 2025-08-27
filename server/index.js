const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const { helmetConfig, apiLimiter } = require('./middleware/security');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/agp-nature-villa';

// Security middleware
app.use(helmetConfig);
app.use(apiLimiter);

// CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://agpnaturevilla.com', 'https://www.agpnaturevilla.com']
    : ['http://localhost:3000'],
  credentials: true
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Static files for uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Database connection
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/pages', require('./routes/pages'));
app.use('/api/blog', require('./routes/blog'));
app.use('/api/media', require('./routes/media'));
app.use('/api/admin', require('./routes/admin'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// 404 handler
app.use('/api/*', (req, res) => {
  res.status(404).json({ error: 'API endpoint not found' });
});

// Global error handler
app.use((error, req, res, next) => {
  console.error('Server error:', error);
  
  if (error.name === 'ValidationError') {
    return res.status(400).json({
      error: 'Validation error',
      details: Object.values(error.errors).map(err => err.message)
    });
  }
  
  if (error.name === 'CastError') {
    return res.status(400).json({ error: 'Invalid ID format' });
  }
  
  if (error.code === 11000) {
    return res.status(400).json({ error: 'Duplicate field value' });
  }
  
  res.status(500).json({ 
    error: 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});