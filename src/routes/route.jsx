/* Route declarations for the app */
import * as pages from "../pages";

const routeData = [
  {
    id: "route-000",
    path: "/",
    component: pages.HomePage,
    requiresAuth: true,
  },
  {
    id: "route-001",
    path: "/login",
    component: pages.Login,
    requiresAuth: false,
  },
  {
    id: "route-004",
    path: "*",
    component: pages.NoPageFound,
    requiresAuth: false,
  },
];

export default routeData;
