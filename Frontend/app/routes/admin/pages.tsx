import React from "react";

//Icons
import { 
  HomeIcon, 
  UsersIcon, 
  ClipboardDocumentListIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  UserIcon
} from "@heroicons/react/24/outline";

// Pages
import Overview from "./overview";

// Placeholder components for admin pages
const ProfilePage = () => (
  <div className="text-center py-12">
    <p className="text-gray-500">Admin profile will be here in later updates.</p>
  </div>
);

const UsersPage = () => (
  <div className="text-center py-12">
    <p className="text-gray-500">User management will be here in later updates.</p>
  </div>
);

const OrdersPage = () => (
  <div className="text-center py-12">
    <p className="text-gray-500">Order management will be here in later updates.</p>
  </div>
);

const AnalyticsPage = () => (
  <div className="text-center py-12">
    <p className="text-gray-500">Analytics dashboard will be here in later updates.</p>
  </div>
);

const SettingsPage = () => (
  <div className="text-center py-12">
    <p className="text-gray-500">System settings will be here in later updates.</p>
  </div>
);

const adminPages = [
  { label: "Profile", icon: UserIcon, component: ProfilePage },
  { label: "Dashboard", icon: HomeIcon, component: Overview },
  { label: "Users", icon: UsersIcon, component: UsersPage },
  { label: "Orders", icon: ClipboardDocumentListIcon, component: OrdersPage },
  { label: "Analytics", icon: ChartBarIcon, component: AnalyticsPage },
  { label: "Settings", icon: Cog6ToothIcon, component: SettingsPage },
];

export default adminPages;
