import React from "react";

//Icons
import {
    HomeIcon,
    UserGroupIcon,
    ChartBarIcon,
    PowerIcon,
    HeartIcon,
    ListBulletIcon,
} from "@heroicons/react/24/outline";

// Pages
import Overview from "./pages/overviewPages/overview";
import MenuPage from "./menu";

const mainPages = [
    { label: "Dashboard", icon: HomeIcon, component: Overview },
    {
        label: "Favorites",
        icon: HeartIcon,
        component: () => <div>❤️ Your favorite items</div>,
    },
    {
        label: "Analytics",
        icon: ChartBarIcon,
        component: () => <div>📈 Analytics and reports</div>,
    },
    {
        label: "Menu",
        icon: ListBulletIcon,
        component: MenuPage,
    },

    
];

export default mainPages;
