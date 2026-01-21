import DashboardStats from '@/components/admin/DashboardStats'

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
      
      <DashboardStats />
      
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b">
              <span className="text-sm">New image uploaded</span>
              <span className="text-xs text-gray-500">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <span className="text-sm">Contact form submission</span>
              <span className="text-xs text-gray-500">5 hours ago</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <a
              href="/admin/gallery"
              className="block w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
            >
              📸 Upload New Images
            </a>
            <a
              href="/admin/hero"
              className="block w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
            >
              🖼️ Manage Hero Images
            </a>
            <a
              href="/contact"
              className="block w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray
