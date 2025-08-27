const express = require('express');
const { verifyToken, requireRole } = require('../middleware/auth');
const { 
  strictLimiter,
  validateTitle, 
  validateContent,
  handleValidationErrors,
  sanitizeHtml 
} = require('../middleware/security');
const { body } = require('express-validator');
const Blog = require('../models/Blog');
const slugify = require('slugify');

const router = express.Router();

// Get all published blog posts (public)
router.get('/', async (req, res) => {
  try {
    const { 
      category, 
      tag, 
      limit = 10, 
      offset = 0,
      search 
    } = req.query;
    
    let query = { status: 'published' };
    
    if (category) {
      query.categories = { $in: [category] };
    }
    
    if (tag) {
      query.tags = { $in: [tag] };
    }
    
    if (search) {
      query.$text = { $search: search };
    }

    const posts = await Blog.find(query)
      .select('title slug excerpt featuredImage categories tags publishedAt createdAt author')
      .sort({ publishedAt: -1, createdAt: -1 })
      .limit(parseInt(limit))
      .skip(parseInt(offset));

    const total = await Blog.countDocuments(query);

    res.json({
      posts,
      total,
      hasMore: offset + posts.length < total
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get single blog post by slug (public)
router.get('/post/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    
    const post = await Blog.findOne({ 
      slug, 
      status: 'published' 
    });

    if (!post) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    res.json(post);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get categories and tags (public)
router.get('/taxonomy', async (req, res) => {
  try {
    const categories = await Blog.distinct('categories', { status: 'published' });
    const tags = await Blog.distinct('tags', { status: 'published' });
    
    res.json({
      categories: categories.filter(Boolean),
      tags: tags.filter(Boolean)
    });
  } catch (error) {
    console.error('Error fetching taxonomy:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get related posts
router.get('/related/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const { limit = 3 } = req.query;
    
    const currentPost = await Blog.findOne({ slug, status: 'published' });
    if (!currentPost) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    // Find posts with similar categories or tags
    const related = await Blog.find({
      _id: { $ne: currentPost._id },
      status: 'published',
      $or: [
        { categories: { $in: currentPost.categories } },
        { tags: { $in: currentPost.tags } }
      ]
    })
    .select('title slug excerpt featuredImage categories tags publishedAt')
    .sort({ publishedAt: -1 })
    .limit(parseInt(limit));

    res.json(related);
  } catch (error) {
    console.error('Error fetching related posts:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Admin: Get all blog posts including drafts
router.get('/admin/all', verifyToken, requireRole(['admin', 'editor']), async (req, res) => {
  try {
    const { 
      status, 
      category, 
      limit = 20, 
      offset = 0,
      search 
    } = req.query;
    
    let query = {};
    if (status) query.status = status;
    if (category) query.categories = { $in: [category] };
    if (search) query.$text = { $search: search };

    const posts = await Blog.find(query)
      .sort({ updatedAt: -1 })
      .limit(parseInt(limit))
      .skip(parseInt(offset));

    const total = await Blog.countDocuments(query);

    res.json({
      posts,
      total,
      hasMore: offset + posts.length < total
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Admin: Get single blog post by ID
router.get('/admin/:id', verifyToken, requireRole(['admin', 'editor']), async (req, res) => {
  try {
    const { id } = req.params;
    
    const post = await Blog.findById(id);
    if (!post) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    res.json(post);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Admin: Create new blog post
router.post('/', 
  verifyToken, 
  requireRole(['admin', 'editor']),
  strictLimiter,
  [
    validateTitle,
    validateContent,
    body('excerpt').optional().trim().isLength({ max: 300 }),
    body('categories').optional().isArray(),
    body('tags').optional().isArray(),
    body('status').optional().isIn(['draft', 'published', 'archived']),
    body('seo.title').optional().trim().isLength({ max: 60 }),
    body('seo.description').optional().trim().isLength({ max: 160 })
  ],
  handleValidationErrors,
  sanitizeHtml,
  async (req, res) => {
    try {
      const { 
        title, 
        content, 
        excerpt, 
        featuredImage, 
        gallery,
        categories, 
        tags, 
        status, 
        seo 
      } = req.body;
      
      const slug = slugify(title, { lower: true, strict: true });
      
      // Check for duplicate slug
      const existingPost = await Blog.findOne({ slug });
      if (existingPost) {
        return res.status(400).json({ error: 'A blog post with this title already exists' });
      }

      const post = new Blog({
        title,
        slug,
        content,
        excerpt: excerpt || content.substring(0, 300),
        featuredImage: featuredImage || '',
        gallery: gallery || [],
        categories: categories || [],
        tags: tags || [],
        status: status || 'draft',
        author: {
          name: req.user.name,
          email: req.user.email
        },
        seo: {
          title: seo?.title || title,
          description: seo?.description || excerpt || content.substring(0, 160),
          keywords: seo?.keywords || [...(categories || []), ...(tags || [])],
          ogTitle: seo?.ogTitle || title,
          ogDescription: seo?.ogDescription || excerpt || content.substring(0, 160),
          ogImage: seo?.ogImage || featuredImage || '',
          structuredData: seo?.structuredData || {}
        },
        publishedAt: status === 'published' ? new Date() : null
      });

      await post.save();
      res.status(201).json(post);
    } catch (error) {
      console.error('Error creating blog post:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }
);

// Admin: Update blog post
router.put('/:id', 
  verifyToken, 
  requireRole(['admin', 'editor']),
  strictLimiter,
  [
    validateTitle.optional(),
    validateContent.optional(),
    body('excerpt').optional().trim().isLength({ max: 300 }),
    body('categories').optional().isArray(),
    body('tags').optional().isArray(),
    body('status').optional().isIn(['draft', 'published', 'archived']),
    body('seo.title').optional().trim().isLength({ max: 60 }),
    body('seo.description').optional().trim().isLength({ max: 160 })
  ],
  handleValidationErrors,
  sanitizeHtml,
  async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;

      // If title is being updated, update slug
      if (updateData.title) {
        const newSlug = slugify(updateData.title, { lower: true, strict: true });
        const existingPost = await Blog.findOne({ 
          slug: newSlug, 
          _id: { $ne: id } 
        });
        if (existingPost) {
          return res.status(400).json({ error: 'A blog post with this title already exists' });
        }
        updateData.slug = newSlug;
      }

      // Set publishedAt when publishing for the first time
      const currentPost = await Blog.findById(id);
      if (currentPost.status !== 'published' && updateData.status === 'published') {
        updateData.publishedAt = new Date();
      }

      const post = await Blog.findByIdAndUpdate(
        id, 
        { ...updateData, updatedAt: new Date() },
        { new: true, runValidators: true }
      );

      if (!post) {
        return res.status(404).json({ error: 'Blog post not found' });
      }

      res.json(post);
    } catch (error) {
      console.error('Error updating blog post:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }
);

// Admin: Delete blog post
router.delete('/:id', 
  verifyToken, 
  requireRole(['admin']),
  strictLimiter,
  async (req, res) => {
    try {
      const { id } = req.params;
      
      const post = await Blog.findByIdAndDelete(id);
      if (!post) {
        return res.status(404).json({ error: 'Blog post not found' });
      }

      res.json({ message: 'Blog post deleted successfully' });
    } catch (error) {
      console.error('Error deleting blog post:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }
);

// Admin: Bulk operations
router.post('/bulk', 
  verifyToken, 
  requireRole(['admin']),
  strictLimiter,
  [
    body('action').isIn(['publish', 'unpublish', 'archive', 'delete']),
    body('postIds').isArray().isLength({ min: 1 })
  ],
  handleValidationErrors,
  async (req, res) => {
    try {
      const { action, postIds } = req.body;
      
      let updateData = {};
      switch (action) {
        case 'publish':
          updateData = { 
            status: 'published',
            publishedAt: new Date()
          };
          break;
        case 'unpublish':
          updateData = { status: 'draft' };
          break;
        case 'archive':
          updateData = { status: 'archived' };
          break;
        case 'delete':
          await Blog.deleteMany({ _id: { $in: postIds } });
          return res.json({ message: `${postIds.length} blog posts deleted successfully` });
      }

      const result = await Blog.updateMany(
        { _id: { $in: postIds } },
        { ...updateData, updatedAt: new Date() }
      );

      res.json({ 
        message: `${result.modifiedCount} blog posts updated successfully`,
        modifiedCount: result.modifiedCount
      });
    } catch (error) {
      console.error('Error in bulk operation:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }
);

module.exports = router;