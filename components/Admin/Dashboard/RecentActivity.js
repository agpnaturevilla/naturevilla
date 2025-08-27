'use client'

import Link from 'next/link'
import { 
  DocumentTextIcon, 
  NewspaperIcon, 
  PhotoIcon,
  ClockIcon 
} from '@heroicons/react/24/outline'

function formatDate(dateString) {
  const date = new Date(dateString)
  const now = new Date()
  const diffMs = now - date
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  
  if (diffDays === 0) {
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
    if (diffHours === 0) {
      const diffMinutes = Math.floor(diffMs / (1000 * 60))
      return `${diffMinutes}m ago`
    }
    return `${diffHours}h ago`
  } else if (diffDays === 1) {
    return 'Yesterday'
  } else if (diffDays < 7) {
    return `${diffDays}d ago`
  } else {
    return date.toLocaleDateString()
  }
}

export default function RecentActivity({ activity }) {
  if (!activity) return null

  const allActivity = []

  // Add pages
  if (activity.pages) {
    activity.pages.forEach(page => {
      allActivity.push({
        type: 'page',
        icon: DocumentTextIcon,
        title: page.title,
        subtitle: `Page ${page.status}`,
        href: `/admin/pages/${page._id}`,
        date: page.lastModified,
        status: page.status
      })
    })
  }

  // Add blog posts
  if (activity.blog) {
    activity.blog.forEach(blog => {
      allActivity.push({
        type: 'blog',
        icon: NewspaperIcon,
        title: blog.title,
        subtitle: `Blog post ${blog.status}`,
        href: `/admin/blog/${blog._id}`,
        date: blog.updatedAt,
        status: blog.status
      })
    })
  }

  // Add media
  if (activity.media) {
    activity.media.forEach(media => {
      allActivity.push({
        type: 'media',
        icon: PhotoIcon,
        title: media.originalName,
        subtitle: `${media.category} image uploaded`,
        href: `/admin/media`,
        date: media.createdAt,
        status: 'uploaded'
      })
    })
  }

  // Sort by date
  allActivity.sort((a, b) => new Date(b.date) - new Date(a.date))

  const getStatusColor = (status) => {
    switch (status) {
      case 'published':
        return 'text-green-600 bg-green-100'
      case 'draft':
        return 'text-yellow-600 bg-yellow-100'
      case 'uploaded':
        return 'text-blue-600 bg-blue-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="p-6">
        <div className="flex items-center">
          <ClockIcon className="h-5 w-5 text-gray-400" />
          <h3 className="ml-2 text-lg font-medium text-gray-900">Recent Activity</h3>
        </div>
        
        <div className="mt-6 flow-root">
          <ul className="-mb-8">
            {allActivity.slice(0, 10).map((item, itemIdx) => (
              <li key={`${item.type}-${itemIdx}`}>
                <div className="relative pb-8">
                  {itemIdx !== allActivity.slice(0, 10).length - 1 ? (
                    <span
                      className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex items-start space-x-3">
                    <div className="relative">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 ring-8 ring-white">
                        <item.icon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <div className="text-sm">
                          <Link
                            href={item.href}
                            className="font-medium text-gray-900 hover:text-primary-600"
                          >
                            {item.title}
                          </Link>
                        </div>
                        <div className="mt-1 flex items-center space-x-2">
                          <p className="text-sm text-gray-500">{item.subtitle}</p>
                          <span
                            className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(item.status)}`}
                          >
                            {item.status}
                          </span>
                        </div>
                      </div>
                      <div className="mt-2 text-sm text-gray-700">
                        <time dateTime={item.date}>{formatDate(item.date)}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        {allActivity.length === 0 && (
          <div className="mt-6 text-center">
            <ClockIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No recent activity</h3>
            <p className="mt-1 text-sm text-gray-500">
              Get started by creating a page or blog post.
            </p>
          </div>
        )}
        
        {allActivity.length > 10 && (
          <div className="mt-6 text-center">
            <Link
              href="/admin/activity"
              className="text-sm font-medium text-primary-600 hover:text-primary-500"
            >
              View all activity →
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}