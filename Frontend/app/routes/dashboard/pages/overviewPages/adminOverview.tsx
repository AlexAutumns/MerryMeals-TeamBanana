import React from "react";

const adminOverview = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Top Part of the Overview Page - Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Admin Dashboard
        </h1>
        <p className="text-gray-600">
          Welcome back! Here's what's happening with your meals delivery
          service.
        </p>
      </div>

      {/* Statistics Cards - Quick Overview Numbers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700">Total Orders</h3>
          <p className="text-3xl font-bold text-blue-600">124</p>
          <p className="text-sm text-gray-500">+12 from yesterday</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700">
            Active Deliveries
          </h3>
          <p className="text-3xl font-bold text-green-600">18</p>
          <p className="text-sm text-gray-500">Currently in progress</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700">
            Total Volunteers
          </h3>
          <p className="text-3xl font-bold text-purple-600">32</p>
          <p className="text-sm text-gray-500">5 online now</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700">
            Pending Requests
          </h3>
          <p className="text-3xl font-bold text-red-600">7</p>
          <p className="text-sm text-gray-500">Need attention</p>
        </div>
      </div>

      {/* Main Chart Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Weekly Delivery Overview
        </h2>
        <div className="h-64 bg-gray-100 rounded flex items-center justify-center border-2 border-dashed border-gray-300">
          <div className="text-center">
            <p className="text-gray-500 text-lg mb-2">📊 Chart Area</p>
            <p className="text-gray-400 text-sm">
              Delivery statistics chart will be displayed here
            </p>
          </div>
        </div>
      </div>

      {/* Delivery Management Table */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Recent Deliveries
          </h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            View All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Order ID
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Customer
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Volunteer
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Delivery Time
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Status
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">#MM001</td>
                <td className="py-3 px-4">John Doe</td>
                <td className="py-3 px-4">Sarah Smith</td>
                <td className="py-3 px-4">2:30 PM</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Delivered
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    View Details
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">#MM002</td>
                <td className="py-3 px-4">Jane Wilson</td>
                <td className="py-3 px-4">Mike Johnson</td>
                <td className="py-3 px-4">3:15 PM</td>
                <td className="py-3 px-4">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    In Transit
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Track
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">#MM003</td>
                <td className="py-3 px-4">Bob Brown</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">4:00 PM</td>
                <td className="py-3 px-4">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    Pending
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Assign Volunteer
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">#MM004</td>
                <td className="py-3 px-4">Alice Cooper</td>
                <td className="py-3 px-4">Tom Wilson</td>
                <td className="py-3 px-4">1:45 PM</td>
                <td className="py-3 px-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Preparing
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Update Status
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default adminOverview;
