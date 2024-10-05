/* Route declarations for the app */
import * as pages from "../pages";

const routeData = [
  {
    path: "/",
    component: pages.HomePage,
    requiresAuth: true,
  },
  {
    path: "/login",
    component: pages.Login,
    requiresAuth: false,
  },
  {
    path: "*",
    component: pages.NoPageFound,
    requiresAuth: false,
  },
];

export default routeData;
