import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/login", "routes/login.tsx"),
    route("/register", "routes/register.tsx"),
    route("/dashboard", "routes/dashboard/dashboardLayout.tsx"),
    route("/menu", "routes/dashboard/menu.tsx"),
    route("/AllInsights", "routes/AllInsights.tsx"),
    route("/ImpactArticle", "routes/ImpactArticle.tsx"),
    route("/FoodSafety", "routes/FoodSafety.tsx"),
    route("/logout", "routes/logout.tsx"),
] satisfies RouteConfig;
