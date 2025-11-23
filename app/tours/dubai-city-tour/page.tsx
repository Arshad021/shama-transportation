'use client'

import FleetCard from "@/components/FleetCard"
import ContactForm from "@/components/ContactForm"

const fleet = [
  { title: '7‑Seater Van / Kia Sedona', desc: 'Perfect for small groups and airport pick-ups.', image: '', pax:7, luggage:5 },
  { title: 'Executive Sedan', desc: 'Luxury sedan for couples or business travelers.', image: '', pax:3, luggage:3 },
  { title: '22‑Seater Minibus / Toyota Coaster', desc: 'Ideal for larger groups and city tours.', image: '', pax:22, luggage:20 },
]

export default function DubaiCityTourPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 space-y-16">

      {/* Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden h-[400px] mb-12 bg-gray-100 flex items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 text-center px-4">
          Dubai City Tour
        </h1>
      </div>

      {/* Overview + Included/Excluded Section */}
      <div className="grid md:grid-cols-2 gap-12 text-gray-700">
        {/* Left Column */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Tour Overview</h2>
          <p>
            Explore Dubai’s iconic landmarks with Shama Passenger Transport. Visit Burj Khalifa, Dubai Marina, Palm Jumeirah, and other famous attractions with ease and comfort.
          </p>
          <p>
            Enjoy door-to-door pick-ups, professional chauffeurs, modern air-conditioned vehicles, and a seamless experience for both small and large groups.
          </p>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">What’s Included & Excluded</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Hotel or airport pick-up & drop-off in Dubai</li>
            <li>Visit to main Dubai attractions and landmarks</li>
            <li>Professional chauffeur, fuel, tolls & parking included</li>
          </ul>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
            <li><strong>Excluded:</strong> Entry tickets, meals, personal expenses</li>
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
        <h2 className="text-3xl font-bold mb-8 text-center">Book Your Dubai City Tour</h2>
        <ContactForm />
      </div>

    </section>
  )
}
