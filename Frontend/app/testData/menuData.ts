export type MenuItem = {
  name: string;
  price: number;
  description?: string;
  isFrozen?: boolean;
  type?: string;
};

export const menuData: {
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
      },
      {
        name: "Beef Stew",
        description: "Slow-cooked beef with carrots, potatoes, and gravy",
        price: 9.0,
      },
      {
        name: "Grilled Salmon",
        description: "Lemon herb salmon with quinoa & roasted vegetables",
        price: 10.5,
      },
      {
        name: "Vegetable Lasagna",
        description: "Layers of pasta, cheese, and fresh veggies",
        price: 7.5,
      },
      {
        name: "Turkey Meatloaf",
        description: "Lean turkey with tomato glaze, served with sweet potatoes",
        price: 8.0,
      },
      {
        name: "Chicken Curry",
        description: "Mild curry with basmati rice",
        price: 8.5,
      },
      {
        name: "Pork Chop with Apple Sauce",
        description: "Pan-seared pork with seasonal sides",
        price: 9.0,
      },
      {
        name: "Baked Ziti",
        description: "Pasta with marinara sauce and mozzarella",
        price: 8.0,
      },
      {
        name: "Stuffed Chicken Breast",
        description: "Chicken breast filled with spinach and feta",
        price: 9.5,
      },
      {
        name: "Spaghetti Bolognese",
        description: "Classic meat sauce served with pasta",
        price: 8.5,
      },
    ],
  },

  "Vegetarian & Vegan Options": {
    items: [
      {
        name: "Lentil Soup & Whole Grain Bread",
        description: "Protein-rich soup",
        price: 6.5,
      },
      {
        name: "Chickpea & Spinach Curry",
        description: "Served with brown rice",
        price: 7.5,
      },
      {
        name: "Stuffed Bell Peppers",
        description: "Quinoa, black beans, and cheese filling",
        price: 8.0,
      },
      {
        name: "Tofu Stir-Fry",
        description: "With mixed vegetables and soy-ginger sauce",
        price: 7.5,
      },
      {
        name: "Mushroom Risotto",
        description: "Creamy Arborio rice with herbs",
        price: 8.5,
      },
      {
        name: "Grilled Vegetable Skewers",
        description: "Zucchini, bell peppers, mushrooms with balsamic glaze",
        price: 7.0,
      },
      {
        name: "Vegan Mac & Cheese",
        description: "Creamy plant-based mac and cheese",
        price: 7.5,
      },
      {
        name: "Vegan Chili",
        description: "Hearty mix of beans and vegetables",
        price: 7.0,
      },
      {
        name: "Eggplant Parmesan",
        description: "Breaded eggplant with tomato sauce and cheese",
        price: 8.0,
      },
      {
        name: "Vegetarian Pad Thai",
        description: "Rice noodles with tofu and tamarind sauce",
        price: 8.5,
      },
    ],
  },

  "Frozen Meals (For Weekend/Remote Delivery)": {
    items: [
      {
        name: "Chicken Pot Pie",
        description: "Flaky crust with creamy filling",
        price: 7.0,
        isFrozen: true,
      },
      {
        name: "Beef & Vegetable Casserole",
        description: "Freezer-friendly meal",
        price: 8.0,
        isFrozen: true,
      },
      {
        name: "Vegetable Shepherd’s Pie",
        description: "Lentils & mashed potatoes",
        price: 7.5,
        isFrozen: true,
      },
      {
        name: "Fish Fillet with Lemon Butter Sauce",
        description: "Ready to bake",
        price: 9.0,
        isFrozen: true,
      },
      {
        name: "Frozen Chicken Alfredo",
        description: "Ready-to-heat creamy pasta with chicken",
        price: 8.0,
        isFrozen: true,
      },
      {
        name: "Frozen Vegan Burrito",
        description: "Spicy bean and veggie wrap",
        price: 7.0,
        isFrozen: true,
      },
      {
        name: "Frozen Lasagna",
        description: "Cheesy pasta ready to bake",
        price: 8.0,
        isFrozen: true,
      },
      {
        name: "Frozen Tofu Stir-Fry",
        description: "Ready-to-fry tofu with frozen veggies",
        price: 7.0,
        isFrozen: true,
      },
      {
        name: "Frozen Thai Green Curry",
        description: "Authentic curry with coconut milk and veggies",
        price: 8.5,
        isFrozen: true,
      },
      {
        name: "Frozen Chicken Tikka",
        description: "Spiced chicken cubes ready to heat",
        price: 9.0,
        isFrozen: true,
      },
    ],
  },

  "Soups & Sides": {
    items: [
      {
        name: "Tomato Basil Soup",
        description: "Rich tomato soup with basil",
        price: 4.0,
      },
      {
        name: "Creamy Broccoli & Cheese Soup",
        description: "Creamy soup with fresh broccoli and cheddar",
        price: 4.5,
      },
      {
        name: "Garden Salad",
        description: "Mixed greens, cherry tomatoes, cucumber",
        price: 5.0,
      },
      {
        name: "Garlic Bread (2 slices)",
        description: "Toasted bread with garlic butter",
        price: 2.5,
      },
      {
        name: "Steamed Rice / Mashed Potatoes",
        description: "Choose your preferred classic side",
        price: 3.0,
      },
      {
        name: "Sweet Potato Fries",
        description: "Crispy and lightly salted",
        price: 3.5,
      },
      {
        name: "Roasted Veggie Medley",
        description: "Seasonal roasted vegetables",
        price: 4.0,
      },
      {
        name: "Couscous Side Salad",
        description: "Fluffy couscous with herbs and lemon",
        price: 4.0,
      },
      {
        name: "Macaroni & Cheese Cup",
        description: "Creamy and cheesy side portion",
        price: 4.0,
      },
      {
        name: "Sauteed Green Beans",
        description: "With garlic and olive oil",
        price: 3.5,
      },
    ],
  },

  "Desserts": {
    items: [
      {
        name: "Apple Crumble",
        description: "Warm with cinnamon",
        price: 4.0,
      },
      {
        name: "Chocolate Pudding",
        description: "Rich and creamy chocolate dessert",
        price: 3.5,
      },
      {
        name: "Fruit Salad",
        description: "Seasonal fruits",
        price: 4.0,
      },
      {
        name: "Mango Mousse",
        description: "Light and airy tropical dessert",
        price: 4.5,
      },
      {
        name: "Lemon Tart",
        description: "Tangy and sweet pastry",
        price: 4.0,
      },
      {
        name: "Banana Bread Slice",
        description: "Moist banana bread with walnuts",
        price: 3.5,
      },
      {
        name: "Carrot Cake",
        description: "With cream cheese frosting",
        price: 4.5,
      },
      {
        name: "Peach Cobbler",
        description: "Baked dessert with sweet peaches",
        price: 4.0,
      },
      {
        name: "Chocolate Brownie",
        description: "Dense and fudgy chocolate brownie",
        price: 3.5,
      },
      {
        name: "Vanilla Ice Cream Cup",
        description: "Single serve vanilla scoop",
        price: 3.0,
      },
    ],
  },

  "Special Dietary Needs (Gluten-Free, Diabetic-Friendly, Low-Sodium)": {
    items: [
      {
        name: "Grilled Chicken with Steamed Veggies (GF)",
        description: "Lean protein with gluten-free sides",
        price: 9.0,
      },
      {
        name: "Quinoa Salad (Diabetic-Friendly)",
        description: "Low GI salad with olive oil dressing",
        price: 7.0,
      },
      {
        name: "Low-Sodium Vegetable Soup",
        description: "Heart-healthy option with reduced salt",
        price: 4.5,
      },
      {
        name: "Zucchini Noodles with Pesto (GF)",
        description: "Light zoodles with basil pesto",
        price: 8.0,
      },
      {
        name: "Steamed Fish with Herbs (Low-Sodium)",
        description: "Delicate fish seasoned naturally",
        price: 9.0,
      },
      {
        name: "Brown Rice Pilaf (GF)",
        description: "Nutty brown rice with mixed vegetables",
        price: 6.5,
      },
      {
        name: "Baked Sweet Potato (Diabetic-Friendly)",
        description: "High fiber baked sweet potato",
        price: 5.0,
      },
      {
        name: "Cauliflower Mash (Low-Sodium, GF)",
        description: "Smooth alternative to mashed potatoes",
        price: 5.5,
      },
      {
        name: "Grilled Zucchini & Tomato Stack (GF)",
        description: "Vegetable stack with herbs",
        price: 6.0,
      },
      {
        name: "Sugar-Free Chocolate Pudding",
        description: "Low-carb dessert for diabetic diets",
        price: 3.5,
      },
    ],
  },
};
