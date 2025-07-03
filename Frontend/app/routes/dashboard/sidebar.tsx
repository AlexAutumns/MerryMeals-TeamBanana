import {
  Cog6ToothIcon,
  PowerIcon,
  UserIcon,
  UsersIcon,
  ClipboardDocumentCheckIcon,
  ShieldCheckIcon,
  HeartIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router";
import mainPages from "./pages";

interface SidebarProps {
  activePage: string;
  onSelectPage: (label: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, onSelectPage }) => {
  return (
    <aside className="w-64 bg-white border-r border-blue-600 p-4 flex flex-col">
      <nav className="flex-1 space-y-1">
        {/* Profile Link at the very top */}
        <Link
          to="/profile"
          className="w-full flex items-center space-x-3 px-4 py-2 rounded text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
        >
          <UserIcon className="h-5 w-5" />
          <span>Profile</span>
        </Link>

        {/* Dashboard Navigation - Only Dashboard (Overview) */}
        {mainPages.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => onSelectPage(label)}
            className={`w-full flex items-center space-x-3 px-4 py-2 rounded text-sm font-medium transition relative ${
              activePage === label
                ? "bg-blue-100 text-blue-700 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-blue-600"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </button>
        ))}

        {/* User Management Links - Same order as ProfileSidebar */}
        <Link
          to="/userManagement"
          className="w-full flex items-center space-x-3 px-4 py-2 rounded text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
        >
          <UsersIcon className="h-5 w-5" />
          <span>Users Overview</span>
        </Link>
        <Link
          to="/approvals"
          className="w-full flex items-center space-x-3 px-4 py-2 rounded text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
        >
          <ClipboardDocumentCheckIcon className="h-5 w-5" />
          <span>Registration Approvals</span>
        </Link>
        <Link
          to="/roles"
          className="w-full flex items-center space-x-3 px-4 py-2 rounded text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
        >
          <ShieldCheckIcon className="h-5 w-5" />
          <span>Role Management</span>
        </Link>

        {/* Standalone Page Links - Same order as ProfileSidebar */}
        <Link
          to="/favorites"
          className="w-full flex items-center space-x-3 px-4 py-2 rounded text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
        >
          <HeartIcon className="h-5 w-5" />
          <span>Favorites</span>
        </Link>
        <Link
          to="/analytics"
          className="w-full flex items-center space-x-3 px-4 py-2 rounded text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
        >
          <ChartBarIcon className="h-5 w-5" />
          <span>Analytics</span>
        </Link>
      </nav>

      <div className="border-t pt-4">
        <Link
          to="/settings"
          className="w-full flex items-center space-x-3 px-4 py-2 rounded text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
        >
          <Cog6ToothIcon className="h-5 w-5" />
          <span>Settings</span>
        </Link>
        <Link
          to="/logout"
          className="w-full flex items-center space-x-3 px-4 py-2 rounded text-sm font-medium text-red-600 hover:bg-red-50 transition"
        >
          <PowerIcon className="h-5 w-5" />
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
