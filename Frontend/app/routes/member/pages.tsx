import React from "react";
import {
  HeartIcon,
  ClipboardDocumentCheckIcon,
  UserIcon,
  Cog6ToothIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

// Pages
import FavoritesPage from "./favorites";
import OrdersPage from "./orders";
import ProfilePage from "./profile";
import MenuPage from "./menu";
import DashboardPage from "./dashboard";

// Settings component
const SettingsPage = () => {
  return (
    <div className="text-center py-12">
      <p className="text-gray-600">
        Member settings will be here in later updates
      </p>
    </div>
  );
};

const memberPages = [
  { label: "Profile", icon: UserIcon, component: ProfilePage },
  { label: "Dashboard", icon: HomeIcon, component: DashboardPage },
  { label: "Menu", icon: ClipboardDocumentCheckIcon, component: MenuPage },
  { label: "Favorites", icon: HeartIcon, component: FavoritesPage },
  { label: "Orders", icon: ClipboardDocumentCheckIcon, component: OrdersPage },
  { label: "Settings", icon: Cog6ToothIcon, component: SettingsPage },
];

export default memberPages;
