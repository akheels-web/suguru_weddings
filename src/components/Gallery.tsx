'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface GalleryItem {
  id: number
  public_id: string
  url: string
  category: string
  title: string | null
  description: string | null
  alt_text: string | null
}

const Gallery = ({ limit }: { limit?: number }) => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [images, setImages] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchGalleryImages()
  }, [selectedCategory])

  const fetchGalleryImages = async () => {
    try {
      const query = selectedCategory === 'all' 
        ? '' 
        : `?category=${selectedCategory}`
      
      const response = await fetch(`/api/gallery${query}`)
      const data = await response.json()
      
      if (data.images) {
        setImages(data.images)
      }
    } catch (error) {
      console.error('Error fetching images:', error)
    } finally {
      setLoading(false)
    }
  }

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'wedding', name: 'Weddings' },
    { id: 'prewedding', name: 'Pre-Weddings' },
    { id: 'ceremony', name: 'Ceremonies' },
    { id: 'couple', name: 'Couples' },
  ]

  const displayItems = limit ? images.slice(0, limit) : images

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold"></div>
      </div>
    )
  }

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
            className="relative group overflow-hidden cursor-pointer aspect-square"
          >
            <div className="relative w-full h-full">
              <Image
                src={item.url}
                alt={item.alt_text || item.title || 'Wedding photo'}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {(item.title || item.description) && (
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/80 to-transparent">
                {item.title && (
                  <h3 className="text-white font-playfair text-lg mb-1">
                    {item.title}
                  </h3>
                )}
                {item.description && (
                  <p className="text-gray-200 text-sm">{item.description}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
