"use client";

import { useEffect } from "react";

export default function AirportTransportationPage() {
  useEffect(() => {
    // Smooth scroll for same-page anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener("click", e => {
        const targetId = (link as HTMLAnchorElement).getAttribute("href")?.substring(1);
        const target = targetId ? document.getElementById(targetId) : null;
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }, []);

  // Airports (No maps included)
  const airports = [
    { name: "Dubai International Airport (DXB)" },
    { name: "Sharjah International Airport (SHJ)" },
    { name: "Abu Dhabi International Airport (AUH)" },
    { name: "Al Maktoum International Airport (DWC)" },
    { name: "Ras Al Khaimah International Airport (RKT)" },
    { name: "Fujairah International Airport (FJR)" },
    { name: "Al Ain International Airport (AAN)" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* ===== Banner Section ===== */}
      <div className="relative bg-black text-white rounded-2xl shadow-lg mb-16 h-[350px] flex flex-col items-center justify-center text-center overflow-hidden">
        <img
          src="https://www.shamapassengertransport.com/wp-content/uploads/2024/05/airport-banner.jpg"
          alt="Airport Transportation"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>

        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Airport Transportation
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-6">
            Reliable airport pickup & drop-off services across Dubai, Sharjah, Abu Dhabi, and all UAE airports.
          </p>
          <a
            href="/book"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* ===== Info Section ===== */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://www.shamapassengertransport.com/wp-content/uploads/2024/05/airport-transfer.jpg"
            alt="UAE Airport Transport"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Comfortable & Hassle-Free Airport Transfers
          </h2>
          <p className="text-gray-700">
            Shama Passenger Transport offers smooth and stress-free airport transportation across all
            major UAE airports. Whether you're traveling alone, with family, or in a group — we ensure
            a comfortable, safe, and timely service.
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>On-time pickup & drop-off guaranteed</li>
            <li>24/7 airport availability</li>
            <li>Spacious vehicles for families & groups</li>
            <li>Friendly and professional drivers</li>
          </ul>

          <p className="text-gray-700">
            Avoid long waits, last-minute delays, and expensive taxi fares — enjoy a reliable,
            pre-booked airport ride with Shama Passenger Transport.
          </p>
        </div>
      </div>

      {/* ===== Airports Section ===== */}
      <div className="bg-gray-50 py-16 rounded-2xl shadow-inner">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Airports We Serve Across UAE
          </h2>
          <p className="text-gray-600 mt-3">
            We provide 24/7 airport transportation to and from all major UAE airports.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-gray-800">
          {airports.map((airport, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex items-center justify-center text-center border border-gray-100 hover:-translate-y-1 hover:bg-yellow-50"
            >
              <p className="font-medium text-gray-900">{airport.name}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="/book"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300"
          >
            Reserve Your Airport Ride
          </a>
        </div>
      </div>
    </section>
  );
}
