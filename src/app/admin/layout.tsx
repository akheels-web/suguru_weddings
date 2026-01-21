import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/lib/auth'
import AdminHeader from '@/components/admin/AdminHeader'
import AdminSidebar from '@/components/admin/AdminSidebar'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Admin Dashboard - Suguru Weddings',
  description: 'Admin dashboard for managing wedding photography content',
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getCurrentUser()
  
  if (!user) {
    redirect('/admin/login')
  }
  
  return (
    <div className="min-h-screen bg-gray-100">
      <AdminHeader />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-6 pt-24">
          {children}
        </main>
      </div>
    </div>
  )
}
