'use client'
import Link from 'next/link'

export default function StickyMobileBar(){
  return (
    <div className="fixed bottom-0 inset-x-0 md:hidden z-50 bg-black text-white shadow-lg h-16 pb-safe">
      <div className="max-w-7xl mx-auto px-3 h-full grid grid-cols-3 gap-2 text-center text-sm">
        <a href="tel:+971558840121" className="bg-white/10 rounded flex items-center justify-center">
          Call
        </a>
        <a href="https://wa.me/971558840121" className="bg-green-600 text-white rounded flex items-center justify-center">
          WhatsApp
        </a>
        <Link href="mailto:Shamapassenger@gmail.com" className="bg-yellow-500 text-black font-bold rounded flex items-center justify-center">
          Email
        </Link>
      </div>
    </div>
  )
}
