import { FiInstagram, FiFacebook, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-playfair font-bold tracking-wider mb-6">
              Suguru<span className="text-gold">Weddings</span>
            </div>
            <p className="text-gray-400 mb-6">
              Capturing timeless wedding moments in Hyderabad with artistic photography and cinematography.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                <FiInstagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                <FiFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-playfair mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-gold transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-playfair mb-6">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Wedding Photography</li>
              <li>Pre-Wedding Shoots</li>
              <li>Candid Photography</li>
              <li>Cinematography</li>
              <li>Destination Weddings</li>
              <li>Album Design</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-playfair mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FiMapPin className="w-5 h-5 text-gold mt-1" />
                <div>
                  <p className="text-gray-400">Banjara Hills</p>
                  <p className="text-gray-400">Hyderabad, Telangana 500034</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5 text-gold" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-gold transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="w-5 h-5 text-gold" />
                <a href="mailto:contact@suguruweddings.com" className="text-gray-400 hover:text-gold transition-colors">
                  contact@suguruweddings.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Suguru Weddings. All rights reserved.</p>
          <p className="mt-2">Wedding Photography Services in Hyderabad, India</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
