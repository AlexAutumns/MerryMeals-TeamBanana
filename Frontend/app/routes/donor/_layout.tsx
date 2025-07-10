import React, { useState } from "react";
import DonorSidebar from "./sidebar";
import donorPages from "./pages";

export default function DonorLayout() {
  const [activePage, setActivePage] = useState("Dashboard");

  const renderContent = () => {
    const current = donorPages.find((page) => page.label === activePage);
    const Component = current?.component;
    return Component ? <Component /> : <p>Page not found</p>;
  };

  return (
    <div className="min-h-screen flex">
      <DonorSidebar activePage={activePage} onSelectPage={setActivePage} />
      <main className="flex-1 bg-gray-50 p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          {activePage}
        </h1>
        <div className="bg-white p-6 rounded-lg shadow">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
