// src/app/about/page.tsx

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">

      {/* Banner */}
      <div className="relative rounded-2xl mb-16 h-[300px] flex items-center justify-center text-center overflow-hidden">
        <img
          src="/images/WhatsApp Image 2025-11-25 at 12.17.21 (1).jpeg"
          alt="About Shama Passenger Transport"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            ABOUT US
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-8 text-gray-700">
        <p>
          Shama Tours and Transport is a luxury and state-of-the-art tourist transport provider and bus rental company. Our objective here is to provide tourists with the most exemplary and exotic experience to make their trip absolutely memorable. We have been arranging amazing tours and trips for tourists for a long time now and our experience is the only thing you can count on while visiting the UAE. Our clients are like our family that we wish to provide the absolutely best in terms of amazing trips that consist of abundance of knowledge, entertainment, information, sightseeing and absolutely everything that you can imagine. We offer the most promising, reliable, safe and comfortable transportation for not only tourists but local visitors as well.
        </p>

        <p>
          Shama Transport Dubai is your best option, with drivers all over Dubai and the United Arab Emirates. We can take you anywhere in Dubai or the United Arab Emirates.
        </p>

        <p>
          Since 2007, Shama Transport Dubai has gained a comprehensive understanding of Dubai’s roads, culture, and travel needs. Having served tourists from around the globe, local families, companies, corporate events, exhibitions, weddings and more. We understand what every group seeks from their trip. We offer vans with 7- to 15-seats for small groups, modern minibuses with 22 seats for medium groups, and spacious luxury buses with 35 to 50 seats. All of these options are air-conditioned, modern, and always clean. Every vehicle is driven by a trained and friendly driver for maximum comfort and safety.
        </p>
      </div>

    </section>
  );
}
