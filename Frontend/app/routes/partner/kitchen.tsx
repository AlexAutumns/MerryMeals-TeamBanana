import React from "react";

const PartnerKitchenPage = () => (
  <div className="p-6 bg-gray-50 min-h-screen">
    <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-1">
          Kitchen Management
        </h1>
        <p className="text-gray-600">
          Monitor your kitchen's inventory, orders, and staff at a glance.
        </p>
      </div>
      <div className="flex gap-2">
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 font-medium shadow">
          Add Inventory
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium shadow">
          Assign Staff
        </button>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      {/* Stat Cards */}
      <div className="col-span-1 flex flex-col gap-6">
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-start">
          <h3 className="text-lg font-semibold text-gray-700 mb-1">
            Meals in Prep
          </h3>
          <p className="text-3xl font-bold text-green-600">48</p>
          <p className="text-sm text-gray-500">Currently being prepared</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-start">
          <h3 className="text-lg font-semibold text-gray-700 mb-1">
            Kitchen Staff
          </h3>
          <div className="flex -space-x-2 mb-2">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Staff"
              className="w-8 h-8 rounded-full border-2 border-white shadow"
            />
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Staff"
              className="w-8 h-8 rounded-full border-2 border-white shadow"
            />
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="Staff"
              className="w-8 h-8 rounded-full border-2 border-white shadow"
            />
            <span className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full border-2 border-white text-xs font-semibold text-gray-600 shadow">
              +4
            </span>
          </div>
          <p className="text-3xl font-bold text-purple-600">7</p>
          <p className="text-sm text-gray-500">On shift today</p>
        </div>
      </div>
      {/* Chart and Inventory */}
      <div className="col-span-2 flex flex-col gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Meal Prep Progress
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
                  id="kitchenChartGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#34d399" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
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
                100%
              </text>
              <text
                x="50"
                y="95"
                textAnchor="end"
                fontSize="16"
                fontWeight="700"
                fill="#374151"
              >
                50%
              </text>
              <text
                x="50"
                y="145"
                textAnchor="end"
                fontSize="16"
                fontWeight="700"
                fill="#374151"
              >
                0%
              </text>
              <polyline
                points="60,140 140,100 220,80 300,60 380,90 460,70 540,40"
                fill="none"
                stroke="#34d399"
                strokeWidth="4"
              />
              <polygon
                points="60,140 140,100 220,80 300,60 380,90 460,70 540,40 540,140 60,140"
                fill="url(#kitchenChartGradient)"
              />
              <circle cx="60" cy="140" r="7" fill="#34d399" />
              <circle cx="140" cy="100" r="7" fill="#34d399" />
              <circle cx="220" cy="80" r="7" fill="#34d399" />
              <circle cx="300" cy="60" r="7" fill="#34d399" />
              <circle cx="380" cy="90" r="7" fill="#34d399" />
              <circle cx="460" cy="70" r="7" fill="#34d399" />
              <circle cx="540" cy="40" r="7" fill="#34d399" />
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
                x="140"
                y="170"
                textAnchor="middle"
                fontSize="14"
                fontWeight="600"
                fill="#374151"
              >
                Tue
              </text>
              <text
                x="220"
                y="170"
                textAnchor="middle"
                fontSize="14"
                fontWeight="600"
                fill="#374151"
              >
                Wed
              </text>
              <text
                x="300"
                y="170"
                textAnchor="middle"
                fontSize="14"
                fontWeight="600"
                fill="#374151"
              >
                Thu
              </text>
              <text
                x="380"
                y="170"
                textAnchor="middle"
                fontSize="14"
                fontWeight="600"
                fill="#374151"
              >
                Fri
              </text>
              <text
                x="460"
                y="170"
                textAnchor="middle"
                fontSize="14"
                fontWeight="600"
                fill="#374151"
              >
                Sat
              </text>
              <text
                x="540"
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
              Inventory Overview
            </h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Manage
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Item
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Stock
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Unit
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-400"></span>
                    Rice
                  </td>
                  <td className="py-3 px-4">120</td>
                  <td className="py-3 px-4">kg</td>
                  <td className="py-3 px-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Sufficient
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-yellow-400"></span>
                    Chicken
                  </td>
                  <td className="py-3 px-4">45</td>
                  <td className="py-3 px-4">kg</td>
                  <td className="py-3 px-4">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      Low
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-red-400"></span>
                    Vegetables
                  </td>
                  <td className="py-3 px-4">30</td>
                  <td className="py-3 px-4">kg</td>
                  <td className="py-3 px-4">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                      Critical
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PartnerKitchenPage;
