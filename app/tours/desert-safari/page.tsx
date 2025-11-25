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

export default function DesertSafariPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 space-y-20">

      {/* Banner */}
      <div className="relative h-[350px] bg-gray-100 rounded-2xl flex items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800">
          Private Evening Desert Safari
        </h1>
        <img
    src="/images/WhatsApp Image 2025-11-25 at 12.30.57.jpeg"
    alt="Abu Dhabi City Tour"
    className="absolute inset-0 w-full h-full object-cover"
  />
      </div>

      {/* Overview + Highlights */}
      <div className="grid md:grid-cols-2 gap-12 text-gray-700">

        {/* Overview Left */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Tour Overview</h2>
          <p>
            Experience the thrill of the Arabian Desert with our Private Evening Desert Safari. 
            Enjoy an exclusive adventure with professional drivers, modern 4×4 vehicles, 
            and unforgettable scenic views during sunset.
          </p>
          <p>
            Perfect for families, couples, and VIP guests looking for a comfortable 
            and completely private tour experience.
          </p>
        </div>

        {/* Highlights Right */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Tour Highlights</h2>

          <ul className="list-disc list-inside space-y-2">
            <li>Private 4×4 Land Cruiser</li>
            <li>Dune Bashing by Expert Drivers</li>
            <li>Sunset Photography Stop</li>
            <li>Camel Ride Experience</li>
            <li>Sandboarding</li>
            <li>BBQ Buffet Dinner at Desert Camp</li>
            <li>Live Shows (Belly Dance, Tanoura, Fire Show)</li>
          </ul>
        </div>

      </div>

      {/* Inclusions + Exclusions */}
      <div className="grid md:grid-cols-2 gap-12 text-gray-700">
        {/* Included */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">What’s Included</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Private 4×4 pick-up and drop-off</li>
            <li>Dune bashing and desert drive</li>
            <li>Camel riding experience</li>
            <li>Sandboarding</li>
            <li>Bottled drinking water</li>
            <li>BBQ Dinner (Veg & Non-veg)</li>
            <li>Live entertainment shows</li>
          </ul>
        </div>

        {/* Excluded */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">What’s Not Included</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Quad biking (available at extra cost)</li>
            <li>Dune buggy experience</li>
            <li>Premium table seating upgrade</li>
            <li>Personal expenses or souvenirs</li>
          </ul>
        </div>
      </div>

      {/* Fleet Section */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Vehicles Available</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {fleet.map((v, i) => (
            <FleetCard key={i} {...v} />
          ))}
        </div>
      </div>

      {/* Booking Form */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Book Your Desert Safari</h2>
        <ContactForm />
      </div>

    </section>
  )
}
