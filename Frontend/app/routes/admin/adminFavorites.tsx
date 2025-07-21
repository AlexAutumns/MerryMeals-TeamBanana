import React from "react";

const AdminFavorites = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Top Part of the Favorites Page - Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Admin Favorites
        </h1>
        <p className="text-gray-600">
          Manage your favorite meals, volunteers, and frequently accessed items.
        </p>
      </div>

      {/* Quick Stats for Favorites */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700">
            Favorite Meals
          </h3>
          <p className="text-3xl font-bold text-purple-600">8</p>
          <p className="text-sm text-gray-500">Most ordered items</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700">
            Top Volunteers
          </h3>
          <p className="text-3xl font-bold text-green-600">12</p>
          <p className="text-sm text-gray-500">Star performers</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700">Saved Reports</h3>
          <p className="text-3xl font-bold text-blue-600">5</p>
          <p className="text-sm text-gray-500">Quick access reports</p>
        </div>
      </div>

      {/* Favorite Meals Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Favorite Meals
          </h2>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Add to Favorites
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="h-32 bg-orange-100 rounded-lg mb-3 flex items-center justify-center">
              <span className="text-3xl">🍲</span>
            </div>
            <h3 className="font-semibold text-gray-800">Chicken Soup</h3>
            <p className="text-sm text-gray-600">Ordered 45 times</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-green-600 font-medium">$8.50</span>
              <button className="text-red-500 hover:text-red-700">❤️</button>
            </div>
          </div>

          <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="h-32 bg-green-100 rounded-lg mb-3 flex items-center justify-center">
              <span className="text-3xl">🥗</span>
            </div>
            <h3 className="font-semibold text-gray-800">Garden Salad</h3>
            <p className="text-sm text-gray-600">Ordered 38 times</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-green-600 font-medium">$6.75</span>
              <button className="text-red-500 hover:text-red-700">❤️</button>
            </div>
          </div>

          <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="h-32 bg-yellow-100 rounded-lg mb-3 flex items-center justify-center">
              <span className="text-3xl">🍝</span>
            </div>
            <h3 className="font-semibold text-gray-800">Pasta Marinara</h3>
            <p className="text-sm text-gray-600">Ordered 42 times</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-green-600 font-medium">$9.25</span>
              <button className="text-red-500 hover:text-red-700">❤️</button>
            </div>
          </div>

          <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="h-32 bg-red-100 rounded-lg mb-3 flex items-center justify-center">
              <span className="text-3xl">🥪</span>
            </div>
            <h3 className="font-semibold text-gray-800">Turkey Sandwich</h3>
            <p className="text-sm text-gray-600">Ordered 35 times</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-green-600 font-medium">$7.00</span>
              <button className="text-red-500 hover:text-red-700">❤️</button>
            </div>
          </div>
        </div>
      </div>

      {/* Top Volunteers Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Top Volunteers
          </h2>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            View All Volunteers
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                SM
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Sarah Miller</h3>
                <p className="text-sm text-gray-600">Senior Volunteer</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Deliveries:</span>
                <span className="font-medium">127</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Rating:</span>
                <span className="font-medium text-yellow-600">⭐ 4.9</span>
              </div>
              <button className="w-full bg-blue-100 text-blue-800 py-2 rounded-lg hover:bg-blue-200">
                Contact
              </button>
            </div>
          </div>

          <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                MJ
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Mike Johnson</h3>
                <p className="text-sm text-gray-600">Active Volunteer</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Deliveries:</span>
                <span className="font-medium">98</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Rating:</span>
                <span className="font-medium text-yellow-600">⭐ 4.8</span>
              </div>
              <button className="w-full bg-blue-100 text-blue-800 py-2 rounded-lg hover:bg-blue-200">
                Contact
              </button>
            </div>
          </div>

          <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                TW
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Tom Wilson</h3>
                <p className="text-sm text-gray-600">Reliable Volunteer</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Deliveries:</span>
                <span className="font-medium">85</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Rating:</span>
                <span className="font-medium text-yellow-600">⭐ 4.7</span>
              </div>
              <button className="w-full bg-blue-100 text-blue-800 py-2 rounded-lg hover:bg-blue-200">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Saved Reports Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Quick Access Reports
          </h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Create New Report
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-400 cursor-pointer">
            <div className="text-center">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="font-semibold text-gray-800">
                Monthly Delivery Report
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Last updated: June 2025
              </p>
              <button className="mt-3 bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200">
                Open Report
              </button>
            </div>
          </div>

          <div className="border border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-400 cursor-pointer">
            <div className="text-center">
              <div className="text-3xl mb-2">👥</div>
              <h3 className="font-semibold text-gray-800">
                Volunteer Performance
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Last updated: June 2025
              </p>
              <button className="mt-3 bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200">
                Open Report
              </button>
            </div>
          </div>

          <div className="border border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-400 cursor-pointer">
            <div className="text-center">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="font-semibold text-gray-800">Revenue Analysis</h3>
              <p className="text-sm text-gray-600 mt-2">
                Last updated: June 2025
              </p>
              <button className="mt-3 bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200">
                Open Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFavorites;
