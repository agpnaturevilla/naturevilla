'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CalendarDaysIcon, UserIcon, TagIcon, ShareIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

function ShareButton({ post }) {
  const [showShare, setShowShare] = useState(false)
  
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  
  const shareLinks = [
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'text-blue-600 hover:text-blue-700'
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`,
      color: 'text-blue-400 hover:text-blue-500'
    },
    {
      name: 'LinkedIn',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: 'text-blue-700 hover:text-blue-800'
    },
    {
      name: 'WhatsApp',
      url: `https://wa.me/?text=${encodeURIComponent(`${post.title} - ${shareUrl}`)}`,
      color: 'text-green-600 hover:text-green-700'
    }
  ]

  return (
    <div className="relative">
      <button
        onClick={() => setShowShare(!showShare)}
        className="flex items-center text-gray-600 hover:text-primary-600 transition-colors duration-200"
      >
        <ShareIcon className="h-5 w-5 mr-1" />
        Share
      </button>
      
      {showShare && (
        <div className="absolute top-8 left-0 bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-10 min-w-[200px]">
          <div className="space-y-2">
            {shareLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block px-3 py-2 text-sm rounded hover:bg-gray-50 transition-colors duration-200 ${link.color}`}
              >
                Share on {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function RelatedPosts({ posts }) {
  if (!posts || posts.length === 0) return null

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Posts</h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post._id} href={`/blog/${post.slug}`}>
            <article className="bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200">
              {post.featuredImage && (
                <div className="relative h-32 overflow-hidden rounded-t-lg">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              )}
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-primary-600 transition-colors duration-200">
                  {post.title}
                </h4>
                {post.excerpt && (
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {post.excerpt}
                  </p>
                )}
                <div className="flex items-center mt-3 text-xs text-gray-500">
                  <CalendarDaysIcon className="h-4 w-4 mr-1" />
                  {new Date(post.publishedAt || post.createdAt).toLocaleDateString()}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function BlogPost({ post, relatedPosts = [] }) {
  const formattedDate = new Date(post.publishedAt || post.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <article className="bg-white">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm">
        <ol className="flex items-center space-x-2 text-gray-500">
          <li>
            <Link href="/" className="hover:text-primary-600 transition-colors duration-200">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/blog/" className="hover:text-primary-600 transition-colors duration-200">
              Blog
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-900 font-medium truncate">{post.title}</li>
        </ol>
      </nav>

      {/* Post Header */}
      <header className="mb-8">
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category) => (
              <Link
                key={category}
                href={`/blog/?category=${encodeURIComponent(category)}`}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 hover:bg-primary-200 transition-colors duration-200 capitalize"
              >
                {category}
              </Link>
            ))}
          </div>
        )}

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            {post.excerpt}
          </p>
        )}

        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-500">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <CalendarDaysIcon className="h-5 w-5 mr-2" />
              {formattedDate}
            </div>
            {post.author?.name && (
              <div className="flex items-center">
                <UserIcon className="h-5 w-5 mr-2" />
                {post.author.name}
              </div>
            )}
          </div>
          <ShareButton post={post} />
        </div>
      </header>

      {/* Featured Image */}
      {post.featuredImage && (
        <div className="relative aspect-video mb-8 overflow-hidden rounded-lg">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 80vw"
            priority
          />
        </div>
      )}

      {/* Post Content */}
      <div 
        className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-img:rounded-lg prose-img:shadow-md"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Gallery */}
      {post.gallery && post.gallery.length > 0 && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Gallery</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {post.gallery.map((image, index) => (
              <div key={index} className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex items-center flex-wrap gap-2">
            <TagIcon className="h-5 w-5 text-gray-400" />
            <span className="text-sm font-medium text-gray-700 mr-2">Tags:</span>
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/?tag=${encodeURIComponent(tag)}`}
                className="inline-flex items-center px-2.5 py-1 rounded-md text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Author Bio */}
      {post.author && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-lg font-semibold text-primary-700">
                  {post.author.name?.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">{post.author.name}</h4>
              <p className="text-gray-600">
                Content writer at AGP Nature Villa, sharing insights about travel, 
                local attractions, and the beauty of Udaipur.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Related Posts */}
      <RelatedPosts posts={relatedPosts} />

      {/* Back to Blog */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link
          href="/blog/"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
        >
          <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to Blog
        </Link>
      </div>
    </article>
  )
}