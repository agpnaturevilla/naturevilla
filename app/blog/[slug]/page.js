import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import BlogPost from '../../../components/Blog/BlogPost'
import BlogSidebar from '../../../components/Blog/BlogSidebar'
import Layout from '../../../components/Layout/Layout'
import Loading from '../../../components/UI/Loading'

async function getBlogPost(slug) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/blog/post/${slug}`, {
      next: { revalidate: 300 }
    })
    
    if (!res.ok) {
      if (res.status === 404) {
        return null
      }
      throw new Error('Failed to fetch blog post')
    }
    
    return res.json()
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

async function getRelatedPosts(slug) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/blog/related/${slug}`, {
      next: { revalidate: 3600 }
    })
    
    if (!res.ok) {
      return []
    }
    
    return res.json()
  } catch (error) {
    console.error('Error fetching related posts:', error)
    return []
  }
}

async function getTaxonomy() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/blog/taxonomy`, {
      next: { revalidate: 3600 }
    })
    
    if (!res.ok) {
      return { categories: [], tags: [] }
    }
    
    return res.json()
  } catch (error) {
    console.error('Error fetching taxonomy:', error)
    return { categories: [], tags: [] }
  }
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
                  categories={taxonomy.categories}
                  tags={taxonomy.tags}
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