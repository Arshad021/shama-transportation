'use client'
import { useState } from 'react'

export default function Book() {
  const [status, setStatus] = useState('')

  async function submit(e: any) {
    e.preventDefault()
    setStatus('Submitting...')
    const fd = new FormData(e.target)
    const body = Object.fromEntries(fd.entries())
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (res.ok) {
        setStatus('Request sent! We will contact you shortly.')
      } else {
        setStatus('Failed to send. Please try again.')
      }
    } catch (err) {
      setStatus('Error sending.')
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold mb-2">Get an Instant Quote</h1>
      <p className="text-gray-600 mb-8">
        Airport transfers, point-to-point, hourly, or bus rental. No hidden fees.
      </p>
      <form
        onSubmit={submit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-2xl border"
      >
        <input
          name="name"
          placeholder="Full Name*"
          required
          className="p-3 border rounded"
        />
        <input
          name="email"
          type="email"
          placeholder="Email*"
          required
          className="p-3 border rounded"
        />
        <input
          name="phone"
          placeholder="Phone*"
          required
          className="p-3 border rounded md:col-span-2"
        />
        <input
          name="pickup"
          placeholder="Pickup Address / Airport*"
          required
          className="p-3 border rounded md:col-span-2"
        />
        <input
          name="dropoff"
          placeholder="Dropoff Address*"
          required
          className="p-3 border rounded md:col-span-2"
        />
        <div className="grid grid-cols-2 gap-4 md:col-span-2">
          <input name="date" type="date" required className="p-3 border rounded" />
          <input name="time" type="time" required className="p-3 border rounded" />
        </div>
        <select name="service" className="p-3 border rounded">
          <option value="Airport/Hotel Transfer">Airport/Hotel Transfer</option>
          <option value="Corporate Transportation">Corporate Transportation</option>
          <option value="Exhibitions/Wedding/Event Transport">
            Exhibitions/Wedding/Event Transport
          </option>
          <option value="Hourly/Daily/Weekly/Monthly Bus Rental">
            Hourly/Daily/Weekly/Monthly Bus Rental
          </option>
          <option value="Point-to-Point Two Way Transfer">
            Point-to-Point Two Way Transfer
          </option>
        </select>
        <div className="grid grid-cols-2 gap-4">
          <input
            name="passengers"
            type="number"
            min="1"
            placeholder="Passengers"
            className="p-3 border rounded"
          />
          <input
            name="luggage"
            type="number"
            min="0"
            placeholder="Luggage"
            className="p-3 border rounded"
          />
        </div>
        <textarea
          name="notes"
          placeholder="Notes (flight number, child seats, etc.)"
          className="p-3 border rounded md:col-span-2"
        />
        <button className="bg-yellow-500 text-black px-6 py-3 rounded font-bold md:col-span-2">
          Request Quote
        </button>
        {status && <p className="text-sm md:col-span-2">{status}</p>}
      </form>
      <p className="text-xs text-gray-500 mt-3">
        Prefer a call?{' '}
        <a className="underline" href="tel:+971558840121">
          +971 55 884 0121
        </a>{' '}
        or email{' '}
        <a className="underline" href="mailto:Shamapassenger@gmail.com">
          Shamapassenger@gmail.com
        </a>
        .
      </p>
    </section>
  )
}
