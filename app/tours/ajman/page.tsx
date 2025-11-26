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

export default function AjmanCityTourPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 space-y-16">

      {/* Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden h-[400px] mb-12 bg-gray-100 flex items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 text-center px-4">
          Ajman City Tour
        </h1>
      </div>

      {/* Overview + Included/Excluded Section */}
      <div className="grid md:grid-cols-2 gap-12 text-gray-700">
        {/* Left Column */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Tour Overview</h2>
          <p>
            Discover Ajman’s serene beauty and cultural charm with Shama Passenger Transport. Enjoy a tour that combines beaches, heritage sites, and local attractions for a relaxing and memorable experience.
          </p>
          <p>
            Visit Ajman Corniche, Ajman Museum, local markets, and the scenic waterfront. All trips are in modern, air-conditioned vehicles with professional chauffeurs ensuring a safe, comfortable, and timely journey.
          </p>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">What’s Included & Excluded</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Hotel or airport pick‑up & drop‑off in Ajman</li>
            <li>Visit to Ajman Corniche & Ajman Museum</li>
            <li>Photo stops at scenic waterfronts and landmarks</li>
            <li>Professional chauffeur, fuel, tolls & parking included</li>
          </ul>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li><strong>Excluded:</strong> Lunch, optional attraction entry fees</li>
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
