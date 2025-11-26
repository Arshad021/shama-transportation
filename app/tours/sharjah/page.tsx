'use client'

import FleetCard from "@/components/FleetCard"
import ContactForm from "@/components/ContactForm"

const fleet = [
  {
    title: '7‑Seater Van / Kia Sedona',
    desc: 'Ideal for small groups and family tours in Ajman.',
    image: '/images/WhatsApp_Image_2025-11-26_at_7.45.48_PM-removebg-preview.png',
    pax: 7,
    luggage: 4
  },
  {
    title: 'Executive Sedan',
    desc: 'Luxury sedan for business or couple travellers seeking premium comfort.',
    image: '/images/TOYOTA 7 SEATER.png',
    pax: 3,
    luggage: 3
  },
  {
    title: '22‑Seater Minibus / Toyota Coaster',
    desc: 'Perfect for larger groups, corporate travel, and city tours in Ajman.',
    image: '/images/TOYOTA_COASTER_22_SEATER-removebg-preview.png',
    pax: 22,
    luggage: 20
  }
]

export default function SharjahCityTourPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 space-y-16">

      {/* Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden h-[400px] mb-12 bg-gray-100 flex items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 text-center px-4">
          Sharjah City Tour
        </h1>
      </div>

      {/* Overview + Included/Excluded Section */}
      <div className="grid md:grid-cols-2 gap-12 text-gray-700">
        {/* Left Column */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Tour Overview</h2>
          <p>
            Explore the cultural heart of Sharjah with Shama Passenger Transport. This tour offers a blend of history, art, and modern attractions for a complete city experience.
          </p>
          <p>
            Visit the Sharjah Museum of Islamic Civilization, stroll along the Corniche, admire the Blue Souq, and experience the vibrant local markets. Our modern, air-conditioned vehicles and professional chauffeurs ensure comfort and safety throughout your journey.
          </p>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">What’s Included & Excluded</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Hotel or airport pick‑up & drop‑off in Sharjah</li>
            <li>Visit to Sharjah Museum of Islamic Civilization</li>
            <li>Photo stops at Sharjah Corniche & Blue Souq</li>
            <li>Optional visits to local markets and attractions</li>
            <li>Professional chauffeur, fuel, tolls & parking included</li>
          </ul>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li><strong>Excluded:</strong> Lunch, entry tickets for optional attractions</li>
          </ul>
        </div>
      </div>

      

      {/* Booking Form Section */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Book Your Tour</h2>
        <ContactForm />
      </div>

    </section>
  )
}
