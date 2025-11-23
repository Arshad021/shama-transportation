import Link from "next/link";

export default function BusRentalPage() {
  const fleets = [
    { title: "7 Seater Van – Kia Sedona", desc: "Ideal for small groups or family trips." },
    { title: "12 Seater Minibus – Toyota Hiace", desc: "Perfect for small corporate groups." },
    { title: "15 Seater Minibus – Toyota Hiace", desc: "Comfortable for airport transfers and tours." },
    { title: "22 Seater Minibus – Toyota Coaster", desc: "Great for medium-sized groups and city tours." },
    { title: "35 Seater Luxury Bus", desc: "Spacious and comfortable for large groups." },
    { title: "50 Seater Luxury Bus", desc: "High-capacity option for corporate or school trips." },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Banner */}
      <div className="relative bg-black text-white rounded-2xl shadow-lg mb-16 h-[300px] flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://www.fastwheelslimo.com/wp-content/uploads/2021/06/buildings.jpg"
          alt="Bus Rental Service"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Hourly, Daily, Weekly & Monthly Bus Rental
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Rent buses and vans for any occasion — corporate trips, school outings, or group tours. Flexible rental durations, professional chauffeurs, and luxury vehicles for your convenience.
          </p>
        </div>
      </div>

      {/* 2-Column Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        {/* Content */}
        <div>
          <h2 className="text-3xl font-extrabold mb-4">Flexible Rental Options</h2>
          <p className="text-gray-600 mb-6">
            Choose the duration that suits your needs — hourly, daily, weekly, or monthly. Our buses and vans are perfect for corporate trips, school events, city tours, and group travel.
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
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Fleet for Bus Rentals
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {fleets.map((fleet, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Placeholder Image */}
              <div className="w-full h-56 bg-gray-200 flex items-center justify-center text-gray-500">
                Image
              </div>
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
