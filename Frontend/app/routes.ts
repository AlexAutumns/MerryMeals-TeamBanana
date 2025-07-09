import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  // Role-based routes with layouts
  layout("routes/member/_layout.tsx", [
    route("/member", "routes/member/_index.tsx"),
  ]),

  layout("routes/volunteer/_layout.tsx", [
    route("/volunteer", "routes/volunteer/_index.tsx"),
  ]),

  layout("routes/partner/_layout.tsx", [
    route("/partner", "routes/partner/_index.tsx"),
  ]),

  layout("routes/donor/_layout.tsx", [
    route("/donor", "routes/donor/_index.tsx"),
  ]),

  layout("routes/caregiver/_layout.tsx", [
    route("/caregiver", "routes/caregiver/_index.tsx"),
  ]),

  // Simple routes
  route("/login", "routes/login.tsx"),
  route("/register", "routes/register.tsx"),
  route("/logout", "routes/logout.tsx"),
  route("/admin", "routes/admin.tsx"),
] satisfies RouteConfig;
