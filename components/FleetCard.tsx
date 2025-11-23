import Image from 'next/image'

export default function FleetCard({ title, desc, image, pax, luggage }) {
  return (
    <div className="flex flex-col">
      
      {/* Title */}
      <div className="p-4">
        <h3 className="text-lg font-bold tracking-wide text-gray-900">{title}</h3>
      </div>

      {/* Image */}
      <div className="h-48 relative flex items-center justify-center">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-6"
          />
        ) : (
          <div className="text-4xl opacity-60">🚐</div> // fallback icon
        )}
      </div>

      {/* Info */}
      <div className="p-5 flex-1 flex flex-col">
        <p className="text-sm text-gray-700 leading-relaxed">{desc}</p>

        <div className="mt-4 text-sm text-gray-600 flex items-center gap-6">
          <span>👤 {pax}</span>
          <span>🧳 {luggage}</span>
        </div>

        {/* Button */}
<div className="mt-6">
  <a
    href="/book"
    className="block w-full text-center font-semibold py-2 px-4 rounded-lg bg-gradient-to-r from-red-500 to-yellow-400 text-black transition hover:bg-black hover:text-white"
  >
    Book Now
  </a>
</div>
      </div>
    </div>
  )
}
