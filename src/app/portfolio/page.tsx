import Gallery from '@/components/Gallery'

export default function PortfolioPage() {
  return (
    <div className="pt-24">
      <div className="bg-charcoal text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair mb-6">
            Our <span className="text-gold">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our collection of timeless wedding moments captured across Hyderabad and beyond.
          </p>
        </div>
      </div>

      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <Gallery />
        </div>
      </div>
    </div>
  )
}
