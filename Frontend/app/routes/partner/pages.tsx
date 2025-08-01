// Partner Pages
import React from "react";
import {
  HomeIcon,
  BuildingStorefrontIcon,
  ChartBarIcon,
  UserIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

import PartnerDashboardPage from "./PartnerDashboardPage";
import PartnerKitchenPage from "./kitchen";
import PartnerProfilePage from "./PartnerProfilePage";
import PartnerSettingsPage from "./settings";
import PartnerAnalyticsPage from "./analytics";

const partnerPages = [
  { label: "Profile", icon: UserIcon, component: PartnerProfilePage },
  { label: "Dashboard", icon: HomeIcon, component: PartnerDashboardPage },
  {
    label: "Kitchen",
    icon: BuildingStorefrontIcon,
    component: PartnerKitchenPage,
  },
  { label: "Analytics", icon: ChartBarIcon, component: PartnerAnalyticsPage },
  { label: "Settings", icon: Cog6ToothIcon, component: PartnerSettingsPage },
];

export default partnerPages;
