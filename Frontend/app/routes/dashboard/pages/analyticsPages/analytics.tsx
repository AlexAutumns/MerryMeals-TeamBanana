import React from "react";
import AdminAnalytics from "../overviewPages/adminAnalytics";

const Analytics = () => {
  const userRole = "admin"; // Ideally from context or props

  switch (userRole) {
    case "admin":
      return <AdminAnalytics />;
    default:
      return (
        <div className="text-center text-gray-500">
          No analytics available for this user role.
        </div>
      );
  }
};

export default Analytics;
