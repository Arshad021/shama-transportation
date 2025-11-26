import Link from "next/link";

const fleet = [
  {
    title: "7-Seater Van (Kia Sedona)",
    desc: "Perfect for small groups or family travel in comfort and style.",
    pax: 7,
    luggage: 4,
    image: "/images/WhatsApp_Image_2025-11-26_at_7.45.48_PM-removebg-preview.png",
  },
  {
    title: "12-Seater Minibus (Toyota Hiace)",
    desc: "Comfortable minibus ideal for corporate or medium-sized groups.",
    pax: 12,
    luggage: 8,
    image: "/images/TOYOTA_HIACE_12_SEATER-removebg-preview.png",
  },
  {
    title: "15-Seater Minibus (Toyota Hiace)",
    desc: "Spacious minibus for larger group transfers and events.",
    pax: 15,
    luggage: 10,
    image: "/images/TOYOTA_HIACE_15_SEATERR-removebg-preview.png",
  },
  {
    title: "22-Seater Minibus (Toyota Coaster)",
    desc: "Reliable and stylish transport for mid-sized teams or tours.",
    pax: 22,
    luggage: 15,
    image: "/images/TOYOTA_COASTER_22_SEATER-removebg-preview.png",
  },
  {
    title: "35-Seater Luxury Bus",
    desc: "Elegant and spacious bus suitable for events or large group transfers.",
    pax: 35,
    luggage: 25,
    image: "/images/35_SEATER_LUXURY_BUS-removebg-preview (1).png",
  },
  {
    title: "50-Seater Luxury Bus",
    desc: "Premium coach for full-sized corporate groups or large events.",
    pax: 50,
    luggage: 35,
    image: "/images/50-Seater-Luxury-Bus (1).png",
  },
];

export default function ExhibitionsWeddingEventsPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 space-y-20">
      
      {/* Banner */}
      <div className="relative rounded-2xl overflow-hidden h-[300px] md:h-[400px] flex items-center justify-center text-center">
        <img
          src="https://www.fastwheelslimo.com/wp-content/uploads/2021/06/buildings.jpg"
          alt="Exhibitions, Weddings & Events"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Exhibitions, Weddings & Events Transportation
          </h1>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Arrive in style at exhibitions, weddings, parties, and corporate events with our
            luxury vehicles and professional chauffeurs.
          </p>
        </div>
      </div>

      {/* Two Column Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://www.fastwheelslimo.com/wp-content/uploads/2021/06/womens-drinking.jpg"
            alt="Events Chauffeur Service"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Luxury for Every Occasion
          </h2>
          <p className="text-gray-700">
            From weddings and proms to exhibitions and corporate events, our transportation service ensures you arrive on time and in style.
          </p>
          <p className="text-gray-700">
            Choose from a fleet of vans, minibuses, and luxury coaches — all driven by courteous chauffeurs who prioritize your comfort and safety.
          </p>
          <Link
            href="/book"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded font-bold transition"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Fleet Section */}
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Our Fleet for Events
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {fleet.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Vehicle Image */}
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain p-4 bg-gray-100"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <p className="text-sm text-gray-500 mb-3">
                  <strong>PAX:</strong> {item.pax} &nbsp; | &nbsp;
                  <strong>Luggage:</strong> {item.luggage}
                </p>
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
          Reserve Your Event Transport
        </Link>
      </div>
    </section>
  );
}
