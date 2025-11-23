import FleetCard from "@/components/FleetCard"
import ContactForm from "@/components/ContactForm"

const fleet = [
  { title: 'Executive Sedan Class', desc: 'Perfect for a smooth transfer to any emirate, offering comfort and elegance.', image: '', pax:3, luggage:3 },
  { title: 'First Class Sedan', desc: 'Enjoy premium luxury and additional in-car amenities for longer routes.', image: '', pax:3, luggage:3 },
  { title: 'SUV Executive', desc: 'Ideal for families or groups traveling across emirates with spacious comfort.', image: '', pax:6, luggage:4 },
]

export default function OtherEmiratesTourPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="w-full bg-black text-white py-24 md:py-32 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Other Emirates Tour</h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Explore Sharjah, Ajman, Fujairah, Ras Al Khaimah & Umm Al Quwain with our premium private chauffeur service.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#book"
              className="bg-gradient-to-r from-red-600 to-yellow-400 text-black font-semibold py-3 px-8 rounded-lg shadow-lg hover:opacity-90 transition"
            >
              Book Now
            </a>
            <a
              href="#fleet"
              className="border border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-black transition"
            >
              View Fleet
            </a>
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="max-w-7xl mx-auto px-4 py-20 space-y-24">

        {/* 2 Column Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT TEXT BLOCK */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Discover UAE’s Hidden Gems</h2>
            <p className="text-gray-600 leading-relaxed">
              Our Other Emirates Tour lets you experience the cultural, historic, and scenic beauty 
              of the northern emirates. Whether you want to enjoy a relaxing beach day in Fujairah, 
              explore Sharjah’s cultural district, or visit the mountains of Ras Al Khaimah, 
              our chauffeurs ensure a smooth and comfortable journey.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We offer flexible pickup timings, professional drivers, and a fleet of luxury vehicles 
              to make your trip enjoyable and hassle-free.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>• Full-day and half-day private tours</li>
              <li>• Professional English-speaking chauffeurs</li>
              <li>• Family-friendly vehicles available</li>
              <li>• Customizable itineraries for all emirates</li>
            </ul>
          </div>

          {/* IMAGE PLACEHOLDER */}
          <div className="w-full h-80 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500 text-xl">
            Image Here
          </div>
        </div>

        {/* Fleet Section */}
        <div id="fleet">
          <h2 className="text-3xl font-bold mb-8">Available Fleet for Emirates Tour</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {fleet.map((c,i)=>(<FleetCard key={i} {...c} />))}
          </div>
        </div>

        {/* Booking Form */}
        <div id="book">
          <h2 className="text-3xl font-bold mb-8">Book Your Tour</h2>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
