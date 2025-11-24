'use client';
import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/quote";
  };

  return (
    <section className="relative w-full bg-black pt-24 pb-24 md:pt-32 md:pb-32 overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/Banner.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        alt="Luxury Transport UAE"
      />

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center px-4">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-white">
          
          {/* LEFT SIDE TEXT */}
          <div className="text-center md:text-left">
            <p className="uppercase tracking-widest bg-gradient-to-r from-[#ea3c3a] to-[#fedf23] bg-clip-text text-transparent font-semibold">
              Premium Transport & Tour Services in UAE
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mt-3">
              Reliable. Comfortable. <br className="hidden md:block" />
              Affordable Rides <br className="hidden md:block" />
              Across the UAE.
            </h1>

            <p className="mt-5 text-base sm:text-lg max-w-full md:max-w-xl mx-auto md:mx-0 text-gray-100">
              Shama Passenger Transport & Tours offers luxury fleet rentals,
              airport transfers, city tours, and group transport across Dubai,
              Abu Dhabi, Sharjah, and all Emirates.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start items-center">
              <Link
                href="/book"
                className="bg-gradient-to-r from-[#ea3c3a] to-[#fedf23] text-black px-6 py-3 rounded-lg font-bold hover:opacity-90 transition"
              >
                BOOK NOW
              </Link>

              <a
                href="tel:+971558840121"
                className="border border-white/70 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
              >
                Call +971 55 884 0121
              </a>

              <a
                href="https://wa.me/971558840121"
                className="underline hover:text-[#fedf23]"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* RIGHT SIDE — QUOTE FORM */}
          <div className="bg-white text-black rounded-2xl shadow-2xl p-6 md:p-8 bg-opacity-95 backdrop-blur-sm w-full">
            <h2 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-[#ea3c3a] to-[#fedf23] bg-clip-text text-transparent">
              Get an Instant Quote
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-lg p-3"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-lg p-3"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="pickup"
                  value={form.pickup}
                  onChange={handleChange}
                  placeholder="Pickup Location"
                  className="w-full border border-gray-300 rounded-lg p-3"
                  required
                />
                <input
                  type="text"
                  name="dropoff"
                  value={form.dropoff}
                  onChange={handleChange}
                  placeholder="Drop-off Location"
                  className="w-full border border-gray-300 rounded-lg p-3"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3"
                  required
                />
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3"
                  required
                />
              </div>

              <button
                type="submit"
                className="block w-full text-center bg-gradient-to-r from-[#ea3c3a] to-[#fedf23] hover:opacity-90 text-black font-semibold py-3 rounded-lg transition"
              >
                Get My Quote
              </button>
            </form>

            <p className="text-sm text-center mt-3 text-gray-500">
              Our team will get back to you shortly!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
