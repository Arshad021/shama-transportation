import Link from "next/link";

const fleets = [
  {
    title: "7 Seater Van – Kia Sedona",
    desc: "Comfortable for small family or group transfers.",
    image: "/images/WhatsApp_Image_2025-11-26_at_7.45.48_PM-removebg-preview.png",
  },
  {
    title: "12 Seater Minibus – Toyota Hiace",
    desc: "Perfect for medium-sized groups and city transfers.",
    image: "/images/TOYOTA_HIACE_12_SEATER-removebg-preview.png",
  },
  {
    title: "15 Seater Minibus – Toyota Hiace",
    desc: "Ideal for slightly larger groups with extra comfort.",
    image: "/images/TOYOTA_HIACE_15_SEATERR-removebg-preview.png",
  },
  {
    title: "22 Seater Minibus – Toyota Coaster",
    desc: "Spacious vehicle for group travel across cities.",
    image: "/images/TOYOTA_COASTER_22_SEATER-removebg-preview.png",
  },
  {
    title: "35 Seater Luxury Bus",
    desc: "Luxury coach suitable for corporate or group tours.",
    image: "/images/35_SEATER_LUXURY_BUS-removebg-preview (1).png",
  },
  {
    title: "50 Seater Luxury Bus",
    desc: "Premium bus for large groups and VIP transportation.",
    image: "/images/50-Seater-Luxury-Bus (1).png",
  },
];

export default function PointToPointTwoWayPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 space-y-20">
      {/* Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden h-[300px] md:h-[400px] flex items-center justify-center text-center">
        <img
          src="https://www.fastwheelslimo.com/wp-content/uploads/2021/06/buildings.jpg"
          alt="Two-Way Transfer Service"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Point-to-Point Two-Way Transfer
          </h1>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Enjoy hassle-free two-way transfers with fixed rates, reliable pickups, and luxury vehicles. Perfect for business, airport transfers, or group travel.
          </p>
        </div>
      </div>

      {/* 2-Column Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Content */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4">Reliable Two-Way Transfers</h2>
          <p className="text-gray-700 mb-4">
            Our two-way transfer service ensures smooth round trips with professional chauffeurs and luxury vehicles. Arrive on time for your appointments and return in comfort without any stress.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Fixed round-trip pricing with no hidden fees</li>
            <li>Luxury sedans, SUVs, vans, minibuses, and buses</li>
            <li>On-time pickups for both onward and return journeys</li>
            <li>Professional and courteous chauffeurs</li>
          </ul>
          <Link
            href="/book"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded font-bold transition"
          >
            Book Your Two-Way Transfer
          </Link>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://www.fastwheelslimo.com/wp-content/uploads/2024/07/Luxury-Airport-Transfer-Service-in-Miami-1.jpg"
            alt="Two-Way Transfer"
            className="rounded-2xl shadow-lg w-full h-[350px] object-cover"
          />
        </div>
      </div>

      {/* Fleet Section */}
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Our Fleet for Two-Way Transfers
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
          Reserve Your Two-Way Transfer
        </Link>
      </div>
    </section>
  );
}
