import { useState } from "react";
import Sidebar from "./sidebar";

import mainPages from "./pages";

const DashboardLayout = () => {
    const [activePage, setActivePage] = useState("Dashboard");

    const UserRole = "admin"; // Simulating user role, can be "admin", "user", etc. (Add logic to handle this based on actual user data)

    const renderContent = () => {
    const current = mainPages.find((page) => page.label === activePage);
    const Component = current?.component;
    return Component ? <Component /> : <p>Page not found</p>;
};


    return (
        <div className="min-h-screen flex">
            <Sidebar activePage={activePage} onSelectPage={setActivePage} />
            <main className="flex-1 bg-gray-50 p-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    {}
                    {activePage}
                </h1>
                <div className="bg-white p-6 rounded-lg shadow">
                    {renderContent()}
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
