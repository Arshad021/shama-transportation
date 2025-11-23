import Link from "next/link";

const fleet = [
  {
    title: "7-Seater Van (Kia Sedona)",
    desc: "Perfect for small groups or family travel in comfort and style.",
    pax: 7,
    luggage: 4,
    image: "/img/fleets/7-seater-sedona.jpg",
  },
  {
    title: "12-Seater Minibus (Toyota Hiace)",
    desc: "Comfortable minibus ideal for corporate or medium-sized groups.",
    pax: 12,
    luggage: 8,
    image: "/img/fleets/12-seater-hiace.jpg",
  },
  {
    title: "15-Seater Minibus (Toyota Hiace)",
    desc: "Spacious minibus for larger group transfers and events.",
    pax: 15,
    luggage: 10,
    image: "/img/fleets/15-seater-hiace.jpg",
  },
  {
    title: "22-Seater Minibus (Toyota Coaster)",
    desc: "Reliable and stylish transport for mid-sized teams or tours.",
    pax: 22,
    luggage: 15,
    image: "/img/fleets/22-seater-coaster.jpg",
  },
  {
    title: "35-Seater Luxury Bus",
    desc: "Elegant and spacious bus suitable for events or large group transfers.",
    pax: 35,
    luggage: 25,
    image: "/img/fleets/35-seater-bus.jpg",
  },
  {
    title: "50-Seater Luxury Bus",
    desc: "Premium coach for full-sized corporate groups or large events.",
    pax: 50,
    luggage: 35,
    image: "/img/fleets/50-seater-bus.jpg",
  },
];

export default function Fleets() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-900">Our Fleet</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose from SHAMA's premium fleet of vans, minibuses, and luxury buses for corporate, group, and event transportation.
        </p>
      </div>

      {/* Fleet Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {fleet.map((car, i) => (
          <div
            key={i}
            className="bg-white border rounded-2xl shadow-md hover:shadow-2xl transition-all overflow-hidden flex flex-col hover:-translate-y-1 duration-300"
          >
            <img
              src={car.image}
              alt={car.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-xl font-semibold mb-2 text-gray-900">{car.title}</h2>
              <p className="text-gray-600 text-sm mb-4 flex-1">{car.desc}</p>

              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <span>👤 {car.pax} Passengers</span>
                <span>🧳 {car.luggage} Luggage</span>
              </div>

              <Link
                href={`/book?vehicle=${encodeURIComponent(car.title)}`}
                className="mt-auto inline-block text-center bg-yellow-400 text-black font-semibold py-2.5 rounded-lg hover:bg-yellow-500 transition-all"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Button (Mobile Only) */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 block md:hidden">
        <Link
          href="/book"
          className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition-all"
        >
          📞 Book Now
        </Link>
      </div>
    </section>
  );
}
