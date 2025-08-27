const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Import models
const User = require('../server/models/User');
const Page = require('../server/models/Page');
const Blog = require('../server/models/Blog');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/agp-nature-villa';

async function seedDatabase() {
  try {
    console.log('🌱 Seeding database...\n');
    
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Create admin user if it doesn't exist
    const existingUser = await User.findOne({ email: 'admin@agpnaturevilla.com' });
    if (!existingUser) {
      const adminUser = new User({
        email: 'admin@agpnaturevilla.com',
        password: 'admin123!', // Will be hashed automatically
        name: 'Administrator',
        role: 'admin'
      });
      await adminUser.save();
      console.log('✅ Created admin user (admin@agpnaturevilla.com / admin123!)');
    }

    // Create home page if it doesn't exist
    const existingHomePage = await Page.findOne({ slug: 'home' });
    if (!existingHomePage) {
      const homePage = new Page({
        slug: 'home',
        title: 'AGP Nature Villa - Home',
        status: 'published',
        template: 'home',
        seo: {
          title: 'AGP Nature Villa - Best Luxurious Villa in Udaipur',
          description: 'A beautiful villa cum Homestay nestled amidst the Aravali mountains. Experience luxury accommodation with private pool and stunning mountain views.',
          keywords: ['villa', 'udaipur', 'homestay', 'luxury', 'pool', 'rajasthan'],
          canonicalUrl: 'https://agpnaturevilla.com',
          structuredData: {
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            "name": "AGP Nature Villa",
            "description": "A beautiful villa cum Homestay nestled amidst the Aravali mountains",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "5, Dangiyo Ki Hundar near Animal Aid",
              "addressLocality": "Udaipur",
              "addressRegion": "Rajasthan",
              "postalCode": "313011",
              "addressCountry": "IN"
            }
          }
        },
        contentBlocks: [
          {
            type: 'hero',
            order: 1,
            content: {
              title: 'AGP Nature Villa',
              subtitle: 'Best Luxurious Villa in Udaipur',
              description: 'A beautiful villa cum Homestay nestled amidst the Aravali mountains. Experience luxury accommodation with private pool and stunning mountain views.',
              ctaText: 'Book Your Stay',
              ctaLink: '/contact/',
              images: ['/images/hero-1.jpg', '/images/hero-2.jpg'],
              showRating: true,
              rating: 4.8,
              reviewCount: 150
            }
          },
          {
            type: 'features',
            order: 2,
            content: {
              title: 'Villa Amenities',
              subtitle: 'Everything you need for a perfect stay',
              features: [
                {
                  name: 'Private Swimming Pool',
                  description: 'Enjoy a refreshing dip in your own private pool with mountain views',
                  icon: 'sparkles'
                },
                {
                  name: 'Open Kitchen',
                  description: 'Fully equipped modern kitchen for all your culinary needs',
                  icon: 'home'
                },
                {
                  name: 'Bonfire Area',
                  description: 'Cozy outdoor bonfire space perfect for evening gatherings',
                  icon: 'fire'
                }
              ]
            }
          }
        ]
      });
      await homePage.save();
      console.log('✅ Created home page');
    }

    // Create sample pages
    const samplePages = [
      {
        slug: 'villa-in-udaipur',
        title: 'The Villa - AGP Nature Villa',
        template: 'villa',
        seo: {
          title: 'Luxury Villa in Udaipur - AGP Nature Villa',
          description: 'Discover our beautiful villa with private pool, mountain views, and luxury amenities in Udaipur, Rajasthan.',
          canonicalUrl: 'https://agpnaturevilla.com/villa-in-udaipur/'
        }
      },
      {
        slug: 'rooms',
        title: 'Rooms - AGP Nature Villa',
        template: 'rooms',
        seo: {
          title: 'Villa Rooms - AGP Nature Villa Udaipur',
          description: 'Choose from our beautifully designed rooms: Love Nest, Mountain Peak, and Valley View. Each room offers comfort and stunning views.',
          canonicalUrl: 'https://agpnaturevilla.com/rooms/'
        }
      },
      {
        slug: 'contact',
        title: 'Contact - AGP Nature Villa',
        template: 'contact',
        seo: {
          title: 'Contact AGP Nature Villa - Book Your Stay',
          description: 'Get in touch to book your perfect stay at AGP Nature Villa. Located in Udaipur, Rajasthan. Call +91 9892611983',
          canonicalUrl: 'https://agpnaturevilla.com/contact/'
        }
      }
    ];

    for (const pageData of samplePages) {
      const existingPage = await Page.findOne({ slug: pageData.slug });
      if (!existingPage) {
        const page = new Page({
          ...pageData,
          status: 'published',
          contentBlocks: []
        });
        await page.save();
        console.log(`✅ Created page: ${pageData.slug}`);
      }
    }

    // Create sample blog post
    const existingBlogPost = await Blog.findOne({ slug: 'welcome-to-agp-nature-villa' });
    if (!existingBlogPost) {
      const blogPost = new Blog({
        title: 'Welcome to AGP Nature Villa - Your Home Away from Home',
        slug: 'welcome-to-agp-nature-villa',
        content: `
          <p>Welcome to AGP Nature Villa, where luxury meets nature in the heart of Udaipur, Rajasthan. Nestled amidst the stunning Aravali mountains, our villa offers the perfect escape from the hustle and bustle of city life.</p>
          
          <h2>Why Choose AGP Nature Villa?</h2>
          <p>Our villa combines modern amenities with natural beauty to create an unforgettable experience:</p>
          <ul>
            <li>Private swimming pool with mountain views</li>
            <li>Fully equipped open kitchen</li>
            <li>Spacious rooms with comfortable accommodations</li>
            <li>Beautiful garden and outdoor spaces</li>
            <li>Bonfire area for evening gatherings</li>
          </ul>
          
          <h2>Experience Udaipur</h2>
          <p>Located just minutes away from Udaipur's main attractions, our villa serves as the perfect base for exploring the City of Lakes. Visit magnificent palaces, serene lakes, and vibrant markets, then return to the tranquility of your private retreat.</p>
          
          <p>Book your stay with us and discover why AGP Nature Villa is the perfect choice for families, couples, and groups seeking luxury accommodation in Udaipur.</p>
        `,
        excerpt: 'Discover AGP Nature Villa, your perfect luxury retreat in Udaipur. Experience the blend of modern amenities and natural beauty in the Aravali mountains.',
        categories: ['Villa Experience', 'Udaipur Travel'],
        tags: ['villa', 'udaipur', 'luxury', 'mountain views', 'swimming pool'],
        status: 'published',
        publishedAt: new Date(),
        author: {
          name: 'AGP Nature Villa',
          email: 'hello@agpnaturevilla.com'
        },
        seo: {
          title: 'Welcome to AGP Nature Villa - Your Luxury Home in Udaipur',
          description: 'Discover why AGP Nature Villa is the perfect luxury retreat in Udaipur. Private pool, mountain views, and modern amenities await.',
          keywords: ['AGP Nature Villa', 'Udaipur villa', 'luxury accommodation', 'mountain views']
        }
      });
      await blogPost.save();
      console.log('✅ Created sample blog post');
    }

    console.log('\n🎉 Database seeded successfully!');
    console.log('\nAdmin login details:');
    console.log('Email: admin@agpnaturevilla.com');
    console.log('Password: admin123!');
    console.log('\n⚠️  Remember to change the admin password after first login!');

  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    mongoose.disconnect();
  }
}

// Run seeder
if (require.main === module) {
  seedDatabase();
}

module.exports = seedDatabase;