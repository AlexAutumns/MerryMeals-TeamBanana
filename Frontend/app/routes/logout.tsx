import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate logout process
    const handleLogout = async () => {
      try {
        // Here you would typically:
        // 1. Clear authentication tokens
        // 2. Clear local storage
        // 3. Call logout API

        localStorage.clear();
        sessionStorage.clear();

        // Wait a moment to show the logout message
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } catch (error) {
        console.error("Logout error:", error);
        // Even if there's an error, redirect to login
        navigate("/login");
      }
    };

    handleLogout();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-4 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </div>

          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Logging out...
          </h1>
          <p className="text-gray-600">Thank you for using MerryMeals!</p>
        </div>

        <div className="flex justify-center mb-6">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>

        <div className="text-sm text-gray-500">
          <p>You will be redirected to the login page shortly.</p>
        </div>

        <div className="mt-6">
          <button
            onClick={() => navigate("/login")}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Go to Login Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;
