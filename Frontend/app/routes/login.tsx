import { useState } from "react";
import { useNavigate } from "react-router";
import API from "../api/api"; // Adjust the import path as necessary

const LoginForm = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);

    let navigate = useNavigate();

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const res = await API.post("/auth/login", form);
            if (res.status === 200) {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("username", res.data.fullName);
                localStorage.setItem(
                    "userRoles",
                    JSON.stringify(res.data.roles)
                );

                // Dispatch event so Navbar updates immediately
                window.dispatchEvent(new Event("authChanged"));

                navigate("/dashboard");
            }
        } catch (error: any) {
            console.error("Error logging in: ", error);
            alert("Login failed. Please check your credentials.");
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-blue-500 overflow-hidden px-4">
            {/* Background shapes */}
            <div className="absolute -top-16 -left-16 w-72 h-72 bg-blue-200 rounded-full opacity-30 animate-blob"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-200 rounded-full opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-400 rounded-full opacity-30 animate-blob animation-delay-4000 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/4 right-1/8 w-72 h-72 bg-blue-100 rounded-full opacity-30 animate-blob animation-delay-4000 transform -translate-x-1/2 -translate-y-1/2"></div>

            {/* Login form */}
            <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 space-y-6 z-10 relative">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Sign in to your account
                    </h2>
                    <p className="text-sm text-gray-500">
                        Enter your credentials below
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
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
                                className="w-full px-4 py-2 border border-gray-300 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-3 text-sm text-gray-500 hover:text-blue-500"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Sign In
                    </button>
                </form>

                <p className="text-sm text-center text-gray-500">
                    Don’t have an account?{" "}
                    <a
                        href="/register"
                        className="text-blue-600 hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
