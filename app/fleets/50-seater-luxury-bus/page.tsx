import Link from "next/link";

export default function LuxuryBus50SeaterPage() {
  const vehicle = {
    title: "50-Seater Luxury Bus",
    description:
      "Our 50-Seater Luxury Bus is the perfect choice for large group travel, corporate transport, tourism, events, weddings, and long-distance trips across the UAE. Enjoy maximum comfort, spacious seating, and a premium travel experience.",
    pax: 50,
    luggage: 40,
    features: [
      "Comfortable seating capacity for 50 passengers",
      "Powerful tri-zone AC for maximum cooling",
      "High-roof premium interior design",
      "Smooth suspension ideal for long journeys",
      "Professional licensed driver included",
      "Large luggage compartments with huge capacity",
      "Ideal for tourism, corporate transport, and events",
      "Perfect for airport transfers and long-distance tours",
    ],
    image: "/images/50-Seater-Luxury-Bus (1).png", // Update with your correct path
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">

      {/* Hero Banner */}
      <div className="relative bg-black text-white rounded-2xl shadow-lg mb-16 h-[350px] flex items-center justify-center text-center overflow-hidden">
        <img
          src={vehicle.image}
          alt={vehicle.title}
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>

        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            {vehicle.title}
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            {vehicle.description}
          </p>
        </div>
      </div>

      {/* Vehicle Section */}
      <div className="grid md:grid-cols-2 gap-12 items-start mb-16">

        {/* Single Large Image */}
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src={vehicle.image}
            alt={vehicle.title}
            className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Details */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Features & Specifications</h2>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {vehicle.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <div className="flex gap-6 text-gray-700 font-medium">
            <span>👤 Passengers: {vehicle.pax}</span>
            <span>🧳 Luggage: {vehicle.luggage}</span>
          </div>

          <Link
            href={`/book?vehicle=${encodeURIComponent(vehicle.title)}`}
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300"
          >
            Book This Vehicle
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-bold mb-4">Looking for more options?</h3>
        <Link
          href="/fleets"
          className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300"
        >
          View All Fleets
        </Link>
      </div>
    </section>
  );
}
