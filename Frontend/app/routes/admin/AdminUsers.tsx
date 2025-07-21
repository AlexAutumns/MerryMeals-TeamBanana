
import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  EyeIcon,
  PencilIcon,
  CheckIcon,
  XMarkIcon,
  UserPlusIcon,
  ClockIcon,
  UserIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

function getRoleColor(role: string) {
  switch (role) {
    case "Member": return "bg-blue-100 text-blue-800";
    case "Volunteer": return "bg-purple-100 text-purple-800";
    case "Partner": return "bg-orange-100 text-orange-800";
    case "Caregiver": return "bg-pink-100 text-pink-800";
    case "Donor": return "bg-green-100 text-green-800";
    case "Admin": return "bg-red-100 text-red-800";
    default: return "bg-gray-100 text-gray-800";
  }
}
function getStatusColor(status: string) {
  switch (status) {
    case "Active": return "bg-green-100 text-green-800";
    case "Pending": return "bg-yellow-100 text-yellow-800";
    case "Inactive": return "bg-gray-100 text-gray-800";
    case "Suspended": return "bg-red-100 text-red-800";
    default: return "bg-gray-100 text-gray-800";
  }
}
function getActionColor(action: string) {
  switch (action) {
    case "Approved": return "bg-green-100 text-green-800";
    case "Rejected": return "bg-red-100 text-red-800";
    default: return "bg-gray-100 text-gray-800";
  }
}

const usersData = [
  { id: 1, name: "John Smith", email: "john.smith@email.com", role: "Member", status: "Active", joinDate: "2024-01-15", location: "Downtown" },
  { id: 2, name: "Sarah Johnson", email: "sarah.j@email.com", role: "Volunteer", status: "Active", joinDate: "2024-02-20", location: "Uptown" },
  { id: 3, name: "Mike Wilson", email: "mike.w@email.com", role: "Partner", status: "Pending", joinDate: "2024-03-01", location: "Midtown" },
  { id: 4, name: "Emma Davis", email: "emma.d@email.com", role: "Caregiver", status: "Active", joinDate: "2024-01-30", location: "Suburbs" },
  { id: 5, name: "Tom Brown", email: "tom.b@email.com", role: "Donor", status: "Active", joinDate: "2024-02-15", location: "Downtown" },
];

const pendingRegistrations = [
  { id: 1, name: "Alice Cooper", email: "alice.cooper@email.com", role: "Member", submittedDate: "2024-03-15", location: "Downtown", reason: "Age-related mobility issues, lives alone", documents: ["ID Copy", "Medical Certificate"], status: "pending" },
  { id: 2, name: "Bob Martin", email: "bob.martin@email.com", role: "Volunteer", submittedDate: "2024-03-14", location: "Uptown", reason: "Want to help with meal delivery", documents: ["ID Copy", "Background Check"], status: "pending" },
  { id: 3, name: "City Kitchen LLC", email: "contact@citykitchen.com", role: "Partner", submittedDate: "2024-03-13", location: "Midtown", reason: "Commercial kitchen with delivery capacity", documents: ["Business License", "Food Safety Certificate"], status: "pending" },
  { id: 4, name: "Carol White", email: "carol.white@email.com", role: "Caregiver", submittedDate: "2024-03-12", location: "Suburbs", reason: "Professional caregiver, wants to coordinate meals", documents: ["ID Copy", "Caregiver Certification"], status: "pending" },
];

const recentActions = [
  { id: 5, name: "David Johnson", email: "david.j@email.com", role: "Donor", action: "Approved", actionDate: "2024-03-14", actionBy: "Admin" },
  { id: 6, name: "Emma Wilson", email: "emma.w@email.com", role: "Volunteer", action: "Rejected", actionDate: "2024-03-13", actionBy: "Admin", reason: "Incomplete background check" },
];

