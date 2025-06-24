import React from "react";
import AdminOverview from "./adminOverview"; // Capitalized!

const Overview = () => {
    const userRole = "admin"; // Ideally from context or props

    switch (userRole) {
        case "admin":
            return <AdminOverview />;
        default:
            return (
                <div className="text-center text-gray-500">
                    No overview available for this user role.
                </div>
            );
    }
};

export default Overview;
