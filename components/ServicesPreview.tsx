import Link from "next/link"
import { Plane, Building2, CalendarHeart, MapPin } from "lucide-react"

export default function ServicesPreview() {
  const services = [
    {
      title: "Airport & Hotel Transfers",
      slug: "airport-hotel-transfers",
      description:
        "Fast, reliable airport and hotel transfers — ensuring your guests and clients arrive comfortably and on time.",
      icon: Plane,
    },
    {
      title: "Corporate & Company Transport",
      slug: "corporate-transport",
      description:
        "Professional, punctual transport solutions for business meetings, staff, and corporate events.",
      icon: Building2,
    },
    {
      title: "Events, Weddings & Exhibitions",
      slug: "events-weddings",
      description:
        "Elegant and coordinated rides for weddings, exhibitions, and VIP occasions with premium comfort.",
      icon: CalendarHeart,
    },
    {
      title: "Tours & City Trips",
      slug: "tours-city-trips",
      description:
        "Explore Dubai, Abu Dhabi, and other Emirates with guided, safe, and luxury tour experiences.",
      icon: MapPin,
    },
  ]

  return (
    <section className="py-20 max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-900">
        Our Premium Services
      </h2>

      <div className="flex flex-col gap-20">
        {services.map((s, index) => {
          const Icon = s.icon
          return (
            <div
              key={s.slug}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Icon Section */}
              <div className="flex items-center justify-center w-full md:w-1/2 h-72 rounded-2xl bg-gradient-to-br from-[#ea3c3a] to-[#fedf23] shadow-lg">
                <Icon className="w-24 h-24 text-white" />
              </div>

              {/* Text Section */}
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{s.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{s.description}</p>

                <div className="flex justify-center md:justify-start gap-4">
                  <a
                    href="tel:+971558840121"
                    className="border border-[#ea3c3a] text-[#ea3c3a] px-6 py-2 rounded-full font-medium hover:bg-[#ea3c3a] hover:text-white transition"
                  >
                    Call Now
                  </a>
                  <Link
                    href="/book"
                    className="bg-[#fedf23] text-black px-6 py-2 rounded-full font-medium hover:bg-[#f5d912] transition"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
