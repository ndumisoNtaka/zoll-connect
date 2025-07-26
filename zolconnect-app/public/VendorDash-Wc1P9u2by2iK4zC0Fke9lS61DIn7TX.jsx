export default function VendorDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <h1 className="text-3xl font-bold mb-6">👤 Vendor Dashboard</h1>

      {/* Product Listings */}
      <section className="mb-10 bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4">Your Product Listings</h2>
        <button className="mb-4 bg-green-600 text-white px-4 py-2 rounded">Add New Product</button>
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2].map((item) => (
            <div key={item} className="border rounded-xl p-4">
              <h3 className="text-xl font-bold">Purple Mist #{item}</h3>
              <p className="text-sm text-gray-600">Sativa - R95/g</p>
              <p className="text-sm text-gray-500">Stock: 120g</p>
              <div className="mt-4 space-x-2">
                <button className="px-4 py-1 bg-yellow-400 text-white rounded">Edit</button>
                <button className="px-4 py-1 bg-red-500 text-white rounded">Remove</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Order Management */}
      <section className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4">Recent Orders</h2>
        <table className="w-full table-auto text-left">
          <thead>
            <tr className="text-sm text-gray-600 border-b">
              <th className="py-2">Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((id) => (
              <tr key={id} className="border-b text-sm">
                <td className="py-2">#{id}234</td>
                <td>John D.</td>
                <td>Purple Mist</td>
                <td className="text-green-700">Preparing</td>
                <td>
                  <button className="text-sm px-3 py-1 bg-blue-500 text-white rounded">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
