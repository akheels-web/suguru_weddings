import Hero from '@/components/Hero'
import Gallery from '@/components/Gallery'
import { FiCamera, FiVideo, FiUsers, FiAward } from 'react-icons/fi'

export default function Home() {
  const features = [
    {
      icon: <FiCamera className="w-8 h-8" />,
      title: 'Premium Photography',
      description: 'High-resolution, artistic wedding photography capturing every emotion.'
    },
    {
      icon: <FiVideo className="w-8 h-8" />,
      title: 'Cinematic Videography',
      description: 'Storytelling through cinematic wedding films that last forever.'
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'Expert Team',
      description: 'Experienced photographers specializing in South Indian weddings.'
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      title: 'Award Winning',
      description: 'Recognized excellence in wedding photography across India.'
    }
  ]

  return (
    <>
      <Hero />
      
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair mb-4">
              Why Choose <span className="text-gold">Suguru Weddings</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We blend traditional elegance with contemporary style to create timeless memories
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cream flex items-center justify-center text-gold">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-playfair mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair mb-4">
              Featured <span className="text-gold">Weddings</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A glimpse into the beautiful stories we've captured
            </p>
          </div>
          <Gallery limit={6} />
          <div className="text-center mt-12">
            <a href="/portfolio" className="btn-secondary">
              View Full Portfolio
            </a>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-charcoal text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-playfair mb-6">
            Ready to Capture Your Special Day?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us for a personalized consultation and let's discuss how we can make your wedding memories timeless.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary bg-gold hover:bg-opacity-90">
              Book a Consultation
            </a>
            <a href="tel:+919876543210" className="btn-secondary border-white text-white hover:bg-white hover:text-charcoal">
              Call Now: +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
