import { lazy } from 'react';

const HomePage = lazy(() => import('../components/pages/homePage/HomePage'));
const ConstructorPage = lazy(() =>
  import('../components/pages/constructor/ConstrucrorPage'),
);
const About = lazy(() => import('../components/pages/about/About'));

// eslint-disable-next-line import/no-anonymous-default-export
export const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true,
  },
  {
    path: '/home',
    component: HomePage,
    exact: false,
  },
  {
    path: '/constructor',
    component: ConstructorPage,
    exact: false,
  },
  {
    path: '/about',
    component: About,
    exact: false,
  },
];
