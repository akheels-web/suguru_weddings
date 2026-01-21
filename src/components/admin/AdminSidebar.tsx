'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  FiHome,
  FiImage,
  FiCamera,
  FiSettings,
  FiUsers,
  FiMessageSquare
} from 'react-icons/fi'

const menuItems = [
  { href: '/admin/dashboard', icon: FiHome, label: 'Dashboard' },
  { href: '/admin/gallery', icon: FiImage, label: 'Gallery' },
  { href: '/admin/hero', icon: FiCamera, label: 'Hero Images' },
  { href: '/admin/messages', icon: FiMessageSquare, label: 'Messages' },
  { href: '/admin/users', icon: FiUsers, label: 'Users' },
  { href: '/admin/settings', icon: FiSettings, label: 'Settings' },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden md:block w-64 bg-white shadow-md min-h-[calc(100vh-4rem)] mt-16">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-gold text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
