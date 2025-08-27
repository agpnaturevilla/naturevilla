import { Inter } from 'next/font/google'
import AdminProvider from '../../components/Admin/AdminProvider'
import AdminSidebar from '../../components/Admin/AdminSidebar'
import AdminHeader from '../../components/Admin/AdminHeader'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admin Panel - AGP Nature Villa',
  description: 'Content management system for AGP Nature Villa',
  robots: {
    index: false,
    follow: false
  }
}

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AdminProvider>
          <div className="min-h-screen bg-gray-50">
            <AdminSidebar />
            <div className="lg:pl-72">
              <AdminHeader />
              <main className="py-6">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </AdminProvider>
      </body>
    </html>
  )
}