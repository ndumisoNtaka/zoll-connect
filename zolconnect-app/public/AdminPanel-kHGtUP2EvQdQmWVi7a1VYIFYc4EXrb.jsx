export default function AdminPanel() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <h1 className="text-3xl font-bold mb-6">🛠️ Admin Panel</h1>

      {/* Vendor Approvals */}
      <section className="mb-10 bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4">Vendor Approval Requests</h2>
        <ul className="space-y-4">
          {[1, 2].map((vendor) => (
            <li key={vendor} className="flex justify-between items-center border p-4 rounded">
              <div>
                <p className="font-bold">Vendor #{vendor}</p>
                <p className="text-sm text-gray-600">greenhaven{vendor}@zolconnect.co.za</p>
              </div>
              <div className="space-x-2">
                <button className="bg-green-600 text-white px-3 py-1 rounded">Approve</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded">Reject</button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Global Order Tracking */}
      <section className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4">Global Order Tracking</h2>
        <table className="w-full table-auto text-left">
          <thead>
            <tr className="text-sm text-gray-600 border-b">
              <th className="py-2">Order ID</th>
              <th>Vendor</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            {[1001, 1002, 1003].map((id) => (
              <tr key={id} className="border-b text-sm">
                <td className="py-2">#{id}</td>
                <td>Green Haven</td>
                <td>John D.</td>
                <td className="text-green-700">Delivered</td>
                <td>Jul 4, 2025</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
