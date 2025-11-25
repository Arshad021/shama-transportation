'use client'

import FleetCard from "@/components/FleetCard"
import ContactForm from "@/components/ContactForm"

const fleet = [
  {
    title: '7‑Seater Van / Kia Sedona',
    desc: 'Ideal for small groups and family tours in Ajman.',
    image: '/images/KIA_7_SEATER-removebg-preview.png',
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

export default function DubaiCityTourPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 space-y-16">

      {/* Hero Banner */}
<div className="relative rounded-2xl overflow-hidden h-[400px] mb-12 flex items-center justify-center text-center">
  
  {/* Background Image */}
  <img
    src="/images/WhatsApp Image 2025-11-25 at 12.17.18 (1).jpeg"
    alt="Abu Dhabi City Tour"
    className="absolute inset-0 w-full h-full object-cover"
  />
  
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Text */}
  <h1 className="relative text-5xl md:text-6xl font-extrabold text-black px-4">
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