const roleDefinitions = [
  { role: "Member", description: "Elderly or disabled individuals receiving meals", permissions: ["View Profile", "Request Meals", "Rate Meals", "Contact Support"], },
  { role: "Volunteer", description: "Individuals who deliver meals to members", permissions: ["View Profile", "Deliver Meals", "View Routes", "Update Delivery Status"], },
  { role: "Partner", description: "Kitchen partners who prepare meals", permissions: ["View Profile", "Manage Kitchen", "View Orders", "Update Menu"], },
  { role: "Caregiver", description: "Professional caregivers coordinating member care", permissions: ["View Profile", "Manage Members", "Coordinate Care", "View Reports"], },
  { role: "Donor", description: "Supporters providing financial contributions", permissions: ["View Profile", "Make Donations", "View Impact", "Download Receipts"], },
  { role: "Admin", description: "System administrators with full access", permissions: ["Full Access", "User Management", "System Configuration", "Reports"], },
];

export default function UserManagement() {
  const [tab, setTab] = useState("overview");

  // Users Overview state
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  // Role Management state
  const [roleSearch, setRoleSearch] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");
  const [editingUser, setEditingUser] = useState<number | null>(null);
  const [newRole, setNewRole] = useState("");

  // Registration Approvals state
  const [selectedRegTab, setSelectedRegTab] = useState("pending");

  // Users Overview logic
  const filteredUsers = usersData.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === "all" || user.role === filterRole;
    const matchesStatus = filterStatus === "all" || user.status === filterStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  // Role Management logic
  const roleUsers = usersData.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(roleSearch.toLowerCase()) ||
      user.email.toLowerCase().includes(roleSearch.toLowerCase());
    const matchesRole = selectedRole === "all" || user.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  // Handlers for role editing
  const handleEditRole = (userId: number, currentRole: string) => {
    setEditingUser(userId);
    setNewRole(currentRole);
  };
  const handleSaveRole = (userId: number) => {
    // Add role change logic here
    setEditingUser(null);
    setNewRole("");
  };
  const handleCancelEdit = () => {
    setEditingUser(null);
    setNewRole("");
  };

  // Registration Approvals handlers
  const handleApprove = (id: number) => {
    // Add approval logic here
  };
  const handleReject = (id: number) => {
    // Add rejection logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">User Management</h1>
        <div className="flex space-x-4 mb-8">
          <button
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 border ${tab === "overview" ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"}`}
            onClick={() => setTab("overview")}
          >
            Users Overview
          </button>
          <button
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 border ${tab === "approvals" ? "bg-green-600 text-white border-green-600" : "bg-white text-gray-700 border-gray-300 hover:bg-green-50"}`}
            onClick={() => setTab("approvals")}
          >
            Registration Approvals
          </button>
          <button
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 border ${tab === "roles" ? "bg-purple-600 text-white border-purple-600" : "bg-white text-gray-700 border-gray-300 hover:bg-purple-50"}`}
            onClick={() => setTab("roles")}
          >
            Role Management
          </button>
        </div>

        {/* Users Overview Tab */}
        {tab === "overview" && (
          <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Users Overview</h2>
                <p className="text-sm text-gray-600">Manage all registered users across the platform</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center space-x-2">
                <UserPlusIcon className="h-4 w-4" />
                <span>Add User</span>
              </button>
            </div>

            {/* Filters and Search */}
            <div className="bg-white p-4 rounded-lg border">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by name or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                {/* Role Filter */}
                <select
                  value={filterRole}
                  onChange={(e) => setFilterRole(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Roles</option>
                  <option value="Member">Members</option>
                  <option value="Volunteer">Volunteers</option>
                  <option value="Partner">Partners</option>
                  <option value="Caregiver">Caregivers</option>
                  <option value="Donor">Donors</option>
                </select>
                {/* Status Filter */}
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Suspended">Suspended</option>
                </select>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="bg-white p-4 rounded-lg border">
                <h3 className="text-sm font-medium text-gray-500">Total Users</h3>
                <p className="text-2xl font-bold text-gray-900">{usersData.length}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <h3 className="text-sm font-medium text-gray-500">Members</h3>
                <p className="text-2xl font-bold text-blue-600">{usersData.filter((u) => u.role === "Member").length}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <h3 className="text-sm font-medium text-gray-500">Volunteers</h3>
                <p className="text-2xl font-bold text-purple-600">{usersData.filter((u) => u.role === "Volunteer").length}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <h3 className="text-sm font-medium text-gray-500">Partners</h3>
                <p className="text-2xl font-bold text-orange-600">{usersData.filter((u) => u.role === "Partner").length}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <h3 className="text-sm font-medium text-gray-500">Pending</h3>
                <p className="text-2xl font-bold text-yellow-600">{usersData.filter((u) => u.status === "Pending").length}</p>
              </div>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-lg border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{user.name}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>{user.role}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>{user.status}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{new Date(user.joinDate).toLocaleDateString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.location}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-900 p-1 rounded"><EyeIcon className="h-4 w-4" /></button>
                            <button className="text-green-600 hover:text-green-900 p-1 rounded"><PencilIcon className="h-4 w-4" /></button>
                            {user.status === "Pending" && (
                              <>
                                <button className="text-green-600 hover:text-green-900 p-1 rounded"><CheckIcon className="h-4 w-4" /></button>
                                <button className="text-red-600 hover:text-red-900 p-1 rounded"><XMarkIcon className="h-4 w-4" /></button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Registration Approvals Tab */}
        {tab === "approvals" && (
          <div className="space-y-6">
            {/* Header */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Registration Approvals</h2>
              <p className="text-sm text-gray-600">Review and approve new user registrations</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border">
                <div className="flex items-center">
                  <div className="flex-shrink-0"><ClockIcon className="h-8 w-8 text-yellow-600" /></div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-500">Pending Approvals</h3>
                    <p className="text-2xl font-bold text-yellow-600">{pendingRegistrations.length}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <div className="flex items-center">
                  <div className="flex-shrink-0"><CheckIcon className="h-8 w-8 text-green-600" /></div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-500">Approved Today</h3>
                    <p className="text-2xl font-bold text-green-600">3</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <div className="flex items-center">
                  <div className="flex-shrink-0"><XMarkIcon className="h-8 w-8 text-red-600" /></div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-500">Rejected Today</h3>
                    <p className="text-2xl font-bold text-red-600">1</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg border">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8 px-6">
                  <button
                    onClick={() => setSelectedRegTab("pending")}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${selectedRegTab === "pending" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
                  >
                    Pending Registrations ({pendingRegistrations.length})
                  </button>
                  <button
                    onClick={() => setSelectedRegTab("recent")}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${selectedRegTab === "recent" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
                  >
                    Recent Actions
                  </button>
                </nav>
              </div>

              <div className="p-6">
                {selectedRegTab === "pending" && (
                  <div className="space-y-4">
                    {pendingRegistrations.map((registration) => (
                      <div key={registration.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center space-x-4 mb-3">
                              <div className="flex-shrink-0"><UserIcon className="h-10 w-10 text-gray-400" /></div>
                              <div>
                                <h3 className="text-lg font-medium text-gray-900">{registration.name}</h3>
                                <p className="text-sm text-gray-500">{registration.email}</p>
                              </div>
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleColor(registration.role)}`}>{registration.role}</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                              <div>
                                <p className="text-sm font-medium text-gray-700">Submitted Date</p>
                                <p className="text-sm text-gray-600">{new Date(registration.submittedDate).toLocaleDateString()}</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-700">Location</p>
                                <p className="text-sm text-gray-600">{registration.location}</p>
                              </div>
                            </div>
                            <div className="mb-4">
                              <p className="text-sm font-medium text-gray-700 mb-1">Reason for Registration</p>
                              <p className="text-sm text-gray-600">{registration.reason}</p>
                            </div>
                            <div className="mb-4">
                              <p className="text-sm font-medium text-gray-700 mb-2">Submitted Documents</p>
                              <div className="flex flex-wrap gap-2">
                                {registration.documents.map((doc, index) => (
                                  <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"><DocumentTextIcon className="h-3 w-3 mr-1" />{doc}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col space-y-2 ml-6">
                            <button onClick={() => handleApprove(registration.id)} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center space-x-2"><CheckIcon className="h-4 w-4" /><span>Approve</span></button>
                            <button onClick={() => handleReject(registration.id)} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition flex items-center space-x-2"><XMarkIcon className="h-4 w-4" /><span>Reject</span></button>
                            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition flex items-center space-x-2"><EyeIcon className="h-4 w-4" /><span>View Details</span></button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {selectedRegTab === "recent" && (
                  <div className="space-y-4">
                    {recentActions.map((action) => (
                      <div key={action.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-4">
                            <UserIcon className="h-8 w-8 text-gray-400" />
                            <div>
                              <h3 className="text-sm font-medium text-gray-900">{action.name}</h3>
                              <p className="text-sm text-gray-500">{action.email}</p>
                            </div>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleColor(action.role)}`}>{action.role}</span>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getActionColor(action.action)}`}>{action.action}</span>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-600">{new Date(action.actionDate).toLocaleDateString()}</p>
                            <p className="text-xs text-gray-500">by {action.actionBy}</p>
                          </div>
                        </div>
                        {action.reason && (
                          <div className="mt-2 pl-12">
                            <p className="text-sm text-gray-600">Reason: {action.reason}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Role Management Tab */}
        {tab === "roles" && (
          <div className="space-y-6">
            {/* Header */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Role Management</h2>
              <p className="text-sm text-gray-600">Manage user roles and permissions across the platform</p>
            </div>

            {/* Role Definitions */}
            <div className="bg-white rounded-lg border">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Role Definitions</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {roleDefinitions.map((roleDef) => (
                    <div key={roleDef.role} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${getRoleColor(roleDef.role)}`}>{roleDef.role}</span>
                        <span className="text-sm font-medium text-gray-600">{usersData.filter((u) => u.role === roleDef.role).length} users</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{roleDef.description}</p>
                      <div>
                        <p className="text-xs font-medium text-gray-700 mb-2">Permissions:</p>
                        <div className="space-y-1">
                          {roleDef.permissions.map((permission, index) => (
                            <span key={index} className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-700 mr-1 mb-1"><ShieldCheckIcon className="h-3 w-3 mr-1" />{permission}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* User Role Management */}
            <div className="bg-white rounded-lg border">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">User Role Management</h3>
              </div>
              {/* Filters */}
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by name or email..."
                      value={roleSearch}
                      onChange={(e) => setRoleSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <select
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Roles</option>
                    {roleDefinitions.map((role) => (
                      <option key={role.role} value={role.role}>{role.role}</option>
                    ))}
                  </select>
                </div>
              </div>
              {/* Users Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Role</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Permissions</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {roleUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <UserGroupIcon className="h-8 w-8 text-gray-400 mr-3" />
                            <div>
                              <div className="text-sm font-medium text-gray-900">{user.name}</div>
                              <div className="text-sm text-gray-500">{user.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {editingUser === user.id ? (
                            <select
                              value={newRole}
                              onChange={(e) => setNewRole(e.target.value)}
                              className="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                              {roleDefinitions.map((role) => (
                                <option key={role.role} value={role.role}>{role.role}</option>
                              ))}
                            </select>
                          ) : (
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>{user.role}</span>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-wrap gap-1">
                            {roleDefinitions.find((r) => r.role === user.role)?.permissions.slice(0, 2).map((permission, index) => (
                              <span key={index} className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-700">{permission}</span>
                            ))}
                            {(() => {
                              const perms = roleDefinitions.find((r) => r.role === user.role)?.permissions;
                              return perms && perms.length > 2 ? (
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-700">+{perms.length - 2} more</span>
                              ) : null;
                            })()}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{new Date(user.joinDate).toLocaleDateString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {editingUser === user.id ? (
                            <div className="flex space-x-2">
                              <button onClick={() => handleSaveRole(user.id)} className="text-green-600 hover:text-green-900 px-2 py-1 rounded text-sm">Save</button>
                              <button onClick={handleCancelEdit} className="text-gray-600 hover:text-gray-900 px-2 py-1 rounded text-sm">Cancel</button>
                            </div>
                          ) : (
                            <div className="flex space-x-2">
                              <button onClick={() => handleEditRole(user.id, user.role)} className="text-blue-600 hover:text-blue-900 px-2 py-1 rounded text-sm">Edit</button>
                              {user.role === "Admin" && (
                                <ExclamationTriangleIcon className="h-4 w-4 text-yellow-500" title="Admin role requires special permissions" />
                              )}
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Warning */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start">
                <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600 mt-0.5 mr-3" />
                <div>
                  <h3 className="text-sm font-medium text-yellow-800">Important Notice</h3>
                  <p className="text-sm text-yellow-700 mt-1">Changing user roles will immediately affect their access permissions. Admin role changes require additional verification. Always ensure proper authorization before modifying user roles.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
