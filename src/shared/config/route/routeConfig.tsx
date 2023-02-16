import { RouteProps } from 'react-router-dom';
import { MainPageLazy } from 'pages/MainPage';
import { AboutPageLazy } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export type AppRoutesType = 'main' | 'about' | 'notFound';

export const RoutePaths: Record<AppRoutesType, string> = {
  main: '/',
  about: '/about',
  notFound: '*',
};

export const routeConfig: Record<AppRoutesType, RouteProps> = {
  main: {
    path: RoutePaths.main,
    element: <MainPageLazy />,
  },
  about: {
    path: RoutePaths.about,
    element: <AboutPageLazy />,
  },
  notFound: {
    path: RoutePaths.notFound,
    element: <NotFoundPage />,
  },
};
