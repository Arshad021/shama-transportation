import Link from "next/link";

const fleets = [
  {
    title: "7-Seater Van – Kia Sedona",
    desc: "Ideal for small groups or family trips.",
    image: "/images/WhatsApp_Image_2025-11-26_at_7.45.48_PM-removebg-preview.png",
  },
  {
    title: "12-Seater Minibus – Toyota Hiace",
    desc: "Perfect for small corporate groups.",
    image: "/images/TOYOTA_HIACE_12_SEATER-removebg-preview.png",
  },
  {
    title: "15-Seater Minibus – Toyota Hiace",
    desc: "Comfortable for airport transfers and tours.",
    image: "/images/TOYOTA_HIACE_15_SEATERR-removebg-preview.png",
  },
  {
    title: "22-Seater Minibus – Toyota Coaster",
    desc: "Great for medium-sized groups and city tours.",
    image: "/images/TOYOTA_COASTER_22_SEATER-removebg-preview.png",
  },
  {
    title: "35-Seater Luxury Bus",
    desc: "Spacious and comfortable for large groups.",
    image: "/images/35_SEATER_LUXURY_BUS-removebg-preview (1).png",
  },
  {
    title: "50-Seater Luxury Bus",
    desc: "High-capacity option for corporate or school trips.",
    image: "/images/50-Seater-Luxury-Bus (1).png",
  },
];

export default function BusRentalPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 space-y-20">
      {/* Banner */}
      <div className="relative rounded-2xl overflow-hidden h-[300px] md:h-[400px] flex items-center justify-center text-center">
        <img
          src="https://www.fastwheelslimo.com/wp-content/uploads/2021/06/buildings.jpg"
          alt="Bus Rental Service"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Hourly, Daily, Weekly & Monthly Bus Rental
          </h1>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Rent buses and vans for any occasion — corporate trips, school outings, or group tours.
            Flexible rental durations, professional chauffeurs, and luxury vehicles for your convenience.
          </p>
        </div>
      </div>

      {/* 2-Column Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Content */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4">Flexible Rental Options</h2>
          <p className="text-gray-700 mb-4">
            Choose the duration that suits your needs — hourly, daily, weekly, or monthly. 
            Our buses and vans are perfect for corporate trips, school events, city tours, and group travel.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Flexible hourly, daily, weekly, and monthly rentals</li>
            <li>Luxury buses and vans with modern amenities</li>
            <li>Professional, experienced chauffeurs</li>
            <li>Reliable and safe transportation for all group sizes</li>
          </ul>
          <Link
            href="/book"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded font-bold transition"
          >
            Reserve Your Vehicle
          </Link>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://www.fastwheelslimo.com/wp-content/uploads/2024/07/banner3.png"
            alt="Bus Rental"
            className="rounded-2xl shadow-lg w-full h-[350px] object-cover"
          />
        </div>
      </div>

      {/* Fleet Section */}
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Our Fleet for Bus Rentals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {fleets.map((fleet, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Vehicle Image */}
              <div className="w-full h-56 overflow-hidden bg-gray-100">
                <img
                  src={fleet.image}
                  alt={fleet.title}
                  className="w-full h-full object-contain p-4"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{fleet.title}</h3>
                <p className="text-gray-600 mb-4">{fleet.desc}</p>
                <Link
                  href="/book"
                  className="text-yellow-600 font-bold hover:underline"
                >
                  Book Now →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center">
        <Link
          href="/book"
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-xl font-bold text-lg transition"
        >
          Reserve Your Bus Rental
        </Link>
      </div>
    </section>
  );
}
