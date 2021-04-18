import { lazy } from "react";

const HomePage = lazy(() => import("../components/pages/homePage/HomePage"));
const ConstructorPage = lazy(() => import("../components/pages/constructor/ConstrucrorPage"));

// eslint-disable-next-line import/no-anonymous-default-export
export const routes = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/constructor",
    component: ConstructorPage,
    exact: true,
  },
  {
    path: "/about",
    // component: About,
    exact: true,
  },
];
