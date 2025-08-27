const express = require('express');
const { verifyToken, requireRole } = require('../middleware/auth');
const { 
  strictLimiter,
  validateTitle, 
  validateSlug, 
  validateContent,
  handleValidationErrors,
  sanitizeHtml 
} = require('../middleware/security');
const { body } = require('express-validator');
const Page = require('../models/Page');

const router = express.Router();

// Get all pages (public)
router.get('/', async (req, res) => {
  try {
    const { status = 'published', limit = 20, offset = 0 } = req.query;
    
    const query = { status };
    const pages = await Page.find(query)
      .select('slug title status template lastModified createdAt')
      .sort({ lastModified: -1 })
      .limit(parseInt(limit))
      .skip(parseInt(offset));

    const total = await Page.countDocuments(query);

    res.json({
      pages,
      total,
      hasMore: offset + pages.length < total
    });
  } catch (error) {
    console.error('Error fetching pages:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get single page by slug (public)
router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    
    const page = await Page.findOne({ 
      slug, 
      status: 'published' 
    });

    if (!page) {
      return res.status(404).json({ error: 'Page not found' });
    }

    res.json(page);
  } catch (error) {
    console.error('Error fetching page:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Admin: Get all pages including drafts
router.get('/admin/all', verifyToken, requireRole(['admin', 'editor']), async (req, res) => {
  try {
    const { status, template, limit = 50, offset = 0 } = req.query;
    
    const query = {};
    if (status) query.status = status;
    if (template) query.template = template;

    const pages = await Page.find(query)
      .sort({ lastModified: -1 })
      .limit(parseInt(limit))
      .skip(parseInt(offset));

    const total = await Page.countDocuments(query);

    res.json({
      pages,
      total,
      hasMore: offset + pages.length < total
    });
  } catch (error) {
    console.error('Error fetching pages:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Admin: Get single page by ID (includes drafts)
router.get('/admin/:id', verifyToken, requireRole(['admin', 'editor']), async (req, res) => {
  try {
    const { id } = req.params;
    
    const page = await Page.findById(id);
    if (!page) {
      return res.status(404).json({ error: 'Page not found' });
    }

    res.json(page);
  } catch (error) {
    console.error('Error fetching page:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Admin: Create new page
router.post('/', 
  verifyToken, 
  requireRole(['admin', 'editor']),
  strictLimiter,
  [
    validateTitle,
    validateSlug.optional(),
    body('template').optional().isIn(['default', 'home', 'villa', 'rooms', 'contact', 'blog']),
    body('status').optional().isIn(['draft', 'published', 'archived']),
    body('seo.title').optional().trim().isLength({ max: 60 }),
    body('seo.description').optional().trim().isLength({ max: 160 }),
    body('seo.keywords').optional().isArray(),
    body('contentBlocks').optional().isArray()
  ],
  handleValidationErrors,
  sanitizeHtml,
  async (req, res) => {
    try {
      const { title, slug, template, status, seo, contentBlocks, featuredImage } = req.body;
      
      // Generate slug if not provided
      const finalSlug = slug || title.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim('-');

      // Check for duplicate slug
      const existingPage = await Page.findOne({ slug: finalSlug });
      if (existingPage) {
        return res.status(400).json({ error: 'A page with this slug already exists' });
      }

      const page = new Page({
        title,
        slug: finalSlug,
        template: template || 'default',
        status: status || 'draft',
        seo: {
          title: seo?.title || title,
          description: seo?.description || '',
          keywords: seo?.keywords || [],
          ogTitle: seo?.ogTitle || '',
          ogDescription: seo?.ogDescription || '',
          ogImage: seo?.ogImage || '',
          structuredData: seo?.structuredData || {},
          canonicalUrl: seo?.canonicalUrl || '',
          noindex: seo?.noindex || false,
          nofollow: seo?.nofollow || false
        },
        contentBlocks: contentBlocks || [],
        featuredImage: featuredImage || ''
      });

      await page.save();
      res.status(201).json(page);
    } catch (error) {
      console.error('Error creating page:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }
);

// Admin: Update page
router.put('/:id', 
  verifyToken, 
  requireRole(['admin', 'editor']),
  strictLimiter,
  [
    validateTitle.optional(),
    validateSlug.optional(),
    body('template').optional().isIn(['default', 'home', 'villa', 'rooms', 'contact', 'blog']),
    body('status').optional().isIn(['draft', 'published', 'archived']),
    body('seo.title').optional().trim().isLength({ max: 60 }),
    body('seo.description').optional().trim().isLength({ max: 160 }),
    body('seo.keywords').optional().isArray(),
    body('contentBlocks').optional().isArray()
  ],
  handleValidationErrors,
  sanitizeHtml,
  async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;

      // If slug is being updated, check for duplicates
      if (updateData.slug) {
        const existingPage = await Page.findOne({ 
          slug: updateData.slug, 
          _id: { $ne: id } 
        });
        if (existingPage) {
          return res.status(400).json({ error: 'A page with this slug already exists' });
        }
      }

      const page = await Page.findByIdAndUpdate(
        id, 
        { ...updateData, lastModified: new Date() },
        { new: true, runValidators: true }
      );

      if (!page) {
        return res.status(404).json({ error: 'Page not found' });
      }

      res.json(page);
    } catch (error) {
      console.error('Error updating page:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }
);

// Admin: Delete page
router.delete('/:id', 
  verifyToken, 
  requireRole(['admin']),
  strictLimiter,
  async (req, res) => {
    try {
      const { id } = req.params;
      
      const page = await Page.findById(id);
      if (!page) {
        return res.status(404).json({ error: 'Page not found' });
      }

      // Don't allow deletion of home page
      if (page.slug === 'home') {
        return res.status(400).json({ error: 'Cannot delete home page' });
      }

      await Page.findByIdAndDelete(id);
      res.json({ message: 'Page deleted successfully' });
    } catch (error) {
      console.error('Error deleting page:', error);
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
    body('pageIds').isArray().isLength({ min: 1 })
  ],
  handleValidationErrors,
  async (req, res) => {
    try {
      const { action, pageIds } = req.body;
      
      let updateData = {};
      switch (action) {
        case 'publish':
          updateData = { status: 'published' };
          break;
        case 'unpublish':
          updateData = { status: 'draft' };
          break;
        case 'archive':
          updateData = { status: 'archived' };
          break;
        case 'delete':
          // Prevent deletion of home page
          const homePages = await Page.find({ 
            _id: { $in: pageIds }, 
            slug: 'home' 
          });
          if (homePages.length > 0) {
            return res.status(400).json({ error: 'Cannot delete home page' });
          }
          
          await Page.deleteMany({ _id: { $in: pageIds } });
          return res.json({ message: `${pageIds.length} pages deleted successfully` });
      }

      const result = await Page.updateMany(
        { _id: { $in: pageIds } },
        { ...updateData, lastModified: new Date() }
      );

      res.json({ 
        message: `${result.modifiedCount} pages updated successfully`,
        modifiedCount: result.modifiedCount
      });
    } catch (error) {
      console.error('Error in bulk operation:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }
);

module.exports = router;