'use client'

import { FiMessageSquare } from 'react-icons/fi'

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi, I'm interested in wedding photography services from suguruweddings.com"
    const phone = "919876543210"
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-40 group"
      aria-label="Contact on WhatsApp"
    >
      <FiMessageSquare className="w-6 h-6" />
      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-[#25D366] text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Message us on WhatsApp
      </div>
    </button>
  )
}

export default WhatsAppButton
