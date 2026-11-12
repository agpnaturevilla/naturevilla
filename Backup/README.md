# AGP Nature Villa - Modern Villa Website

A high-performance, modern villa website built with Next.js and Node.js, featuring a complete CMS for content management.

## 🚀 Features

- **Super Fast Performance**: Optimized for Core Web Vitals
- **SEO-Ready**: Individual page SEO, meta tags, and schema markup
- **Modern Design**: Beautiful, responsive design with smooth animations
- **Complete CMS**: Full content management system like WordPress
- **Blog System**: Integrated blog with category and tag management
- **Image Management**: Upload, organize, and optimize images by category
- **Security**: Comprehensive security measures and authentication
- **Same URL Structure**: Maintains existing website URLs

## 🏗️ Architecture

- **Frontend**: Next.js 14 with App Router
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Authentication**: JWT-based secure authentication
- **Image Processing**: Sharp for optimization
- **Security**: Helmet, rate limiting, input validation

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- MongoDB
- Git

### Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd agp-nature-villa
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Setup**:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration:
   - MongoDB connection string
   - JWT secret (minimum 32 characters)
   - Email configuration
   - Admin credentials

4. **Start MongoDB**:
   ```bash
   # Windows
   net start MongoDB
   
   # macOS/Linux
   sudo systemctl start mongod
   ```

5. **Start the development servers**:

   **Terminal 1 - Backend**:
   ```bash
   npm run server:dev
   ```

   **Terminal 2 - Frontend**:
   ```bash
   npm run dev
   ```

6. **Access the application**:
   - Website: http://localhost:3000
   - Admin Panel: http://localhost:3000/admin
   - API: http://localhost:5000/api

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   ├── [...slug]/         # Dynamic pages
│   ├── admin/             # Admin panel
│   ├── blog/              # Blog pages
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Layout/           # Layout components
│   ├── Page/             # Page rendering
│   ├── Admin/            # Admin interface
│   ├── Blog/             # Blog components
│   ├── UI/               # UI components
│   └── SEO/              # SEO components
├── server/               # Backend API
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── middleware/      # Express middleware
│   └── index.js         # Server entry point
├── public/              # Static files
└── uploads/             # User uploads
```

## 🛡️ Security Features

- JWT-based authentication with secure tokens
- Rate limiting on all endpoints
- Input validation and sanitization
- SQL injection prevention
- XSS protection
- CSRF protection
- Secure headers with Helmet
- Account lockout after failed attempts
- Password strength requirements

## 🎨 Content Management

### Pages
- Create, edit, and delete pages
- Drag-and-drop content blocks
- Individual SEO settings per page
- Custom schema markup
- URL slug management

### Blog
- Full blog CMS with rich text editor
- Category and tag management
- Featured images and galleries
- SEO optimization for each post
- Draft/publish workflow

### Media Library
- Upload and organize images by category:
  - Outside Villa
  - Inside Villa
  - Pool Images
  - Garden & Rooms
- Automatic image optimization
- WebP and AVIF format generation
- Responsive image sizes

## 📊 Performance Optimizations

- **Core Web Vitals Optimized**:
  - Largest Contentful Paint (LCP) < 2.5s
  - First Input Delay (FID) < 100ms
  - Cumulative Layout Shift (CLS) < 0.1

- **Technical Optimizations**:
  - Next.js App Router for optimal performance
  - Static generation where possible
  - Image optimization with Sharp
  - Lazy loading for images and components
  - CSS optimization and purging
  - Gzip compression
  - CDN-ready static assets

## 🔧 Development

### Commands

```bash
# Development
npm run dev                # Start frontend
npm run server:dev        # Start backend with nodemon

# Production
npm run build             # Build for production
npm start                 # Start production frontend
npm run server:start      # Start production backend

# Linting
npm run lint              # Run ESLint
```

### API Endpoints

- `POST /api/auth/login` - User authentication
- `GET /api/pages/:slug` - Get page by slug
- `POST /api/pages` - Create new page (admin)
- `PUT /api/pages/:id` - Update page (admin)
- `GET /api/blog` - Get blog posts
- `POST /api/media/upload` - Upload media (admin)

## 🚀 Deployment

### Production Environment

1. **Server Setup**:
   - Ubuntu 20.04+ or similar
   - Node.js 18+
   - MongoDB
   - Nginx (reverse proxy)
   - SSL certificate

2. **Environment Variables**:
   ```bash
   NODE_ENV=production
   MONGODB_URI=mongodb://localhost:27017/agp-nature-villa
   JWT_SECRET=your-production-jwt-secret
   NEXT_PUBLIC_API_URL=https://yourdomain.com
   ```

3. **Build and Deploy**:
   ```bash
   npm run build
   pm2 start ecosystem.config.js
   ```

4. **Nginx Configuration**:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
       }
       
       location /api {
           proxy_pass http://localhost:5000;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
       }
   }
   ```

## 📧 Initial Setup

1. **Admin Account**: First registered user becomes admin
2. **Content Import**: Use admin panel to import existing content
3. **Media Upload**: Upload images to respective categories
4. **SEO Configuration**: Set up meta tags and schema for each page

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is proprietary software for AGP Nature Villa.

## 🆘 Support

For technical support or questions:
- Email: hello@agpnaturevilla.com
- Create an issue in this repository