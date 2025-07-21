import React from "react";

//Icons
import {
  HomeIcon,
  UsersIcon,
  ClipboardDocumentListIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  UserIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

// Pages

import Overview from "./overview";
import AdminAnalytics from "./adminAnalytics";
import AdminFavorites from "./adminFavorites";
import ProfilePage from "./profile";
import SettingsPage from "./settings";

import UserManagement from "./AdminUsers";
import OrdersPage from "./OrdersPage";






import { UserGroupIcon } from "@heroicons/react/24/outline";

const adminPages = [
  { label: "Dashboard", icon: HomeIcon, component: Overview },
  { label: "Profile", icon: UserIcon, component: ProfilePage },
  { label: "Favorites", icon: HeartIcon, component: AdminFavorites },
  { label: "Analytics", icon: ChartBarIcon, component: AdminAnalytics },
  { label: "User Management", icon: UserGroupIcon, component: UserManagement },
  { label: "Orders", icon: ClipboardDocumentListIcon, component: OrdersPage },
  { label: "Settings", icon: Cog6ToothIcon, component: SettingsPage },
];

export default adminPages;
