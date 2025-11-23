import { notFound } from "next/navigation";
import Image from "next/image";
import Script from "next/script";

const SITE = "https://shamapassengertransport.com";

// ===================
// SHAMA Services Data
// ===================
const SERVICES = {
  "airport-transportation": {
    title: "Airport & Hotel Transfers",
    description:
      "Reliable airport and hotel transportation in Dubai and the UAE. Enjoy punctual pickups, meet & greet, and luxury vehicles for your comfort.",
    keywords: ["airport transfers", "hotel transfer", "chauffeur service", "luxury ride"],
    image: "/img/services/airport.jpg",
  },
  "companies-corporate-transportation": {
    title: "Companies & Corporate Transportation",
    description:
      "Professional corporate transport services for meetings, conferences, and business travel. Travel in comfort and style with SHAMA's fleet.",
    keywords: ["corporate transport", "business travel", "executive limo", "company rides"],
    image: "/img/services/corporate.jpg",
  },
  "exhibitions-wedding-events-transportation": {
    title: "Exhibitions, Wedding & Event Transportation",
    description:
      "Premium transportation for weddings, exhibitions, and events. Arrive in style with luxury limousines, minibuses, and coaches.",
    keywords: ["event transport", "wedding limo", "exhibition bus", "luxury ride"],
    image: "/img/services/events.jpg",
  },
  "hourly-daily-weekly-monthly-bus-rental": {
    title: "Hourly / Daily / Weekly / Monthly Bus Rental",
    description:
      "Flexible bus rentals for all durations. Choose from our 7, 12, 15, 22, 35, or 50-seater buses for corporate or group travel.",
    keywords: ["bus rental", "group travel", "minibus hire", "luxury coach rental"],
    image: "/img/services/bus-rental.jpg",
  },
  "point-to-point-two-way-transfer": {
    title: "Point to Point / Two-Way Transfer",
    description:
      "Direct transfers between locations in Dubai and across UAE. Enjoy luxury comfort and punctual service for any journey.",
    keywords: ["point to point", "two-way transfer", "luxury car hire", "chauffeur service"],
    image: "/img/services/point-to-point.jpg",
  },
} as const;

type ServiceKey = keyof typeof SERVICES;
type Service = (typeof SERVICES)[ServiceKey];

// ===================
// Static Params
// ===================
export function generateStaticParams(): { slug: ServiceKey }[] {
  return Object.keys(SERVICES).map((slug) => ({
    slug: slug as ServiceKey,
  }));
}

// ===================
// Metadata
// ===================
export function generateMetadata({ params }: { params: { slug: ServiceKey } }) {
  const svc = SERVICES[params.slug];
  if (!svc) return {};

  const url = `${SITE}/services/${params.slug}`;

  return {
    title: `${svc.title} | SHAMA Passenger Transport`,
    description: svc.description,
    other: { keywords: svc.keywords },
    alternates: { canonical: url },
    openGraph: {
      title: `${svc.title} | SHAMA Passenger Transport`,
      description: svc.description,
      url,
      images: [{ url: svc.image }],
      siteName: "SHAMA Passenger Transport",
      type: "website",
    },
  };
}

// ===================
// Page Component
// ===================
export default function ServicePage({ params }: { params: { slug: ServiceKey } }) {
  const svc = SERVICES[params.slug];
  if (!svc) return notFound();

  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="relative h-[400px]">
        <Image
          src={svc.image}
          alt={svc.title}
          fill
          sizes="100vw"
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 p-12 text-white">
          <h1 className="text-4xl md:text-5xl font-bold">{svc.title}</h1>
          <p className="mt-4 max-w-2xl">{svc.description}</p>
        </div>
      </div>

      {/* Service Details */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-12">
        <h2 className="text-3xl font-bold text-gray-900">SHAMA Fleet for {svc.title}</h2>
        <p className="text-gray-700">
          Our professional fleet ensures a smooth, comfortable, and safe journey. Perfect for individuals, groups, or corporate travel.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "7-Seater Van (Kia Sedona)", desc: "Ideal for small groups or family travel.", img: "" },
            { title: "12-Seater Minibus (Toyota Hiace)", desc: "Comfortable for corporate or medium-sized groups.", img: "" },
            { title: "15-Seater Minibus (Toyota Hiace)", desc: "Spacious ride for larger groups.", img: "" },
            { title: "22-Seater Minibus (Toyota Coaster)", desc: "Perfect for mid-size teams or tour groups.", img: "" },
            { title: "35-Seater Luxury Bus", desc: "Elegant transport for large groups and events.", img: "" },
            { title: "50-Seater Luxury Bus", desc: "Premium coach for full-sized corporate or event transport.", img: "" },
          ].map((fleet, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{fleet.title}</h3>
              <p className="text-gray-600 mb-4">{fleet.desc}</p>
              <Link
                href="/book"
                className="text-yellow-600 font-bold hover:underline"
              >
                Book Now →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* JSON-LD Schema */}
      <JsonLd params={params} />
    </section>
  );
}

// ===================
// JSON-LD
// ===================
function JsonLd({ params }: { params: { slug: ServiceKey } }) {
  const svc = SERVICES[params.slug];
  if (!svc) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.title,
    description: svc.description,
    areaServed: "United Arab Emirates",
    provider: {
      "@type": "LocalBusiness",
      name: "SHAMA Passenger Transport",
      url: SITE,
    },
    url: `${SITE}/services/${params.slug}`,
  };

  return (
    <Script
      id={`jsonld-${params.slug}`}
      type="application/ld+json"
      strategy="afterInteractive"
    >
      {JSON.stringify(data)}
    </Script>
  );
}
