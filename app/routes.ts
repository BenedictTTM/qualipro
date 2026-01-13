import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("services", "routes/services.tsx"),
    route("industries", "routes/industries.tsx"),
    route("tools", "routes/tools.tsx"),
    route("contact", "routes/contact.tsx"),
    route("about", "routes/about.tsx"),
] satisfies RouteConfig;
