import Link from "next/link";

export default function ToyotaHiace15SeaterPage() {
  const vehicle = {
    title: "15-Seater Minibus (Toyota Hiace)",
    description:
      "Perfect for medium to large groups, staff transport, tours, school runs, and airport transfers. The Toyota Hiace 15-Seater is known for its spacious seating, comfort, and reliable performance.",
    pax: 15,
    luggage: 10,
    features: [
      "Comfortable seating for 15 passengers",
      "Large rear luggage space",
      "Dual air-conditioning system",
      "Smooth suspension for long rides",
      "Ideal for tours, events, school transport & airport transfers",
      "Reliable & professional driver included",
    ],
    images: [
      "/images/TOYOTA_HIACE_15_SEATERR-removebg-preview.png",
      "/images/TOYOTA_HIACE_15_SEATERR-removebg-preview.png",
      "/images/TOYOTA_HIACE_15_SEATERR-removebg-preview.png",
    ],
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Hero Banner */}
      <div className="relative bg-black text-white rounded-2xl shadow-lg mb-16 h-[350px] flex items-center justify-center text-center overflow-hidden">
        <img
          src={vehicle.images[0]}
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

      {/* Vehicle Details */}
      <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
        {/* Left Images */}
        <div className="space-y-4">
          {vehicle.images.map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={img}
                alt={`${vehicle.title} ${i + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Features & Specifications
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {vehicle.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>

          <div className="flex justify-start space-x-6 text-gray-700">
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
        <h3 className="text-2xl font-bold mb-4">
          Looking for a different vehicle?
        </h3>
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
