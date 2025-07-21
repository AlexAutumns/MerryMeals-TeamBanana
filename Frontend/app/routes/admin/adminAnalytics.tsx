import React from "react";

const AdminAnalytics = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Top Part of the Analytics Page - Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Analytics Dashboard
        </h1>
        <p className="text-gray-600">
          Track performance, monitor trends, and gain insights into your meal
          delivery service.
        </p>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Revenue</h3>
              <p className="text-3xl font-bold text-green-600">$12,450</p>
              <p className="text-sm text-green-500">+15% this month</p>
            </div>
            <div className="text-3xl">💰</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Avg. Delivery Time
              </h3>
              <p className="text-3xl font-bold text-blue-600">28 min</p>
              <p className="text-sm text-green-500">-5 min improved</p>
            </div>
            <div className="text-3xl">🚚</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Customer Satisfaction
              </h3>
              <p className="text-3xl font-bold text-yellow-600">4.8/5</p>
              <p className="text-sm text-green-500">+0.2 this month</p>
            </div>
            <div className="text-3xl">⭐</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Order Success Rate
              </h3>
              <p className="text-3xl font-bold text-purple-600">96%</p>
              <p className="text-sm text-green-500">+2% this month</p>
            </div>
            <div className="text-3xl">✅</div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Orders Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Orders Overview
          </h2>
          <div className="h-64 bg-gradient-to-t from-blue-50 to-blue-100 rounded flex items-center justify-center border-2 border-dashed border-blue-300">
            <div className="text-center">
              <p className="text-blue-600 text-lg mb-2">📊 Line Chart</p>
              <p className="text-blue-500 text-sm">
                Daily orders for the past 30 days
              </p>
              <div className="mt-4 space-y-2">
                <div className="text-sm text-blue-600">
                  Peak: 45 orders (July 1st)
                </div>
                <div className="text-sm text-blue-600">
                  Average: 32 orders/day
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Revenue Trends
          </h2>
          <div className="h-64 bg-gradient-to-t from-green-50 to-green-100 rounded flex items-center justify-center border-2 border-dashed border-green-300">
            <div className="text-center">
              <p className="text-green-600 text-lg mb-2">📈 Bar Chart</p>
              <p className="text-green-500 text-sm">
                Monthly revenue comparison
              </p>
              <div className="mt-4 space-y-2">
                <div className="text-sm text-green-600">
                  This Month: $12,450
                </div>
                <div className="text-sm text-green-600">
                  Last Month: $10,820
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Items & Top Performing Volunteers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Popular Items */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Most Popular Items
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🍲</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Chicken Soup</h3>
                  <p className="text-sm text-gray-600">45 orders this month</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-orange-600">$382.50</p>
                <p className="text-sm text-gray-500">Revenue</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🥗</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Garden Salad</h3>
                  <p className="text-sm text-gray-600">38 orders this month</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-600">$256.50</p>
                <p className="text-sm text-gray-500">Revenue</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🍝</span>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Pasta Marinara
                  </h3>
                  <p className="text-sm text-gray-600">42 orders this month</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-yellow-600">$388.50</p>
                <p className="text-sm text-gray-500">Revenue</p>
              </div>
            </div>
          </div>
        </div>

        {/* Top Volunteers Performance */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Top Volunteer Performance
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  SM
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Sarah Miller</h3>
                  <p className="text-sm text-gray-600">127 deliveries</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-blue-600">⭐ 4.9</p>
                <p className="text-sm text-gray-500">Rating</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  MJ
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Mike Johnson</h3>
                  <p className="text-sm text-gray-600">98 deliveries</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-600">⭐ 4.8</p>
                <p className="text-sm text-gray-500">Rating</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  TW
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Tom Wilson</h3>
                  <p className="text-sm text-gray-600">85 deliveries</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-purple-600">⭐ 4.7</p>
                <p className="text-sm text-gray-500">Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Geographic Distribution */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Delivery Zones Performance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Downtown</h3>
            <p className="text-3xl font-bold text-blue-600 mb-2">45%</p>
            <p className="text-sm text-gray-600">156 deliveries</p>
            <p className="text-sm text-green-500">+8% this month</p>
          </div>

          <div className="text-center p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Suburbs</h3>
            <p className="text-3xl font-bold text-green-600 mb-2">35%</p>
            <p className="text-sm text-gray-600">122 deliveries</p>
            <p className="text-sm text-green-500">+12% this month</p>
          </div>

          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Outskirts</h3>
            <p className="text-3xl font-bold text-orange-600 mb-2">20%</p>
            <p className="text-sm text-gray-600">70 deliveries</p>
            <p className="text-sm text-yellow-500">+2% this month</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Quick Reports
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="p-4 border border-dashed border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors">
            <div className="text-center">
              <div className="text-2xl mb-2">📊</div>
              <h3 className="font-semibold text-gray-800">Daily Report</h3>
              <p className="text-sm text-gray-600 mt-1">
                Generate today's summary
              </p>
            </div>
          </button>

          <button className="p-4 border border-dashed border-gray-300 rounded-lg hover:border-green-400 hover:bg-green-50 transition-colors">
            <div className="text-center">
              <div className="text-2xl mb-2">📈</div>
              <h3 className="font-semibold text-gray-800">Monthly Report</h3>
              <p className="text-sm text-gray-600 mt-1">Full month analysis</p>
            </div>
          </button>

          <button className="p-4 border border-dashed border-gray-300 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-colors">
            <div className="text-center">
              <div className="text-2xl mb-2">👥</div>
              <h3 className="font-semibold text-gray-800">Volunteer Report</h3>
              <p className="text-sm text-gray-600 mt-1">Performance metrics</p>
            </div>
          </button>

          <button className="p-4 border border-dashed border-gray-300 rounded-lg hover:border-orange-400 hover:bg-orange-50 transition-colors">
            <div className="text-center">
              <div className="text-2xl mb-2">💰</div>
              <h3 className="font-semibold text-gray-800">Financial Report</h3>
              <p className="text-sm text-gray-600 mt-1">Revenue & costs</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;
