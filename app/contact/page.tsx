'use client'

import { useState } from "react"

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    pickupDate: "",
    pickupLocation: "",
    duration: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<null | "success" | "error">(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const result = await res.json()

      if (result.ok) {
        setStatus("success")
        setForm({
          name: "",
          email: "",
          phone: "",
          pickupDate: "",
          pickupLocation: "",
          duration: "",
          message: "",
        })
      } else {
        setStatus("error")
      }
    } catch (err) {
      console.error(err)
      setStatus("error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-16 pt-32">
      {/* pt-32 added to prevent overlap with sticky navbar */}
      <h1 className="text-4xl font-extrabold text-center mb-8">Contact Us</h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-yellow-400 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-yellow-400 outline-none"
          />
        </div>

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          required
          value={form.phone}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-yellow-400 outline-none"
        />

        <div className="grid md:grid-cols-3 gap-5">
          <input
            type="date"
            name="pickupDate"
            placeholder="Pickup Date"
            required
            value={form.pickupDate}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-yellow-400 outline-none"
          />
          <input
            type="text"
            name="pickupLocation"
            placeholder="Pickup Location"
            required
            value={form.pickupLocation}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-yellow-400 outline-none"
          />
          <select
            name="duration"
            required
            value={form.duration}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-yellow-400 outline-none bg-white"
          >
            <option value="" disabled>Select Duration</option>
            <option value="Full Day (10 Hours)">Full Day (10 Hours)</option>
            <option value="Half Day (Min 5 hours)">Half Day (Min 5 hours)</option>
            <option value="Weekly Hire (Min 7 Days)">Weekly Hire (Min 7 Days)</option>
            <option value="Transfer Service‑Within UAE">Transfer Service ‑ Within UAE</option>
          </select>
        </div>

        <textarea
          name="message"
          placeholder="Your Message / Special Requests"
          value={form.message}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-3 w-full h-32 focus:ring-2 focus:ring-yellow-400 outline-none resize-none"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-red-500 to-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-black hover:text-white transition"
        >
          {loading ? "Sending…" : "Send Enquiry"}
        </button>

        {status === "success" && (
          <p className="text-green-600 text-center mt-3">✅ Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-center mt-3">❌ Something went wrong. Please try again.</p>
        )}
      </form>
    </section>
  )
}
