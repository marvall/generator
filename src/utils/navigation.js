import { lazy } from "react";

const HomePage = lazy(() => import("../components/pages/homePage/HomePage"));

// eslint-disable-next-line import/no-anonymous-default-export
export const routes = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/constructor",
    // component: Constructor,
    exact: true,
  },
  {
    path: "/about",
    // component: About,
    exact: true,
  },
];
