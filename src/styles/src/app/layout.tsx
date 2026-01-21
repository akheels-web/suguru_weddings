import type { Metadata } from 'next'
import { Montserrat, Playfair_Display } from 'next/font/google'
import '../styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Suguru Weddings - Premium Wedding Photography in Hyderabad',
  description: 'Capturing timeless wedding moments in Hyderabad with artistic photography. Professional wedding photography services for South Indian weddings.',
  keywords: 'wedding photography Hyderabad, pre-wedding shoot, candid photography, Hyderabad photographer',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://suguruweddings.com',
    title: 'Suguru Weddings - Premium Wedding Photography',
    description: 'Capturing timeless wedding moments in Hyderabad',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
