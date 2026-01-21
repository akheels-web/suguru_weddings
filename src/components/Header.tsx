'use client'

import { useState } from 'react'
import { FiMenu, FiX, FiInstagram, FiFacebook } from 'react-icons/fi'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ]

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-playfair font-bold tracking-wider">
              Suguru<span className="text-gold">Weddings</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-gold transition-colors duration-300 font-medium tracking-wide uppercase text-sm"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FiInstagram className="w-5 h-5 text-gray-600 hover:text-gold transition-colors" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FiFacebook className="w-5 h-5 text-gray-600 hover:text-gold transition-colors" />
            </a>
            <Link href="/contact" className="btn-primary">
              Book Now
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gold hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex space-x-4 px-3 py-2">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FiInstagram className="w-5 h-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FiFacebook className="w-5 h-5" />
                </a>
              </div>
              <Link
                href="/contact"
                className="block px-3 py-2 btn-primary text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
