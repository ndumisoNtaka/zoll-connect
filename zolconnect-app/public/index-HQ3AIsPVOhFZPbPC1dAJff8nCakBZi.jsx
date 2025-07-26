import { pricingTiers } from './HomePageLogic';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function HomePage() {
  const [featuredStrains, setFeaturedStrains] = useState([]);

  useEffect(() => {
    async function loadStrains() {
      const { data, error } = await supabase.from('products').select('*').limit(6);
      if (error) console.error(error);
      else setFeaturedStrains(data);
    }
    loadStrains();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Showcase and Sell Your Weed Online</h1>
        <p className="text-xl mb-8">
          ZolConnect helps local cannabis retailers reach more customers easily and legally.
        </p>
        <div className="space-x-4">
          <button className="bg-white text-green-700 font-semibold px-6 py-3 rounded-2xl shadow">
            Get Started
          </button>
          <button className="border border-white px-6 py-3 rounded-2xl">Sign Up as a Vendor</button>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">What is ZolConnect?</h2>
        <p className="text-lg text-center mb-10">
          ZolConnect is South Africa’s digital weed strain marketplace. Vendors list their products, set prices,
          manage deliveries, and reach verified local customers with ease.
        </p>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="text-4xl mb-2">📍</div>
            <h3 className="text-xl font-semibold">1. Add Location</h3>
            <p>Vendors list their weed strain location and delivery radius.</p>
          </div>
          <div>
            <div className="text-4xl mb-2">🌿</div>
            <h3 className="text-xl font-semibold">2. List Products</h3>
            <p>Upload strains, prices, and descriptions with ease.</p>
          </div>
          <div>
            <div className="text-4xl mb-2">🚚</div>
            <h3 className="text-xl font-semibold">3. Deliver Locally</h3>
            <p>Offer scheduled or on-demand delivery to verified users.</p>
          </div>
        </div>
      </section>

      {/* Featured Weed Strains */}
      <section className="py-16 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">🔥 Featured Weed Strains</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredStrains.length > 0 ? (
            featuredStrains.map((strain) => (
              <div key={strain.id} className="bg-white rounded-2xl shadow p-4">
                <img
                  src={strain.image}
                  alt={strain.name}
                  className="h-48 w-full object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-bold">{strain.name}</h3>
                <p className="text-sm text-gray-600">{strain.location}</p>
                <p className="mt-2 text-green-700 font-bold">{strain.price}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-3">No featured strains found.</p>
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
              className={`rounded-xl p-6 shadow text-center ${tier.highlight ? 'bg-green-100' : 'bg-white'}`}
            >
              <h3 className="text-xl font-bold mb-2">{tier.title}</h3>
              <p className="mb-2">{tier.features.join(', ')}</p>
              <p className="text-2xl font-bold">{tier.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* User Dashboard Preview */}
      <section className="py-16 px-6 bg-white max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">👤 User Dashboard (Buyer)</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Profile Settings</h3>
            <p>Manage personal information, preferences, and account details.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Order History</h3>
            <p>View your past purchases and track delivery statuses.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Saved Vendors & Products</h3>
            <p>Bookmark your favorite strains and top strains for fast reordering.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Delivery Address Book</h3>
            <p>Save multiple delivery addresses for convenience.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 shadow col-span-full">
            <h3 className="text-xl font-semibold mb-2">ID Verification (18+ or Medical Use)</h3>
            <p>Upload and verify your ID to access vendors and place orders legally.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} ZolConnect. All rights reserved.</p>
        <div className="text-xs mt-2">
          For verified adult users only. Use responsibly and within South African law.
        </div>
      </footer>
    </div>
  );
}
