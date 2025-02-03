import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),        // Home Page
  route("about", "routes/about.tsx"),  // About Page
  // route("services", "routes/services.tsx"),  // Services Page
] satisfies RouteConfig;
