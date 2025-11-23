'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [sopen, setSopen] = useState(false)
  const timerRef = useRef(null)

  const services = [
    'airport-hotel-transfers',
    'companies-corporate-transportation',
    'exhibitions-wedding-events-transportation',
    'hourly-daily-weekly-monthly-bus-rental',
    'point-to-point-two-way-transfer',
  ]

  const tours = [
    'abu-dhabi-city-tour',
    'dubai-city-tour',
    'desert-safari',
    'other-emirates-tour',
  ]

  const fleets = [
    '7-seater-van-kia-sedona',
    '12-seater-minibus-toyota-hiace',
    '15-seater-minibus-toyota-hiace',
    '22-seater-minibus-toyota-coaster',
    '35-seater-luxury-bus',
    '50-seater-luxury-bus',
  ]

  const handleEnter = () => {
    clearTimeout(timerRef.current)
    setSopen(true)
  }

  const handleLeave = () => {
    timerRef.current = setTimeout(() => setSopen(false), 150)
  }

  return (
    <header className="fixed w-full z-40 top-0">

      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#ea3c3a] to-[#fedf23] text-black text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center flex-wrap text-white">
          <div className="flex items-center gap-4">
            <Link href="/book" className="font-semibold underline text-black hover:text-gray-800">
              Book Now
            </Link>
            <span className="text-black font-medium">24/7 Service</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="tel:+971558840121" className="font-semibold underline text-black hover:text-gray-800">
              Call: +971 55 884 0121
            </a>
            <a href="mailto:Shamapassenger@gmail.com" className="font-semibold underline text-black hover:text-gray-800">
              Shamapassenger@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-black text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/newwwwww-2048x858-1.png"
              alt="Shama Transport and Tours"
              width={180}
              height={50}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>

            {/* Fleets Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <Link href="/fleets" className="flex items-center">
                Fleets ▾
              </Link>
              {sopen && (
                <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg w-72 p-2 grid grid-cols-1 z-50">
                  {fleets.map((slug) => (
                    <Link
                      key={slug}
                      href={`/fleets/${slug}`}
                      className="px-4 py-2 hover:bg-gray-100 capitalize"
                    >
                      {slug.replace(/-/g, ' ')}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <Link href="/services" className="flex items-center">
                Services ▾
              </Link>
              <div className="absolute right-0 hidden group-hover:grid bg-white text-black rounded shadow-lg w-80 p-2 grid-cols-1 z-50">
                {services.map((slug) => (
                  <Link
                    key={slug}
                    href={`/services/${slug}`}
                    className="px-4 py-2 hover:bg-gray-100 capitalize"
                  >
                    {slug.replace(/-/g, ' ')}
                  </Link>
                ))}
              </div>
            </div>

            {/* Tours Dropdown */}
            <div className="relative group">
              <button className="flex items-center">Tours ▾</button>
              <div className="absolute right-0 hidden group-hover:grid bg-white text-black rounded shadow-lg w-72 p-2 grid-cols-1 z-50">
                {tours.map((slug) => (
                  <Link
                    key={slug}
                    href={`/tours/${slug}`}
                    className="px-4 py-2 hover:bg-gray-100 capitalize"
                  >
                    {slug.replace(/-/g, ' ')}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/contact">Contact</Link>
            <Link
              href="/book"
              className="bg-[#fedf23] text-black px-3 py-1 rounded hover:bg-[#ffe94a]"
            >
              Book Now
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden text-2xl px-2 py-1 rounded focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            {open ? '✖' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-black text-white px-4 overflow-hidden transition-all duration-300 ${
            open ? 'max-h-screen pb-4' : 'max-h-0'
          }`}
        >
          <Link href="/" className="block py-2">Home</Link>
          <Link href="/about" className="block py-2">About Us</Link>

          <details className="pt-2">
            <summary>Fleets</summary>
            <div className="pl-4">
              <Link href="/fleets" className="block py-1 font-semibold">All Fleets</Link>
              {fleets.map((slug) => (
                <Link key={slug} href={`/fleets/${slug}`} className="block py-1 capitalize">
                  {slug.replace(/-/g, ' ')}
                </Link>
              ))}
            </div>
          </details>

          <details className="pt-2">
            <summary>Services</summary>
            <div className="pl-4">
              <Link href="/services" className="block py-1 font-semibold">All Services</Link>
              {services.map((slug) => (
                <Link key={slug} href={`/services/${slug}`} className="block py-1 capitalize">
                  {slug.replace(/-/g, ' ')}
                </Link>
              ))}
            </div>
          </details>

          <details className="pt-2">
            <summary>Tours</summary>
            <div className="pl-4">
              {tours.map((slug) => (
                <Link key={slug} href={`/tours/${slug}`} className="block py-1 capitalize">
                  {slug.replace(/-/g, ' ')}
                </Link>
              ))}
            </div>
          </details>

          <Link href="/contact" className="block py-2">Contact</Link>
          <Link href="/book" className="block py-2 font-semibold text-[#fedf23]">Book Now</Link>
        </div>
      </div>
    </header>
  )
}
