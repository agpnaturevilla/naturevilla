const mongoose = require('mongoose');
const slugify = require('slugify');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { 
    type: String, 
    unique: true,
    index: true 
  },
  excerpt: String,
  content: { type: String, required: true },
  featuredImage: String,
  gallery: [String],
  categories: [String],
  tags: [String],
  status: { 
    type: String, 
    enum: ['draft', 'published', 'archived'], 
    default: 'draft' 
  },
  author: {
    name: String,
    email: String
  },
  seo: {
    title: String,
    description: String,
    keywords: [String],
    ogTitle: String,
    ogDescription: String,
    ogImage: String,
    structuredData: mongoose.Schema.Types.Mixed
  },
  publishedAt: Date,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

blogSchema.pre('save', function(next) {
  if (!this.slug) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  this.updatedAt = Date.now();
  next();
});

blogSchema.index({ title: 'text', content: 'text', excerpt: 'text' });

module.exports = mongoose.model('Blog', blogSchema);