// src/app/companies-corporate-transportation/page.tsx

import FleetCard from "@/components/FleetCard"

export default function Page() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Banner */}
      <div className="relative bg-black text-white rounded-2xl shadow-lg mb-16 h-[300px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-900 rounded-2xl" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Companies & Corporate Transportation
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Reliable, professional and premium corporate transportation services for companies and executive clients.
          </p>
        </div>
      </div>

      {/* Two Column Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        {/* Left Placeholder Box Instead of Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-200 h-[300px] flex items-center justify-center text-gray-500 text-xl">
        <img
            src="/images/WhatsApp Image 2025-11-25 at 19.13.14.jpeg"
            alt="UAE Airport Transport"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Professional Corporate Travel Solutions
          </h2>
          <p className="text-gray-700">
            We provide seamless and dependable transportation solutions tailored for corporate clients. Whether it's daily staff transport, business meetings, conferences, or VIP executive travel, our services ensure comfort, punctuality, and professionalism.
          </p>
          <p className="text-gray-700">
            With a fleet of modern vehicles and trained chauffeurs, we guarantee a smooth and stress-free travel experience for your employees, clients, and executives.
          </p>
        </div>
      </div>
          {/* Fleet Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8">Our Corporate Fleet</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Fleet Cards */}
          <FleetCard title="Executive Sedan" desc="Ideal for corporate meetings and business travel." image="" pax={3} luggage={2} />
          <FleetCard title="Luxury SUV" desc="Perfect for group executives and VIP transport." image="" pax={6} luggage={4} />
          <FleetCard title="Business Van" desc="Spacious and comfortable for corporate teams." image="" pax={7} luggage={6} />
        </div>
      </div>

    </section>
  );
}
