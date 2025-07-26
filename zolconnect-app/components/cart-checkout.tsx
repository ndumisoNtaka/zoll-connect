"use client"

import { useState } from "react"

interface CartItem {
  id: number
  name: string
  quantity: number
  price: number
}

export default function CartCheckout() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Purple Mist", quantity: 2, price: 95 },
    { id: 2, name: "Lemon OG", quantity: 1, price: 105 },
  ])

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(cartItems.filter((item) => item.id !== id))
    } else {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <h1 className="text-3xl font-bold mb-6">🛒 Cart & Checkout</h1>

      <section className="mb-10 bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        {cartItems.length > 0 ? (
          <>
            <ul className="divide-y">
              {cartItems.map((item) => (
                <li key={item.id} className="py-4 flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      {item.quantity}g @ R{item.price}/g
                    </p>
                    <div className="flex items-center mt-2 space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="bg-gray-200 px-2 py-1 rounded text-sm hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="text-sm">{item.quantity}g</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="bg-gray-200 px-2 py-1 rounded text-sm hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-green-700 font-bold">R{item.price * item.quantity}</p>
                    <button
                      onClick={() => updateQuantity(item.id, 0)}
                      className="text-red-500 text-sm hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-right font-bold text-lg">Total: R{total}</div>
          </>
        ) : (
          <p className="text-gray-500 text-center py-8">Your cart is empty</p>
        )}
      </section>

      {cartItems.length > 0 && (
        <section className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-4">Confirm & Pay</h2>
          <form className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Full Name"
              className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="text"
              placeholder="Delivery Address"
              className="border p-2 rounded md:col-span-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <select
              className="border p-2 rounded md:col-span-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            >
              <option value="">Select Payment Method</option>
              <option value="cash">Cash on Delivery</option>
              <option value="snapscan">SnapScan</option>
              <option value="yoco">Yoco</option>
            </select>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded md:col-span-2 hover:bg-green-700 transition-colors"
            >
              Confirm Order - R{total}
            </button>
          </form>
        </section>
      )}
    </div>
  )
}
