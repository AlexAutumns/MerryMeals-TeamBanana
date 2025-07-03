import React, { useState } from "react";
import {
  UserIcon,
  ChevronDownIcon,
  UserGroupIcon,
  HeartIcon,
  TruckIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import { type UserRole } from "../contexts/UserContext";

interface RoleSelectorProps {
  selectedRole: UserRole;
  onRoleChange: (role: UserRole) => void;
  label?: string;
  className?: string;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({
  selectedRole,
  onRoleChange,
  label = "Select Role",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

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

  const currentConfig = roleConfig[selectedRole];
  const CurrentRoleIcon = currentConfig.icon;

  const handleRoleSelect = (role: UserRole) => {
    onRoleChange(role);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <div className="flex items-center space-x-3">
          <div className={`p-1.5 rounded-full ${currentConfig.color}`}>
            <CurrentRoleIcon className="h-4 w-4" />
          </div>
          <div className="text-left">
            <div className="text-sm font-medium text-gray-900">
              {selectedRole}
            </div>
            <div className="text-xs text-gray-500">
              {currentConfig.description}
            </div>
          </div>
        </div>
        <ChevronDownIcon
          className={`h-4 w-4 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          <div className="py-1">
            {(Object.keys(roleConfig) as UserRole[]).map((role) => {
              const config = roleConfig[role];
              const RoleIcon = config.icon;
              const isSelected = selectedRole === role;

              return (
                <button
                  key={role}
                  type="button"
                  onClick={() => handleRoleSelect(role)}
                  className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                    isSelected ? "bg-blue-50 text-blue-700" : "text-gray-700"
                  }`}
                >
                  <div className={`p-1.5 rounded-full ${config.color}`}>
                    <RoleIcon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{role}</div>
                    <div className="text-xs text-gray-500">
                      {config.description}
                    </div>
                  </div>
                  {isSelected && (
                    <div className="text-xs font-medium text-blue-600">
                      Selected
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default RoleSelector;
