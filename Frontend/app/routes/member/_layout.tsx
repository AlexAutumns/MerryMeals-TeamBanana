import React, { useState } from "react";
import MemberSidebar from "./sidebar";
import memberPages from "./pages";

export default function MemberLayout() {
  const [activePage, setActivePage] = useState("Dashboard");

  const renderContent = () => {
    const current = memberPages.find((page) => page.label === activePage);
    const Component = current?.component;
    return Component ? <Component /> : <p>Page not found</p>;
  };

  return (
    <div className="min-h-screen flex">
      <MemberSidebar activePage={activePage} onSelectPage={setActivePage} />
      <main className="flex-1 bg-gray-50 p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">{activePage}</h1>
        <div className="bg-white p-6 rounded-lg shadow">{renderContent()}</div>
      </main>
    </div>
  );
}
