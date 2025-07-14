import React from "react";
import {
  HomeIcon,
  CalendarIcon,
  TruckIcon,
  UserIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

// Pages
import DashboardPage from "./dashboard";
import SchedulePage from "./schedule";
import DeliveriesPage from "./deliveries";
import ProfilePage from "./profile";

// Settings component
const SettingsPage = () => {
  return (
    <div className="text-center py-12">
      <p className="text-gray-600">Volunteer settings will be here in later updates</p>
    </div>
  );
};

const volunteerPages = [
  { label: "Profile", icon: UserIcon, component: ProfilePage },
  { label: "Dashboard", icon: HomeIcon, component: DashboardPage },
  { label: "Schedule", icon: CalendarIcon, component: SchedulePage },
  { label: "Deliveries", icon: TruckIcon, component: DeliveriesPage },
  { label: "Settings", icon: Cog6ToothIcon, component: SettingsPage },
];

export default volunteerPages;
