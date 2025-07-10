// Donor Pages
import React from "react";
import { HomeIcon, CurrencyDollarIcon, ChartBarIcon, UserIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

const DashboardPage = () => <div><p className="text-gray-600">Donor dashboard will be here in later updates</p></div>;
const DonationsPage = () => <div><p className="text-gray-600">Donations will be here in later updates</p></div>;
const ImpactPage = () => <div><p className="text-gray-600">Impact tracking will be here in later updates</p></div>;
const ProfilePage = () => <div><p className="text-gray-600">Profile will be here in later updates</p></div>;
const SettingsPage = () => <div><p className="text-gray-600">Donor settings will be here in later updates</p></div>;

const donorPages = [
  { label: "Profile", icon: UserIcon, component: ProfilePage },
  { label: "Dashboard", icon: HomeIcon, component: DashboardPage },
  { label: "Donations", icon: CurrencyDollarIcon, component: DonationsPage },
  { label: "Impact", icon: ChartBarIcon, component: ImpactPage },
  { label: "Settings", icon: Cog6ToothIcon, component: SettingsPage }
];

export default donorPages;
