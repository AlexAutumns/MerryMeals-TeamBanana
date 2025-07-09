import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/login", "routes/login.tsx"),
    route("/register", "routes/register.tsx"),
    route("/dashboard", "routes/dashboard/dashboardLayout.tsx"),
    route("/menu", "routes/dashboard/menu.tsx"),
    route("/logout", "routes/logout.tsx"),
] satisfies RouteConfig;
