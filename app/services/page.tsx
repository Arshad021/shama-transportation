import Link from 'next/link'

const services = [
  { slug: 'airport-transportation', title: 'Airport & Hotel Transfers' },
  { slug: 'companies-corporate-transportation', title: 'Companies / Corporate Transportation' },
  { slug: 'exhibitions-wedding-events-transportation', title: 'Exhibitions, Wedding & Event Transportation' },
  { slug: 'hourly-daily-weekly-monthly-bus-rental', title: 'Hourly / Daily / Weekly / Monthly Bus Rental' },
  { slug: 'point-to-point-two-way-transfer', title: 'Point to Point / Two-Way Transfer' },
]

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-center mb-10">Our Services</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map(s => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="p-6 border rounded-lg hover:shadow bg-white transition"
          >
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="text-gray-600 mt-2">Learn more about {s.title}.</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
