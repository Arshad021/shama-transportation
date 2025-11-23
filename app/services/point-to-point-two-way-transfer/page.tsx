import Link from "next/link";

export default function PointToPointTwoWayPage() {
  const fleets = [
    { title: "7 Seater Van – Kia Sedona", desc: "Comfortable for small family or group transfers." },
    { title: "12 Seater Minibus – Toyota Hiace", desc: "Perfect for medium-sized groups and city transfers." },
    { title: "15 Seater Minibus – Toyota Hiace", desc: "Ideal for slightly larger groups with extra comfort." },
    { title: "22 Seater Minibus – Toyota Coaster", desc: "Spacious vehicle for group travel across cities." },
    { title: "35 Seater Luxury Bus", desc: "Luxury coach suitable for corporate or group tours." },
    { title: "50 Seater Luxury Bus", desc: "Premium bus for large groups and VIP transportation." },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Hero Banner */}
      <div className="relative bg-black text-white rounded-2xl shadow-lg mb-16 h-[300px] flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://www.fastwheelslimo.com/wp-content/uploads/2021/06/buildings.jpg"
          alt="Two-Way Transfer Service"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Point-to-Point Two-Way Transfer</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Enjoy hassle-free two-way transfers with fixed rates, reliable pickups, and luxury vehicles. Perfect for business, airport transfers, or group travel.
          </p>
        </div>
      </div>

      {/* 2-Column Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h2 className="text-3xl font-extrabold mb-4">Reliable Two-Way Transfers</h2>
          <p className="text-gray-600 mb-6">
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

        <div>
          <img
            src="https://www.fastwheelslimo.com/wp-content/uploads/2024/07/Luxury-Airport-Transfer-Service-in-Miami-1.jpg"
            alt="Two-Way Transfer"
            className="rounded-2xl shadow-lg w-full h-[350px] object-cover"
          />
        </div>
      </div>

      {/* Fleet Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Fleet for Two-Way Transfers</h2>
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
          Reserve Your Two-Way Transfer
        </Link>
      </div>
    </section>
  );
}
