import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
    // index route 
    index("routes/home.tsx"),

    // PreFix 
    ...prefix("ghost", [
        route("about", "routes/about.tsx"),
        route("posts", "routes/posts.tsx")
    ]),

    // Nested routing 
    route("finance", "routes/finance.tsx", [
        route("blogs", "routes/blogs.tsx")
    ]),

    // Routing with common Layout 
    layout("components/layout/RootLayout.tsx", [
        route("dashboard", "routes/dashboard.tsx")
    ])
] satisfies RouteConfig;
