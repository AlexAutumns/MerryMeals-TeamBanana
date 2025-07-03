import React, { useState, useRef, useEffect } from "react";
import {
  UserIcon,
  ChevronDownIcon,
  PowerIcon,
  UserGroupIcon,
  HeartIcon,
  TruckIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import { useUser, type UserRole } from "../contexts/UserContext";
import { Link } from "react-router";

const RoleSwitcher = () => {
  const { currentUser, switchRole, logout } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!currentUser) return null;

  const roleConfig: Record<
    UserRole,
    { icon: React.ComponentType<any>; color: string; description: string }
  > = {
    Admin: {
      icon: ShieldCheckIcon,
      color: "text-red-600 bg-red-100",
      description: "System Administrator",
    },
    Member: {
      icon: UserIcon,
      color: "text-blue-600 bg-blue-100",
      description: "Meal Recipient",
    },
    Volunteer: {
      icon: HeartIcon,
      color: "text-purple-600 bg-purple-100",
      description: "Delivery Volunteer",
    },
    Partner: {
      icon: TruckIcon,
      color: "text-orange-600 bg-orange-100",
      description: "Kitchen Partner",
    },
    Caregiver: {
      icon: UserGroupIcon,
      color: "text-pink-600 bg-pink-100",
      description: "Professional Caregiver",
    },
    Donor: {
      icon: CurrencyDollarIcon,
      color: "text-green-600 bg-green-100",
      description: "Financial Supporter",
    },
  };

  const currentConfig = roleConfig[currentUser.role];
  const CurrentRoleIcon = currentConfig.icon;

  const handleRoleSwitch = (role: UserRole) => {
    switchRole(role);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 px-4 py-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
      >
        <div className={`p-2 rounded-full ${currentConfig.color}`}>
          <CurrentRoleIcon className="h-4 w-4" />
        </div>
        <div className="text-left">
          <div className="text-sm font-medium text-gray-900">
            {currentUser.name}
          </div>
          <div className="text-xs text-gray-500">
            Log in as: <span className="font-medium">{currentUser.role}</span>
          </div>
        </div>
        <ChevronDownIcon
          className={`h-4 w-4 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              Switch Role
            </h3>
            <p className="text-xs text-gray-600">
              Experience the platform from different user perspectives
            </p>
          </div>

          <div className="p-2">
            {(Object.keys(roleConfig) as UserRole[]).map((role) => {
              const config = roleConfig[role];
              const RoleIcon = config.icon;
              const isCurrentRole = currentUser.role === role;

              return (
                <button
                  key={role}
                  onClick={() => handleRoleSwitch(role)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    isCurrentRole
                      ? "bg-blue-50 text-blue-700 border border-blue-200"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  <div className={`p-2 rounded-full ${config.color}`}>
                    <RoleIcon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{role}</div>
                    <div className="text-xs text-gray-500">
                      {config.description}
                    </div>
                  </div>
                  {isCurrentRole && (
                    <div className="text-xs font-medium text-blue-600">
                      Current
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="border-t border-gray-200 p-2">
            <Link
              to="/profile"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left hover:bg-gray-50 transition-colors text-gray-700"
            >
              <UserIcon className="h-4 w-4" />
              <span className="text-sm">View Profile</span>
            </Link>
            <button
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
              className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left hover:bg-red-50 transition-colors text-red-600"
            >
              <PowerIcon className="h-4 w-4" />
              <span className="text-sm">Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoleSwitcher;
