import { Suspense } from 'react'
import BlogList from '../../components/Blog/BlogList'
import BlogSidebar from '../../components/Blog/BlogSidebar'
import Layout from '../../components/Layout/Layout'
import Loading from '../../components/UI/Loading'

export const metadata = {
  title: 'Blog - AGP Nature Villa',
  description: 'Discover travel tips, local attractions, and stories from our luxury villa in Udaipur. Read about the best experiences in Rajasthan.',
  keywords: ['Udaipur blog', 'travel tips', 'Rajasthan attractions', 'villa experiences', 'travel guide'],
  openGraph: {
    title: 'Blog - AGP Nature Villa',
    description: 'Discover travel tips and experiences from our luxury villa in Udaipur',
    type: 'website',
  },
}

async function getBlogData() {
  // Skip API calls for static deployment - use default data directly
  return getDefaultBlogData()
}

async function getTaxonomy() {
  // Skip API calls for static deployment - use default data directly
  return getDefaultTaxonomy()
}

function getDefaultBlogData() {
  return {
    posts: [
      {
        id: 1,
        title: "Discovering Hidden Gems Around Udaipur",
        slug: "discovering-hidden-gems-around-udaipur",
        excerpt: "Explore the lesser-known attractions and secret spots that make Udaipur truly magical. From ancient temples to scenic viewpoints, discover what lies beyond the tourist trail.",
        content: "Full content here...",
        image: "/images/Blog/udaipur-hidden-gems.jpg",
        author: "AGP Nature Villa",
        publishedAt: "2024-01-15",
        category: "Travel Guide",
        tags: ["Udaipur", "Hidden Gems", "Travel Tips"],
        readTime: 8
      },
      {
        id: 2,
        title: "Best Time to Visit Rajasthan: A Complete Guide",
        slug: "best-time-to-visit-rajasthan-complete-guide",
        excerpt: "Planning your Rajasthan adventure? Learn about the perfect seasons, weather patterns, and local events to make your trip unforgettable.",
        content: "Full content here...",
        image: "/images/Blog/rajasthan-seasons.jpg",
        author: "AGP Nature Villa",
        publishedAt: "2024-01-10",
        category: "Travel Planning",
        tags: ["Rajasthan", "Weather", "Travel Planning"],
        readTime: 6
      },
      {
        id: 3,
        title: "Authentic Rajasthani Cuisine: A Food Lover's Journey",
        slug: "authentic-rajasthani-cuisine-food-lovers-journey",
        excerpt: "Dive into the rich flavors of Rajasthani cuisine. From dal baati churma to gatte ki sabzi, discover the authentic tastes of the desert state.",
        content: "Full content here...",
        image: "/images/Blog/rajasthani-cuisine.jpg",
        author: "AGP Nature Villa",
        publishedAt: "2024-01-05",
        category: "Food & Culture",
        tags: ["Food", "Rajasthani Cuisine", "Culture"],
        readTime: 10
      }
    ],
    total: 3
  }
}

function getDefaultTaxonomy() {
  return {
    categories: [
      { id: 1, name: "Travel Guide", count: 5 },
      { id: 2, name: "Travel Planning", count: 3 },
      { id: 3, name: "Food & Culture", count: 4 },
      { id: 4, name: "Villa Experience", count: 6 }
    ],
    tags: [
      { id: 1, name: "Udaipur", count: 8 },
      { id: 2, name: "Rajasthan", count: 10 },
      { id: 3, name: "Travel Tips", count: 7 },
      { id: 4, name: "Hidden Gems", count: 3 },
      { id: 5, name: "Food", count: 4 },
      { id: 6, name: "Culture", count: 5 }
    ]
  }
}

export default async function BlogPage({ searchParams }) {
  const [blogData, taxonomy] = await Promise.all([
    getBlogData(),
    getTaxonomy()
  ])

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "AGP Nature Villa Blog",
    "description": "Travel tips, local attractions, and stories from our luxury villa in Udaipur",
    "url": "https://agpnaturevilla.com/blog/",
    "mainEntityOfPage": "https://agpnaturevilla.com/blog/",
    "publisher": {
      "@type": "Organization",
      "name": "AGP Nature Villa",
      "logo": "https://agpnaturevilla.com/logo.png"
    }
  }

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="relative py-16 bg-gradient-to-br from-slate-100 via-gray-50 to-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-500 to-slate-600 rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 0a2 2 0 00-2-2H9a2 2 0 00-2 2v1" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
              Travel Stories & Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover the magic of Udaipur and Rajasthan through our curated travel guides, 
              local insights, and unforgettable villa experiences.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-slate-600 mx-auto"></div>
          </div>

          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="lg:col-span-2">
              <Suspense fallback={<Loading />}>
                <BlogList 
                  initialPosts={blogData.posts} 
                  searchParams={searchParams}
                />
              </Suspense>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <Suspense fallback={<div className="h-64 bg-white/80 rounded-2xl shadow-lg animate-pulse" />}>
                <BlogSidebar 
                  categories={taxonomy.categories}
                  tags={taxonomy.tags}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}