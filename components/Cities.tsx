import Link from "next/link";

export default function Cities() {
  const cities = [
    {
      name: "Dubai",
      slug: "dubai",
      img: "/images/WhatsApp Image 2025-11-25 at 12.17.18 (1).jpeg",
      url: "/tours/dubai-city-tour", // link to Dubai tour page
    },
    {
      name: "Abu Dhabi",
      slug: "abu-dhabi",
      img: "/images/Abu Dhabi City Tour.jpg",
      url: "/tours/abu-dhabi-city-tour", // link to Abu Dhabi tour page
    },
    {
      name: "Sharjah",
      slug: "sharjah",
      img: "https://media.assettype.com/gulfnews%2F2025-09-11%2F59rcty80%2Fgulfnews2025-06-107mcsw5o3SanojSaseendranSharjahBuhuairahCornichepleasantweather.avif?w=640&auto=format%2Ccompress&fit=max",
      url: "/tours/sharjah", // link to Sharjah city page
    },
    {
      name: "RAK & FUJEIRAH",
      slug: "ajman",
      img: "https://thetouristsworld.com/wp-content/uploads/2021/09/Things-To-Do-In-Ajman.jpg",
      url: "/tours/ajman", // link to Ajman city page
    },
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* ✅ Left Panel */}
        <div className="md:col-span-2 bg-black text-white rounded-2xl p-8 flex flex-col justify-center text-center md:text-left shadow-lg">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-3">
            Major UAE Cities We Serve
          </h3>

          <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed">
            Shama Passenger Transport proudly serves customers across the UAE.
            From airport transfers to city tours — we ensure your journey is
            comfortable, safe, and on time.
          </p>

          <Link href="/tours">
            <button className="bg-white text-black font-semibold px-5 py-3 rounded-lg hover:bg-[#fedf23] hover:text-black transition w-full md:w-auto">
              View All Locations
            </button>
          </Link>
        </div>

        {/* ✅ City Cards */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cities.map((c, i) => (
            <Link key={i} href={c.url} className="block">
              <div className="relative rounded-2xl overflow-hidden shadow-lg group h-56 sm:h-64">
                <img
                  src={c.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={c.name}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-xl sm:text-2xl font-bold tracking-wide drop-shadow-lg">
                    {c.name}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
