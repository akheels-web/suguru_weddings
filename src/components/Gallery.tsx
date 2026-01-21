'use client'

import { useState } from 'react'

interface GalleryProps {
  limit?: number
}

const Gallery = ({ limit }: GalleryProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const galleryItems = [
    { id: 1, category: 'wedding', src: '/images/gallery/wedding1.jpg', alt: 'Traditional South Indian Wedding' },
    { id: 2, category: 'prewedding', src: '/images/gallery/prewedding1.jpg', alt: 'Romantic Pre-Wedding Shoot' },
    { id: 3, category: 'ceremony', src: '/images/gallery/ceremony1.jpg', alt: 'Wedding Ceremony' },
    { id: 4, category: 'couple', src: '/images/gallery/couple1.jpg', alt: 'Candid Couple Moments' },
    { id: 5, category: 'wedding', src: '/images/gallery/wedding2.jpg', alt: 'Bridal Portraits' },
    { id: 6, category: 'prewedding', src: '/images/gallery/prewedding2.jpg', alt: 'Engagement Shoot' },
    { id: 7, category: 'ceremony', src: '/images/gallery/ceremony2.jpg', alt: 'Traditional Rituals' },
    { id: 8, category: 'couple', src: '/images/gallery/couple2.jpg', alt: 'Love Story' },
  ]

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'wedding', name: 'Weddings' },
    { id: 'prewedding', name: 'Pre-Weddings' },
    { id: 'ceremony', name: 'Ceremonies' },
    { id: 'couple', name: 'Couples' },
  ]

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-2 rounded-none border font-medium tracking-wider transition-all duration-300 ${
              selectedCategory === category.id
                ? 'bg-gold text-white border-gold'
                : 'border-gray-300 text-gray-700 hover:border-gold'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayItems.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden cursor-pointer aspect-square bg-gray-200"
          >
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">Image: {item.alt}</span>
            </div>
            <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/20 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-white font-medium">{item.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
