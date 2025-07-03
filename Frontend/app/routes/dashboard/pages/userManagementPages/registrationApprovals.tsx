import React, { useState } from "react";
import {
  CheckIcon,
  XMarkIcon,
  EyeIcon,
  ClockIcon,
  UserIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

const RegistrationApprovals = () => {
  const [selectedTab, setSelectedTab] = useState("pending");

  // Mock data - replace with actual API calls
  const pendingRegistrations = [
    {
      id: 1,
      name: "Alice Cooper",
      email: "alice.cooper@email.com",
      role: "Member",
      submittedDate: "2024-03-15",
      location: "Downtown",
      reason: "Age-related mobility issues, lives alone",
      documents: ["ID Copy", "Medical Certificate"],
      status: "pending",
    },
    {
      id: 2,
      name: "Bob Martin",
      email: "bob.martin@email.com",
      role: "Volunteer",
      submittedDate: "2024-03-14",
      location: "Uptown",
      reason: "Want to help with meal delivery",
      documents: ["ID Copy", "Background Check"],
      status: "pending",
    },
    {
      id: 3,
      name: "City Kitchen LLC",
      email: "contact@citykitchen.com",
      role: "Partner",
      submittedDate: "2024-03-13",
      location: "Midtown",
      reason: "Commercial kitchen with delivery capacity",
      documents: ["Business License", "Food Safety Certificate"],
      status: "pending",
    },
    {
      id: 4,
      name: "Carol White",
      email: "carol.white@email.com",
      role: "Caregiver",
      submittedDate: "2024-03-12",
      location: "Suburbs",
      reason: "Professional caregiver, wants to coordinate meals",
      documents: ["ID Copy", "Caregiver Certification"],
      status: "pending",
    },
  ];

  const recentActions = [
    {
      id: 5,
      name: "David Johnson",
      email: "david.j@email.com",
      role: "Donor",
      action: "Approved",
      actionDate: "2024-03-14",
      actionBy: "Admin",
    },
    {
      id: 6,
      name: "Emma Wilson",
      email: "emma.w@email.com",
      role: "Volunteer",
      action: "Rejected",
      actionDate: "2024-03-13",
      actionBy: "Admin",
      reason: "Incomplete background check",
    },
  ];

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
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getActionColor = (action: string) => {
    switch (action) {
      case "Approved":
        return "bg-green-100 text-green-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleApprove = (id: number) => {
    console.log("Approving registration:", id);
    // Add approval logic here
  };

  const handleReject = (id: number) => {
    console.log("Rejecting registration:", id);
    // Add rejection logic here
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900">
          Registration Approvals
        </h2>
        <p className="text-sm text-gray-600">
          Review and approve new user registrations
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <ClockIcon className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">
                Pending Approvals
              </h3>
              <p className="text-2xl font-bold text-yellow-600">
                {pendingRegistrations.length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <CheckIcon className="h-8 w-8 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">
                Approved Today
              </h3>
              <p className="text-2xl font-bold text-green-600">3</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <XMarkIcon className="h-8 w-8 text-red-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">
                Rejected Today
              </h3>
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
              onClick={() => setSelectedTab("pending")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                selectedTab === "pending"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Pending Registrations ({pendingRegistrations.length})
            </button>
            <button
              onClick={() => setSelectedTab("recent")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                selectedTab === "recent"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Recent Actions
            </button>
          </nav>
        </div>

        <div className="p-6">
          {selectedTab === "pending" && (
            <div className="space-y-4">
              {pendingRegistrations.map((registration) => (
                <div
                  key={registration.id}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="flex-shrink-0">
                          <UserIcon className="h-10 w-10 text-gray-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">
                            {registration.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {registration.email}
                          </p>
                        </div>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleColor(registration.role)}`}
                        >
                          {registration.role}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm font-medium text-gray-700">
                            Submitted Date
                          </p>
                          <p className="text-sm text-gray-600">
                            {new Date(
                              registration.submittedDate,
                            ).toLocaleDateString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">
                            Location
                          </p>
                          <p className="text-sm text-gray-600">
                            {registration.location}
                          </p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-700 mb-1">
                          Reason for Registration
                        </p>
                        <p className="text-sm text-gray-600">
                          {registration.reason}
                        </p>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">
                          Submitted Documents
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {registration.documents.map((doc, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                            >
                              <DocumentTextIcon className="h-3 w-3 mr-1" />
                              {doc}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2 ml-6">
                      <button
                        onClick={() => handleApprove(registration.id)}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center space-x-2"
                      >
                        <CheckIcon className="h-4 w-4" />
                        <span>Approve</span>
                      </button>
                      <button
                        onClick={() => handleReject(registration.id)}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition flex items-center space-x-2"
                      >
                        <XMarkIcon className="h-4 w-4" />
                        <span>Reject</span>
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition flex items-center space-x-2">
                        <EyeIcon className="h-4 w-4" />
                        <span>View Details</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {selectedTab === "recent" && (
            <div className="space-y-4">
              {recentActions.map((action) => (
                <div
                  key={action.id}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <UserIcon className="h-8 w-8 text-gray-400" />
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          {action.name}
                        </h3>
                        <p className="text-sm text-gray-500">{action.email}</p>
                      </div>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleColor(action.role)}`}
                      >
                        {action.role}
                      </span>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getActionColor(action.action)}`}
                      >
                        {action.action}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">
                        {new Date(action.actionDate).toLocaleDateString()}
                      </p>
                      <p className="text-xs text-gray-500">
                        by {action.actionBy}
                      </p>
                    </div>
                  </div>
                  {action.reason && (
                    <div className="mt-2 pl-12">
                      <p className="text-sm text-gray-600">
                        Reason: {action.reason}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationApprovals;
