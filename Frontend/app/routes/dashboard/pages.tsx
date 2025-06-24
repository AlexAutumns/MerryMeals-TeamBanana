import React from "react";

//Icons
import {
    HomeIcon,
    UserGroupIcon,
    ChartBarIcon,
    PowerIcon,
    HeartIcon,
} from "@heroicons/react/24/outline";

// Pages
import Overview from "./pages/overviewPages/overview";

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
];

export default mainPages;
