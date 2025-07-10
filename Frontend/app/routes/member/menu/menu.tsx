import React, { useState } from "react";
import { menuData } from "../../../testData/menuData";
import type { MenuItem } from "../../../testData/menuData";

const placeholderImage = "/images/placeholder.jpg";

const Menu = () => {
  const [search, setSearch] = useState("");
  const [filterFrozen, setFilterFrozen] = useState(false);
  const [expanded, setExpanded] = useState<{ [category: string]: boolean }>({});

  const toggleExpand = (category: string) => {
    setExpanded((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const filterItems = (items: MenuItem[]) =>
    items.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description?.toLowerCase().includes(search.toLowerCase());
      const matchesFrozen = !filterFrozen || item.isFrozen;
      return matchesSearch && matchesFrozen;
    });

  return (
    <div className="bg-gray-50 min-h-screen px-6 py-10">
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <input
          type="text"
          placeholder="Search menu items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded w-full md:w-1/3"
        />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filterFrozen}
            onChange={() => setFilterFrozen(!filterFrozen)}
          />
          <span className="text-sm">Show only frozen meals</span>
        </label>
      </div>

      {/* Render Categories */}
      <div className="space-y-20">
        {Object.entries(menuData).map(([category, { items }]) => {
          const filtered = filterItems(items);
          if (filtered.length === 0) return null;

          const showAll = expanded[category];
          const visibleItems = showAll ? filtered : filtered.slice(0, 4);

          return (
            <section key={category}>
              <h2 className="text-2xl font-semibold text-[#2062AF] mb-6 border-b pb-2 border-gray-300">
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {visibleItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
                  >
                    <img
                      src={placeholderImage}
                      alt={item.name}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.description || "Item description..."}
                      </p>
                      <p className="mt-2 text-[#1B69C1] font-bold text-md">
                        ${item.price.toFixed(2)}
                      </p>
                      {item.isFrozen && (
                        <span className="text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded-full inline-block mt-2">
                          Frozen
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Show More / Less Button */}
              {filtered.length > 4 && (
                <div className="mt-4 text-center">
                  <button
                    onClick={() => toggleExpand(category)}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    {showAll ? "Show Less ▲" : "Show More ▼"}
                  </button>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
