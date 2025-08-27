import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import BlogPost from '../../../components/Blog/BlogPost'
import BlogSidebar from '../../../components/Blog/BlogSidebar'
import Layout from '../../../components/Layout/Layout'
import Loading from '../../../components/UI/Loading'

async function getBlogPost(slug) {
  // Skip API calls for static deployment - use default data directly
  return getDefaultBlogPost(slug)
}

async function getRelatedPosts(slug) {
  // Skip API calls for static deployment - use default data directly
  return getDefaultRelatedPosts(slug)
}

async function getTaxonomy() {
  // Skip API calls for static deployment - use default data directly
  return getDefaultTaxonomy()
}

function getDefaultBlogPost(slug) {
  const posts = {
    'discovering-hidden-gems-around-udaipur': {
      id: 1,
      title: "Discovering Hidden Gems Around Udaipur",
      slug: "discovering-hidden-gems-around-udaipur",
      excerpt: "Explore the lesser-known attractions and secret spots that make Udaipur truly magical. From ancient temples to scenic viewpoints, discover what lies beyond the tourist trail.",
      content: `
        <p>Udaipur, known as the "City of Lakes," is famous for its magnificent palaces and stunning lakeside views. However, beyond the well-trodden tourist paths lie countless hidden gems waiting to be discovered by adventurous travelers.</p>
        
        <h2>Ancient Temples Off the Beaten Path</h2>
        <p>While most visitors flock to the famous Jagdish Temple, few venture to explore the ancient Neemach Mata Temple, perched high on a hill offering panoramic views of the city. The temple is dedicated to the local deity and provides a peaceful escape from the bustling city below.</p>
        
        <h2>Secret Viewpoints</h2>
        <p>For the best sunrise views in Udaipur, head to Sajjangarh Wildlife Sanctuary early in the morning. The trek to the highest point rewards you with breathtaking views of the entire city awakening below.</p>
        
        <h2>Hidden Havelis</h2>
        <p>Beyond the famous City Palace, explore the narrow lanes of the old city to discover beautiful havelis that have been converted into boutique hotels and restaurants, each with its own story to tell.</p>
      `,
      featuredImage: "/images/Blog/udaipur-hidden-gems.jpg",
      author: { name: "AGP Nature Villa" },
      publishedAt: "2024-01-15T08:00:00Z",
      updatedAt: "2024-01-15T08:00:00Z",
      categories: ["Travel Guide"],
      tags: ["Udaipur", "Hidden Gems", "Travel Tips"],
      readTime: 8
    },
    'best-time-to-visit-rajasthan-complete-guide': {
      id: 2,
      title: "Best Time to Visit Rajasthan: A Complete Guide",
      slug: "best-time-to-visit-rajasthan-complete-guide",
      excerpt: "Planning your Rajasthan adventure? Learn about the perfect seasons, weather patterns, and local events to make your trip unforgettable.",
      content: `
        <p>Rajasthan's desert climate can be extreme, making timing crucial for a comfortable and enjoyable visit. This comprehensive guide will help you choose the perfect time for your Rajasthan adventure.</p>
        
        <h2>Winter (October to March) - The Golden Period</h2>
        <p>Winter is undoubtedly the best time to visit Rajasthan. The weather is pleasant with daytime temperatures ranging from 20°C to 27°C, perfect for sightseeing and outdoor activities.</p>
        
        <h2>Summer (April to June) - The Challenging Season</h2>
        <p>Summer in Rajasthan can be harsh with temperatures soaring up to 45°C. However, this is also when you'll find the best hotel deals and fewer crowds.</p>
        
        <h2>Monsoon (July to September) - The Green Season</h2>
        <p>The monsoon brings relief from the scorching heat and transforms the landscape into a green paradise. While rainfall is limited, it's enough to cool the air and create beautiful scenery.</p>
      `,
      featuredImage: "/images/Blog/rajasthan-seasons.jpg",
      author: { name: "AGP Nature Villa" },
      publishedAt: "2024-01-10T08:00:00Z",
      updatedAt: "2024-01-10T08:00:00Z",
      categories: ["Travel Planning"],
      tags: ["Rajasthan", "Weather", "Travel Planning"],
      readTime: 6
    },
    'authentic-rajasthani-cuisine-food-lovers-journey': {
      id: 3,
      title: "Authentic Rajasthani Cuisine: A Food Lover's Journey",
      slug: "authentic-rajasthani-cuisine-food-lovers-journey",
      excerpt: "Dive into the rich flavors of Rajasthani cuisine. From dal baati churma to gatte ki sabzi, discover the authentic tastes of the desert state.",
      content: `
        <p>Rajasthani cuisine is a reflection of the state's royal heritage and desert climate. The food is designed to last long without refrigeration, resulting in unique flavors and cooking techniques.</p>
        
        <h2>The Royal Thali Experience</h2>
        <p>A traditional Rajasthani thali is a feast for the senses, featuring an array of dishes that represent the diverse culinary traditions of different regions within the state.</p>
        
        <h2>Must-Try Dishes</h2>
        <p><strong>Dal Baati Churma:</strong> The quintessential Rajasthani dish consisting of hard wheat rolls (baati) served with lentil curry (dal) and sweet crumbled wheat (churma).</p>
        
        <p><strong>Gatte Ki Sabzi:</strong> Gram flour dumplings cooked in spicy yogurt gravy, a staple vegetarian dish that's both nutritious and flavorful.</p>
        
        <p><strong>Laal Maas:</strong> A fiery red meat curry that showcases the bold flavors Rajasthani cuisine is famous for.</p>
      `,
      featuredImage: "/images/Blog/rajasthani-cuisine.jpg",
      author: { name: "AGP Nature Villa" },
      publishedAt: "2024-01-05T08:00:00Z",
      updatedAt: "2024-01-05T08:00:00Z",
      categories: ["Food & Culture"],
      tags: ["Food", "Rajasthani Cuisine", "Culture"],
      readTime: 10
    }
  }
  
  return posts[slug] || null
}

