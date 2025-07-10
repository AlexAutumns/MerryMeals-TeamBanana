// Partner Pages
import React from "react";
import {
  HomeIcon,
  BuildingStorefrontIcon,
  ChartBarIcon,
  UserIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const DashboardPage = () => (
  <div>
    <p className="text-gray-600">
      Partner dashboard will be here in later updates
    </p>
  </div>
);
const KitchenPage = () => (
  <div>
    <p className="text-gray-600">
      Kitchen management will be here in later updates
    </p>
  </div>
);
const AnalyticsPage = () => (
  <div>
    <p className="text-gray-600">Analytics will be here in later updates</p>
  </div>
);
const ProfilePage = () => (
  <div>
    <p className="text-gray-600">Profile will be here in later updates</p>
  </div>
);
const SettingsPage = () => (
  <div>
    <p className="text-gray-600">Partner settings will be here in later updates</p>
  </div>
);

const partnerPages = [
  { label: "Profile", icon: UserIcon, component: ProfilePage },
  { label: "Dashboard", icon: HomeIcon, component: DashboardPage },
  { label: "Kitchen", icon: BuildingStorefrontIcon, component: KitchenPage },
  { label: "Analytics", icon: ChartBarIcon, component: AnalyticsPage },
  { label: "Settings", icon: Cog6ToothIcon, component: SettingsPage },
];

export default partnerPages;
