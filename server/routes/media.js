const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs').promises;
const { verifyToken, requireRole } = require('../middleware/auth');
const { strictLimiter } = require('../middleware/security');
const Media = require('../models/Media');

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const uploadDir = path.join(__dirname, '../uploads');
    
    // Ensure uploads directory exists
    try {
      await fs.mkdir(uploadDir, { recursive: true });
    } catch (error) {
      console.error('Error creating upload directory:', error);
    }
    
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  }
});

const upload = multer({
  storage,
  limits: {
    fileSize: parseInt(process.env.MAX_FILE_SIZE) || 10 * 1024 * 1024, // 10MB default
    files: 10 // Maximum 10 files at once
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
    
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only JPEG, PNG, WebP, and GIF are allowed.'));
    }
  }
});

// Helper function to generate thumbnails
async function generateThumbnails(filePath, filename) {
  const baseDir = path.dirname(filePath);
  const baseName = path.parse(filename).name;
  const ext = path.parse(filename).ext;
  
  const thumbnails = {};
  
  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    // Generate different sizes
    const sizes = [
      { name: 'small', width: 150, height: 150 },
      { name: 'medium', width: 300, height: 300 },
      { name: 'large', width: 800, height: 600 }
    ];
    
    for (const size of sizes) {
      const thumbnailPath = path.join(baseDir, `${baseName}-${size.name}${ext}`);
      await image
        .resize(size.width, size.height, { fit: 'cover', position: 'center' })
        .jpeg({ quality: 85 })
        .toFile(thumbnailPath);
      
      thumbnails[size.name] = `/uploads/${path.basename(thumbnailPath)}`;
    }
    
    // Generate WebP version
    const webpPath = path.join(baseDir, `${baseName}.webp`);
    await image
      .webp({ quality: 85 })
      .toFile(webpPath);
    thumbnails.webp = `/uploads/${path.basename(webpPath)}`;
    
    // Generate AVIF version (if sharp supports it)
    try {
      const avifPath = path.join(baseDir, `${baseName}.avif`);
      await image
        .avif({ quality: 85 })
        .toFile(avifPath);
      thumbnails.avif = `/uploads/${path.basename(avifPath)}`;
    } catch (avifError) {
      console.warn('AVIF generation not supported:', avifError.message);
    }
    
    return {
      thumbnails,
      dimensions: {
        width: metadata.width,
        height: metadata.height
      }
    };
  } catch (error) {
    console.error('Error generating thumbnails:', error);
    throw error;
  }
}

