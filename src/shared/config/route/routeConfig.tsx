import { RouteProps } from 'react-router-dom';
import { AboutPage, MainPage } from 'pages/ui';

export type AppRoutesType = 'main' | 'about';

export const RoutePaths: Record<AppRoutesType, string> = {
  main: '/',
  about: '/about',
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
};
