"use client"

import { useEffect, useState } from "react"

// Mock pricing data - no server imports
const pricingTiers = [
  {
    id: 1,
    title: "Basic Plan",
    features: ["List up to 5 products", "Basic analytics", "Email support"],
    price: "R99/month",
    highlight: false,
  },
  {
    id: 2,
    title: "Premium Plan",
    features: ["Unlimited products", "Advanced analytics", "Priority support", "Featured listings"],
    price: "R199/month",
    highlight: true,
  },
]

export default function HomePage() {
  const [featuredStrains, setFeaturedStrains] = useState<any[]>([])

  useEffect(() => {
    // Mock data - no server calls
    const mockStrains = [
      {
        id: 1,
        name: "Purple Mist",
        location: "Cape Town",
        price: "R95/g",
      },
      {
        id: 2,
        name: "Lemon OG",
        location: "Johannesburg",
        price: "R105/g",
      },
      {
        id: 3,
        name: "Blue Dream",
        location: "Durban",
        price: "R110/g",
      },
    ]
    setFeaturedStrains(mockStrains)
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Showcase and Sell Your Weed Online</h1>
        <p className="text-xl mb-8">
          ZolConnect helps local cannabis retailers reach more customers easily and legally.
        </p>
        <div className="space-x-4">
          <button className="bg-white text-green-700 font-semibold px-6 py-3 rounded-2xl shadow hover:bg-gray-100 transition-colors">
            Get Started
          </button>
          <button className="border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-green-700 transition-colors">
            Sign Up as a Vendor
          </button>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">What is ZolConnect?</h2>
        <p className="text-lg text-center mb-10">
          ZolConnect is South Africa&apos;s digital weed strain marketplace. Vendors list their products, set prices,
          manage deliveries, and reach verified local customers with ease.
        </p>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="p-6 bg-gray-50 rounded-xl">
            <div className="text-4xl mb-2">📍</div>
            <h3 className="text-xl font-semibold mb-2">1. Add Location</h3>
            <p className="text-gray-600">Vendors list their weed strain location and delivery radius.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <div className="text-4xl mb-2">🌿</div>
            <h3 className="text-xl font-semibold mb-2">2. List Products</h3>
            <p className="text-gray-600">Upload strains, prices, and descriptions with ease.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <div className="text-4xl mb-2">🚚</div>
            <h3 className="text-xl font-semibold mb-2">3. Deliver Locally</h3>
            <p className="text-gray-600">Offer scheduled or on-demand delivery to verified users.</p>
          </div>
        </div>
      </section>

      {/* Featured Weed Strains */}
      <section className="py-16 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">🔥 Featured Weed Strains</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredStrains.length > 0 ? (
            featuredStrains.map((strain) => (
              <div key={strain.id} className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition-shadow">
                <div className="h-48 w-full bg-gradient-to-br from-green-100 to-green-200 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-green-700 text-2xl">🌿</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{strain.name}</h3>
                <p className="text-sm text-gray-600 mb-2">📍 {strain.location}</p>
                <div className="flex justify-between items-center">
                  <p className="text-green-700 font-bold text-lg">{strain.price}</p>
                  <button className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-3">Loading featured strains...</p>
          )}
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">💸 Transparent Pricing</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-xl p-8 shadow text-center transition-transform hover:scale-105 ${
                tier.highlight ? "bg-green-100 border-2 border-green-300" : "bg-white border border-gray-200"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">{tier.title}</h3>
              <div className="mb-6">
                {tier.features.map((feature, index) => (
                  <p key={index} className="text-gray-600 mb-2">
                    ✓ {feature}
                  </p>
                ))}
              </div>
              <p className="text-3xl font-bold text-green-700 mb-6">{tier.price}</p>
              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  tier.highlight
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-xl font-bold mb-4">ZolConnect</h3>
          <p className="text-gray-400 text-sm mb-4">
            South Africa&apos;s premier cannabis marketplace connecting verified vendors with customers.
          </p>
          <p className="text-sm">&copy; {new Date().getFullYear()} ZolConnect. All rights reserved.</p>
          <div className="text-xs mt-2 text-gray-500">
            For verified adult users only. Use responsibly and within South African law.
          </div>
        </div>
      </footer>
    </div>
  )
}
