# 🚀 Quick Start Guide - AGP Nature Villa

## ✅ Fixed Import Issues

All import path issues have been resolved. The website is now ready to run!

## 📦 Step 1: Install Dependencies

```bash
# Install all required packages
npm install
```

This will automatically run setup and create necessary directories.

## ⚙️ Step 2: Environment Setup

```bash
# Copy the environment template
cp .env.example .env
```

**Edit `.env` file with your settings:**

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/agp-nature-villa

# JWT Secret (IMPORTANT: Change this!)
JWT_SECRET=your-super-secret-jwt-key-minimum-32-characters-long

# Server Port
PORT=5000
NODE_ENV=development

# API URL for frontend
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## 🗄️ Step 3: Start MongoDB

**Windows:**
```bash
net start MongoDB
```

**macOS/Linux:**
```bash
sudo systemctl start mongod
# OR
brew services start mongodb-community
```

**MongoDB Atlas (Cloud):**
Use your cloud connection string in `.env`

## 🌱 Step 4: Seed Database

```bash
# Create initial data (admin user, sample pages, blog post)
npm run seed
```

This creates:
- **Admin user**: admin@agpnaturevilla.com / admin123!
- **Sample pages**: Home, Villa, Rooms, Contact
- **Sample blog post**
- **Database indexes**

## 🏃‍♂️ Step 5: Start the Application

**Open 2 terminals:**

**Terminal 1 - Backend API:**
```bash
npm run server:dev
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

Wait for both to start, then visit:

## 🌐 Access Your Website

- **🏠 Main Website**: http://localhost:3000
- **⚙️ Admin Panel**: http://localhost:3000/admin
- **🔧 API**: http://localhost:5000/api

## 🔐 First Login

1. Go to: http://localhost:3000/admin
2. Login with:
   - **Email**: admin@agpnaturevilla.com
   - **Password**: admin123!
3. **⚠️ CHANGE PASSWORD IMMEDIATELY!**

## 🛠️ Troubleshooting

### Check Setup Status
```bash
npm run check
```

### Common Issues

**❌ "Module not found" errors:**
- All import paths have been fixed
- Restart both servers if you see any

**❌ MongoDB connection error:**
```
Error: MongoNetworkError
```
- Make sure MongoDB is running
- Check `.env` MONGODB_URI

**❌ Port already in use:**
```
EADDRINUSE: address already in use :::3000
```
```bash
# Kill the process
npx kill-port 3000
npx kill-port 5000
```

**❌ JWT errors:**
- Set JWT_SECRET in .env (minimum 32 characters)

### Reset Everything
```bash
# Stop all processes
# Delete node_modules and reinstall
rm -rf node_modules
npm install

# Reset database (optional)
# Drop agp-nature-villa database in MongoDB
npm run seed
```

## 📱 What Works Now

### ✅ Frontend (Next.js)
- Home page with hero section
- Dynamic page rendering
- Blog system
- Responsive design
- SEO optimization

### ✅ Backend (Node.js)
- Complete REST API
- Authentication system
- File upload handling
- Rate limiting & security
- Database operations

### ✅ Admin Panel
- User authentication
- Dashboard with stats
- Content management
- Media library
- Blog management
- SEO settings

### ✅ All Import Issues Fixed
- Relative imports instead of @ aliases
- All components properly linked
- Images have placeholder defaults
- No missing dependencies

## 🎯 Next Steps

1. **Login to admin panel** and explore
2. **Upload your villa images** via Media Library
3. **Update content** through the admin interface
4. **Customize pages** with the page builder
5. **Add your blog content**
6. **Configure contact forms**

## 🔧 Available Commands

```bash
npm run dev              # Start frontend development
npm run server:dev       # Start backend development  
npm run build           # Build for production
npm run seed            # Reset/create sample data
npm run check           # Check setup status
npm run lint            # Check code quality
```

## 🌟 Features Ready

- **🏠 Homepage** with hero slider
- **📄 Dynamic pages** with content blocks
- **📝 Blog system** with categories/tags
- **🖼️ Image management** with categories
- **👨‍💼 Admin panel** like WordPress
- **📱 Responsive design** for all devices
- **🚀 Performance optimized** for Core Web Vitals
- **🔒 Security** enterprise-level
- **🎨 Modern UI** with animations

**Everything is working and ready to use!** 🎉

The import errors have been completely resolved. You can now run the application successfully.