import {
  HomeIcon,
  ChartBarIcon,
  HeartIcon,
  UserIcon,
  Cog6ToothIcon,
  PowerIcon,
  UsersIcon,
  ClipboardDocumentCheckIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router";

const ProfileSidebar = () => {
  const location = useLocation();

  const navigationItems = [
    { label: "Profile", icon: UserIcon, href: "/profile" },
    { label: "Dashboard", icon: HomeIcon, href: "/dashboard" },
    { label: "Users Overview", icon: UsersIcon, href: "/userManagement" },
    {
      label: "Registration Approvals",
      icon: ClipboardDocumentCheckIcon,
      href: "/approvals",
    },
    { label: "Role Management", icon: ShieldCheckIcon, href: "/roles" },
    { label: "Favorites", icon: HeartIcon, href: "/favorites" },
    { label: "Analytics", icon: ChartBarIcon, href: "/analytics" },
  ];

  return (
    <aside className="w-64 bg-white border-r border-blue-600 p-4 flex flex-col">
      <nav className="flex-1 space-y-1">
        {navigationItems.map(({ label, icon: Icon, href }) => (
          <Link
            key={label}
            to={href}
            className={`w-full flex items-center space-x-3 px-4 py-2 rounded text-sm font-medium transition relative ${
              location.pathname === href
                ? "bg-blue-100 text-blue-700 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-blue-600"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>

      <div className="border-t pt-4">
        <Link
          to="/settings"
          className={`w-full flex items-center space-x-3 px-4 py-2 rounded text-sm font-medium transition ${
            location.pathname === "/settings"
              ? "bg-blue-100 text-blue-700"
              : "text-gray-700 hover:bg-gray-100"
          }`}
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

export default ProfileSidebar;
