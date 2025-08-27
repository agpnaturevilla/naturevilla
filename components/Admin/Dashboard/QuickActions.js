'use client'

import Link from 'next/link'
import { 
  PlusIcon, 
  DocumentTextIcon, 
  NewspaperIcon, 
  PhotoIcon,
  EyeIcon
} from '@heroicons/react/24/outline'

export default function QuickActions() {
  const actions = [
    {
      name: 'New Page',
      description: 'Create a new page with content blocks',
      href: '/admin/pages/new',
      icon: DocumentTextIcon,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 hover:bg-blue-100'
    },
    {
      name: 'New Blog Post',
      description: 'Write and publish a blog post',
      href: '/admin/blog/new',
      icon: NewspaperIcon,
      color: 'text-green-600',
      bgColor: 'bg-green-50 hover:bg-green-100'
    },
    {
      name: 'Upload Media',
      description: 'Add images to your media library',
      href: '/admin/media?action=upload',
      icon: PhotoIcon,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 hover:bg-purple-100'
    },
    {
      name: 'View Site',
      description: 'Preview your live website',
      href: '/',
      icon: EyeIcon,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 hover:bg-orange-100',
      external: true
    }
  ]

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="p-6">
        <div className="flex items-center">
          <PlusIcon className="h-5 w-5 text-gray-400" />
          <h3 className="ml-2 text-lg font-medium text-gray-900">Quick Actions</h3>
        </div>
        
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {actions.map((action) => {
            const LinkComponent = action.external ? 'a' : Link
            const linkProps = action.external 
              ? { href: action.href, target: '_blank', rel: 'noopener noreferrer' }
              : { href: action.href }

            return (
              <LinkComponent
                key={action.name}
                {...linkProps}
                className={`relative rounded-lg border-2 border-dashed border-gray-300 p-4 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors ${action.bgColor}`}
              >
                <action.icon className={`mx-auto h-8 w-8 ${action.color}`} />
                <span className="mt-2 block text-sm font-medium text-gray-900">
                  {action.name}
                </span>
                <span className="mt-1 block text-sm text-gray-500">
                  {action.description}
                </span>
              </LinkComponent>
            )
          })}
        </div>
      </div>
    </div>
  )
}