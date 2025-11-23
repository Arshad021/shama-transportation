'use client'

import FleetCard from "@/components/FleetCard"
import ContactForm from "@/components/ContactForm"

const fleet = [
  {
    title: '7‑Seater Van / Kia Sedona',
    desc: 'Ideal for airport pick‑ups and small‑group city tours in Abu Dhabi.',
    image: '',
    pax: 7,
    luggage: 5
  },
  {
    title: 'Executive Sedan',
    desc: 'Luxury sedan for business or couple travellers seeking premium comfort.',
    image: '',
    pax: 3,
    luggage: 3
  },
  {
    title: '22‑Seater Minibus / Toyota Coaster',
    desc: 'Spacious mid‑sized minibus ideal for tours, staff transfers and group travel.',
    image: '',
    pax: 22,
    luggage: 20
  }
]

export default function AbuDhabiCityTourPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 space-y-16">

      {/* Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden h-[400px] mb-12 bg-gray-100 flex items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 text-center px-4">
          Abu Dhabi City Tour
        </h1>
      </div>

      {/* Overview + Included/Excluded Section */}
      <div className="grid md:grid-cols-2 gap-12 text-gray-700">
        {/* Left Column */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Tour Overview</h2>
          <p>
            Experience the capital like never before with Shama Passenger Transport. Enjoy a full‑day sightseeing journey through Abu Dhabi’s majestic landmarks, cultural treasures, and modern marvels.
          </p>
          <p>
            Whether you’re visiting the Sheikh Zayed Grand Mosque, cruising the Corniche, exploring Yas Island or wandering through the Heritage Village — we provide modern air‑conditioned vehicles and professional English/Arabic speaking chauffeurs for a comfortable and memorable journey.
          </p>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">What’s Included & Excluded</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Hotel or airport pick‑up & drop‑off in Abu Dhabi</li>
            <li>Visit to Sheikh Zayed Grand Mosque</li>
            <li>Photo stops along the Abu Dhabi Corniche & Presidential Palace area</li>
            <li>Yas Island pass‑by (Ferrari World viewing, optional entry)</li>
            <li>Professional chauffeur, fuel, tolls & parking included</li>
          </ul>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li><strong>Excluded:</strong> Lunch, museum entry fees, optional tickets</li>
          </ul>
        </div>
      </div>

      {/* Fleet Section */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Vehicles Available for This Tour</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {fleet.map((v, i) => <FleetCard key={i} {...v} />)}
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
