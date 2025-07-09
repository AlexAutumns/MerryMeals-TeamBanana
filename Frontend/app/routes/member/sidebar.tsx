import React from "react";
import { Link } from "react-router";
import { UserIcon, Cog6ToothIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import memberPages from "./pages";

interface SidebarProps {
  activePage: string;
  onSelectPage: (label: string) => void;
}

const MemberSidebar: React.FC<SidebarProps> = ({
  activePage,
  onSelectPage,
}) => {
  // Filter out Profile and Settings from main pages
  const mainPages = memberPages.filter(page => page.label !== "Profile" && page.label !== "Settings");
  const profilePage = memberPages.find(page => page.label === "Profile");
  const settingsPage = memberPages.find(page => page.label === "Settings");

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4 flex flex-col">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800">Member Portal</h2>
        <p className="text-gray-500 text-sm">MerryMeals</p>
      </div>

      {/* Profile button at the top */}
      {profilePage && (
        <div className="mb-4">
          <button
            onClick={() => onSelectPage("Profile")}
            className={`w-full flex items-center space-x-3 px-4 py-2 rounded text-sm font-medium transition ${
              activePage === "Profile"
                ? "bg-gray-100 text-gray-900"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <UserIcon className="h-5 w-5" />
            <span>Profile</span>
          </button>
        </div>
      )}

      {/* Main navigation pages */}
      <nav className="flex-1 space-y-1">
        {mainPages.map((page) => {
          const Icon = page.icon;
          return (
            <button
              key={page.label}
              onClick={() => onSelectPage(page.label)}
              className={`w-full flex items-center space-x-3 px-4 py-2 rounded text-sm font-medium transition ${
                activePage === page.label
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{page.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom section with Settings and Logout */}
      <div className="border-t border-gray-200 pt-4 mt-4 space-y-1">
        {/* Settings button */}
        {settingsPage && (
          <button
            onClick={() => onSelectPage("Settings")}
            className={`w-full flex items-center space-x-3 px-4 py-2 rounded text-sm font-medium transition ${
              activePage === "Settings"
                ? "bg-gray-100 text-gray-900"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <Cog6ToothIcon className="h-5 w-5" />
            <span>Settings</span>
          </button>
        )}
        
        {/* Logout button */}
        <Link
          to="/logout"
          className="w-full flex items-center space-x-3 px-4 py-2 rounded text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200 border border-transparent hover:border-red-200 cursor-pointer"
        >
          <ArrowRightOnRectangleIcon className="h-5 w-5" />
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
};

export default MemberSidebar;
