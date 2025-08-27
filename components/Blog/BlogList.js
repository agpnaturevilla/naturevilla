'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CalendarDaysIcon, UserIcon, TagIcon } from '@heroicons/react/24/outline'

function BlogCard({ post }) {
  const formattedDate = new Date(post.publishedAt || post.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <article className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500">
      {post.featuredImage && (
        <Link href={`/blog/${post.slug}`}>
          <div className="relative h-56 overflow-hidden">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </Link>
      )}
      
      <div className="p-8">
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.slice(0, 2).map((category) => (
              <span
                key={category}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 capitalize tracking-wide"
              >
                {category}
              </span>
            ))}
          </div>
        )}

        <h2 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-gray-600 transition-colors duration-300">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h2>

        {post.excerpt && (
          <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed text-sm">
            {post.excerpt}
          </p>
        )}

        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <CalendarDaysIcon className="h-4 w-4 mr-1.5 text-gray-400" />
              {formattedDate}
            </div>
            {post.author?.name && (
              <div className="flex items-center">
                <UserIcon className="h-4 w-4 mr-1.5 text-gray-400" />
                {post.author.name}
              </div>
            )}
          </div>
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="flex items-center mb-6">
            <TagIcon className="h-4 w-4 text-gray-400 mr-2" />
            <div className="flex flex-wrap gap-1">
              {post.tags.slice(0, 3).map((tag, index) => (
                <span key={tag} className="text-xs text-gray-500 font-medium">
                  #{tag}{index < Math.min(post.tags.length, 3) - 1 && ', '}
                </span>
              ))}
            </div>
          </div>
        )}

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-600 to-slate-700 text-white font-semibold text-sm rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
        >
          Read Article
          <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  )
}

function BlogGrid({ posts }) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-500 to-slate-600 rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 0a2 2 0 00-2-2H9a2 2 0 00-2 2v1" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">No Stories Yet</h3>
          <p className="text-gray-600 leading-relaxed">We're crafting amazing travel stories and insights for you. Check back soon for inspiring content!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
      {posts.map((post) => (
        <BlogCard key={post._id} post={post} />
      ))}
    </div>
  )
}

export default function BlogList({ initialPosts = [], searchParams = {} }) {
  const [posts, setPosts] = useState(initialPosts)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(1)

  const loadMorePosts = async () => {
    if (loading || !hasMore) return

    setLoading(true)
    try {
      const params = new URLSearchParams({
        limit: '6',
        offset: (page * 6).toString(),
        ...searchParams
      })

      const response = await fetch(`/api/blog?${params}`)
      if (response.ok) {
        const data = await response.json()
        setPosts(prev => [...prev, ...data.posts])
        setHasMore(data.hasMore)
        setPage(prev => prev + 1)
      }
    } catch (error) {
      console.error('Error loading more posts:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <BlogGrid posts={posts} />
      
      {hasMore && (
        <div className="text-center mt-12">
          <button
            onClick={loadMorePosts}
            disabled={loading}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-600 to-slate-700 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {loading ? (
              <div className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading Stories...
              </div>
            ) : (
              'Load More Stories'
            )}
          </button>
        </div>
      )}
    </div>
  )
}