const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up AGP Nature Villa website...\n');

// Create necessary directories
const directories = [
  'server/uploads',
  'public/images',
  'public/uploads'
];

directories.forEach(dir => {
  const fullPath = path.join(__dirname, '..', dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`✅ Created directory: ${dir}`);
  } else {
    console.log(`✓ Directory exists: ${dir}`);
  }
});

// Check if .env exists
const envPath = path.join(__dirname, '..', '.env');
if (!fs.existsSync(envPath)) {
  console.log('\n⚠️  Warning: .env file not found!');
  console.log('Please create a .env file based on .env.example');
  console.log('Make sure to set up:');
  console.log('- MONGODB_URI');
  console.log('- JWT_SECRET');
  console.log('- Other configuration variables\n');
} else {
  console.log('\n✅ Environment file found');
}

console.log('🎉 Setup complete!');
console.log('\nNext steps:');
console.log('1. Configure your .env file');
console.log('2. Start MongoDB');
console.log('3. Run: npm run server:dev (in one terminal)');
console.log('4. Run: npm run dev (in another terminal)');
console.log('5. Visit http://localhost:3000');
console.log('6. Admin panel: http://localhost:3000/admin');
console.log('\n📖 See README.md for detailed instructions');