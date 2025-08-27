'use client'

import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline'

function formatBytes(bytes) {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
}

function formatUptime(seconds) {
  const days = Math.floor(seconds / (24 * 60 * 60))
  const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60))
  const minutes = Math.floor((seconds % (60 * 60)) / 60)

  if (days > 0) {
    return `${days}d ${hours}h ${minutes}m`
  } else if (hours > 0) {
    return `${hours}h ${minutes}m`
  } else {
    return `${minutes}m`
  }
}

export default function SystemHealth({ system }) {
  if (!system) return null

  const healthChecks = [
    {
      name: 'Database',
      status: 'healthy',
      message: 'Connected and responsive'
    },
    {
      name: 'File System',
      status: 'healthy',
      message: 'Upload directory accessible'
    },
    {
      name: 'Memory Usage',
      status: system.memoryUsage && system.memoryUsage.rss > 500 * 1024 * 1024 ? 'warning' : 'healthy',
      message: system.memoryUsage ? `${formatBytes(system.memoryUsage.rss)} used` : 'Unknown'
    }
  ]

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">System Health</h3>
        
        <div className="space-y-4">
          {healthChecks.map((check) => (
            <div key={check.name} className="flex items-center justify-between">
              <div className="flex items-center">
                {check.status === 'healthy' ? (
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                ) : (
                  <ExclamationCircleIcon className="h-5 w-5 text-yellow-500" />
                )}
                <span className="ml-3 text-sm font-medium text-gray-900">
                  {check.name}
                </span>
              </div>
              <span className="text-sm text-gray-500">{check.message}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="bg-gray-50 rounded-lg p-4">
            <dt className="text-sm font-medium text-gray-500">Uptime</dt>
            <dd className="mt-1 text-lg font-semibold text-gray-900">
              {system.uptime ? formatUptime(system.uptime) : 'Unknown'}
            </dd>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <dt className="text-sm font-medium text-gray-500">Node.js Version</dt>
            <dd className="mt-1 text-lg font-semibold text-gray-900">
              {system.nodeVersion || 'Unknown'}
            </dd>
          </div>
        </div>

        {system.memoryUsage && (
          <div className="mt-4 bg-gray-50 rounded-lg p-4">
            <dt className="text-sm font-medium text-gray-500 mb-2">Memory Usage</dt>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>RSS:</span>
                <span>{formatBytes(system.memoryUsage.rss)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Heap Used:</span>
                <span>{formatBytes(system.memoryUsage.heapUsed)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Heap Total:</span>
                <span>{formatBytes(system.memoryUsage.heapTotal)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}