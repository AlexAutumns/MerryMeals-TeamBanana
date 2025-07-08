import React, { useState } from "react";

type MenuItem = {
  name: string;
  price: number;
  description?: string;
  image: string;
  isFrozen?: boolean;
  type?: string;
};

const menuData: {
  [category: string]: {
    items: MenuItem[];
  };
} = {
  "Main Courses (Hot Meals – Delivered Daily)": {
    items: [
      {
        name: "Classic Roast Chicken",
        description: "Tender chicken with herbs, served with mashed potatoes & steamed veggies",
        price: 8.5,
        image: "/images/menu/Roast-Chicken.jpeg",
      },
      {
        name: "Beef Stew",
        description: "Slow-cooked beef with carrots, potatoes, and gravy",
        price: 9.0,
        image: "/images/menu/Beef-stew.jpg",
      },
      {
        name: "Grilled Salmon",
        description: "Lemon herb salmon with quinoa & roasted vegetables",
        price: 10.5,
        image: "/images/menu/salmon.jpg",
      },
      {
        name: "Vegetable Lasagna",
        description: "Layers of pasta, cheese, and fresh veggies",
        price: 7.5,
        image: "/images/menu/lasagna.jpg",
      },
      {
        name: "Turkey Meatloaf",
        description: "Lean turkey with tomato glaze, served with sweet potatoes",
        price: 8.0,
        image: "/images/menu/meatloaf.jpg",
      },
      {
        name: "Chicken Curry",
        description: "Mild curry with basmati rice",
        price: 8.5,
        image: "/images/menu/chicken-curry.jpeg",
      },
      {
        name: "Pork Chop with Apple Sauce",
        description: "Pan-seared pork with seasonal sides",
        price: 9.0,
        image: "/images/menu/pork-chop.jpg",
      },
      {
        name: "Baked Ziti",
        description: "Pasta with marinara sauce and mozzarella",
        price: 8.0,
        image: "/images/menu/baked-ziti.jpg",
     },
    ],
  },
  "Vegetarian & Vegan Options": {
    items: [
      {
        name: "Lentil Soup & Whole Grain Bread",
        description: "Protein-rich soup",
        price: 6.5,
        image: "/images/menu/lentil-soup.jpg",
      },
      {
        name: "Chickpea & Spinach Curry",
        description: "Served with brown rice",
        price: 7.5,
        image: "/images/menu/chickpea-curry.jpg",
      },
      {
        name: "Stuffed Bell Peppers",
        description: "Quinoa, black beans, and cheese filling",
        price: 8.0,
        image: "/images/menu/stuffed-peppers.jpg",
      },
      {
        name: "Tofu Stir-Fry",
        description: "With mixed vegetables and soy-ginger sauce",
        price: 7.5,
        image: "/images/menu/tofu-stirfry.jpg",
      },
      {
        name: "Mushroom Risotto",
        description: "Creamy Arborio rice with herbs",
        price: 8.5,
        image: "/images/menu/mushroom-risotto.jpg",
      },
      {
        name: "Grilled Vegetable Skewers",
        description: "Zucchini, bell peppers, mushrooms with balsamic glaze",
        price: 7.0,
        image: "/images/menu/veg-skewers.jpg",
      },
      {
        name: "Vegan Mac & Cheese",
        description: "Creamy plant-based mac and cheese",
        price: 7.5,
        image: "/images/menu/vegan-mac.jpg",
      },
    ],
  },
  "Frozen Meals (For Weekend/Remote Delivery)": {
    items: [
      {
        name: "Chicken Pot Pie",
        description: "Flaky crust with creamy filling",
        price: 7.0,
        image: "/images/menu/chicken-pot-pie.jpg",
        isFrozen: true,
      },
      {
        name: "Beef & Vegetable Casserole",
        description: "Freezer-friendly meal",
        price: 8.0,
        image: "/images/menu/beef-casserole.jpg",
        isFrozen: true,
      },
      {
        name: "Vegetable Shepherd’s Pie",
        description: "Lentils & mashed potatoes",
        price: 7.5,
        image: "/images/menu/sheperds-pie.jpg",
        isFrozen: true,
      },
      {
        name: "Fish Fillet with Lemon Butter Sauce",
        description: "Ready to bake",
        price: 9.0,
        image: "/images/menu/fish-fillet.jpg",
        isFrozen: true,
      },
      {
        name: "Frozen Chicken Alfredo",
        description: "Ready-to-heat creamy pasta with chicken",
        price: 8.0,
        image: "/images/menu/frozen-alfredo.jpg",
        isFrozen: true,
      },
     {
       name: "Frozen Vegan Burrito",
       description: "Spicy bean and veggie wrap",
       price: 7.0,
       image: "/images/menu/frozen-burrito.jpg",
       isFrozen: true,
    },
    ],
  },
  "Soups & Sides": {
    items: [
      {
        name: "Tomato Basil Soup",
        price: 4.0,
        image: "/images/menu/tomato-soup.jpg",
      },
      {
        name: "Creamy Broccoli & Cheese Soup",
        price: 4.5,
        image: "/images/menu/broccoli-soup.jpg",
      },
      {
        name: "Garden Salad",
        description: "Mixed greens, cherry tomatoes, cucumber",
        price: 5.0,
        image: "/images/menu/garden-salad.jpg",
      },
      {
        name: "Garlic Bread (2 slices)",
        price: 2.5,
        image: "/images/menu/garlic-bread.jpg",
      },
      {
        name: "Steamed Rice / Mashed Potatoes",
        price: 3.0,
        image: "/images/menu/rice-potatoes.jpg",
      },

      {
       name: "Sweet Potato Fries",
       description: "Crispy and lightly salted",
       price: 3.5,
       image: "/images/menu/sweet-potato-fries.jpg",
     },
     {
      name: "Roasted Veggie Medley",
      description: "Seasonal roasted vegetables",
      price: 4.0,
      image: "/images/menu/roasted-veggies.jpg",
     },
    ],
  },
  "Desserts": {
    items: [
      {
        name: "Apple Crumble",
        description: "Warm with cinnamon",
        price: 4.0,
        image: "/images/menu/apple-crumble.jpg",
      },
      {
        name: "Chocolate Pudding",
        price: 3.5,
        image: "/images/menu/chocolate-pudding.jpg",
      },
      {
        name: "Fruit Salad",
        description: "Seasonal fruits",
        price: 4.0,
        image: "/images/menu/fruit-salad.jpg",
      },
      {
       name: "Mango Mousse",
       description: "Light and airy tropical dessert",
       price: 4.5,
       image: "/images/menu/mango-mousse.jpg",
     },
     {
      name: "Lemon Tart",
      description: "Tangy and sweet pastry",
      price: 4.0,
      image: "/images/menu/lemon-tart.jpg",
     },
    ],
  },
  "Special Dietary Needs (Gluten-Free, Diabetic-Friendly, Low-Sodium)": {
    items: [
      {
        name: "Grilled Chicken with Steamed Veggies (GF)",
        price: 9.0,
        image: "/images/menu/grilled-chicken-gf.jpg",
      },
      {
        name: "Quinoa Salad (Diabetic-Friendly)",
        price: 7.0,
        image: "/images/menu/quinoa-salad.jpg",
      },
      {
        name: "Low-Sodium Vegetable Soup",
        price: 4.5,
        image: "/images/menu/low-sodium-soup.jpg",
      },
      {
       name: "Zucchini Noodles with Pesto (GF)",
       price: 8.0,
       image: "/images/menu/zoodle-pesto.jpg",
     },
     {
      name: "Steamed Fish with Herbs (Low-Sodium)",
      price: 9.0,
      image: "/images/menu/steamed-fish.jpg",
    },
    ],
  },
};

const MenuPage = () => {
  const [search, setSearch] = useState("");
  const [filterFrozen, setFilterFrozen] = useState(false);

  const filterItems = (items: MenuItem[]) => {
    return items.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description?.toLowerCase().includes(search.toLowerCase());
      const matchesFrozen = !filterFrozen || item.isFrozen;
      return matchesSearch && matchesFrozen;
    });
  };

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

      <div className="space-y-20">
        {Object.entries(menuData).map(([category, { items }]) => {
          const filtered = filterItems(items);
          if (filtered.length === 0) return null;
          return (
            <section key={category}>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2 border-gray-300">
              {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filtered.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      {item.description && (
                        <p className="text-sm text-gray-600 mt-1">
                          {item.description}
                        </p>
                      )}
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
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default MenuPage;
