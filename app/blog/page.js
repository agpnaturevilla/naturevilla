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
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/blog`, {
      next: { revalidate: 300 } // Revalidate every 5 minutes
    })
    
    if (!res.ok) {
      throw new Error('Failed to fetch blog posts')
    }
    
    return res.json()
  } catch (error) {
    console.error('Error fetching blog data:', error)
    return { posts: [], total: 0 }
  }
}

async function getTaxonomy() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/blog/taxonomy`, {
      next: { revalidate: 3600 } // Revalidate every hour
    })
    
    if (!res.ok) {
      throw new Error('Failed to fetch taxonomy')
    }
    
    return res.json()
  } catch (error) {
    console.error('Error fetching taxonomy:', error)
    return { categories: [], tags: [] }
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