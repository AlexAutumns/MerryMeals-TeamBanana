


import React, { useState } from "react";
import {
  ClipboardDocumentListIcon,
  MagnifyingGlassIcon,
  CheckCircleIcon,
  XCircleIcon,
  EyeIcon,
  ClockIcon,
  UserIcon,
  ChartBarIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const mockOrders = [
  { id: 101, member: "John Smith", date: "2024-07-20", status: "Pending", items: 3, total: 24.5, address: "123 Main St" },
  { id: 102, member: "Sarah Johnson", date: "2024-07-19", status: "Completed", items: 2, total: 16.0, address: "456 Oak Ave" },
  { id: 103, member: "Mike Wilson", date: "2024-07-19", status: "Rejected", items: 1, total: 8.0, address: "789 Pine Rd" },
  { id: 104, member: "Emma Davis", date: "2024-07-18", status: "Pending", items: 4, total: 32.0, address: "321 Maple St" },
  { id: 105, member: "Tom Brown", date: "2024-07-18", status: "Completed", items: 2, total: 16.0, address: "654 Cedar Ln" },
];

function getStatusPill(status: string) {
  switch (status) {
    case "Completed":
      return <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700"><CheckCircleIcon className="h-4 w-4" />Completed</span>;
    case "Pending":
      return <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold bg-yellow-100 text-yellow-700"><ClockIcon className="h-4 w-4" />Pending</span>;
    case "Rejected":
      return <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-700"><XCircleIcon className="h-4 w-4" />Rejected</span>;
    default:
      return <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold bg-gray-100 text-gray-700">Unknown</span>;
  }
}




export default function OrdersPage() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredOrders = mockOrders.filter((order) => {
    const matchesSearch =
      order.member.toLowerCase().includes(search.toLowerCase()) ||
      order.id.toString().includes(search);
    const matchesStatus = filterStatus === "all" || order.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: mockOrders.length,
    pending: mockOrders.filter((o) => o.status === "Pending").length,
    completed: mockOrders.filter((o) => o.status === "Completed").length,
    rejected: mockOrders.filter((o) => o.status === "Rejected").length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/60 via-white to-green-50/60 p-0 md:p-8 flex flex-col md:flex-row gap-8">
      {/* Sidebar summary */}
      <aside className="w-full md:w-64 bg-white/90 border-r border-gray-100 p-6 flex flex-col gap-8 shadow-sm md:sticky md:top-8 h-fit">
        <div className="flex items-center gap-3 mb-2">
          <ClipboardDocumentListIcon className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">Orders</span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <ChartBarIcon className="h-5 w-5 text-blue-500" />
            <span className="text-xs text-gray-500">Total</span>
            <span className="text-base font-bold text-blue-900 ml-auto">{stats.total}</span>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon className="h-5 w-5 text-yellow-500" />
            <span className="text-xs text-gray-500">Pending</span>
            <span className="text-base font-bold text-yellow-700 ml-auto">{stats.pending}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="h-5 w-5 text-green-600" />
            <span className="text-xs text-gray-500">Completed</span>
            <span className="text-base font-bold text-green-700 ml-auto">{stats.completed}</span>
          </div>
          <div className="flex items-center gap-2">
            <XCircleIcon className="h-5 w-5 text-red-600" />
            <span className="text-xs text-gray-500">Rejected</span>
            <span className="text-base font-bold text-red-700 ml-auto">{stats.rejected}</span>
          </div>
        </div>
        <div className="mt-8">
          <input
            type="text"
            placeholder="Search orders..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white text-sm"
            style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg fill=\'none\' stroke=\'gray\' stroke-width=\'2\' viewBox=\'0 0 24 24\' xmlns=\'http://www.w3.org/2000/svg\'><path stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z\'></path></svg>')`, backgroundRepeat: 'no-repeat', backgroundPosition: '10px center', backgroundSize: '18px' }}
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="w-full mt-3 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white text-sm"
          >
            <option value="all">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </aside>

      {/* Main content: Order cards grid */}
      <main className="flex-1 p-4 md:p-0">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Order List</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition">New Order</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOrders.length === 0 && (
            <div className="col-span-full text-center text-gray-400 py-12 text-lg">No orders found.</div>
          )}
          {filteredOrders.map((order) => (
            <div key={order.id} className="bg-white border border-gray-100 rounded-2xl shadow-md p-6 flex flex-col gap-3 hover:shadow-lg transition group">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-lg font-bold text-blue-700">#{order.id}</span>
                {getStatusPill(order.status)}
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <UserIcon className="h-4 w-4 text-blue-400" />
                <span>{order.member}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <ClockIcon className="h-4 w-4 text-yellow-400" />
                <span>{new Date(order.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <MapPinIcon className="h-4 w-4 text-green-400" />
                <span>{order.address}</span>
              </div>
              <div className="flex gap-6 mt-2 text-xs text-gray-500">
                <span>Items: <span className="font-semibold text-gray-700">{order.items}</span></span>
                <span>Total: <span className="font-semibold text-gray-700">${order.total.toFixed(2)}</span></span>
              </div>
              <div className="flex gap-2 mt-4">
                <button className="flex-1 bg-blue-50 text-blue-700 px-3 py-2 rounded-lg font-semibold hover:bg-blue-100 transition flex items-center justify-center gap-1"><EyeIcon className="h-4 w-4" />View</button>
                {order.status === "Pending" && (
                  <>
                    <button className="flex-1 bg-green-50 text-green-700 px-3 py-2 rounded-lg font-semibold hover:bg-green-100 transition flex items-center justify-center gap-1"><CheckCircleIcon className="h-4 w-4" />Approve</button>
                    <button className="flex-1 bg-red-50 text-red-700 px-3 py-2 rounded-lg font-semibold hover:bg-red-100 transition flex items-center justify-center gap-1"><XCircleIcon className="h-4 w-4" />Reject</button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
