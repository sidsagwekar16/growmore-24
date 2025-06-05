"use client"

import React, { useState } from "react"

export default function MaintenancePage() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ideally send email to backend or Mailchimp
    alert(`We'll notify you at ${email}`)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">


      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        We'll Be Back Soon!
      </h1>

      <p className="text-gray-600 max-w-xl mb-6">
        Our website is currently undergoing scheduled maintenance to improve your experience.
        We’ll be back online shortly. Thank you for your patience.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-2 w-full max-w-md"
      >
        <input
          type="email"
          placeholder="Enter your email for updates"
          className="border border-gray-300 rounded px-4 py-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Notify Me
        </button>
      </form>

      <p className="text-sm text-gray-400 mt-6">
        © {new Date().getFullYear()} GrowMore Technologies Limited. All rights reserved.
      </p>
    </div>
  )
}
