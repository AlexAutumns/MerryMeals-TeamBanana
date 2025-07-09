import React from "react";
import {
  HomeIcon,
  HeartIcon,
  ClipboardDocumentCheckIcon,
  UserIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

// Pages
import DashboardPage from "./dashboard";
import FavoritesPage from "./favorites";
import OrdersPage from "./orders";
import ProfilePage from "./profile";

// Settings component
const SettingsPage = () => {
  return (
    <div className="text-center py-12">
      <p className="text-gray-600">Member settings will be here in later updates</p>
    </div>
  );
};

const memberPages = [
  { label: "Profile", icon: UserIcon, component: ProfilePage },
  { label: "Dashboard", icon: HomeIcon, component: DashboardPage },
  { label: "Favorites", icon: HeartIcon, component: FavoritesPage },
  { label: "Orders", icon: ClipboardDocumentCheckIcon, component: OrdersPage },
  { label: "Settings", icon: Cog6ToothIcon, component: SettingsPage },
];

export default memberPages;
