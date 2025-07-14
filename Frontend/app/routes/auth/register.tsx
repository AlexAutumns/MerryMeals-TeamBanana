import { useState } from "react";
import { useNavigate } from "react-router";
import API from "../../api/api"; // Adjust the import path as necessary

const RegisterForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "member",
    phone: "",
    address: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showRoleSelector, setShowRoleSelector] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

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
  ];

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError(""); // Clear error when user types
  };

  const handleRoleChange = (roleValue: string) => {
    setForm({ ...form, role: roleValue });
    setShowRoleSelector(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Enhanced Validation
    if (!form.firstName.trim()) {
      setError("First name is required");
      setLoading(false);
      return;
    }

    if (!form.lastName.trim()) {
      setError("Last name is required");
      setLoading(false);
      return;
    }

    if (!form.email.trim()) {
      setError("Email is required");
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    if (!form.phone.trim()) {
      setError("Phone number is required");
      setLoading(false);
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters long");
      setLoading(false);
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      // Prepare registration data
      const registrationData = {
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        fullName: `${form.firstName.trim()} ${form.lastName.trim()}`,
        email: form.email.trim().toLowerCase(),
        password: form.password,
        role: form.role,
        phone: form.phone.trim(),
        address: form.address.trim(),
      };

      console.log("Sending registration data:", registrationData);

      const res = await API.post("/auth/register", registrationData);

      if (res.status === 201 || res.status === 200) {
        alert("Registration successful! Please sign in.");
        navigate("/login");
      }
    } catch (error: any) {
      console.error("Registration error:", error);

      // Handle different error types
      if (error.response) {
        // Server responded with error status
        const errorMessage =
          error.response.data?.message ||
          error.response.data?.error ||
          "Registration failed";
        setError(errorMessage);
      } else if (error.request) {
        // Network error
        setError("Network error. Please check your connection and try again.");
      } else {
        // Other error
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const selectedRole = userRoles.find((role) => role.value === form.role);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-blue-500 px-4 overflow-hidden">
      {/* Background shapes */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-blue-200 rounded-full opacity-30 animate-blob"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-200 rounded-full opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-400 rounded-full opacity-30 animate-blob animation-delay-4000 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/4 right-1/8 w-72 h-72 bg-blue-100 rounded-full opacity-30 animate-blob animation-delay-4000 transform -translate-x-1/2 -translate-y-1/2"></div>

      {/* Form container */}
      <div className="relative z-10 w-full max-w-md bg-white shadow-lg rounded-xl p-8 space-y-6">
        {!showRoleSelector ? (
          // Register Form View
          <>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800">
                Create an account
              </h2>
              <p className="text-sm text-gray-500">
                Fill in the details below to register
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Role Selector Button */}
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setShowRoleSelector(true)}
                  className="inline-flex items-center space-x-2 px-4 py-2.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg transition-all duration-200 text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  <span>{selectedRole?.icon}</span>
                  <span>Register as {selectedRole?.label}</span>
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

              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Doe"
                  />
                </div>
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your full address"
                />
              </div>

              {/* Password Fields */}
              <div className="grid grid-cols-2 gap-3">
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={form.confirmPassword}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-500 hover:text-blue-500 transition-colors"
                    >
                      {showConfirmPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white font-medium py-2.5 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center space-x-2">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Creating Account...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center space-x-2">
                    <span>{selectedRole?.icon}</span>
                    <span>Create {selectedRole?.label} Account</span>
                  </span>
                )}
              </button>
            </form>

            <p className="text-sm text-center text-gray-500">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 hover:underline">
                Sign in
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
                Select how you want to join MerryMeals
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
                Back to registration
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;
