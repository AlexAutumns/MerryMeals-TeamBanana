import React from "react";

const Overview = () => {
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

      {/* Main Chart Section - Modern Line Chart */}
      <div className="bg-white rounded-lg shadow mb-8 p-0">
        <div className="flex justify-between items-center mb-4 px-6 pt-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Weekly Delivery Overview
          </h2>
          <div>
            <select className="border border-gray-300 rounded px-3 py-1 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200">
              <option>This Week</option>
              <option>Last Week</option>
              <option>2 Weeks Ago</option>
            </select>
          </div>
        </div>
        <div className="h-64 w-full flex items-center justify-center p-0">
          <svg
            viewBox="0 0 3200 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-56"
            style={{ display: "block" }}
          >
            {/* Grid Lines */}
            <g stroke="#e5e7eb" strokeWidth="1">
              <line x1="80" y1="40" x2="3120" y2="40" />
              <line x1="80" y1="80" x2="3120" y2="80" />
              <line x1="80" y1="120" x2="3120" y2="120" />
              <line x1="80" y1="160" x2="3120" y2="160" />
              <line x1="80" y1="200" x2="3120" y2="200" />
            </g>
            {/* Y Axis Labels */}
            <text
              x="60"
              y="45"
              textAnchor="end"
              fontSize="22"
              fontWeight="700"
              fill="#374151"
            >
              100
            </text>
            <text
              x="60"
              y="85"
              textAnchor="end"
              fontSize="22"
              fontWeight="700"
              fill="#374151"
            >
              80
            </text>
            <text
              x="60"
              y="125"
              textAnchor="end"
              fontSize="22"
              fontWeight="700"
              fill="#374151"
            >
              60
            </text>
            <text
              x="60"
              y="165"
              textAnchor="end"
              fontSize="22"
              fontWeight="700"
              fill="#374151"
            >
              40
            </text>
            <text
              x="60"
              y="205"
              textAnchor="end"
              fontSize="22"
              fontWeight="700"
              fill="#374151"
            >
              20
            </text>
            {/* X Axis Labels (Days of the week) */}
            <text
              x="80"
              y="235"
              textAnchor="middle"
              fontSize="20"
              fontWeight="700"
              fill="#374151"
            >
              Mon
            </text>
            <text
              x="600"
              y="235"
              textAnchor="middle"
              fontSize="20"
              fontWeight="700"
              fill="#374151"
            >
              Tue
            </text>
            <text
              x="1120"
              y="235"
              textAnchor="middle"
              fontSize="20"
              fontWeight="700"
              fill="#374151"
            >
              Wed
            </text>
            <text
              x="1640"
              y="235"
              textAnchor="middle"
              fontSize="20"
              fontWeight="700"
              fill="#374151"
            >
              Thu
            </text>
            <text
              x="2160"
              y="235"
              textAnchor="middle"
              fontSize="20"
              fontWeight="700"
              fill="#374151"
            >
              Fri
            </text>
            <text
              x="2680"
              y="235"
              textAnchor="middle"
              fontSize="20"
              fontWeight="700"
              fill="#374151"
            >
              Sat
            </text>
            <text
              x="3120"
              y="235"
              textAnchor="middle"
              fontSize="20"
              fontWeight="700"
              fill="#374151"
            >
              Sun
            </text>
            {/* Area under the line */}
            <defs>
              <linearGradient
                id="areaGradientAdmin"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M80,170 L600,110 L1120,90 L1640,130 L2160,80 L2680,120 L3120,100 L3120,210 L80,210 Z"
              fill="url(#areaGradientAdmin)"
            />
            {/* Line */}
            <polyline
              points="80,170 600,110 1120,90 1640,130 2160,80 2680,120 3120,100"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="4"
            />
            {/* Dots */}
            <circle cx="80" cy="170" r="6" fill="#3b82f6" />
            <circle cx="600" cy="110" r="6" fill="#3b82f6" />
            <circle cx="1120" cy="90" r="6" fill="#3b82f6" />
            <circle cx="1640" cy="130" r="6" fill="#3b82f6" />
            <circle cx="2160" cy="80" r="6" fill="#3b82f6" />
            <circle cx="2680" cy="120" r="6" fill="#3b82f6" />
            <circle cx="3120" cy="100" r="6" fill="#3b82f6" />
          </svg>
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

export default Overview;
