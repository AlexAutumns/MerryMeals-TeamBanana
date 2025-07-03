import React, { useState } from "react";
import {
  UserGroupIcon,
  PencilIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const RoleManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");
  const [editingUser, setEditingUser] = useState<number | null>(null);
  const [newRole, setNewRole] = useState("");

  // Mock data - replace with actual API calls
  const users = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@email.com",
      currentRole: "Member",
      permissions: ["View Profile", "Request Meals"],
      lastLogin: "2024-03-15",
      status: "Active",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      currentRole: "Volunteer",
      permissions: ["View Profile", "Deliver Meals", "View Routes"],
      lastLogin: "2024-03-14",
      status: "Active",
    },
    {
      id: 3,
      name: "Mike Wilson",
      email: "mike.w@email.com",
      currentRole: "Partner",
      permissions: ["View Profile", "Manage Kitchen", "View Orders"],
      lastLogin: "2024-03-13",
      status: "Active",
    },
    {
      id: 4,
      name: "Emma Davis",
      email: "emma.d@email.com",
      currentRole: "Caregiver",
      permissions: ["View Profile", "Manage Members", "Coordinate Care"],
      lastLogin: "2024-03-12",
      status: "Active",
    },
    {
      id: 5,
      name: "Tom Brown",
      email: "tom.b@email.com",
      currentRole: "Donor",
      permissions: ["View Profile", "Make Donations", "View Impact"],
      lastLogin: "2024-03-11",
      status: "Active",
    },
    {
      id: 6,
      name: "Lisa White",
      email: "lisa.w@email.com",
      currentRole: "Admin",
      permissions: ["Full Access"],
      lastLogin: "2024-03-15",
      status: "Active",
    },
  ];

  const roleDefinitions = [
    {
      role: "Member",
      description: "Elderly or disabled individuals receiving meals",
      permissions: [
        "View Profile",
        "Request Meals",
        "Rate Meals",
        "Contact Support",
      ],
      count: users.filter((u) => u.currentRole === "Member").length,
    },
    {
      role: "Volunteer",
      description: "Individuals who deliver meals to members",
      permissions: [
        "View Profile",
        "Deliver Meals",
        "View Routes",
        "Update Delivery Status",
      ],
      count: users.filter((u) => u.currentRole === "Volunteer").length,
    },
    {
      role: "Partner",
      description: "Kitchen partners who prepare meals",
      permissions: [
        "View Profile",
        "Manage Kitchen",
        "View Orders",
        "Update Menu",
      ],
      count: users.filter((u) => u.currentRole === "Partner").length,
    },
    {
      role: "Caregiver",
      description: "Professional caregivers coordinating member care",
      permissions: [
        "View Profile",
        "Manage Members",
        "Coordinate Care",
        "View Reports",
      ],
      count: users.filter((u) => u.currentRole === "Caregiver").length,
    },
    {
      role: "Donor",
      description: "Supporters providing financial contributions",
      permissions: [
        "View Profile",
        "Make Donations",
        "View Impact",
        "Download Receipts",
      ],
      count: users.filter((u) => u.currentRole === "Donor").length,
    },
    {
      role: "Admin",
      description: "System administrators with full access",
      permissions: [
        "Full Access",
        "User Management",
        "System Configuration",
        "Reports",
      ],
      count: users.filter((u) => u.currentRole === "Admin").length,
    },
  ];

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole =
      selectedRole === "all" || user.currentRole === selectedRole;
    return matchesSearch && matchesRole;
  });

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Member":
        return "bg-blue-100 text-blue-800";
      case "Volunteer":
        return "bg-purple-100 text-purple-800";
      case "Partner":
        return "bg-orange-100 text-orange-800";
      case "Caregiver":
        return "bg-pink-100 text-pink-800";
      case "Donor":
        return "bg-green-100 text-green-800";
      case "Admin":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleEditRole = (userId: number, currentRole: string) => {
    setEditingUser(userId);
    setNewRole(currentRole);
  };

  const handleSaveRole = (userId: number) => {
    console.log(`Changing user ${userId} role to ${newRole}`);
    // Add role change logic here
    setEditingUser(null);
    setNewRole("");
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
    setNewRole("");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Role Management</h2>
        <p className="text-sm text-gray-600">
          Manage user roles and permissions across the platform
        </p>
      </div>

      {/* Role Definitions */}
      <div className="bg-white rounded-lg border">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">
            Role Definitions
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roleDefinitions.map((roleDef) => (
              <div
                key={roleDef.role}
                className="border border-gray-200 rounded-lg p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${getRoleColor(roleDef.role)}`}
                  >
                    {roleDef.role}
                  </span>
                  <span className="text-sm font-medium text-gray-600">
                    {roleDef.count} users
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  {roleDef.description}
                </p>
                <div>
                  <p className="text-xs font-medium text-gray-700 mb-2">
                    Permissions:
                  </p>
                  <div className="space-y-1">
                    {roleDef.permissions.map((permission, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-700 mr-1 mb-1"
                      >
                        <ShieldCheckIcon className="h-3 w-3 mr-1" />
                        {permission}
                      </span>
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
          <h3 className="text-lg font-medium text-gray-900">
            User Role Management
          </h3>
        </div>

        {/* Filters */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4">
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
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Roles</option>
              {roleDefinitions.map((role) => (
                <option key={role.role} value={role.role}>
                  {role.role}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Users Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Permissions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Login
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <UserGroupIcon className="h-8 w-8 text-gray-400 mr-3" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {user.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {user.email}
                        </div>
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
                          <option key={role.role} value={role.role}>
                            {role.role}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleColor(user.currentRole)}`}
                      >
                        {user.currentRole}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {user.permissions.slice(0, 2).map((permission, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-700"
                        >
                          {permission}
                        </span>
                      ))}
                      {user.permissions.length > 2 && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-700">
                          +{user.permissions.length - 2} more
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(user.lastLogin).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {editingUser === user.id ? (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleSaveRole(user.id)}
                          className="text-green-600 hover:text-green-900 px-2 py-1 rounded text-sm"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="text-gray-600 hover:text-gray-900 px-2 py-1 rounded text-sm"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div className="flex space-x-2">
                        <button
                          onClick={() =>
                            handleEditRole(user.id, user.currentRole)
                          }
                          className="text-blue-600 hover:text-blue-900 p-1 rounded"
                        >
                          <PencilIcon className="h-4 w-4" />
                        </button>
                        {user.currentRole === "Admin" && (
                          <ExclamationTriangleIcon
                            className="h-4 w-4 text-yellow-500"
                            title="Admin role requires special permissions"
                          />
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
            <h3 className="text-sm font-medium text-yellow-800">
              Important Notice
            </h3>
            <p className="text-sm text-yellow-700 mt-1">
              Changing user roles will immediately affect their access
              permissions. Admin role changes require additional verification.
              Always ensure proper authorization before modifying user roles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleManagement;
