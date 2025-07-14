// Caregiver Pages
import React from "react";
import { HomeIcon, UserGroupIcon, ClipboardDocumentListIcon, UserIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

const DashboardPage = () => <div><p className="text-gray-600">Caregiver dashboard will be here in later updates</p></div>;
const MembersPage = () => <div><p className="text-gray-600">Member management will be here in later updates</p></div>;
const CarePlansPage = () => <div><p className="text-gray-600">Care plans will be here in later updates</p></div>;
const ProfilePage = () => <div><p className="text-gray-600">Profile will be here in later updates</p></div>;
const SettingsPage = () => <div><p className="text-gray-600">Caregiver settings will be here in later updates</p></div>;

const caregiverPages = [
  { label: "Profile", icon: UserIcon, component: ProfilePage },
  { label: "Dashboard", icon: HomeIcon, component: DashboardPage },
  { label: "Members", icon: UserGroupIcon, component: MembersPage },
  { label: "Care Plans", icon: ClipboardDocumentListIcon, component: CarePlansPage },
  { label: "Settings", icon: Cog6ToothIcon, component: SettingsPage }
];

export default caregiverPages;
