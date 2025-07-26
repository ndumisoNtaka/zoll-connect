"use client"

import { useState } from "react"

interface Product {
  id: number
  name: string
  type: string
  price: number
  stock: number
}

interface Order {
  id: number
  customer: string
  product: string
  status: string
  date: string
}

export default function VendorDashboard() {
  const [products] = useState<Product[]>([
    { id: 1, name: "Purple Mist", type: "Sativa", price: 95, stock: 120 },
    { id: 2, name: "Lemon OG", type: "Hybrid", price: 105, stock: 85 },
  ])

  const [orders] = useState<Order[]>([
    { id: 1234, customer: "John D.", product: "Purple Mist", status: "Preparing", date: "2025-01-10" },
    { id: 1235, customer: "Sarah M.", product: "Lemon OG", status: "Shipped", date: "2025-01-10" },
    { id: 1236, customer: "Mike R.", product: "Purple Mist", status: "Delivered", date: "2025-01-09" },
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Preparing":
        return "text-yellow-600 bg-yellow-100"
      case "Shipped":
        return "text-blue-600 bg-blue-100"
      case "Delivered":
        return "text-green-600 bg-green-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <h1 className="text-3xl font-bold mb-6">👤 Vendor Dashboard</h1>

      <section className="mb-10 bg-white p-6 rounded-2xl shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Your Product Listings</h2>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
            Add New Product
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-xl p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    product.stock > 50 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {product.stock > 50 ? "In Stock" : "Low Stock"}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                {product.type} - R{product.price}/g
              </p>
              <p className="text-sm text-gray-500">Stock: {product.stock}g</p>
              <div className="mt-4 space-x-2">
                <button className="px-4 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition-colors">
                  Edit
                </button>
                <button className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-left">
            <thead>
              <tr className="text-sm text-gray-600 border-b">
                <th className="py-2">Order ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b text-sm hover:bg-gray-50">
                  <td className="py-2">#{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.product}</td>
                  <td>
                    <span className={`px-2 py-1 rounded text-xs ${getStatusColor(order.status)}`}>{order.status}</span>
                  </td>
                  <td>{order.date}</td>
                  <td>
                    <button className="text-sm px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
