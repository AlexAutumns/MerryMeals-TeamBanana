import React from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import Favorites from "./dashboard/pages/favoritesPages/favorites";

const FavoritesPage = () => {
  return (
    <div className="min-h-screen flex">
      <ProfileSidebar />
      <main className="flex-1 bg-gray-50 p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Favorites</h1>
        <div className="bg-white p-6 rounded-lg shadow">
          <Favorites />
        </div>
      </main>
    </div>
  );
};

export default FavoritesPage;
