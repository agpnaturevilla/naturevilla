'use client'

import { 
  DocumentTextIcon, 
  NewspaperIcon, 
  PhotoIcon, 
  UsersIcon 
} from '@heroicons/react/24/outline'

export default function DashboardStats({ stats }) {
  if (!stats) return null

  const statCards = [
    {
      name: 'Total Pages',
      value: stats.pages?.total || 0,
      subtext: `${stats.pages?.published || 0} published, ${stats.pages?.draft || 0} drafts`,
      icon: DocumentTextIcon,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      name: 'Blog Posts',
      value: stats.blog?.total || 0,
      subtext: `${stats.blog?.published || 0} published, ${stats.blog?.draft || 0} drafts`,
      icon: NewspaperIcon,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      name: 'Media Files',
      value: stats.media?.total || 0,
      subtext: 'Images and documents',
      icon: PhotoIcon,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      name: 'Users',
      value: stats.users?.total || 0,
      subtext: 'Admin and editor accounts',
      icon: UsersIcon,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {statCards.map((item) => (
        <div
          key={item.name}
          className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6 sm:py-6"
        >
          <dt>
            <div className={`absolute rounded-md ${item.bgColor} p-3`}>
              <item.icon className={`h-6 w-6 ${item.color}`} aria-hidden="true" />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">
              {item.name}
            </p>
          </dt>
          <dd className="ml-16 flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
          </dd>
          <div className="ml-16 mt-1">
            <p className="text-xs text-gray-500">{item.subtext}</p>
          </div>
        </div>
      ))}
    </div>
  )
}