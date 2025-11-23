const items = [
  "Affordable & reliable — best price in town",
  "No hidden fees — free cancellation within 6hrs",
  "24/7 customer support",
  "Infant & toddler car seats on request",
  "Flight tracking for on-time pickups",
  "Experienced, punctual chauffeurs",
  "Live arrival alerts",
  "Meet & greet at gate or baggage claim",
  "Discounts for frequent travelers",
  "Highest standards of safety & discretion"
]

export default function WhyChoose() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Text */}
        <div>
          <h3 className="uppercase tracking-widest text-yellow-500 font-semibold mb-2">
            Why Choose
          </h3>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Shama Passenger Transport
          </h2>
          <ul className="mt-6 space-y-3">
            {items.map((t,i)=>(
              <li key={i} className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold">✓</span>
                <span className="text-gray-700">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Image */}
        <div className="rounded-2xl overflow-hidden">
          <img
            src="/images/Desert Safari Tour.jpg"
            alt="Why Choose Shama Passenger Transport"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
