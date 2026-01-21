import { FiCamera, FiVideo, FiImage, FiFilm, FiPackage, FiCheck } from 'react-icons/fi'

export default function ServicesPage() {
  const services = [
    {
      icon: <FiCamera className="w-8 h-8" />,
      title: 'Wedding Photography',
      description: 'Full-day coverage of your wedding with traditional and candid photography.',
      features: ['Full-day coverage', 'Multiple photographers', 'Traditional & candid shots', 'High-resolution images']
    },
    {
      icon: <FiVideo className="w-8 h-8" />,
      title: 'Cinematography',
      description: 'Cinematic wedding films that tell your love story.',
      features: ['Highlight film', 'Full-length documentary', 'Drone shots', 'Same-day edit']
    },
    {
      icon: <FiImage className="w-8 h-8" />,
      title: 'Pre-Wedding Shoots',
      description: 'Romantic pre-wedding sessions at locations of your choice.',
      features: ['2-3 hour session', 'Multiple locations', 'Outfit changes', 'Digital album']
    },
    {
      icon: <FiFilm className="w-8 h-8" />,
      title: 'Sangeet & Haldi',
      description: 'Capture the vibrant colors and emotions of pre-wedding ceremonies.',
      features: ['Half-day coverage', 'Candid moments', 'Family portraits', 'Ceremony highlights']
    },
    {
      icon: <FiPackage className="w-8 h-8" />,
      title: 'Destination Weddings',
      description: 'Complete wedding coverage for destination weddings across India.',
      features: ['Travel included', 'Multi-day coverage', 'Local expertise', 'Custom packages']
    },
    {
      icon: <FiCamera className="w-8 h-8" />,
      title: 'Bridal Portraits',
      description: 'Elegant bridal portraits capturing your beauty and grace.',
      features: ['Studio/outdoor', 'Professional makeup', 'Multiple outfits', 'Fine art editing']
    }
  ]

  return (
    <div className="pt-24">
      <div className="bg-charcoal text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair mb-6">
            Our <span className="text-gold">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive photography and videography packages tailored for your special day.
          </p>
        </div>
      </div>

      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 mb-6 rounded-full bg-cream flex items-center justify-center text-gold">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-playfair mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <FiCheck className="w-5 h-5 text-gold mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className="btn-secondary inline-block mt-8">
                  Inquire Now
                </a>
              </div>
            ))}
          </div>

          <div className="mt-24 bg-cream p-12 text-center">
            <h2 className="text-3xl font-playfair mb-6">
              Custom
