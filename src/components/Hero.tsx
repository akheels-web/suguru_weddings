'use client'

import { useEffect, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0)
  
  const images = [
    '/images/hero/hero1.jpg',
    '/images/hero/hero2.jpg',
    '/images/hero/hero3.jpg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair mb-6 tracking-tight">
          Suguru<span className="text-gold">Weddings</span>
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto tracking-wider">
          Capturing Timeless Love Stories in Hyderabad & Beyond
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/portfolio" className="btn-primary">
            View Our Work
          </a>
          <a href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-charcoal">
            Book Your Date
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <FiChevronDown className="w-6 h-6 text-white animate-bounce" />
      </div>
    </section>
  )
}

export default Hero
