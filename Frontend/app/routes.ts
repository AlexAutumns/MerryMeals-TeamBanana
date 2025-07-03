import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/login", "routes/login.tsx"),
  route("/register", "routes/register.tsx"),
  route("/profile", "routes/profile.tsx"),
  route("/settings", "routes/settings.tsx"),
  route("/logout", "routes/logout.tsx"),
  route("/dashboard", "routes/dashboard/dashboardLayout.tsx"),
  route("/userManagement", "routes/userManagement.tsx"),
  route("/approvals", "routes/approvals.tsx"),
  route("/roles", "routes/roles.tsx"),
  route("/favorites", "routes/favorites.tsx"),
  route("/analytics", "routes/analytics.tsx"),
] satisfies RouteConfig;
