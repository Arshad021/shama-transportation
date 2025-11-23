export default function SafetySecurity() {
  const bullets = [
    "All drivers undergo thorough background checks",
    "Ongoing safety training & vehicle inspections",
    "Highest standards to ensure your comfort and security"
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-extrabold mb-4">
            Safety and <span className="text-yellow-500">Security</span>
          </h2>
          <p className="text-gray-700 mb-6">
            At Shama Passenger Transport, your safety is our priority. Our professional drivers follow strict protocols and ensure a secure journey every time.
          </p>
          <ul className="space-y-3 text-gray-700 list-disc pl-5">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>

        {/* Right Side Image */}
        <div className="rounded-2xl overflow-hidden">
          <img
            src="https://www.fastwheelslimo.com/wp-content/uploads/2024/07/Luxury-Airport-Transfer-Service-in-Miami-1.jpg"
            alt="Safety and Security"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
