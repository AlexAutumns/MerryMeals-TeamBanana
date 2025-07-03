import React from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import RegistrationApprovals from "./dashboard/pages/userManagementPages/registrationApprovals";

const Approvals = () => {
  return (
    <div className="min-h-screen flex">
      <ProfileSidebar />
      <main className="flex-1 bg-gray-50 p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Registration Approvals
        </h1>
        <div className="bg-white p-6 rounded-lg shadow">
          <RegistrationApprovals />
        </div>
      </main>
    </div>
  );
};

export default Approvals;
