const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  originalName: { type: String, required: true },
  mimeType: { type: String, required: true },
  size: { type: Number, required: true },
  path: { type: String, required: true },
  url: { type: String, required: true },
  alt: String,
  caption: String,
  category: { 
    type: String, 
    enum: ['outside-villa', 'inside-villa', 'pool', 'garden-rooms', 'blog', 'other'],
    default: 'other'
  },
  dimensions: {
    width: Number,
    height: Number
  },
  thumbnails: {
    small: String,    // 150x150
    medium: String,   // 300x300
    large: String,    // 800x600
    webp: String,     // WebP version
    avif: String      // AVIF version
  },
  metadata: mongoose.Schema.Types.Mixed,
  uploadedBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  },
  usedIn: [{
    type: { type: String, enum: ['page', 'blog'] },
    id: mongoose.Schema.Types.ObjectId
  }],
  createdAt: { type: Date, default: Date.now }
});

mediaSchema.index({ category: 1, createdAt: -1 });
mediaSchema.index({ filename: 1 });

module.exports = mongoose.model('Media', mediaSchema);