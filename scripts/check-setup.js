const fs = require('fs');
const path = require('path');

console.log('🔍 Checking AGP Nature Villa setup...\n');

let hasErrors = false;

// Check if .env exists
const envPath = path.join(__dirname, '..', '.env');
if (!fs.existsSync(envPath)) {
  console.log('❌ .env file missing!');
  console.log('   Please run: cp .env.example .env');
  console.log('   Then edit .env with your settings\n');
  hasErrors = true;
} else {
  console.log('✅ .env file found');
}

// Check critical directories
const criticalDirs = [
  'public/images',
  'server/uploads',
  'components',
  'app'
];

criticalDirs.forEach(dir => {
  const fullPath = path.join(__dirname, '..', dir);
  if (!fs.existsSync(fullPath)) {
    console.log(`❌ Missing directory: ${dir}`);
    hasErrors = true;
  } else {
    console.log(`✅ Directory exists: ${dir}`);
  }
});

// Check package.json dependencies
const packagePath = path.join(__dirname, '..', 'package.json');
if (fs.existsSync(packagePath)) {
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  
  const requiredDeps = [
    'next',
    'react',
    'react-dom',
    'mongoose',
    'express',
    '@heroicons/react',
    'tailwindcss'
  ];
  
  const missingDeps = requiredDeps.filter(dep => 
    !packageJson.dependencies[dep] && !packageJson.devDependencies[dep]
  );
  
  if (missingDeps.length > 0) {
    console.log('❌ Missing dependencies:', missingDeps.join(', '));
    console.log('   Run: npm install');
    hasErrors = true;
  } else {
    console.log('✅ All required dependencies found');
  }
}

// Check if MongoDB is likely to be running (basic check)
console.log('\n📡 Next steps:');
console.log('1. Make sure MongoDB is running');
console.log('2. Configure .env file with your settings');
console.log('3. Run: npm run seed (to create initial data)');
console.log('4. Start backend: npm run server:dev');
console.log('5. Start frontend: npm run dev');

if (hasErrors) {
  console.log('\n⚠️  Please fix the errors above before starting');
  process.exit(1);
} else {
  console.log('\n🎉 Setup looks good! You can now start the application.');
}