import React from "react";
import AdminFavorites from "../overviewPages/adminFavorites";

const Favorites = () => {
  const userRole = "admin"; // Ideally from context or props

  switch (userRole) {
    case "admin":
      return <AdminFavorites />;
    default:
      return (
        <div className="text-center text-gray-500">
          No favorites available for this user role.
        </div>
      );
  }
};

export default Favorites;