function getDefaultRelatedPosts(slug) {
  // Return 2-3 related posts based on the current slug
  const allPosts = [
    {
      id: 1,
      title: "Discovering Hidden Gems Around Udaipur",
      slug: "discovering-hidden-gems-around-udaipur",
      excerpt: "Explore the lesser-known attractions and secret spots that make Udaipur truly magical.",
      featuredImage: "/images/Blog/udaipur-hidden-gems.jpg",
      category: "Travel Guide",
      publishedAt: "2024-01-15"
    },
    {
      id: 2,
      title: "Best Time to Visit Rajasthan: A Complete Guide",
      slug: "best-time-to-visit-rajasthan-complete-guide",
      excerpt: "Planning your Rajasthan adventure? Learn about the perfect seasons and weather patterns.",
      featuredImage: "/images/Blog/rajasthan-seasons.jpg",
      category: "Travel Planning",
      publishedAt: "2024-01-10"
    },
    {
      id: 3,
      title: "Authentic Rajasthani Cuisine: A Food Lover's Journey",
      slug: "authentic-rajasthani-cuisine-food-lovers-journey",
      excerpt: "Dive into the rich flavors of Rajasthani cuisine and discover authentic tastes.",
      featuredImage: "/images/Blog/rajasthani-cuisine.jpg",
      category: "Food & Culture",
      publishedAt: "2024-01-05"
    }
  ]
  
  // Return posts that are not the current one
  return allPosts.filter(post => post.slug !== slug).slice(0, 2)
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

export async function generateStaticParams() {
  // Generate static params for all blog post slugs
  return [
    { slug: 'discovering-hidden-gems-around-udaipur' },
    { slug: 'best-time-to-visit-rajasthan-complete-guide' },
    { slug: 'authentic-rajasthani-cuisine-food-lovers-journey' }
  ]
}

export async function generateMetadata({ params }) {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found - AGP Nature Villa Blog',
      description: 'The requested blog post could not be found.'
    }
  }

  const publishedDate = post.publishedAt ? new Date(post.publishedAt).toISOString() : null
  const updatedDate = post.updatedAt ? new Date(post.updatedAt).toISOString() : null

  return {
    title: post.seo?.title || post.title,
    description: post.seo?.description || post.excerpt,
    keywords: post.seo?.keywords?.join(', ') || post.tags?.join(', '),
    authors: [{ name: post.author?.name || 'AGP Nature Villa' }],
    openGraph: {
      title: post.seo?.ogTitle || post.title,
      description: post.seo?.ogDescription || post.excerpt,
      type: 'article',
      publishedTime: publishedDate,
      modifiedTime: updatedDate,
      authors: [post.author?.name || 'AGP Nature Villa'],
      images: post.seo?.ogImage || post.featuredImage ? [
        {
          url: post.seo?.ogImage || post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : [],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo?.title || post.title,
      description: post.seo?.description || post.excerpt,
      images: post.seo?.ogImage || post.featuredImage ? [post.seo?.ogImage || post.featuredImage] : [],
    },
    alternates: {
      canonical: `https://agpnaturevilla.com/blog/${params.slug}`,
    },
  }
}

export default async function BlogPostPage({ params }) {
  const [post, relatedPosts, taxonomy] = await Promise.all([
    getBlogPost(params.slug),
    getRelatedPosts(params.slug),
    getTaxonomy()
  ])
  
  if (!post) {
    notFound()
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.featuredImage,
    "author": {
      "@type": "Person",
      "name": post.author?.name || "AGP Nature Villa"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AGP Nature Villa",
      "logo": {
        "@type": "ImageObject",
        "url": "https://agpnaturevilla.com/logo.png"
      }
    },
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://agpnaturevilla.com/blog/${params.slug}`
    },
    "keywords": post.tags?.join(', '),
    "articleSection": post.categories?.[0],
    "wordCount": post.content?.length || 0,
    ...(post.seo?.structuredData || {})
  }

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              <Suspense fallback={<Loading />}>
                <BlogPost post={post} relatedPosts={relatedPosts} />
              </Suspense>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <Suspense fallback={<div className="h-64 bg-gray-50 rounded shadow animate-pulse" />}>
                <BlogSidebar 
                  categories={taxonomy.categories.map(cat => cat.name)}
                  tags={taxonomy.tags.map(tag => tag.name)}
                  currentPost={post}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}