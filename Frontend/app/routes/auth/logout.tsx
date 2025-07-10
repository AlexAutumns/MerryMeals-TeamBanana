import { useEffect } from "react";
import { useNavigate } from "react-router";

const LogoutPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear localStorage items related to auth
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("userRoles");

        // Redirect to login page after logout
        window.dispatchEvent(new Event("authChanged")); // Notify other parts of the app about auth change
        navigate("/login");
    }, [navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-gray-700">Logging out...</p>
        </div>
    );
};

export default LogoutPage;
