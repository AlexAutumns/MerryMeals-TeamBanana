import { useState } from "react";
import { useNavigate } from "react-router";
import API from "../../api/api"; // Updated path for auth folder

const LoginForm = () => {  const [form, setForm] = useState({ email: "", password: "", role: "member" });
  const [showPassword, setShowPassword] = useState(false);
  const [showRoleSelector, setShowRoleSelector] = useState(false);

  let navigate = useNavigate();

  const userRoles = [
    {
      value: "member",
      label: "Member",
      description: "Meal recipient",
      icon: "🍽️",
    },
    {
      value: "caregiver",
      label: "Care Giver",
      description: "Member support",
      icon: "👥",
    },
    {
      value: "partner",
      label: "Partner",
      description: "Food service provider",
      icon: "🏪",
    },
    {
      value: "volunteer",
      label: "Volunteer",
      description: "Delivery & support",
      icon: "🚚",
    },
    {
      value: "donor",
      label: "Donor",
      description: "Financial support",
      icon: "❤️",
    },
    {
      value: "admin",
      label: "Administrator",
      description: "System management",
      icon: "⚙️",
    },
  ];

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (roleValue: string) => {
    setForm({ ...form, role: roleValue });
    setShowRoleSelector(false); // Go back to login form
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.fullName);
        localStorage.setItem("userRole", form.role);
        localStorage.setItem("userRoles", JSON.stringify(res.data.roles));

        // Dispatch event so Navbar updates immediately
        window.dispatchEvent(new Event("authChanged"));

        // Navigate based on role
        const dashboardRoute = getDashboardRoute(form.role);
        navigate(dashboardRoute);
      }
    } catch (error: any) {
      console.error("Error logging in: ", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  const getDashboardRoute = (role: string) => {
    const routes = {
      member: "/member-dashboard",
      caregiver: "/caregiver-dashboard",
      partner: "/partner-dashboard",
      volunteer: "/volunteer-dashboard",
      donor: "/donor-dashboard",
      admin: "/admin-dashboard",
    };
    return routes[role as keyof typeof routes] || "/dashboard";
  };

  const selectedRole = userRoles.find((role) => role.value === form.role);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-blue-500 overflow-hidden px-4">
      {/* Background shapes */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-blue-200 rounded-full opacity-30 animate-blob"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-200 rounded-full opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-400 rounded-full opacity-30 animate-blob animation-delay-4000 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/4 right-1/8 w-72 h-72 bg-blue-100 rounded-full opacity-30 animate-blob animation-delay-4000 transform -translate-x-1/2 -translate-y-1/2"></div>

      {/* Login form */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 space-y-6 z-10 relative">
        {!showRoleSelector ? (
          // Login Form View
          <>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800">
                Sign in to your account
              </h2>
              <p className="text-sm text-gray-500">
                Enter your credentials below
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Role Selector Button */}
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setShowRoleSelector(true)}
                  className="inline-flex items-center space-x-2 px-4 py-2.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg transition-all duration-200 text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  <span>{selectedRole?.icon}</span>
                  <span>Sign in as {selectedRole?.label}</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="you@example.com"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-500 hover:text-blue-500 transition-colors"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-2.5 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>{selectedRole?.icon}</span>
                  <span>Sign in as {selectedRole?.label}</span>
                </span>
              </button>
            </form>

            <p className="text-sm text-center text-gray-500">
              Don't have an account?{" "}
              <a
                href="/register"
                className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors"
              >
                Sign up
              </a>
            </p>
          </>
        ) : (
          // Role Selection View
          <>
            <div className="text-center">
              <button
                onClick={() => setShowRoleSelector(false)}
                className="absolute top-4 left-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <h2 className="text-2xl font-bold text-gray-800">
                Choose Your Role
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                Select how you want to sign in
              </p>
            </div>

            <div className="space-y-3">
              {userRoles.map((role) => (
                <button
                  key={role.value}
                  type="button"
                  onClick={() => handleRoleChange(role.value)}
                  className={`w-full flex items-center space-x-4 p-4 border-2 rounded-lg transition-all duration-200 text-left hover:shadow-md ${
                    form.role === role.value
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-200 hover:border-gray-300 bg-white text-gray-700"
                  }`}
                >
                  <span className="text-2xl flex-shrink-0">{role.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-lg font-semibold">{role.label}</div>
                    <div className="text-sm opacity-75">{role.description}</div>
                  </div>
                  <div className="flex-shrink-0">
                    {form.role === role.value ? (
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => setShowRoleSelector(false)}
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                Back to login
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
