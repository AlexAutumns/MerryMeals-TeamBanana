import React from "react";

const PartnerDashboardPage = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Top Part of the Partner Dashboard - Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Partner Dashboard
        </h1>
        <p className="text-gray-600">
          Welcome back! Here’s your partnership summary and recent impact with
          MerryMeals.
        </p>
      </div>

      {/* Statistics Cards - Quick Overview Numbers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700">
            Meals Sponsored
          </h3>
          <p className="text-3xl font-bold text-green-600">1,250</p>
          <p className="text-sm text-gray-500">+50 this month</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700">
            Communities Impacted
          </h3>
          <p className="text-3xl font-bold text-blue-600">3</p>
          <p className="text-sm text-gray-500">2 new this year</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700">
            Partnership Years
          </h3>
          <p className="text-3xl font-bold text-purple-600">5</p>
          <p className="text-sm text-gray-500">Thank you for your loyalty!</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700">
            Active Campaigns
          </h3>
          <p className="text-3xl font-bold text-yellow-600">2</p>
          <p className="text-sm text-gray-500">Running now</p>
        </div>
      </div>

      {/* Main Chart Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Partnership Impact Over Time
        </h2>
        <div className="h-72 bg-gray-100 rounded flex items-center justify-center border-2 border-dashed border-gray-300">
          <div className="w-full flex flex-col items-center justify-center">
            <svg
              viewBox="0 0 900 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-48"
              style={{ display: "block" }}
            >
              {/* Chart Title */}
              <text
                x="450"
                y="28"
                textAnchor="middle"
                fontSize="22"
                fontWeight="700"
                fill="#374151"
              >
                Partnership Impact (Sample Data)
              </text>
              {/* Y Axis Labels */}
              <text
                x="40"
                y="60"
                textAnchor="end"
                fontSize="16"
                fontWeight="600"
                fill="#374151"
              >
                80
              </text>
              <text
                x="40"
                y="110"
                textAnchor="end"
                fontSize="16"
                fontWeight="600"
                fill="#374151"
              >
                40
              </text>
              <text
                x="40"
                y="160"
                textAnchor="end"
                fontSize="16"
                fontWeight="600"
                fill="#374151"
              >
                0
              </text>
              {/* X Axis Labels */}
              <text
                x="100"
                y="200"
                textAnchor="middle"
                fontSize="16"
                fontWeight="600"
                fill="#374151"
              >
                Jan
              </text>
              <text
                x="220"
                y="200"
                textAnchor="middle"
                fontSize="16"
                fontWeight="600"
                fill="#374151"
              >
                Feb
              </text>
              <text
                x="340"
                y="200"
                textAnchor="middle"
                fontSize="16"
                fontWeight="600"
                fill="#374151"
              >
                Mar
              </text>
              <text
                x="460"
                y="200"
                textAnchor="middle"
                fontSize="16"
                fontWeight="600"
                fill="#374151"
              >
                Apr
              </text>
              <text
                x="580"
                y="200"
                textAnchor="middle"
                fontSize="16"
                fontWeight="600"
                fill="#374151"
              >
                May
              </text>
              <text
                x="700"
                y="200"
                textAnchor="middle"
                fontSize="16"
                fontWeight="600"
                fill="#374151"
              >
                Jun
              </text>
              <text
                x="820"
                y="200"
                textAnchor="middle"
                fontSize="16"
                fontWeight="600"
                fill="#374151"
              >
                Jul
              </text>
              {/* Bars */}
              <rect
                x="80"
                y="100"
                width="40"
                height="60"
                rx="6"
                fill="#34d399"
              />
              <rect
                x="200"
                y="60"
                width="40"
                height="100"
                rx="6"
                fill="#60a5fa"
              />
              <rect
                x="320"
                y="40"
                width="40"
                height="120"
                rx="6"
                fill="#a78bfa"
              />
              <rect
                x="440"
                y="80"
                width="40"
                height="80"
                rx="6"
                fill="#fbbf24"
              />
              <rect
                x="560"
                y="50"
                width="40"
                height="110"
                rx="6"
                fill="#f87171"
              />
              <rect
                x="680"
                y="120"
                width="40"
                height="40"
                rx="6"
                fill="#10b981"
              />
              <rect
                x="800"
                y="90"
                width="40"
                height="70"
                rx="6"
                fill="#3b82f6"
              />
            </svg>
            <p className="text-gray-400 text-sm mt-2">
              Your partnership impact chart will be displayed here
            </p>
          </div>
        </div>
      </div>

      {/* Partnership Activities Table */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Recent Partnership Activities
          </h2>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
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
                  Activity
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Impact
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-green-50">
                <td className="py-3 px-4 font-medium">2025-07-28</td>
                <td className="py-3 px-4">
                  Sponsored "Summer Meals for Seniors" campaign
                </td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    250 meals delivered
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-green-600 hover:text-green-800 font-medium">
                    View Details
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-blue-50">
                <td className="py-3 px-4 font-medium">2025-07-15</td>
                <td className="py-3 px-4">
                  Hosted community nutrition workshop
                </td>
                <td className="py-3 px-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    3 communities reached
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-green-600 hover:text-green-800 font-medium">
                    View Details
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-purple-50">
                <td className="py-3 px-4 font-medium">2025-06-30</td>
                <td className="py-3 px-4">Renewed annual partnership</td>
                <td className="py-3 px-4">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    5th year milestone
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-green-600 hover:text-green-800 font-medium">
                    View Details
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

export default PartnerDashboardPage;
