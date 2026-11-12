# AGP Nature Villa - Installation Guide

## 🚀 Quick Start

### Prerequisites
- **Node.js 18+** - [Download here](https://nodejs.org/)
- **MongoDB** - [Download here](https://www.mongodb.com/try/download/community)
- **Git** - [Download here](https://git-scm.com/)

### 1. Installation

```bash
# Install dependencies
npm install

# Setup will run automatically after install
# If needed, run setup manually:
npm run setup
```

### 2. Environment Configuration

```bash
# Copy environment template
cp .env.example .env
```

Edit `.env` with your settings:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/agp-nature-villa

# JWT Secret (IMPORTANT: Change this!)
JWT_SECRET=your-super-secret-jwt-key-with-at-least-32-characters

# Server
PORT=5000
NODE_ENV=development

# File Upload
MAX_FILE_SIZE=10485760
UPLOAD_PATH=./uploads

# Email (optional - for contact forms)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### 3. Database Setup

Start MongoDB:
```bash
# Windows
net start MongoDB

# macOS/Linux
sudo systemctl start mongod

# Or use MongoDB Compass/Atlas
```

Seed the database with initial data:
```bash
npm run seed
```

This creates:
- **Admin user**: admin@agpnaturevilla.com / admin123!
- **Home page** with sample content
- **Basic pages** (villa, rooms, contact)
- **Sample blog post**

### 4. Start Development Servers

**Terminal 1** - Backend API:
```bash
npm run server:dev
```

**Terminal 2** - Frontend:
```bash
npm run dev
```

### 5. Access Your Site

- **Website**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin
- **API**: http://localhost:5000/api

## 🔐 First Login

1. Go to http://localhost:3000/admin
2. Login with:
   - Email: `admin@agpnaturevilla.com`
   - Password: `admin123!`
3. **IMPORTANT**: Change the password immediately!

## 📁 Project Structure

```
├── app/                 # Next.js App Router pages
├── components/          # React components
│   ├── Admin/          # Admin panel components
│   ├── Blocks/         # Content blocks
│   ├── Blog/           # Blog components
│   ├── Layout/         # Layout components
│   └── UI/             # UI components
├── server/             # Backend API
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   └── middleware/     # Express middleware
├── scripts/            # Setup and utility scripts
└── public/             # Static files
```

## 🛠️ Available Commands

```bash
# Development
npm run dev              # Start frontend
npm run server:dev       # Start backend with nodemon

# Production
npm run build           # Build for production
npm start              # Start production frontend
npm run server:start   # Start production backend

# Utilities
npm run setup          # Setup directories
npm run seed           # Seed database
npm run lint          # Run ESLint
```

## 🔧 Configuration

### Custom Domain
Update `next.config.js`:
```javascript
const nextConfig = {
  async rewrites() {
    return [
      // Your custom domain rewrites
    ]
  }
}
```

### Environment Variables
All environment variables are documented in `.env.example`

### Database Configuration
The app uses MongoDB with Mongoose. Connection string format:
```
mongodb://localhost:27017/agp-nature-villa
# or
mongodb+srv://user:pass@cluster.mongodb.net/agp-nature-villa
```

## 🚀 Production Deployment

### 1. Build Application
```bash
npm run build
```

### 2. Environment Setup
```bash
NODE_ENV=production
MONGODB_URI=your-production-db-uri
JWT_SECRET=your-production-jwt-secret
```

### 3. Process Management
Use PM2 for production:
```bash
npm install -g pm2

# Start backend
pm2 start server/index.js --name "agp-backend"

# Start frontend
pm2 start npm --name "agp-frontend" -- start
```

### 4. Nginx Configuration
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

## 🐛 Troubleshooting

### Common Issues

**1. MongoDB Connection Error**
```
Error: MongoNetworkError
```
- Ensure MongoDB is running
- Check connection string in `.env`
- Verify firewall settings

**2. JWT Secret Error**
```
Error: JWT_SECRET is not defined
```
- Set `JWT_SECRET` in `.env`
- Must be at least 32 characters

**3. Port Already in Use**
```
Error: EADDRINUSE: address already in use :::3000
```
- Kill process: `npx kill-port 3000`
- Use different port: `PORT=3001 npm run dev`

**4. File Upload Errors**
- Check `UPLOAD_PATH` directory exists
- Verify file permissions
- Check `MAX_FILE_SIZE` setting

### Getting Help

1. Check the logs in your terminal
2. Verify all environment variables are set
3. Ensure MongoDB is running
4. Check the console for JavaScript errors

## 📧 Support

For technical support:
- Email: hello@agpnaturevilla.com
- Check the issues in the repository

## 🔒 Security Notes

- Change default admin password immediately
- Use strong JWT secrets (32+ characters)
- Enable HTTPS in production
- Regularly update dependencies
- Monitor for security advisories

## 📈 Performance Tips

- Use MongoDB indexes for better query performance
- Enable gzip compression in production
- Implement CDN for static assets
- Monitor Core Web Vitals
- Optimize images before upload

## 🧪 Testing

The application includes:
- Input validation
- Authentication middleware
- Error handling
- Rate limiting
- File upload restrictions

Monitor your application with:
- MongoDB logs
- Node.js process monitoring
- Web server logs
- Application performance monitoring