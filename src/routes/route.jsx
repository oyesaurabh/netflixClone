/* Route declarations for the app */
import * as reviews from "../pages";

const routeData = [
  {
    id: "route-000",
    path: "/",
    component: reviews.HomePage,
    requiresAuth: true,
  },
  {
    id: "route-001",
    path: "/login",
    component: reviews.Login,
    requiresAuth: false,
  },
  {
    id: "route-004",
    path: "*",
    component: reviews.NoPageFound,
    requiresAuth: false,
  },
];

export default routeData;