// Get all media files (public - for frontend)
router.get('/', async (req, res) => {
  try {
    const { 
      category, 
      limit = 20, 
      offset = 0,
      search 
    } = req.query;
    
    let query = {};
    if (category && category !== 'all') {
      query.category = category;
    }
    
    if (search) {
      query.$or = [
        { originalName: { $regex: search, $options: 'i' } },
        { alt: { $regex: search, $options: 'i' } },
        { caption: { $regex: search, $options: 'i' } }
      ];
    }

    const media = await Media.find(query)
      .select('filename originalName url alt caption category dimensions thumbnails createdAt')
      .sort({ createdAt: -1 })
      .limit(parseInt(limit))
      .skip(parseInt(offset));

    const total = await Media.countDocuments(query);

    res.json({
      media,
      total,
      hasMore: offset + media.length < total
    });
  } catch (error) {
    console.error('Error fetching media:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get media by categories
router.get('/categories', async (req, res) => {
  try {
    const categories = await Media.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 },
          latestImage: { $first: '$url' }
        }
      },
      {
        $project: {
          category: '$_id',
          count: 1,
          latestImage: 1,
          _id: 0
        }
      }
    ]);

    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Admin: Upload single or multiple files
router.post('/upload', 
  verifyToken, 
  requireRole(['admin', 'editor']),
  strictLimiter,
  upload.array('files', 10),
  async (req, res) => {
    try {
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ error: 'No files uploaded' });
      }

      const { category = 'other', alt = '', caption = '' } = req.body;
      const uploadedMedia = [];

      for (const file of req.files) {
        try {
          // Generate thumbnails and get dimensions
          const { thumbnails, dimensions } = await generateThumbnails(file.path, file.filename);

          const media = new Media({
            filename: file.filename,
            originalName: file.originalname,
            mimeType: file.mimetype,
            size: file.size,
            path: file.path,
            url: `/uploads/${file.filename}`,
            alt: alt,
            caption: caption,
            category: category,
            dimensions: dimensions,
            thumbnails: thumbnails,
            uploadedBy: req.user._id
          });

          await media.save();
          uploadedMedia.push(media);
        } catch (fileError) {
          console.error(`Error processing file ${file.filename}:`, fileError);
          // Continue with other files even if one fails
        }
      }

      res.status(201).json({
        message: `${uploadedMedia.length} files uploaded successfully`,
        media: uploadedMedia
      });
    } catch (error) {
      console.error('Error uploading files:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }
);

// Admin: Update media metadata
router.put('/:id', 
  verifyToken, 
  requireRole(['admin', 'editor']),
  strictLimiter,
  async (req, res) => {
    try {
      const { id } = req.params;
      const { alt, caption, category } = req.body;

      const media = await Media.findByIdAndUpdate(
        id,
        { alt, caption, category },
        { new: true, runValidators: true }
      );

      if (!media) {
        return res.status(404).json({ error: 'Media not found' });
      }

      res.json(media);
    } catch (error) {
      console.error('Error updating media:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }
);

// Admin: Delete media
router.delete('/:id', 
  verifyToken, 
  requireRole(['admin']),
  strictLimiter,
  async (req, res) => {
    try {
      const { id } = req.params;

      const media = await Media.findById(id);
      if (!media) {
        return res.status(404).json({ error: 'Media not found' });
      }

      // Delete physical files
      const filesToDelete = [
        media.path,
        ...Object.values(media.thumbnails).map(url => 
          path.join(__dirname, '../uploads', path.basename(url))
        )
      ];

      for (const filePath of filesToDelete) {
        try {
          await fs.unlink(filePath);
        } catch (unlinkError) {
          console.warn(`Could not delete file ${filePath}:`, unlinkError.message);
        }
      }

      await Media.findByIdAndDelete(id);
      res.json({ message: 'Media deleted successfully' });
    } catch (error) {
      console.error('Error deleting media:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }
);

// Admin: Bulk delete media
router.post('/bulk-delete', 
  verifyToken, 
  requireRole(['admin']),
  strictLimiter,
  async (req, res) => {
    try {
      const { mediaIds } = req.body;

      if (!mediaIds || !Array.isArray(mediaIds) || mediaIds.length === 0) {
        return res.status(400).json({ error: 'No media IDs provided' });
      }

      const mediaFiles = await Media.find({ _id: { $in: mediaIds } });
      
      // Delete physical files
      for (const media of mediaFiles) {
        const filesToDelete = [
          media.path,
          ...Object.values(media.thumbnails).map(url => 
            path.join(__dirname, '../uploads', path.basename(url))
          )
        ];

        for (const filePath of filesToDelete) {
          try {
            await fs.unlink(filePath);
          } catch (unlinkError) {
            console.warn(`Could not delete file ${filePath}:`, unlinkError.message);
          }
        }
      }

      await Media.deleteMany({ _id: { $in: mediaIds } });
      
      res.json({ 
        message: `${mediaFiles.length} media files deleted successfully`,
        deletedCount: mediaFiles.length
      });
    } catch (error) {
      console.error('Error in bulk delete:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }
);

// Get single media file details
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const media = await Media.findById(id);
    if (!media) {
      return res.status(404).json({ error: 'Media not found' });
    }

    res.json(media);
  } catch (error) {
    console.error('Error fetching media:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;