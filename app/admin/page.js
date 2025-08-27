'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '../../components/Admin/AdminProvider'
import DashboardStats from '../../components/Admin/Dashboard/DashboardStats'
import RecentActivity from '../../components/Admin/Dashboard/RecentActivity'
import SystemHealth from '../../components/Admin/Dashboard/SystemHealth'
import QuickActions from '../../components/Admin/Dashboard/QuickActions'
import Loading from '../../components/UI/Loading'

export default function AdminDashboard() {
  const { user, loading } = useAuth()
  const [dashboardData, setDashboardData] = useState(null)
  const [dashboardLoading, setDashboardLoading] = useState(true)

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem('token')
        if (!token) return

        const response = await fetch('/api/admin/dashboard', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })

        if (response.ok) {
          const data = await response.json()
          setDashboardData(data)
        }
      } catch (error) {
        console.error('Error fetching dashboard data:', error)
      } finally {
        setDashboardLoading(false)
      }
    }

    if (user) {
      fetchDashboardData()
    }
  }, [user])

  if (loading || dashboardLoading) {
    return <Loading />
  }

  if (!user) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900">Access Denied</h1>
        <p className="mt-2 text-gray-600">Please log in to access the admin panel.</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Welcome back, {user.name}. Here's what's happening with your villa website.
        </p>
      </div>

      {/* Quick Actions */}
      <QuickActions />

      {/* Stats Grid */}
      {dashboardData && <DashboardStats stats={dashboardData.stats} />}

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        {dashboardData && (
          <RecentActivity activity={dashboardData.recentActivity} />
        )}

        {/* System Health */}
        {dashboardData && (
          <SystemHealth system={dashboardData.system} />
        )}
      </div>
    </div>
  )
}