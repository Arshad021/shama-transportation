import FleetCard from './FleetCard'
import Link from 'next/link'

export default function FleetPreview() {
  const fleet = [
    {
      title: '7 Seater Van / Kia Sedona',
      desc: 'Perfect for airport & hotel transfers, sightseeing tours & guest transportation for up to 7 people.',
      image: '/images/WhatsApp_Image_2025-11-26_at_7.45.48_PM-removebg-preview.png', // add later
      pax: 7,
      luggage: 5,
    },
    {
      title: '12 Seater Minibus / Toyota Hiace',
      desc: 'Spacious minibus option ideal for small groups, family trips and corporate transfers.',
      image: '/images/TOYOTA_HIACE_12_SEATER-removebg-preview.png', // add later
      pax: 12,
      luggage: 10,
    },
    {
      title: '22 Seater Minibus / Toyota Coaster',
      desc: 'Comfortable mid‑sized group vehicle for tours, staff pickups and event transport.',
      image: '/images/TOYOTA_COASTER_22_SEATER-removebg-preview.png', // add later
      pax: 22,
      luggage: 20,
    },
    {
      title: '35 Seater Luxury Bus',
      desc: 'Luxury coach for large groups, tours, airport transfers, and corporate events.',
      image: '/images/35_SEATER_LUXURY_BUS-removebg-preview (1).png', // add later
      pax: 35,
      luggage: 30,
    },
    {
      title: '50 Seater Luxury Bus',
      desc: 'Top of the line coach for big events, group outings & high‑capacity transfers across the UAE.',
      image: '/images/50-Seater-Luxury-Bus (1).png', // add later
      pax: 50,
      luggage: 40,
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wide text-gray-900">
          Our Fleet
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Discover our wide range of vehicles – from 7‑seater vans to 50‑seater luxury coaches – designed to meet every travel need across the UAE.
        </p>

        {/* Fleet Grid (show first 3 only) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleet.slice(0, 3).map((f, i) => (
            <FleetCard key={i} {...f} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link
            href="/fleet"
            className="inline-block bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-400 transition"
          >
            View All Vehicles
          </Link>
        </div>
      </div>
    </section>
  )
}
