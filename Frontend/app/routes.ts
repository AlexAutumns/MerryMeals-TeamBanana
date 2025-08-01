import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/about", "routes/about.tsx"),
  route("/contact", "routes/contact.tsx"),
  route("/services", "routes/services.tsx"),

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

  // Auth routes
  route("/login", "routes/auth/login.tsx"),
  route("/register", "routes/auth/register.tsx"),
  route("/logout", "routes/auth/logout.tsx"),
  route("/admin", "routes/admin/layout.tsx"),

  route("/AllInsights", "routes/allinsights/AllInsights.tsx"),
  route("/ImpactArticle", "routes/impactarticle/ImpactArticle.tsx"),
  route("/FoodSafety", "routes/foodsafety/FoodSafety.tsx"),
] satisfies RouteConfig;
