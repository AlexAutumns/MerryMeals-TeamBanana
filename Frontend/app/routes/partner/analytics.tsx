import React from "react";

const PartnerAnalyticsPage = () => (
  <div className="p-6 bg-gray-50 min-h-screen">
    <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-1">
          Analytics & Insights
        </h1>
        <p className="text-gray-600">
          Track your performance, engagement, and growth with real-time
          analytics.
        </p>
      </div>
      <div className="flex gap-2">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium shadow">
          Export Data
        </button>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 font-medium shadow">
          Download Report
        </button>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      {/* Stat Cards */}
      <div className="col-span-1 flex flex-col gap-6">
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-start">
          <h3 className="text-lg font-semibold text-gray-700 mb-1">
            Total Orders
          </h3>
          <p className="text-3xl font-bold text-blue-600">1,245</p>
          <p className="text-sm text-gray-500">This month</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-start">
          <h3 className="text-lg font-semibold text-gray-700 mb-1">
            Active Clients
          </h3>
          <p className="text-3xl font-bold text-green-600">312</p>
          <p className="text-sm text-gray-500">Currently served</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-start">
          <h3 className="text-lg font-semibold text-gray-700 mb-1">Revenue</h3>
          <p className="text-3xl font-bold text-purple-600">₱98,500</p>
          <p className="text-sm text-gray-500">This month</p>
        </div>
      </div>
      {/* Chart and Table */}
      <div className="col-span-2 flex flex-col gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Order Trends
          </h2>
          <div className="h-56 flex items-center justify-center">
            <svg
              viewBox="0 0 600 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-40 drop-shadow"
            >
              <defs>
                <linearGradient
                  id="analyticsChartGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                </linearGradient>
              </defs>
              <g stroke="#e5e7eb" strokeWidth="1">
                <line x1="60" y1="40" x2="540" y2="40" />
                <line x1="60" y1="90" x2="540" y2="90" />
                <line x1="60" y1="140" x2="540" y2="140" />
              </g>
              <text
                x="50"
                y="45"
                textAnchor="end"
                fontSize="16"
                fontWeight="700"
                fill="#374151"
              >
                200
              </text>
              <text
                x="50"
                y="95"
                textAnchor="end"
                fontSize="16"
                fontWeight="700"
                fill="#374151"
              >
                100
              </text>
              <text
                x="50"
                y="145"
                textAnchor="end"
                fontSize="16"
                fontWeight="700"
                fill="#374151"
              >
                0
              </text>
              <polyline
                points="60,140 120,120 180,100 240,80 300,60 360,90 420,70 480,50 540,40"
                fill="none"
                stroke="#2563eb"
                strokeWidth="4"
              />
              <polygon
                points="60,140 120,120 180,100 240,80 300,60 360,90 420,70 480,50 540,40 540,140 60,140"
                fill="url(#analyticsChartGradient)"
              />
              <circle cx="60" cy="140" r="7" fill="#2563eb" />
              <circle cx="120" cy="120" r="7" fill="#2563eb" />
              <circle cx="180" cy="100" r="7" fill="#2563eb" />
              <circle cx="240" cy="80" r="7" fill="#2563eb" />
              <circle cx="300" cy="60" r="7" fill="#2563eb" />
              <circle cx="360" cy="90" r="7" fill="#2563eb" />
              <circle cx="420" cy="70" r="7" fill="#2563eb" />
              <circle cx="480" cy="50" r="7" fill="#2563eb" />
              <circle cx="540" cy="40" r="7" fill="#2563eb" />
              <text
                x="60"
                y="170"
                textAnchor="middle"
                fontSize="14"
                fontWeight="600"
                fill="#374151"
              >
                Mon
              </text>
              <text
                x="120"
                y="170"
                textAnchor="middle"
                fontSize="14"
                fontWeight="600"
                fill="#374151"
              >
                Tue
              </text>
              <text
                x="180"
                y="170"
                textAnchor="middle"
                fontSize="14"
                fontWeight="600"
                fill="#374151"
              >
                Wed
              </text>
              <text
                x="240"
                y="170"
                textAnchor="middle"
                fontSize="14"
                fontWeight="600"
                fill="#374151"
              >
                Thu
              </text>
              <text
                x="300"
                y="170"
                textAnchor="middle"
                fontSize="14"
                fontWeight="600"
                fill="#374151"
              >
                Fri
              </text>
              <text
                x="360"
                y="170"
                textAnchor="middle"
                fontSize="14"
                fontWeight="600"
                fill="#374151"
              >
                Sat
              </text>
              <text
                x="420"
                y="170"
                textAnchor="middle"
                fontSize="14"
                fontWeight="600"
                fill="#374151"
              >
                Sun
              </text>
            </svg>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Recent Activity
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
                    Date
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Event
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">2025-08-01</td>
                  <td className="py-3 px-4">Order Completed</td>
                  <td className="py-3 px-4">Order #1245 delivered to client</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">2025-07-31</td>
                  <td className="py-3 px-4">New Client</td>
                  <td className="py-3 px-4">Client #312 registered</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">2025-07-30</td>
                  <td className="py-3 px-4">Payment Received</td>
                  <td className="py-3 px-4">₱5,000 from Order #1242</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PartnerAnalyticsPage;
