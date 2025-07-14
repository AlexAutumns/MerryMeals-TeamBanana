import { useState, useEffect } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  BellIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("Guest");
  const [userRoles, setUserRoles] = useState<string[]>([]);

  // Helper to parse roles, removing "ROLE_" prefix
  const roleParser = (roleStrings: any[]) => {
    return roleStrings
      .map((roleString) => {
        if (roleString && roleString.startsWith("ROLE_")) {
          return roleString.substring(5);
        }
        return null;
      })
      .filter((roleName) => roleName !== null) as string[];
  };

  useEffect(() => {
    const updateAuth = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
      setUsername(localStorage.getItem("username") || "Guest");
      const storedRoles = JSON.parse(localStorage.getItem("userRoles") || "[]");
      setUserRoles(roleParser(storedRoles));
    };

    // Listen for auth changes (login/logout)
    window.addEventListener("authChanged", updateAuth);

    // Initial check on mount
    updateAuth();

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("authChanged", updateAuth);
    };
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg transition-colors">
      <nav className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">
          <span className="text-blue-500">Merry</span>Meals
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Menu */}
        <div className="hidden md:flex items-center space-x-4 relative">
          {isLoggedIn ? (
            <>
              {/* Notification */}
              <button className="text-gray-700 hover:text-blue-600 transition focus:outline-none">
                <BellIcon className="h-6 w-6" />
              </button>

              {/* Account */}
              <div className="relative">
                <button
                  onClick={() => setAccountOpen(!accountOpen)}
                  className="text-gray-700 hover:text-blue-600 transition focus:outline-none flex items-center space-x-3"
                >
                  <UserCircleIcon className="h-10 w-10" />
                  <div className="text-left">
                    <h3 className="text-sm font-medium capitalize">
                      {username}
                    </h3>
                    <p className="text-xs text-blue-500 capitalize">
                      {userRoles[0] || "Member"}
                    </p>
                  </div>
                </button>

                {/* Account Dropdown */}
                {accountOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md py-2 z-50">
                    <a
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </a>
                    <a
                      href="/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </a>
                    <a
                      href="/logout"
                      className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </a>
                  </div>
                )}
              </div>
            </>
          ) : (
            <a
              href="/login"
              className="text-sm px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Login
            </a>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-md">
          <ul className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-gray-700 hover:text-blue-600 transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
            {!isLoggedIn && (
              <li>
                <a
                  href="/login"
                  className="block text-blue-600 font-medium hover:underline"
                >
                  Login
                </a>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
