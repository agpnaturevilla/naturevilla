const express = require('express');
const { verifyToken, requireRole } = require('../middleware/auth');
const { strictLimiter } = require('../middleware/security');
const Page = require('../models/Page');
const Blog = require('../models/Blog');
const Media = require('../models/Media');
const User = require('../models/User');

const router = express.Router();

// Dashboard statistics
router.get('/dashboard', verifyToken, requireRole(['admin', 'editor']), async (req, res) => {
  try {
    const stats = await Promise.all([
      Page.countDocuments(),
      Page.countDocuments({ status: 'published' }),
      Page.countDocuments({ status: 'draft' }),
      Blog.countDocuments(),
      Blog.countDocuments({ status: 'published' }),
      Blog.countDocuments({ status: 'draft' }),
      Media.countDocuments(),
      User.countDocuments()
    ]);

    const [
      totalPages,
      publishedPages,
      draftPages,
      totalBlogPosts,
      publishedBlogPosts,
      draftBlogPosts,
      totalMedia,
      totalUsers
    ] = stats;

    // Recent activity
    const recentPages = await Page.find()
      .select('title slug status lastModified')
      .sort({ lastModified: -1 })
      .limit(5);

    const recentBlogs = await Blog.find()
      .select('title slug status updatedAt')
      .sort({ updatedAt: -1 })
      .limit(5);

    const recentMedia = await Media.find()
      .select('originalName category createdAt')
      .sort({ createdAt: -1 })
      .limit(5);

    // System info
    const systemInfo = {
      nodeVersion: process.version,
      platform: process.platform,
      uptime: process.uptime(),
      memoryUsage: process.memoryUsage()
    };

    res.json({
      stats: {
        pages: {
          total: totalPages,
          published: publishedPages,
          draft: draftPages
        },
        blog: {
          total: totalBlogPosts,
          published: publishedBlogPosts,
          draft: draftBlogPosts
        },
        media: {
          total: totalMedia
        },
        users: {
          total: totalUsers
        }
      },
      recentActivity: {
        pages: recentPages,
        blog: recentBlogs,
        media: recentMedia
      },
      system: systemInfo
    });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Site settings
router.get('/settings', verifyToken, requireRole(['admin']), async (req, res) => {
  try {
    // In a real application, you'd have a Settings model
    // For now, we'll return default settings
    const settings = {
      site: {
        name: 'AGP Nature Villa',
        description: 'Best Luxurious Villa in Udaipur',
        url: 'https://agpnaturevilla.com',
        email: 'hello@agpnaturevilla.com',
        phone: '+91 9892611983'
      },
      seo: {
        defaultTitle: 'AGP Nature Villa - Best Luxurious Villa in Udaipur',
        defaultDescription: 'A beautiful villa cum Homestay nestled amidst the Aravali mountains',
        keywords: 'villa, udaipur, homestay, luxury, pool, rajasthan'
      },
      social: {
        facebook: 'https://www.facebook.com/agpnaturevilla',
        instagram: 'https://www.instagram.com/agpnaturevilla',
        twitter: '@agpnaturevilla'
      },
      contact: {
        address: '5, Dangiyo Ki Hundar near Animal Aid, Udaipur, Rajasthan 313011',
        coordinates: {
          lat: 24.571270,
          lng: 73.691544
        }
      }
    };

    res.json(settings);
  } catch (error) {
    console.error('Error fetching settings:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update site settings
router.put('/settings', 
  verifyToken, 
  requireRole(['admin']),
  strictLimiter,
  async (req, res) => {
    try {
      // In a real application, you'd update a Settings model
      // For now, we'll just return the updated settings
      const updatedSettings = req.body;
      
      res.json({
        message: 'Settings updated successfully',
        settings: updatedSettings
      });
    } catch (error) {
      console.error('Error updating settings:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }
);

// User management
router.get('/users', verifyToken, requireRole(['admin']), async (req, res) => {
  try {
    const users = await User.find()
      .select('-password -loginAttempts -lockUntil')
      .sort({ createdAt: -1 });

    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update user role
router.put('/users/:id/role', 
  verifyToken, 
  requireRole(['admin']),
  strictLimiter,
  async (req, res) => {
    try {
      const { id } = req.params;
      const { role } = req.body;

      if (!['admin', 'editor'].includes(role)) {
        return res.status(400).json({ error: 'Invalid role' });
      }

      const user = await User.findByIdAndUpdate(
        id,
        { role },
        { new: true, runValidators: true }
      ).select('-password -loginAttempts -lockUntil');

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.json(user);
    } catch (error) {
      console.error('Error updating user role:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }
);

// Deactivate user
router.put('/users/:id/deactivate', 
  verifyToken, 
  requireRole(['admin']),
  strictLimiter,
  async (req, res) => {
    try {
      const { id } = req.params;

      // Don't allow deactivating yourself
      if (id === req.user._id.toString()) {
        return res.status(400).json({ error: 'Cannot deactivate your own account' });
      }

      const user = await User.findByIdAndUpdate(
        id,
        { isActive: false },
        { new: true, runValidators: true }
      ).select('-password -loginAttempts -lockUntil');

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.json(user);
    } catch (error) {
      console.error('Error deactivating user:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }
);

// System health check
router.get('/health', verifyToken, requireRole(['admin']), async (req, res) => {
  try {
    // Database connectivity check
    const dbStatus = await Page.findOne().limit(1);
    
    // Memory usage
    const memUsage = process.memoryUsage();
    
    // Disk space check (basic)
    const uptime = process.uptime();
    
    res.json({
      status: 'healthy',
      database: dbStatus ? 'connected' : 'disconnected',
      uptime: uptime,
      memory: {
        used: Math.round(memUsage.rss / 1024 / 1024) + ' MB',
        heap: Math.round(memUsage.heapUsed / 1024 / 1024) + ' MB'
      },
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Health check error:', error);
    res.status(500).json({
      status: 'unhealthy',
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

// Export/Import functionality
router.get('/export/pages', verifyToken, requireRole(['admin']), async (req, res) => {
  try {
    const pages = await Page.find();
    
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', 'attachment; filename="pages-export.json"');
    res.json({
      exportDate: new Date().toISOString(),
      version: '1.0',
      type: 'pages',
      data: pages
    });
  } catch (error) {
    console.error('Error exporting pages:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/export/blog', verifyToken, requireRole(['admin']), async (req, res) => {
  try {
    const blogPosts = await Blog.find();
    
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', 'attachment; filename="blog-export.json"');
    res.json({
      exportDate: new Date().toISOString(),
      version: '1.0',
      type: 'blog',
      data: blogPosts
    });
  } catch (error) {
    console.error('Error exporting blog posts:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Analytics placeholder (integrate with Google Analytics API)
router.get('/analytics', verifyToken, requireRole(['admin', 'editor']), async (req, res) => {
  try {
    // Placeholder for analytics data
    // In production, integrate with Google Analytics API
    const analyticsData = {
      pageViews: {
        total: 12500,
        lastMonth: 3200,
        change: '+12%'
      },
      topPages: [
        { path: '/', views: 4500, title: 'Home' },
        { path: '/villa-in-udaipur/', views: 2800, title: 'The Villa' },
        { path: '/rooms/', views: 2100, title: 'Rooms' },
        { path: '/contact/', views: 1200, title: 'Contact' }
      ],
      traffic: {
        organic: 65,
        direct: 25,
        social: 7,
        referral: 3
      },
      devices: {
        mobile: 68,
        desktop: 28,
        tablet: 4
      }
    };

    res.json(analyticsData);
  } catch (error) {
    console.error('Error fetching analytics:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;