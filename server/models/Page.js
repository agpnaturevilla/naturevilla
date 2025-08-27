const mongoose = require('mongoose');

const seoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  keywords: [String],
  ogTitle: String,
  ogDescription: String,
  ogImage: String,
  structuredData: mongoose.Schema.Types.Mixed, // JSON-LD schema
  canonicalUrl: String,
  noindex: { type: Boolean, default: false },
  nofollow: { type: Boolean, default: false }
});

const contentBlockSchema = new mongoose.Schema({
  type: { 
    type: String, 
    enum: ['hero', 'text', 'image', 'gallery', 'features', 'rooms', 'contact', 'custom'],
    required: true 
  },
  order: { type: Number, required: true },
  content: mongoose.Schema.Types.Mixed, // Flexible content structure
  settings: mongoose.Schema.Types.Mixed // Block-specific settings
});

const pageSchema = new mongoose.Schema({
  slug: { 
    type: String, 
    required: true, 
    unique: true,
    index: true 
  },
  title: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['draft', 'published', 'archived'], 
    default: 'draft' 
  },
  seo: seoSchema,
  contentBlocks: [contentBlockSchema],
  template: { 
    type: String, 
    enum: ['default', 'home', 'villa', 'rooms', 'contact', 'blog'],
    default: 'default' 
  },
  featuredImage: String,
  lastModified: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now }
});

pageSchema.pre('save', function(next) {
  this.lastModified = Date.now();
  next();
});

module.exports = mongoose.model('Page', pageSchema);