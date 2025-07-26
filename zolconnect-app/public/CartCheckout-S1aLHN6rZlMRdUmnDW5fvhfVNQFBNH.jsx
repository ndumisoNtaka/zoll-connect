import { useState } from 'react';

export default function CartCheckout() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Purple Mist', quantity: 2, price: 95 },
    { id: 2, name: 'Lemon OG', quantity: 1, price: 105 },
  ]);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <h1 className="text-3xl font-bold mb-6">🛒 Cart & Checkout</h1>

      {/* Cart Items */}
      <section className="mb-10 bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        <ul className="divide-y">
          {cartItems.map((item) => (
            <li key={item.id} className="py-4 flex justify-between">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">{item.quantity}g @ R{item.price}/g</p>
              </div>
              <p className="text-green-700 font-bold">R{item.price * item.quantity}</p>
            </li>
          ))}
        </ul>
        <div className="mt-6 text-right font-bold text-lg">
          Total: R{total}
        </div>
      </section>

      {/* Checkout Section */}
      <section className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4">Confirm & Pay</h2>
        <form className="grid gap-4 md:grid-cols-2">
          <input type="text" placeholder="Full Name" className="border p-2 rounded" />
          <input type="tel" placeholder="Phone Number" className="border p-2 rounded" />
          <input type="text" placeholder="Delivery Address" className="border p-2 rounded md:col-span-2" />
          <select className="border p-2 rounded md:col-span-2">
            <option>Select Payment Method</option>
            <option>Cash on Delivery</option>
            <option>SnapScan</option>
            <option>Yoco</option>
          </select>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded md:col-span-2">
            Confirm Order
          </button>
        </form>
      </section>
    </div>
  );
}
