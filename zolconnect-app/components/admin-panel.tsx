"use client"

import { useState } from "react"

interface VendorRequest {
  id: number
  email: string
  status: string
  date: string
}

interface GlobalOrder {
  id: number
  vendor: string
  customer: string
  status: string
  updated: string
}

export default function AdminPanel() {
  const [vendorRequests, setVendorRequests] = useState<VendorRequest[]>([
    { id: 1, email: "greenhaven1@zolconnect.co.za", status: "pending", date: "2025-01-10" },
    { id: 2, email: "greenhaven2@zolconnect.co.za", status: "pending", date: "2025-01-09" },
  ])

  const [globalOrders] = useState<GlobalOrder[]>([
    { id: 1001, vendor: "Green Haven", customer: "John D.", status: "Delivered", updated: "Jan 10, 2025" },
    { id: 1002, vendor: "Cannabis Co.", customer: "Sarah M.", status: "Shipped", updated: "Jan 10, 2025" },
    { id: 1003, vendor: "Green Haven", customer: "Mike R.", status: "Preparing", updated: "Jan 9, 2025" },
  ])

  const handleVendorAction = (vendorId: number, action: "approve" | "reject") => {
    setVendorRequests(vendorRequests.filter((vendor) => vendor.id !== vendorId))
    console.log(`${action} vendor ${vendorId}`)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "text-green-600 bg-green-100"
      case "Shipped":
        return "text-blue-600 bg-blue-100"
      case "Preparing":
        return "text-yellow-600 bg-yellow-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <h1 className="text-3xl font-bold mb-6">🛠️ Admin Panel</h1>

      <section className="mb-10 bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4">Vendor Approval Requests</h2>
        {vendorRequests.length > 0 ? (
          <ul className="space-y-4">
            {vendorRequests.map((vendor) => (
              <li key={vendor.id} className="flex justify-between items-center border p-4 rounded hover:bg-gray-50">
                <div>
                  <p className="font-bold">Vendor #{vendor.id}</p>
                  <p className="text-sm text-gray-600">{vendor.email}</p>
                  <p className="text-xs text-gray-500">Applied: {vendor.date}</p>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => handleVendorAction(vendor.id, "approve")}
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleVendorAction(vendor.id, "reject")}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                  >
                    Reject
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center py-8">No pending vendor requests</p>
        )}
      </section>

      <section className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4">Global Order Tracking</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-left">
            <thead>
              <tr className="text-sm text-gray-600 border-b">
                <th className="py-2">Order ID</th>
                <th>Vendor</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Updated</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {globalOrders.map((order) => (
                <tr key={order.id} className="border-b text-sm hover:bg-gray-50">
                  <td className="py-2">#{order.id}</td>
                  <td>{order.vendor}</td>
                  <td>{order.customer}</td>
                  <td>
                    <span className={`px-2 py-1 rounded text-xs ${getStatusColor(order.status)}`}>{order.status}</span>
                  </td>
                  <td>{order.updated}</td>
                  <td>
                    <button className="text-sm px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors">
                      View Details
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
