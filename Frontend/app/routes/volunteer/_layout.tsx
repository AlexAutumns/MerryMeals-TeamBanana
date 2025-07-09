import React, { useState } from "react";
import VolunteerSidebar from "./sidebar";
import volunteerPages from "./pages";

export default function VolunteerLayout() {
  const [activePage, setActivePage] = useState("Dashboard");

  const renderContent = () => {
    const current = volunteerPages.find((page) => page.label === activePage);
    const Component = current?.component;
    return Component ? <Component /> : <p>Page not found</p>;
  };

  return (
    <div className="min-h-screen flex">
      <VolunteerSidebar activePage={activePage} onSelectPage={setActivePage} />
      <main className="flex-1 bg-gray-50 p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">{activePage}</h1>
        <div className="bg-white p-6 rounded-lg shadow">{renderContent()}</div>
      </main>
    </div>
  );
}
