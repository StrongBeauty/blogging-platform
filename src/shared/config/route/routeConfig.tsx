import { RouteProps } from 'react-router-dom';
import { AboutPage, MainPage } from 'pages/ui';
import { NotFoundPage } from 'pages/ui/NotFoundPage/ui';

export type AppRoutesType = 'main' | 'about' | 'notFound';

export const RoutePaths: Record<AppRoutesType, string> = {
  main: '/',
  about: '/about',
  notFound: '*',
};

export const routeConfig: Record<AppRoutesType, RouteProps> = {
  main: {
    path: RoutePaths.main,
    element: <MainPage />,
  },
  about: {
    path: RoutePaths.about,
    element: <AboutPage />,
  },
  notFound: {
    path: RoutePaths.notFound,
    element: <NotFoundPage />,
  },
};
