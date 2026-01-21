'use client'

import { useState } from 'react'
import { FiLogOut, FiUser, FiMenu, FiX } from 'react-icons/fi'
import { useRouter } from 'next/navigation'

export default function AdminHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      })
      
      if (response.ok) {
        router.push('/admin/login')
      }
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              className="md:hidden mr-4"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
            <h1 className="text-xl font-semibold text-gray-800">
              Suguru Weddings Admin
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FiUser className="w-5 h-5 text-gray-600" />
              <span className="hidden md:inline text-sm font-medium">
                Admin
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-red-600 hover:text-red-800 transition-colors"
            >
              <FiLogOut className="w-5 h-5" />
              <span className="hidden md:inline text-sm font-medium">
                Logout
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
